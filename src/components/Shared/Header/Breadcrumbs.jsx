import React from "react";
import { Breadcrumb } from "flowbite-react";
import { MdHome } from "react-icons/md";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "../Sidebar/sidebar-links";

const Breadcrumbs = () => {
  const pathname = usePathname();

  const getCrumbName = (link) => {
    const links = link.split("/");
    // console.log(links);
  };

  getCrumbName(pathname);

  const crumbs = pathname
    .substring(1)
    // .toLowerCase()
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    .split("/");

  return (
    <Breadcrumb aria-label="Breadcrumb">
      <Breadcrumb.Item href="#">
        <MdHome size={25} />
      </Breadcrumb.Item>
      <Breadcrumb.Item href="#">
        <p className="font-bold">{pathname}</p>
      </Breadcrumb.Item>
      {/* {crumbs.map((crumb, index) => (
        <Breadcrumb.Item key={index} href="#">
          {crumb}
        </Breadcrumb.Item>
      ))} */}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
