import { useSelector } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "firebase.js";
import { useLogInUser } from "hooks";
import { defaultUser } from "store";
import isEqual from "lodash.isequal";
import { GoogleAccount, GoogleSignIn, GoogleSignOut } from "components";
import { UserMinusIcon } from "@heroicons/react/24/solid";

export { Login as default };

function Login() {
  const { user, pending, error } = useSelector((state) => state.user);
  const [authUser, authLoading] = useAuthState(auth);

  return (
    <div className="login">
      <div className="disclaimer">
        <p className="text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl lg:text-center">
          Please Log In
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto lg:text-center">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
          accusamus quisquam.
        </p>
      </div>
      <div className="users">
        {!authUser && !authLoading ? <LocalUser user={user} pending={pending} /> : <GoogleAccount pending={pending} />}
      </div>
      {!pending.login && !error.login && !authLoading && (
        <>
          <GoogleSignIn />
          <GoogleSignOut />
        </>
      )}
      {pending.login && <span className="text-sm text-center">Signing In...</span>}
      {error.login && <span className="status text-center">Something went wrong</span>}
    </div>
  );
}

function LocalUser({ user, pending }) {
  const logInUser = useLogInUser();

  const handleReset = () => {
    localStorage.removeItem("currentUser");
    window.location.reload();
  };

  return (
    <div className="user">
      {user && !isEqual(user, defaultUser) && (
        <span className="reset" title="Reset account" onClick={handleReset}>
          <UserMinusIcon />
        </span>
      )}
      <h1 className="font-bold text-lg">{user?.name || defaultUser.name}</h1>
      <span className="block text-sm">{user?.email || defaultUser.email}</span>
      <img
        className="avatar mx-auto my-8"
        src={user?.avatar || "https://avatars.dicebear.com/api/adventurer-neutral/59.svg"}
        alt=""
        aria-label="Default user avatar"
        width="64px"
        height="64px"
        referrerPolicy="no-referrer"
      />
      <button
        className="button mx-auto"
        type="button"
        disabled={pending.login}
        onClick={() => {
          logInUser();
        }}
      >
        Log In
      </button>
    </div>
  );
}
