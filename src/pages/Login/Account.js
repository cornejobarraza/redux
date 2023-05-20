import { useDispatch, useSelector } from "react-redux";
import isEqual from "lodash.isequal";

import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import { userActions } from "store";
import { useGoogleSignIn } from "hooks";
import defaultUser from "data/user.json";

import { Google, PersonRemove } from "@mui/icons-material";

export { Account };

function Account() {
  const {
    user,
    logged: { gAuth },
    pending,
  } = useSelector((state) => state.auth);
  const googleSignIn = useGoogleSignIn();
  const dispatch = useDispatch();

  const auth = getAuth();
  const [authUser, authLoading] = useAuthState(auth);

  const handleReset = async () => {
    dispatch(userActions.resetUser());

    if (authUser) {
      await signOut(auth);
    }
  };

  const handleLogin = () => {
    if (!authUser && gAuth) {
      googleSignIn();
    } else {
      dispatch(userActions.logInAsync({ ...user }));
    }
  };

  return (
    <div className="user">
      {!authUser && !authLoading && !gAuth ? (
        <>
          {user && !isEqual(user, defaultUser) && (
            <span className="reset cursor-pointer" title="Reset account" onClick={handleReset}>
              <PersonRemove className="!fill-[#616161]" />
            </span>
          )}
        </>
      ) : (
        <>
          {gAuth && (
            <span className="type">
              <Google className="!fill-[#616161]" />
            </span>
          )}
        </>
      )}
      <h1 className="font-bold text-lg mb-1">{user?.name}</h1>
      <span className="block text-sm overflow-hidden text-ellipsis">{user?.email}</span>
      <img
        className="avatar mx-auto my-8"
        src={user?.avatar}
        alt=""
        aria-label="User avatar"
        width="64px"
        height="64px"
        referrerPolicy="no-referrer"
      />
      <button
        className="button mx-auto"
        aria-label="Log in"
        disabled={pending.login}
        onClick={handleLogin}
      >
        Log In
      </button>
    </div>
  );
}
