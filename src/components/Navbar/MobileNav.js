import { SearchOutlined, MoreVertOutlined } from "@material-ui/icons";
import { useState, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Account } from "components/Navbar/Account";
import { SearchBar } from "components/Navbar/SearchBar";
import { Menu, Transition } from "@headlessui/react";

export { MobileNav };

function MobileNav({ user }) {
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
      <div className="search">
        <button type="button" onClick={handleToggle}>
          <SearchOutlined />
        </button>
      </div>
      <Menu as="div" className="more">
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
      {toggled && <SearchBar user={user} />}
    </>
  );
}
