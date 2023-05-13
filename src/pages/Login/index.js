import { useEffect } from "react";
import { useSelector } from "react-redux";

import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import { Account } from "pages/Login/Account";
import { GoogleSignIn } from "pages/Login/GoogleSignIn";

import { history } from "utils";

export { Login as default };

function Login() {
  const {
    logged: { status: logged, gAuth },
  } = useSelector((state) => state.auth);

  const auth = getAuth();
  const [authUser, authLoading] = useAuthState(auth);

  useEffect(() => {
    document.title = "Redux - Login";

    if ((logged && !gAuth) || (logged && authUser && !authLoading && gAuth)) {
      const { from } = history.location.state || { from: { pathname: "/" } };
      history.navigate(from);
    }
  });

  return (
    <div className="login gap-10">
      <div className="description">
        <h1 className="page-header md:text-center">Log into Redux</h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-500 md:mx-auto md:text-center">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
          accusamus quisquam
        </p>
      </div>
      <Account />
      <GoogleSignIn />
    </div>
  );
}
