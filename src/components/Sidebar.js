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
  MenuOutlined,
} from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { useEffect, useState, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { userActions } from "store";
import { useGoogleSignIn } from "hooks";
import { history } from "utils";

export { Sidebar };

function Sidebar() {
  const [isMobile, setIsMobile] = useState(null);
  const [isSlideOverOpen, setIsSlideOverOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsSlideOverOpen(false);
    }
    // eslint-disable-next-line
  }, [history.location]);

  const toggleSidebar = () => {
    isSlideOverOpen ? setIsSlideOverOpen(false) : setIsSlideOverOpen(true);
  };

  return (
    <>
      {isMobile ? <SlideOver open={isSlideOverOpen} handler={toggleSidebar} /> : <Menu />}
      {isMobile && <SidebarToggle handler={toggleSidebar} />}
    </>
  );
}

function Menu() {
  const { user, logged, pending, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const googleSignIn = useGoogleSignIn();

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
    { icon: <BookmarkBorderOutlined />, text: "Wishlist", route: "wishlist" },
    { icon: <SettingsOutlined />, text: "Settings", route: "settings" },
    {
      icon: <ExitToAppOutlined />,
      text: "Log Out",
      state: pending.logout,
      handler: handleLogOut,
    },
  ];

  const auth = getAuth();
  const [authUser, authLoading] = useAuthState(auth);

  return (
    <div className="sidebar">
      {user && logged ? (
        <>
          {Links.map((link, index) => (
            <SideBarLink
              key={index}
              icon={link.icon}
              text={link.text}
              route={link.route}
              state={link.state}
              handler={link.handler}
            />
          ))}
          {(error.logout || error.login) && <span className="status">Something went wrong :(</span>}
          {!authUser && !authLoading && (
            <button className="button w-max text-xs mt-auto mx-0" onClick={googleSignIn}>
              Sign in with Google
            </button>
          )}
        </>
      ) : (
        <SideBarLinkEmpty />
      )}
    </div>
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
    <rect x="36" y="6" width="144" height="20" rx="10"></rect>
    <circle cx="12" cy="16" r="12"></circle>
    <rect x="36" y="50" width="144" height="20" rx="10" opacity="0.9"></rect>
    <circle cx="12" cy="60" r="12" opacity="0.9"></circle>
    <rect x="36" y="94" width="144" height="20" rx="10" opacity="0.8"></rect>
    <circle cx="12" cy="104" r="12" opacity="0.8"></circle>
    <rect x="36" y="138" width="144" height="20" rx="10" opacity="0.7"></rect>
    <circle cx="12" cy="148" r="12" opacity="0.7"></circle>
    <rect x="36" y="182" width="144" height="20" rx="10" opacity="0.6"></rect>
    <circle cx="12" cy="192" r="12" opacity="0.6"></circle>
    <rect x="36" y="226" width="144" height="20" rx="10" opacity="0.5"></rect>
    <circle cx="12" cy="236" r="12" opacity="0.5"></circle>
    <rect x="36" y="270" width="144" height="20" rx="10" opacity="0.4"></rect>
    <circle cx="12" cy="280" r="12" opacity="0.4"></circle>
    <rect x="36" y="314" width="144" height="20" rx="10" opacity="0.3"></rect>
    <circle cx="12" cy="324" r="12" opacity="0.3"></circle>
    <rect x="36" y="358" width="144" height="20" rx="10" opacity="0.2"></rect>
    <circle cx="12" cy="368" r="12" opacity="0.2"></circle>
    <rect x="36" y="402" width="144" height="20" rx="10" opacity="0.1"></rect>
    <circle cx="12" cy="412" r="12" opacity="0.1"></circle>
  </svg>
);

function SlideOver({ open, handler }) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10 lg:hidden" onClose={handler}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-64 pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-64">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -ml-8 flex pt-[1.3rem] pr-7">
                      <button
                        type="button"
                        className="rounded-md text-gray-500 active:text-gray-600 focus:outline-none focus:ring-2 focus:ring-slate-200"
                        onClick={handler}
                      >
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col bg-slate-200 py-5 shadow-xl">
                    <div className="px-8">
                      <Dialog.Title className="text-lg font-bold text-gray-900">Menu</Dialog.Title>
                    </div>
                    <div className="relative mt-6 flex-1">
                      <Menu />
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

function SidebarToggle({ handler }) {
  return (
    <button
      id="sidebar-toggle"
      type="button"
      className="lg:hidden button p-3 fixed bottom-0 right-0 m-4 z-[5]"
      onClick={handler}
    >
      <MenuOutlined />
    </button>
  );
}
