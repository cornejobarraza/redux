import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { DesktopNav } from "components/Navbar/DesktopNav";
import { MobileNav } from "components/Navbar/MobileNav";
import { useViewport } from "hooks";

export { Navbar };

function Navbar() {
  const { user, logged } = useSelector((state) => state.user);
  const { width } = useViewport();

  return (
    <div className="navbar">
      <span className="logo">
        <Link className="text-redux-500" to="/">
          Redux
        </Link>{" "}
        App
      </span>
      {logged && <>{width > 768 ? <DesktopNav user={user} /> : <MobileNav user={user} />}</>}
    </div>
  );
}
