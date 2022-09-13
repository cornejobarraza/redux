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
import SideBarLink from "./sidebarLink";
import SideBarToggle from "./sidebarToggle";
import SlideOver from "./sidebarSlideOver";
import { useSelector, useDispatch } from "react-redux";
import { logOutAsync } from "../../features/settings/settingsSlice";

export default function SideBar() {
  const { isLoggedIn, info, pending, error } = useSelector((state) => state.settings);
  const [isSlideOverOpen, setIsSlideOverOpen] = useState(false);
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

  const handleLogOut = () => {
    dispatch(logOutAsync({ isLoggedIn: false }));
  };

  return (
    <>
      <div className="sidebar" ref={sideBar}>
        <SideBarLink icon={<HomeOutlined />} text="Main" route="/" />
        {isLoggedIn && (
          <>
            <SideBarLink icon={<List />} text="Lists" />
            <SideBarLink icon={<ShoppingCartOutlined />} text="Products" />
            <SideBarLink icon={<GroupOutlined />} text="Groups" />
            <SideBarLink icon={<FileCopyOutlined />} text="Pages" />
            <SideBarLink icon={<PhotoSizeSelectActualOutlined />} text="Photos" />
            <SideBarLink icon={<MovieCreationOutlined />} text="Videos" />
            <SideBarLink icon={<ScheduleOutlined />} text="Schedule" />
            <SideBarLink icon={<BookmarkBorderOutlined />} text="Wishlist" />
            <SideBarLink icon={<SettingsOutlined />} text="Settings" route="settings" />
            <SideBarLink
              icon={<ExitToAppOutlined />}
              text="Log Out"
              name={info.name}
              state={pending.logout}
              handler={handleLogOut}
            />
            {pending.logout && <span className="text-sm mt-0">Signing Out...</span>}
            {error.logout && <span className="status mt-0">Something went wrong</span>}
          </>
        )}
      </div>
      <SideBarToggle toggle={toggleSideBar} />
      <SlideOver open={isSlideOverOpen} toggle={toggleSideBar} />
    </>
  );
}
