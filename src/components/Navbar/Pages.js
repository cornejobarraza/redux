import { NavLink } from "react-router-dom";

export { Pages };

function Pages() {
  return (
    <div className="pages">
      <NavLink className="link" data-text="About" to="about">
        About
      </NavLink>
      <NavLink className="link" data-text="Contact" to="contact">
        Contact
      </NavLink>
    </div>
  );
}
