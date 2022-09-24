import { useSelector } from "react-redux";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Account, GoogleAccount } from "components";
import { useGoogleSignIn, useGoogleSignOut } from "hooks";

export { Login as default };

function Login() {
  const { user, pending, error } = useSelector((state) => state.user);
  const googleSignIn = useGoogleSignIn();
  const googleSignOut = useGoogleSignOut();

  const auth = getAuth();
  const [authUser, authLoading] = useAuthState(auth);

  return (
    <div className="login">
      <div className="description">
        <p className="text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl lg:text-center">
          Please Log In
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto lg:text-center">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
          accusamus quisquam.
        </p>
      </div>
      <div className="users">
        {!authUser && !authLoading && <Account user={user} pending={pending} />}
        {user && authUser && !authLoading && <GoogleAccount pending={pending} />}
        {authUser && authLoading && <p>Loading...</p>}
      </div>
      {!pending.login && !error.login && !authUser && !authLoading && (
        <span className="text-link text-center" onClick={googleSignIn}>
          Or continue with Google
        </span>
      )}
      {!pending.login && !error.login && user && authUser && !authLoading && (
        <span className="text-link text-center" onClick={googleSignOut}>
          Remove Google account
        </span>
      )}
      {pending.login && <span className="text-sm text-center">Signing In...</span>}
      {error.login && <span className="status text-center">Something went wrong</span>}
    </div>
  );
}
