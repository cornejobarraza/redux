import { useDispatch, useSelector } from "react-redux";
import isEqual from "lodash.isequal";

import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";

import userDefault from "data/user.json";
import { userActions } from "store";

export { Account };

function Account() {
  const { user, pending } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const auth = getAuth();
  const [authUser, authLoading] = useAuthState(auth);

  const handleReset = async () => {
    dispatch(userActions.resetState());

    if (authUser) {
      await signOut(auth);
    }
  };

  const handleLogin = () => {
    dispatch(userActions.logInAsync({ ...user }));
  };

  return (
    <div className="user">
      {!authUser && !authLoading && user && !isEqual(user, userDefault) && (
        <span className="reset" title="Reset account" onClick={handleReset}>
          <ArrowUturnLeftIcon />
        </span>
      )}
      <h1 className="font-bold text-lg mb-1">{user?.name}</h1>
      <span className="block text-sm">{user?.email}</span>
      <img
        className="avatar mx-auto my-8"
        src={user?.avatar}
        alt=""
        aria-label="User avatar"
        width="64px"
        height="64px"
        referrerPolicy="no-referrer"
      />
      <button className="button mx-auto" type="button" disabled={pending.login} onClick={handleLogin}>
        Log In
      </button>
    </div>
  );
}
