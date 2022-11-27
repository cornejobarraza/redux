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
import { useGoogleSignIn, useViewport } from "hooks";
import { history } from "utils";

export { Sidebar };

function Sidebar() {
  const { width } = useViewport();

  return <div className="menu">{width < 1024 ? <SlideMenu /> : <SideMenu />}</div>;
}

function SideMenu() {
  const { logged, pending, error } = useSelector((state) => state.user);

  return <div className="sidebar">{logged ? <Links pending={pending} error={error} /> : <EmptySidebar />}</div>;
}

function SidebarLink({ icon, text, route }) {
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

function Links({ pending, error }) {
  const dispatch = useDispatch();
  const googleSignIn = useGoogleSignIn();

  const auth = getAuth();
  const [authUser, authLoading] = useAuthState(auth);

  const handleLogOut = () => {
    dispatch(userActions.logOutAsync());
  };

  const links = [
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
  ];

  return (
    <div className="links">
      {links.map((link, index) => (
        <SidebarLink key={index} icon={link.icon} text={link.text} route={link.route} />
      ))}
      <button className="sidebar-link" disabled={pending.logout} onClick={handleLogOut}>
        <ExitToAppOutlined /> Log Out
      </button>
      {!authUser && !authLoading && (
        <button className="button w-max text-xs" onClick={googleSignIn}>
          Sign in with Google
        </button>
      )}
      {(error.logout || error.login) && <span className="status">Something went wrong :(</span>}
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

function SlideMenu() {
  const [isSlideOverOpen, setIsSlideOverOpen] = useState(false);

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
    <div className="slideover">
      <Transition.Root show={isSlideOverOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10 lg:hidden" onClose={toggleSidebar}>
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
                          className="rounded-md text-gray-500 active:text-gray-600 focus:outline-none focus:ring-2 focus:ring-slate-200"
                          onClick={toggleSidebar}
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
                        <SideMenu />
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <button
        id="slide-toggle"
        className="lg:hidden button p-3 fixed bottom-0 right-0 m-4 z-[5]"
        onClick={toggleSidebar}
      >
        <MenuOutlined />
      </button>
    </div>
  );
}
