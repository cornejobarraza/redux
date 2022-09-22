import { useDispatch, useSelector } from "react-redux";
import { userActions, defaultUser } from "store";

export { useLogInUser };

function useLogInUser(newUser) {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return () => {
    if (!user) {
      dispatch(userActions.logInAsync(newUser || defaultUser));
    } else {
      dispatch(userActions.logInAsync({ ...user }));
    }
  };
}
