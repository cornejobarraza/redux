import {
  HomeOutlined,
  ExitToAppOutlined,
  FileCopyOutlined,
  GroupOutlined,
  List,
  MovieCreationOutlined,
  PhotoSizeSelectActualOutlined,
  ScheduleOutlined,
  SettingsOutlined,
  ShoppingCartOutlined,
  BookmarkBorderOutlined,
} from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { userActions } from "store";

export { Sidebar };

function Sidebar({ sidebarRef }) {
  const { isLoggedIn, info, pending, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(userActions.logOutAsync());
  };

  const Links = [
    { icon: <HomeOutlined />, text: "Main", route: "/" },
    { icon: <List />, text: "Lists" },
    { icon: <ShoppingCartOutlined />, text: "Products" },
    { icon: <GroupOutlined />, text: "Groups" },
    { icon: <FileCopyOutlined />, text: "Pages" },
    { icon: <PhotoSizeSelectActualOutlined />, text: "Photos" },
    { icon: <MovieCreationOutlined />, text: "Videos" },
    { icon: <ScheduleOutlined />, text: "Schedule" },
    { icon: <BookmarkBorderOutlined />, text: "Wishlist" },
    { icon: <SettingsOutlined />, text: "Settings", route: "settings" },
    { icon: <ExitToAppOutlined />, text: "Log Out", name: info.name, state: pending.logout, handler: handleLogOut },
  ];

  return (
    <>
      <div className="sidebar" ref={sidebarRef}>
        {isLoggedIn ? (
          <>
            {Links.map((link, index) => (
              <SideBarLink
                key={index}
                icon={link.icon}
                text={link.text}
                route={link.route}
                name={link.name}
                state={link.state}
                handler={link.handler}
              />
            ))}
            {pending.logout && <span className="text-sm mt-0">Signing Out...</span>}
            {error.logout && <span className="status mt-0">Something went wrong</span>}
          </>
        ) : (
          <SideBarLinkEmpty />
        )}
      </div>
    </>
  );
}

function SideBarLink({ icon, text, name, route, state, handler }) {
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

const SideBarLinkEmpty = () => (
  <svg width="100%" height="428" className="fill-slate-300">
    <rect x="38" y="6" width="144" height="20" rx="10"></rect>
    <circle cx="14" cy="16" r="12"></circle>
    <rect x="38" y="50" width="144" height="20" rx="10" opacity="0.9"></rect>
    <circle cx="14" cy="60" r="12" opacity="0.9"></circle>
    <rect x="38" y="94" width="144" height="20" rx="10" opacity="0.8"></rect>
    <circle cx="14" cy="104" r="12" opacity="0.8"></circle>
    <rect x="38" y="138" width="144" height="20" rx="10" opacity="0.7"></rect>
    <circle cx="14" cy="148" r="12" opacity="0.7"></circle>
    <rect x="38" y="182" width="144" height="20" rx="10" opacity="0.6"></rect>
    <circle cx="14" cy="192" r="12" opacity="0.6"></circle>
    <rect x="38" y="226" width="144" height="20" rx="10" opacity="0.5"></rect>
    <circle cx="14" cy="236" r="12" opacity="0.5"></circle>
    <rect x="38" y="270" width="144" height="20" rx="10" opacity="0.4"></rect>
    <circle cx="14" cy="280" r="12" opacity="0.4"></circle>
    <rect x="38" y="314" width="144" height="20" rx="10" opacity="0.3"></rect>
    <circle cx="14" cy="324" r="12" opacity="0.3"></circle>
    <rect x="38" y="358" width="144" height="20" rx="10" opacity="0.2"></rect>
    <circle cx="14" cy="368" r="12" opacity="0.2"></circle>
    <rect x="38" y="402" width="144" height="20" rx="10" opacity="0.1"></rect>
    <circle cx="14" cy="412" r="12" opacity="0.1"></circle>
  </svg>
);