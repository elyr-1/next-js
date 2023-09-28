import React from "react";
import UserAvatar from "../Avatar/UserAvatar";
import { Button } from "flowbite-react";
import {
  MdPalette,
  MdLightMode,
  MdBrightnessMedium,
  MdDarkMode,
  MdTune,
  MdLogout,
} from "react-icons/md";

const Drawer = ({ open, handleClose }) => {
  return (
    <aside
      className={
        "absolute top-0 right-0 overflow-y-auto z-10 bg-gray-900 bg-opacity-25 inset-0 transition-opacity " +
        (open
          ? "topacity-100 duration-500 ease-in-out transform translate-x-0"
          : "opacity-0 duration-500 ease-in-out transform translate-x-full")
      }
    >
      <div
        className={
          "w-screen max-w-sm right-0 absolute p-2 bg-white h-full shadow-xl transition-all delay-400 duration-500 ease-in-out transform " +
          (open ? "translate-x-0" : "translate-x-full")
        }
      >
        <div>
          <UserAvatar isRounded={false} />
        </div>
        <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="px-3 py-2">
          <ul className="space-y-2 font-medium">
            <li>
              <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700 group">
                <MdTune />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Account Settings
                </span>
              </a>
            </li>
            <li>
              <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700 group">
                <MdLogout />
                <span className="flex-1 ml-3 whitespace-nowrap">Log out</span>
              </a>
            </li>
          </ul>
        </div>
        <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="px-3 py-2">
          <ul className="space-y-2 font-medium">
            <li>
              <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700 group">
                <MdPalette />
                <span className="flex-1 ml-3 whitespace-nowrap">Theme</span>
              </a>
            </li>
          </ul>
          <Button.Group className="w-full">
            <Button color="gray" className="w-2/6">
              <MdLightMode className="mr-3 h-4 w-4" />
              <p>Light</p>
            </Button>
            <Button color="gray" className="w-2/6">
              <MdBrightnessMedium className="mr-3 h-4 w-4" />
              <p>Default</p>
            </Button>
            <Button color="gray" className="w-2/6">
              <MdDarkMode className="mr-3 h-4 w-4" />
              <p>Dark</p>
            </Button>
          </Button.Group>
        </div>
      </div>
      <div
        className="w-screen h-full cursor-pointer"
        onClick={() => handleClose()}
      ></div>
    </aside>
  );
};

export default Drawer;
