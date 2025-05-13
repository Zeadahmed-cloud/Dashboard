import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Img/image.png";
export default function Navbar() {
  return (
    <nav className="  sm:h-16 h-36  flex flex-col md:flex-row items-center justify-end gap-4 px-4 ">
      <div className="w-full md:w-auto flex flex-col sm:flex-row  items-center justify-end gap-4">
        <input
          type="search"
          placeholder="Search for reports, equipments"
          className="w-full sm:w-64 md:w-96 px-4 py-2 rounded-lg bg-[#26282A] text-white focus:outline-none focus:ring-2 transition-all duration-200"
        />

        <Link
          to="https://wa.me/01101642929"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0"
        >
          <img
            className="w-10 h-10 rounded-full object-cover"
            src={logo}
            alt="user"
          />
        </Link>

        <h2 className="text-white font-serif text-center sm:text-left text-sm sm:text-base">
          Dr. Rana Ahmed
        </h2>
      </div>
    </nav>
  );
}
