import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import { history } from "utils";

export { PrivateRoute };

function PrivateRoute({ children }) {
  const {
    logged: { status: logged, gAuth },
  } = useSelector((state) => state.auth);

  const auth = getAuth();
  const [authUser, authLoading] = useAuthState(auth);

  if (!logged || (!authUser && !authLoading && gAuth)) {
    // Not logged in so redirect to login page
    if (history.redirect) {
      toast("Please log in", { type: "warning" });
    }

    return <Navigate to="/login" state={{ from: history.location }} />;
  }

  // Logged in so return child components
  return children;
}
