"use client";
import React, { useState } from "react";
import SideBar from "../../components/Shared/Sidebar/SideBar";
import Header from "../../components/Shared/Header/Header";
import Footer from "@/components/Shared/Footer/Footer";
import Drawer from "@/components/Shared/Drawer/Drawer";

const LayoutMain = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="flex h-screen overflow-hidden relative">
        <SideBar />
        <div className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden min-h-screen">
          <Header handleOpen={handleOpen} />
          <main className="bg-slate-100">
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
          <Footer />
        </div>
        <Drawer open={open} handleClose={handleClose} />
      </div>
    </div>
  );
};

export default LayoutMain;
