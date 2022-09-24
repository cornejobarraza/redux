import { getAuth } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "store";

export { useLogInUser };

function useLogInUser(payload) {
  const { user } = useSelector((state) => state.user);
  const auth = getAuth();
  const dispatch = useDispatch();

  const handleLogIn = () => {
    if (!auth) {
      dispatch(userActions.logInAsync(payload));
    } else {
      dispatch(userActions.logInAsync({ ...user }));
    }

    if (!user) {
      dispatch(userActions.logInAsync(payload));
    } else {
      dispatch(userActions.logInAsync({ ...user }));
    }
  };

  return () => {
    handleLogIn();
  };
}
