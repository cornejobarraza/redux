import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "firebase.js";

import { history } from "helpers";

export { PrivateRoute };

function PrivateRoute({ children }) {
  const { logged } = useSelector((state) => state.user);
  const [user] = useAuthState(auth);

  history.location = useLocation();

  if (!user && history.location.pathname === "/lists") {
    return <p>Sign into your Google account to manage your lists</p>;
  }

  if (!logged) {
    // Not logged in so redirect to login page
    return <Navigate to="/login" state={{ from: history.location }} />;
  }

  // Logged in so return child components
  return children;
}
