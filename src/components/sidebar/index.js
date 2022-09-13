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
      sideBar.current.classList.remove("duration-500");
      sideBar.current.classList.remove("delay-500");
      sideBar.current.classList.remove("opacity-100");
      setIsSlideOverOpen(false);
    } else {
      sideBar.current.classList.add("duration-500");
      sideBar.current.classList.add("delay-500");
      sideBar.current.classList.add("opacity-100");
      setIsSlideOverOpen(true);
    }
  };

  const handleLogOut = () => {
    dispatch(logOutAsync());
  };

  return (
    <>
      <div className="sidebar" ref={sideBar}>
        <SideBarLink icon={<HomeOutlined />} text="Main" route="/" />
        {isLoggedIn ? (
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
        ) : (
          <svg width="184" height="428" className="fill-slate-300">
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
        )}
      </div>
      <SideBarToggle toggle={toggleSideBar} />
      <SlideOver open={isSlideOverOpen} toggle={toggleSideBar} />
    </>
  );
}
