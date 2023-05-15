import { useState, Fragment, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

import { Menu, Transition } from "@headlessui/react";
import { Profile } from "./Profile";

import { SearchOutlined, MoreVertOutlined } from "@mui/icons-material";

export { Mobile };

function Mobile({ user }) {
  const [isSearchToggled, setIsSearchToggled] = useState(false);
  const searchToggleRef = useRef(null);
  const searchbarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      // Hide searchbar when clicking outside of it
      if (
        isSearchToggled &&
        !searchbarRef.current?.contains(e.target) &&
        !searchToggleRef.current?.contains(e.target)
      ) {
        setIsSearchToggled(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup to remove event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchToggled]);

  return (
    <>
      <Profile user={user} />
      <div className="search" ref={searchToggleRef}>
        <button type="button" onClick={() => setIsSearchToggled((toggled) => !toggled)}>
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
          <Menu.Items className="absolute right-8 top-14 w-32 z-10 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
      {isSearchToggled && (
        <form
          className="lookup"
          onSubmit={(e) => {
            e.preventDefault();
            searchbarRef.current.value = "";
            searchbarRef.current.blur();
          }}
        >
          <input
            className="searchbar"
            placeholder={`Search here ${user?.name.split(" ")[0]}`}
            ref={searchbarRef}
          />
        </form>
      )}
    </>
  );
}
