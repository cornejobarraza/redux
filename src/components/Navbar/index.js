import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { Mobile } from "components/Navbar/Mobile";
import { Desktop } from "components/Navbar/Desktop";

import { useViewport } from "hooks";

export { Navbar };

function Navbar() {
  const { user, logged } = useSelector((state) => state.auth);
  const { width } = useViewport();

  return (
    <div className="navbar">
      <span className="logo">
        <Link className="text-redux-500" to="/">
          Redux
        </Link>{" "}
        App
      </span>
      {logged && <>{width > 768 ? <Desktop user={user} /> : <Mobile user={user} />}</>}
    </div>
  );
}
