import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-white m-2 dark:bg-gray-800">
      <div className="w-full mx-4 max-w-full p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          &copy; {new Date().getFullYear()} &nbsp;
          <a
            href="https://www.77soft.com/ph"
            target="_blank"
            className="hover:underline"
          >
            Seven Seven Corporate Group
          </a>
          . All Rights Reserved.
        </span>
        <div className="flex mt-4 mx-4 space-x-5 sm:justify-center sm:mt-0">
          <a
            href="https://www.facebook.com/seven.seven.global.services.inc/"
            target="_blank"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <BsFacebook size={25} />
            <span className="sr-only">Facebook</span>
          </a>
          <a
            href="https://www.instagram.com/sevenseven.official/?hl=en"
            target="_blank"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <BsInstagram size={25} />
            <span className="sr-only">Instagram</span>
          </a>
          <a
            href="https://www.linkedin.com/company/seven-seven-softwares"
            target="_blank"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <BsLinkedin size={25} />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
