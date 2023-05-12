import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { history } from "utils";

export { PrivateRoute };

function PrivateRoute({ children }) {
  const {
    logged: { status: logged },
  } = useSelector((state) => state.auth);

  if (!logged) {
    // Not logged in so redirect to login page
    return <Navigate to="/login" state={{ from: history.location }} />;
  }

  // Logged in so return child components
  return children;
}