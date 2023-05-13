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

  const location = history.location;

  if (!logged || (!authUser && !authLoading && gAuth)) {
    if (location.state?.from !== "/login") {
      toast("Please log in", { type: "warning" });
    }

    // Not logged in so redirect to login page
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  }

  // Logged in so return child components
  return children;
}
