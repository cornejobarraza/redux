import { NavLink } from "react-router-dom";

export default function SideBarLink({ icon, text, name, route, state, handler }) {
  return route ? (
    <NavLink className="sidebar-link" to={route}>
      {icon}
      {text}
    </NavLink>
  ) : (
    <button className="sidebar-link" type="button" disabled={state} onClick={handler}>
      {icon}
      {text}
      {name && <span className="text-redux-500">({name.split(" ")[0]})</span>}
    </button>
  );
}
