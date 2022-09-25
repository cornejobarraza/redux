import { useDispatch, useSelector } from "react-redux";
import { userActions } from "store";
import { defaultUser } from "helpers";

export { useLogInUser };

function useLogInUser(googleUser) {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogIn = () => {
    if (googleUser) {
      dispatch(userActions.logInGoogleAsync(googleUser));
    } else if (!user) {
      dispatch(userActions.logInAsync(defaultUser));
    } else {
      dispatch(userActions.logInAsync({ ...user }));
    }
  };

  return () => {
    handleLogIn();
  };
}
