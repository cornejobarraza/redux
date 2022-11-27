import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { MenuOutlined } from "@material-ui/icons";
import { Fragment, useEffect, useState } from "react";
import { Menu } from "components/Sidebar/Menu";
import { history } from "utils";

export { Slider };

function Slider() {
  const [isSlideOverOpen, setIsSlideOverOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsSlideOverOpen(false);
    }
    // eslint-disable-next-line
  }, [history.location]);

  const handleToggle = () => {
    isSlideOverOpen ? setIsSlideOverOpen(false) : setIsSlideOverOpen(true);
  };

  return (
    <>
      <SlideOver isOpen={isSlideOverOpen} handler={handleToggle} />
      <Toggle handler={handleToggle} />
    </>
  );
}

function SlideOver({ isOpen, handler }) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
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

function Toggle({ handler }) {
  return (
    <button id="slider-toggle" className="lg:hidden button p-3 fixed bottom-0 right-0 m-4 z-[5]" onClick={handler}>
      <MenuOutlined />
    </button>
  );
}
