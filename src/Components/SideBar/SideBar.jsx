import React from "react";
import logo from "../../assets/Img/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { MdBusiness } from "react-icons/md";
import { IoStatsChart } from "react-icons/io5";
import { GrPerformance } from "react-icons/gr";
import { GoPerson } from "react-icons/go";
import { TbReportAnalytics } from "react-icons/tb";
import { MdLogout } from "react-icons/md";

const sideIems = [
  { id: 1, name: "home", icon: <GoHome /> },
  { id: 2, name: "Departments", icon: <MdBusiness /> },
  { id: 3, name: "Performance", icon: <IoStatsChart /> },
  { id: 4, name: "Availability", icon: <GrPerformance /> },
  { id: 5, name: "User", icon: <GoPerson /> },
  { id: 6, name: "Reports", icon: <TbReportAnalytics /> },
];

export default function SideBar() {
  const { pathname } = useLocation();
  const currentPath = pathname.split("/")[1].toLowerCase(); // make sure it's lowercase to match

  return (
    <aside
      id="logo-sidebar"
      aria-label="Sidebar"
      className="h-full px-3 py-4 flex flex-col justify-between"
    >
      <Link className="flex items-center justify-center" to="/home">
        <div className="w-10 h-10">
          <img src={logo} className="w-full h-full object-cover" alt="Logo" />
        </div>
      </Link>

      <ul className="flex flex-col gap-5">
        {sideIems.map((item) => {
          const itemPath = item.name.toLowerCase();
          const isActive = currentPath === itemPath;

          return (
            <Link
              key={item.id}
              to={`/${item.name}`}
              className="flex flex-col items-center justify-center text-white"
            >
              <div
                className={`size-[40px] rounded-lg flex justify-center items-center text-2xl ${
                  isActive ? "bg-[#04A4C8]" : "bg-transparent"
                }`}
              >
                {item.icon}
              </div>
              <span className="capitalize text-xs">{item.name}</span>
            </Link>
          );
        })}
      </ul>

      <Link to="#" className="flex flex-col items-center p-2 text-white">
        <MdLogout className="text-2xl" />
        <span className="text-xs whitespace-nowrap">Log out</span>
      </Link>
    </aside>
  );
}
