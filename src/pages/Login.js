import { useSelector } from "react-redux";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Account } from "components";
import { useGoogleSignIn, useGoogleSignOut } from "hooks";
import { useEffect } from "react";

export { Login as default };

function Login() {
  const { user, pending, error } = useSelector((state) => state.user);
  const googleSignIn = useGoogleSignIn();
  const googleSignOut = useGoogleSignOut();

  useEffect(() => {
    document.title = "Redux - Login";
  }, []);

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
        <Account auth={authUser} user={user} pending={pending} />
      </div>
      {!pending.login && !error.login && !pending.logout && !authUser && !authLoading && (
        <span className="text-link text-center" onClick={googleSignIn}>
          Or continue with Google
        </span>
      )}
      {!pending.login && !error.login && !pending.logout && authUser && (
        <span className="text-link text-center" onClick={googleSignOut}>
          Remove Google account
        </span>
      )}
      {pending.logout && !authUser && (
        <span className="text-sm text-center" onClick={googleSignOut}>
          Removing...
        </span>
      )}
      {pending.login && <span className="text-sm text-center">Signing In...</span>}
      {error.login && <span className="text-sm text-center">Something went wrong</span>}
    </div>
  );
}
