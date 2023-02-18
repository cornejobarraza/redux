import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { Account } from "pages/Login/Account";
import { GoogleSignIn } from "pages/Login/GoogleSignIn";

import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import { userActions } from "store";
import { history } from "utils";

export { Login as default };

function Login() {
  const { pending, logged, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Redux - Login";
    if (logged) history.navigate("/");
  }, [logged]);

  useEffect(() => {
    if (error.login) {
      toast("Something went wrong, please try again", { type: "error" });
      dispatch(userActions.clearStatus());
    }
  }, [error.login, dispatch]);

  const auth = getAuth();
  const [authUser] = useAuthState(auth);

  useEffect(() => {
    const localUser = localStorage.getItem("currentUser");
    if ((!localUser || !localUser.startsWith("{") || !localUser.endsWith("}")) && !pending.login && authUser) {
      signOut(auth);
    }
  }, [auth, authUser, pending]);

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
