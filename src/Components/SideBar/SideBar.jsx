import React from "react";
import logo from "../../assets/Img/logo.svg";
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { MdBusiness } from "react-icons/md";
import { IoStatsChart } from "react-icons/io5";
import { GrPerformance } from "react-icons/gr";
import { GoPerson } from "react-icons/go";
import { TbReportAnalytics } from "react-icons/tb";
import { MdLogout } from "react-icons/md";

const sideIems = [
  {
    id: 1,
    name: "home",
    icon: <GoHome />,
  },
  {
    id: 2,
    name: "Departments",
    icon: <MdBusiness />,
  },
  {
    id: 3,
    name: "Performance",
    icon: <IoStatsChart />,
  },
  {
    id: 4,
    name: "Availability",
    icon: <GrPerformance />,
  },
  {
    id: 5,
    name: "User",
    icon: <GoPerson />,
  },
  {
    id: 6,
    name: "Reports",
    icon: <TbReportAnalytics />,
  },
];
export default function SideBar() {
  return (
    <aside
      id="logo-sidebar"
      aria-label="Sidebar"
      className="h-full px-3 py-4  flex flex-col justify-between"
    >
      <Link className="flex items-center justify-center">
        <div className="w-10 h-10">
          <img src={logo} className="w-full h-full object-cover" />
        </div>
      </Link>

      <ul className="flex flex-col gap-5">
        {sideIems.map((item) => (
          <Link
            to={item.name}
            className="flex flex-col items-center justify-center  text-white "
          >
            <div className="size-[40px] !text-white  rounded-lg flex justify-center items-center text-2xl">
              {item.icon}
            </div>
            <span className="capitalize text-xs">{item.name}</span>
          </Link>
        ))}
      </ul>

      <Link href="#" className="flex flex-col items-center p-2 text-white  ">
        <MdLogout className="text-2xl" />
        <span className="text-xs whitespace-nowrap">Log out</span>
      </Link>
    </aside>
  );
}
