import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";

export default function Layout() {
  return (
    <>
      <nav className="z-50 fixed top-0 right-0 w-[calc(100%-112px)]  bg-[#111315] ">
        <Navbar />
      </nav>
      <div className="fixed top-0 left-0 z-50 w-28 h-screen transition-transform-translate-x-full sm:translate-x-0 bg-[var(--main-black)]">
        <SideBar />
      </div>
      <main className="ml-[112px] mt-18 px-8 min-h-[70vh]">
        <Outlet />
      </main>
    </>
  );
}
