import { NavLink } from "react-router-dom";

export default function SideBarLink({ icon, text, name, route, handler }) {
  return route ? (
    <NavLink className="sidebar-link" to={route}>
      {icon}
      {text}
    </NavLink>
  ) : (
    <span className="sidebar-link" onClick={handler}>
      {icon}
      {text}
      {name && <span className="text-redux-500">({name.split(" ")[0]})</span>}
    </span>
  );
}
