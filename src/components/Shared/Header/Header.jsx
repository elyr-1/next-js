"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import UserAvatar from "../Avatar/UserAvatar";
import Breadcrumbs from "./Breadcrumbs";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Drawer } from "flowbite";
// import Drawer from "../Drawer/Drawer";

const Header = ({ handleOpen }) => {
  // const [open, setOpen] = useState(false);

  // const toggleDrawer = () => {
  //   setOpen(true);
  //   console.log("open sesame");
  // };

  return (
    <Navbar fluid>
      <Breadcrumbs />
      <UserAvatar handleOpen={handleOpen} isRounded={true} />
      {/* <div className="flex md:order-2 cursor-pointer">
        <Avatar
          alt="User settings"
          img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          rounded
          onClick={() => handleOpen()}
        >
          <div className="space-y-1 font-medium dark:text-white">
            <div>Johnny Sins</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Joined in August 2014
            </div>
          </div>
        </Avatar>
      </div> */}
    </Navbar>
  );
};

export default Header;
