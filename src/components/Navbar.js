import { useEffect, useState, Fragment } from "react";
import { useSelector } from "react-redux";
import { Menu, Transition } from "@headlessui/react";
import { SearchOutlined, MoreVertOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";

export { Navbar };

function Navbar() {
  const { user, logged } = useSelector((state) => state.user);

  return (
    <div className="navbar">
      <span className="logo">
        <Link className="text-redux-500" to="/">
          Redux
        </Link>{" "}
        App
      </span>
      {user && logged && (
        <>
          <Pages />
          <div className="account">
            <span className="name">
              Hello, <span className="text-redux-500">{user?.name.split(" ")[0]}</span>
            </span>
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
              <small className="info-tooltip lg:group-hover:scale-100">
                <span className="block font-bold">{user?.name}</span>
                <span className="block">{user?.email}</span>
              </small>
            </Link>
          </div>
          <SearchBar user={user} />
          <DropDown />
        </>
      )}
    </div>
  );
}

function Pages() {
  return (
    <div className="pages">
      <span className="link" data-text="Home">
        Home
      </span>
      <span className="link" data-text="About">
        About
      </span>
      <span className="link" data-text="Contact">
        Contact
      </span>
    </div>
  );
}

function SearchBar({ user }) {
  const [expanded, setExpanded] = useState(false);

  const toggleSearchbar = () => {
    expanded ? setExpanded(false) : setExpanded(true);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setExpanded(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <input
        className="searchbar"
        placeholder={`Search here ${user?.name.split(" ")[0]}...`}
        data-expanded={expanded}
      />
      <span className="search" onClick={toggleSearchbar}>
        <SearchOutlined />
      </span>
    </>
  );
}

// Headless UI dropdown
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function DropDown() {
  return (
    <Menu as="div" className="menu">
      <div>
        <Menu.Button className="flex w-full justify-center rounded-md">
          <MoreVertOutlined className="h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-9 top-20 w-32 z-20 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <span
                  className={classNames(
                    active ? "bg-slate-50 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Home
                </span>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <span
                  className={classNames(
                    active ? "bg-slate-50 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  About
                </span>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <span
                  className={classNames(
                    active ? "bg-slate-50 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Contact
                </span>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
