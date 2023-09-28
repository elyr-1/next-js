"use client";
import React, { useRef } from "react";
import { usePathname } from "next/navigation";
import { Sidebar } from "flowbite-react";
import { sidebarLinks } from "./sidebar-links";
import Image from "next/image";

const SideBar = () => {
  const pathname = usePathname();
  const sidebar = useRef(null);
  const trigger = useRef(null);

  return (
    <Sidebar aria-label="sidebar" collapseBehavior="">
      <Sidebar.Logo
        href="/"
        img="/images/77logotext.png"
        imgAlt="Seven Seven Billing App"
      />
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {sidebarLinks.map((sb) => (
            <Sidebar.Item key={sb.id} href={sb.link} icon={sb.icon}>
              <p className="font-medium">{sb.name}</p>
            </Sidebar.Item>
          ))}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SideBar;
