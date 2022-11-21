import { getAuth, signOut } from "firebase/auth";
import { Account } from "pages/Login/Account";
import { GoogleSignIn } from "pages/Login/GoogleSignIn";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import { history } from "utils";

export { Login as default };

function Login() {
  const { pending, logged, error } = useSelector((state) => state.user);

  useEffect(() => {
    document.title = "Redux - Login";
    if (logged) history.navigate("/");
    // eslint-disable-next-line
  }, []);

  const auth = getAuth();
  const [authUser] = useAuthState(auth);

  useEffect(() => {
    const localUser = localStorage.getItem("currentUser");
    if ((!localUser || !localUser.startsWith("{") || !localUser.endsWith("}")) && !pending.login && authUser) {
      signOut(auth);
    }
  }, [auth, authUser, pending]);

  return (
    <div className="login">
      <div className="description">
        <p className="text-3xl font-bold leading-8 tracking-tight text-gray-900 -4xl md:text-center">Please log in</p>
        <p className="mt-4 max-w-2xl text-lg text-gray-500 md:mx-auto md:text-center">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
          accusamus quisquam.
        </p>
      </div>
      <Account />
      <GoogleSignIn />
      {error.login && <span className="status text-center">Something went wrong :(</span>}
    </div>
  );
}
