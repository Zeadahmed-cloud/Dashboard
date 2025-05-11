import React from "react";
import { BsCircleFill } from "react-icons/bs";

export default function LastCart() {
  return (
    <>
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
    <div className="bg-[#26282A] w-full lg:w-[620px] relative px-6 py-4 rounded-2xl shadow-sm shadow-[#FFFFFF40]">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-xl lg:text-2xl font-semibold">
            Laboratory Equipment Status
          </h1>
          <BsCircleFill className="text-[#42BE65] text-lg lg:text-xl" />
        </div>
  
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex items-center gap-4">
              <p className="text-gray-300 text-base lg:text-lg">Test Tubes Availability</p>
              <p className="text-white text-sm lg:text-base">70%</p>
            </div>
            <p className="text-white text-sm lg:text-base">Last Maintenance: 12/08/2024</p>
          </div>
  
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full sm:w-[220px] h-[14px] bg-gray-600 rounded-full overflow-hidden">
              <div className="h-full w-[70%] bg-[#42BE65] rounded-full"></div>
            </div>
            <p className="text-white text-sm lg:text-base mt-2 sm:mt-0">Maintenance Due: 25/01/2025</p>
          </div>
        </div>
      </div>
    </div>
  
    <div className="bg-[#26282A] w-full lg:w-[620px] relative px-6 py-4 rounded-2xl shadow-sm shadow-[#FFFFFF40]">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-xl lg:text-2xl font-semibold">
            Radiology Equipment Maintenance
          </h1>
          <BsCircleFill className="text-[#FA4D56] text-lg lg:text-xl" />
        </div>
  
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex items-center gap-4">
              <p className="text-gray-300 text-base lg:text-lg">MRI Machine Maintenance</p>
              <p className="text-white text-sm lg:text-base">60%</p>
            </div>
            <p className="text-white text-sm lg:text-base">Maintenance Scheduled: 12/08/2024</p>
          </div>
  
          <div className="w-full sm:w-[220px] h-[14px] bg-gray-600 rounded-full overflow-hidden">
            <div className="h-full w-[70%] bg-[#FA4D56] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
    </>
  );
}
