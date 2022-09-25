import { useDispatch } from "react-redux";
import { userActions } from "store";
import { useLogInUser } from "hooks";
import { defaultUser } from "helpers";
import { TrashIcon } from "@heroicons/react/24/outline";
import isEqual from "lodash.isequal";

export { Account };

function Account({ auth, user, pending }) {
  const logInUser = useLogInUser();
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(userActions.reset());
  };

  return (
    <div className="user">
      {!auth && user && !isEqual(user, defaultUser) && (
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
        aria-label="User avatar"
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
