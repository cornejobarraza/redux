import { useRef } from "react";
import { Link, NavLink } from "react-router-dom";

export { Desktop };

function Desktop({ user }) {
  const searchbarRef = useRef(null);

  return (
    <>
      <div className="pages">
        <NavLink className="link" data-text="About" to="about">
          About
        </NavLink>
        <NavLink className="link" data-text="Contact" to="contact">
          Contact
        </NavLink>
      </div>
      <form
        className="lookup"
        onSubmit={(e) => {
          e.preventDefault();
          searchbarRef.current.value = "";
        }}
      >
        <input className="searchbar" placeholder={`Search here ${user?.name.split(" ")[0]}`} ref={searchbarRef} />
      </form>
      <span className="name">
        Hello, <span className="text-redux-500">{user?.name.split(" ")[0]}</span>
      </span>
      <div className="account">
        <Link className="group" to="settings">
          <img
            className="avatar"
            src={user?.avatar}
            alt=""
            aria-label="User avatar"
            width="32px"
            height="32px"
            referrerPolicy="no-referrer"
          />
          <small className="info-tooltip">
            <span className="block font-bold">{user?.name}</span>
            <span className="block">{user?.email}</span>
          </small>
        </Link>
      </div>
    </>
  );
}
