import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { history } from "helpers";

export { PrivateRoute };

function PrivateRoute({ children }) {
  const { isLoggedIn } = useSelector((state) => state.user);

  if (!isLoggedIn) {
    // Not logged in so redirect to login page
    return <Navigate to="/login" state={{ from: history.location }} />;
  }

  // Logged in so return child components
  return children;
}
