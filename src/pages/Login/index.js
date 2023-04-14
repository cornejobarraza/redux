import { useEffect } from "react";
import { useSelector } from "react-redux";

import { Account } from "pages/Login/Account";
import { GoogleSignIn } from "pages/Login/GoogleSignIn";

import { history } from "utils";

export { Login as default };

function Login() {
  const { logged } = useSelector((state) => state.auth);

  useEffect(() => {
    document.title = "Redux - Login";

    if (logged) {
      history.navigate("/");
    }
  }, [logged]);

  return (
    <div className="login gap-12">
      <div className="description">
        <h1 className="page-header md:text-center">Please log in</h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-500 md:mx-auto md:text-center">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
          accusamus quisquam.
        </p>
      </div>
      <Account />
      <GoogleSignIn />
    </div>
  );
}
