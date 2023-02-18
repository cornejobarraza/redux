import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

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

import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import { useGoogleSignIn } from "hooks";
import { userActions } from "store";

export { Menu };

function Menu() {
  const { logged } = useSelector((state) => state.user);

  return <div className="menu">{logged ? <Links /> : <EmptySidebar />}</div>;
}

function MenuLink({ icon, text, route }) {
  return route ? (
    <NavLink className="sidebar-link" to={route}>
      {icon}
      {text}
    </NavLink>
  ) : (
    <span className="sidebar-link">
      {icon}
      {text}
    </span>
  );
}

function Links() {
  const { pending, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const googleSignIn = useGoogleSignIn();

  const auth = getAuth();
  const [authUser, authLoading] = useAuthState(auth);

  const handleLogOut = () => {
    dispatch(userActions.logOutAsync());
  };

  useEffect(() => {
    if (error.logout || error.login) {
      toast("Something went wrong, please try again", { type: "error" });
    }
  }, [error.logout, error.login]);

  return (
    <div className="links">
      <MenuLink icon={<HomeOutlined />} text="Main" route="/" />
      <MenuLink icon={<List />} text="Lists" />
      <MenuLink icon={<ShoppingCartOutlined />} text="Products" />
      <MenuLink icon={<GroupOutlined />} text="Groups" />
      <MenuLink icon={<FileCopyOutlined />} text="Pages" />
      <MenuLink icon={<PhotoSizeSelectActualOutlined />} text="Photos" />
      <MenuLink icon={<MovieCreationOutlined />} text="Videos" />
      <MenuLink icon={<ScheduleOutlined />} text="Schedule" />
      <MenuLink icon={<BookmarkBorderOutlined />} text="Wishlist" route="wishlist" />
      <MenuLink icon={<SettingsOutlined />} text="Settings" route="settings" />
      <button className="sidebar-link" disabled={pending.logout} onClick={handleLogOut}>
        <ExitToAppOutlined /> Log Out
      </button>
      {!authUser && !authLoading && (
        <button className="button w-max text-xs" onClick={googleSignIn}>
          Sign in with Google
        </button>
      )}
    </div>
  );
}

function EmptySidebar() {
  return (
    <div className="empty">
      <svg width="100%" height="428" className="fill-slate-300">
        <rect x="36" y="4" width="144" height="20" rx="10"></rect>
        <circle cx="12" cy="14" r="12"></circle>
        <rect x="36" y="54" width="144" height="20" rx="10" opacity="0.9"></rect>
        <circle cx="12" cy="64" r="12" opacity="0.9"></circle>
        <rect x="36" y="104" width="144" height="20" rx="10" opacity="0.8"></rect>
        <circle cx="12" cy="114" r="12" opacity="0.8"></circle>
        <rect x="36" y="154" width="144" height="20" rx="10" opacity="0.7"></rect>
        <circle cx="12" cy="164" r="12" opacity="0.7"></circle>
        <rect x="36" y="204" width="144" height="20" rx="10" opacity="0.6"></rect>
        <circle cx="12" cy="204" r="12" opacity="0.6"></circle>
        <rect x="36" y="254" width="144" height="20" rx="10" opacity="0.5"></rect>
        <circle cx="12" cy="254" r="12" opacity="0.5"></circle>
        <rect x="36" y="304" width="144" height="20" rx="10" opacity="0.4"></rect>
        <circle cx="12" cy="304" r="12" opacity="0.4"></circle>
        <rect x="36" y="354" width="144" height="20" rx="10" opacity="0.3"></rect>
        <circle cx="12" cy="354" r="12" opacity="0.3"></circle>
        <rect x="36" y="404" width="144" height="20" rx="10" opacity="0.2"></rect>
        <circle cx="12" cy="404" r="12" opacity="0.2"></circle>
        <rect x="36" y="454" width="144" height="20" rx="10" opacity="0.1"></rect>
        <circle cx="12" cy="454" r="12" opacity="0.1"></circle>
      </svg>
    </div>
  );
}
