import { useDispatch } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { userActions } from "store";

export { useGoogleSignOut };

function useGoogleSignOut() {
  const auth = getAuth();
  const dispatch = useDispatch();

  return () => {
    signOut(auth)
      .then(() => {
        const previousUser = JSON.parse(localStorage.getItem("previousUser"));
        dispatch(
          userActions.logOutGoogleAsync({
            name: previousUser?.name,
            email: previousUser?.email,
            avatar: previousUser?.avatar,
          })
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };
}
