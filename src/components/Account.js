import { useDispatch } from "react-redux";
import { defaultUser, userActions } from "store";
import { useLogInUser } from "hooks";
import { TrashIcon } from "@heroicons/react/24/solid";
import isEqual from "lodash.isequal";

export { Account };

function Account({ user, pending }) {
  const logInUser = useLogInUser(defaultUser);
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(userActions.resetState());
  };

  return (
    <div className="user default">
      {user && !isEqual(user, defaultUser) && (
        <span className="reset" title="Reset account" onClick={handleReset}>
          <TrashIcon />
        </span>
      )}
      <h1 className="font-bold text-lg">{user?.name || defaultUser.name}</h1>
      <span className="block text-sm">{user?.email || defaultUser.email}</span>
      <img
        className="avatar mx-auto my-8"
        src={user?.avatar || defaultUser.avatar}
        alt=""
        aria-label="Default user avatar"
        width="64px"
        height="64px"
        referrerPolicy="no-referrer"
      />
      <button className="button mx-auto" type="button" disabled={pending.login} onClick={logInUser}>
        Log In
      </button>
    </div>
  );
}
