import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import { Mobile } from "components/Navbar/Mobile";
import { Desktop } from "components/Navbar/Desktop";

import { getCurrentTimestamp } from "utils";
import { useViewport } from "hooks";
import { sessionTime } from "store";

export { Navbar };

function Navbar() {
  const {
    user,
    logged: { status: logged, gAuth, timestamp },
  } = useSelector((state) => state.auth);
  const { width } = useViewport();

  const auth = getAuth();
  const [authUser, authLoading] = useAuthState(auth);

  const currentTimestamp = getCurrentTimestamp();
  const sessionExpired = currentTimestamp - timestamp > sessionTime;

  return (
    <div className="navbar">
      <span className="logo">
        <Link
          className="text-redux-500"
          to={
            (logged && !gAuth && !sessionExpired) ||
            (logged && authUser && !authLoading && gAuth && !sessionExpired)
              ? "/"
              : "/login"
          }
        >
          Redux
        </Link>{" "}
        App
      </span>
      {((logged && !gAuth && !sessionExpired) ||
        (logged && authUser && !authLoading && gAuth && !sessionExpired)) && (
        <>{width > 768 ? <Desktop user={user} /> : <Mobile user={user} />}</>
      )}
    </div>
  );
}
