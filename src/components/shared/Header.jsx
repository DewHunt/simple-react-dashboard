import { Menu, Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  HiOutlineBell,
  HiOutlineChatAlt,
  HiOutlineSearch,
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-gray-200 h-16 px-4 flex justify-between items-center border-b border-indigo-600">
        <div className="relative">
          <HiOutlineSearch
            fontSize={20}
            className="text-gray-400 absolute top-3 left-3"
          />
          <input
            type="text"
            placeholder="Serach..."
            className="text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded pl-9 pr-4"
          />
        </div>
        <div className="flex items-center mr-2 gap-2">
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={`${
                    open ? "bg-gray-400 text-white" : "text-gray-700"
                  } p-1.5 rounded inline-flex items-center  hover:text-opacity-100 focus:outline-none active:text-gray-100`}>
                  <HiOutlineChatAlt fontSize={24} />
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1">
                  <Popover.Panel className="absolute right-0 z-10 mt-4 w-80">
                    <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                      <strong className="text-gray-700 font-medium">
                        Messages
                      </strong>
                      <div className="mt-2 py-1 text-sm">
                        <p>This is messages panel</p>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={`${
                    open ? "bg-gray-400 text-white" : "text-gray-700"
                  } p-1.5 rounded inline-flex items-center  hover:text-opacity-100 focus:outline-none active:text-gray-100`}>
                  <HiOutlineBell fontSize={24} />
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1">
                  <Popover.Panel className="absolute right-0 z-10 mt-4 w-80">
                    <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                      <strong className="text-gray-700 font-medium">
                        Notifications
                      </strong>
                      <div className="mt-2 py-1 text-sm">
                        <p>This is notification panel</p>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          <Menu as="div" className="relative">
            <div>
              <Menu.Button className="m-2 inline-flex rounded-full focus:outline-none focus:ring-2 focus:ring-green-400">
                <span className="sr-only">Open User Menu</span>
                <div
                  className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
                  style={{
                    backgroundImage: 'url("https://i.pravatar.cc/48")',
                  }}>
                  <span className="sr-only">Dew Hunt</span>
                </div>
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95">
              <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={`${
                        active ? "bg-gray-100" : ""
                      }text-gray-700 hover:bg-gray-200 hover:text-green-700 hover:text-lg hover:font-bold cursor-pointer rounded px-4 py-2`}
                      onClick={() => {
                        navigate("/profile");
                      }}>
                      Your Profile
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={`${
                        active ? "bg-gray-100" : ""
                      }text-gray-700 hover:bg-gray-200 hover:text-green-700 hover:text-lg hover:font-bold cursor-pointer rounded px-4 py-2`}
                      onClick={() => {
                        navigate("/settings");
                      }}>
                      Settings
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={`${
                        active ? "bg-gray-100" : ""
                      }text-gray-700 hover:bg-gray-200 hover:text-green-700 hover:text-lg hover:font-bold cursor-pointer rounded px-4 py-2`}
                      onClick={() => {
                        navigate("/sign-out");
                      }}>
                      Sign Out
                    </div>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </>
  );
};

export default Header;
