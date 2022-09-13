import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SearchOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import DropDown from "./navbarDropDown";

export default function Navbar() {
  const { isLoggedIn, info } = useSelector((state) => state.settings);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setExpanded(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggle = () => {
    expanded ? setExpanded(false) : setExpanded(true);
  };

  return (
    <div className="navbar">
      <span className="logo">
        <Link className="text-redux-500" to="/">
          Redux
        </Link>{" "}
        App
      </span>
      <div className="pages">
        <span className="link" data-text="Home">
          Home
        </span>
        <span className="link" data-text="About">
          About
        </span>
        <span className="link" data-text="Contact">
          Contact
        </span>
      </div>
      <input
        className="searchbar"
        placeholder={`Search here${isLoggedIn ? " " + info.name.split(" ")[0] : ""}...`}
        data-expanded={expanded}
      />
      {isLoggedIn && (
        <div className="account">
          <span className="name">
            Hello, <span className="text-redux-500">{info.name.split(" ")[0]}</span>
          </span>
          <Link className="group" to="settings">
            <img
              className="avatar"
              src={`https://avatars.dicebear.com/api/adventurer-neutral/${info.avatar}.svg`}
              alt="Current user"
              width="32px"
              height="32px"
            />
            <small className="info-tooltip lg:group-hover:scale-100">
              <span className="block font-bold">{info.name}</span>
              <span className="block">{info.email}</span>
            </small>
          </Link>
        </div>
      )}
      <span className="lg:hidden" onClick={toggle}>
        <SearchOutlined />
      </span>
      <DropDown />
    </div>
  );
}
