import { useState, Fragment } from "react";
import { useSelector } from "react-redux";
import { Menu, Transition } from "@headlessui/react";
import { SearchOutlined, MoreVertOutlined } from "@material-ui/icons";
import { Link, NavLink } from "react-router-dom";
import { useViewport } from "hooks";

export { Navbar };

function Navbar() {
  const { user, logged } = useSelector((state) => state.user);
  const { width } = useViewport();

  return (
    <div className="navbar">
      <span className="logo">
        <Link className="text-redux-500" to="/">
          Redux
        </Link>{" "}
        App
      </span>
      {logged && <>{width < 1024 ? <MobileBar user={user} /> : <DesktopBar user={user} />}</>}
    </div>
  );
}

function MobileBar({ user }) {
  const [toggled, setToggled] = useState(false);

  const handleToggle = () => {
    if (toggled) {
      setToggled(false);
    } else {
      setToggled(true);
    }
  };

  return (
    <>
      <Account user={user} />
      <SearchIcon handler={handleToggle} />
      <PagesDropDown />
      {toggled && <SearchBar user={user} />}
    </>
  );
}

function DesktopBar({ user }) {
  return (
    <>
      <Pages />
      <SearchBar user={user} />
      <UserName user={user} />
      <Account user={user} />
    </>
  );
}

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

function PagesDropDown() {
  return (
    <Menu as="div" className="menu">
      <Menu.Button className="flex w-full justify-center rounded-md">
        <MoreVertOutlined className="h-5 w-5" aria-hidden="true" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-8 top-20 w-32 z-20 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              <NavLink className="block px-4 py-2 text-sm active-d" to="about">
                About
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink className="block px-4 py-2 text-sm active-d" to="contact">
                Contact
              </NavLink>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

function Account({ user }) {
  return (
    <div className="account">
      <Link className="group" to="settings">
        <img
          className="avatar"
          src={user?.avatar}
          alt=""
          aria-label="User avatar"
          width="32px"
          height="32px"
          referrerPolicy="no-referrer"
        />
        <small className="info-tooltip">
          <span className="block font-bold">{user?.name}</span>
          <span className="block">{user?.email}</span>
        </small>
      </Link>
    </div>
  );
}

function UserName({ user }) {
  return (
    <span className="name">
      Hello, <span className="text-redux-500">{user?.name.split(" ")[0]}</span>
    </span>
  );
}

function SearchBar({ user }) {
  return <input className="searchbar" placeholder={`Search here ${user?.name.split(" ")[0]}`} />;
}

function SearchIcon({ handler }) {
  return (
    <div className="search">
      <button type="button" onClick={handler}>
        <SearchOutlined />
      </button>
    </div>
  );
}
