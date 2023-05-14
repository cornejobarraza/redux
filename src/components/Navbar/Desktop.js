import { useRef } from "react";
import { NavLink } from "react-router-dom";

import { Profile } from "./Profile";

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
      <Profile user={user} />
    </>
  );
}
