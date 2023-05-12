import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import { Mobile } from "components/Navbar/Mobile";
import { Desktop } from "components/Navbar/Desktop";

import { useViewport } from "hooks";

export { Navbar };

function Navbar() {
  const {
    user,
    logged: { status: logged, gAuth },
  } = useSelector((state) => state.auth);
  const { width } = useViewport();

  const auth = getAuth();
  const [authUser, authLoading] = useAuthState(auth);

  return (
    <div className="navbar">
      <span className="logo">
        <Link className="text-redux-500" to="/">
          Redux
        </Link>{" "}
        App
      </span>
      {((logged && gAuth) || (logged && !gAuth) || (logged && !authUser && !authLoading && !gAuth)) && (
        <>{width > 768 ? <Desktop user={user} /> : <Mobile user={user} />}</>
      )}
    </div>
  );
}
