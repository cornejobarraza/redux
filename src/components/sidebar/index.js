import {
  ExitToAppOutlined,
  FileCopyOutlined,
  GroupOutlined,
  HomeOutlined,
  List,
  MovieCreationOutlined,
  PhotoSizeSelectActualOutlined,
  ScheduleOutlined,
  SettingsOutlined,
  ShoppingCartOutlined,
  BookmarkBorderOutlined,
} from "@material-ui/icons";
import { useRef, useState } from "react";
import SideBarLink from "./sideBarLink";
import SideBarToggle from "./sideBarToggle";
import SlideOver from "./slideOver";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../../features/settings/settingsSlice";

export default function SideBar() {
  const { info } = useSelector((state) => state.user);
  const [isSlideOverOpen, setIsSlideOverOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState("Logout");
  const dispatch = useDispatch();

  const sideBar = useRef(null);

  const toggleSideBar = () => {
    if (isSlideOverOpen) {
      sideBar.current.classList.remove("right-0");
      setIsSlideOverOpen(false);
    } else {
      sideBar.current.classList.add("right-0");
      setIsSlideOverOpen(true);
    }
  };

  const handleSession = () => {
    let isLoggedIn = Object.keys(info).length > 0;

    if (isLoggedIn) {
      dispatch(logout());
      setIsLoggedIn("Log in");
    } else {
      dispatch(login());
      setIsLoggedIn("Log out");
    }
  };

  return (
    <>
      <div className="sidebar" ref={sideBar}>
        <SideBarLink icon={<HomeOutlined />} text="Main" route="/" />
        <SideBarLink icon={<List />} text="Lists" />
        <SideBarLink icon={<ShoppingCartOutlined />} text="Products" />
        <SideBarLink icon={<GroupOutlined />} text="Groups" />
        <SideBarLink icon={<FileCopyOutlined />} text="Pages" />
        <SideBarLink icon={<PhotoSizeSelectActualOutlined />} text="Photos" />
        <SideBarLink icon={<MovieCreationOutlined />} text="Videos" />
        <SideBarLink icon={<ScheduleOutlined />} text="Schedule" />
        <SideBarLink icon={<BookmarkBorderOutlined />} text="Wishlist" />
        <SideBarLink icon={<SettingsOutlined />} text="Settings" route="settings" />
        <SideBarLink icon={<ExitToAppOutlined />} text={isLoggedIn} name={info.name} handler={handleSession} />
      </div>
      <SideBarToggle toggle={toggleSideBar} />
      <SlideOver open={isSlideOverOpen} toggle={toggleSideBar} />
    </>
  );
}
