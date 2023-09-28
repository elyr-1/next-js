import React from "react";
import Image from "next/image";
import { Avatar } from "flowbite-react";

const UserAvatar = (props) => {
  const { handleOpen, isRounded } = props;

  return (
    <div className="flex items-center mx-4 space-x-4 md:order-2 cursor-pointer">
      <Avatar
        alt="User settings"
        img="/images/77logo.png"
        rounded={isRounded}
        onClick={() => handleOpen()}
      >
        <div className="space-y-1 font-medium dark:text-white">
          <div>John Doe</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Software Engineer
          </div>
        </div>
      </Avatar>
    </div>
  );
};

export default UserAvatar;
