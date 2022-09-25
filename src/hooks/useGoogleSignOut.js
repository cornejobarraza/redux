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
        dispatch(userActions.logOutGoogleAsync());
      })
      .catch((error) => {
        console.error(error);
      });
  };
}
