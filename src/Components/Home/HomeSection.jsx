import React from "react";
import logo from "../../assets/Img/stash_chart-trend-up-duotone.png";
import logo1 from "../../assets/Img/mingcute_alert-fill.png";
import logo2 from "../../assets/Img/mingcute_down-fill.png";

export default function HomeSection() {
  const cards = [
    {
      id: 1,
      name: "96%",
      image: logo,
      type: "Uptime for last 7 days",
    },
    {
      id: 2,
      name: "14",
      image: logo1,
      type: "Issues requiring attention",
    },
    {
      id: 3,
      name: "78%",
      type: "Equipment and supply usage",
    },
  ];

  return (
    <div className="min-h-[70vh] py-7 px-4 sm:px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col">
        <div className="flex flex-col gap-2 mb-6 mt-16 sm:mt-0">
          <h1 className="text-white text-2xl sm:text-3xl font-bold leading-snug">
            Dashboard Overview
          </h1>
          <p className="text-white text-sm sm:text-base max-w-md">
            Monitor performance, equipment, and inventory across all departments
          </p>
        </div>
        <div className="flex flex-wrap justify-start gap-4 sm:gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-[#26282A] rounded-2xl p-4 w-full sm:w-[48%] md:w-[270px] h-[130px] shadow-sm shadow-gray-400 flex flex-col justify-center"
            >
              <div className="flex items-center">
                <span className="text-white text-5xl font-extrabold">
                  {card.name}
                </span>
                {card.image ? (
                  <img
                    src={card.image}
                    alt="icon"
                    className={`ml-5 ${
                      card.id === 1 ? "w-20 h-20" : "w-10 h-10"
                    } object-contain`}
                  />
                ) : (
                  <div className="ml-3 w-[160px] h-[12px] bg-gray-600 rounded-full overflow-hidden mt-3">
                    <div className="h-full w-[75%] bg-green-500 rounded-full"></div>
                  </div>
                )}
              </div>
              <p className="text-white text-sm mt-2">{card.type}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-2 mt-9">
          <h1 className="text-white text-xl sm:text-2xl">
            Equipment and Inventory Status
          </h1>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <div className="relative w-full sm:w-[250px]">
              <input
                type="text"
                value="All Categories"
                readOnly
                className="bg-[#1D1F20] w-full h-10 text-white rounded-lg px-3 pr-10 text-sm outline-none"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <img src={logo2} className="size-5" />
              </div>
            </div>

            <div className="relative w-full sm:w-[250px]">
              <input
                type="text"
                value="Last 7 days"
                readOnly
                className="bg-[#1D1F20] w-full h-10 text-white rounded-lg px-3 pr-10 text-sm outline-none"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <img src={logo2} className="size-5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full mt-4 border-separate border-spacing-y-2 min-w-[600px]">
          <thead>
            <tr class="text-left bg-[#1D1F20]">
              <th class="px-4 py-2">No.</th>
              <th class="px-4 py-2">Title</th>
              <th class="px-4 py-2">Remark</th>
              <th class="px-4 py-2">Timestamp</th>
              <th class="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-4 py-2 border-b border-[#31373A]">1</td>
              <td class="px-4 py-2 border-b border-[#31373A]">
                MRI scanner maintenance overdue
              </td>
              <td class="px-4 py-2 border-b border-[#31373A]">
                Maintenance is overdue by 3 days.
              </td>
              <td class="px-4 py-2 border-b border-[#31373A]">
                Jan 25, 2025 - 10:00 AM
              </td>
              <td class="border-b border-[#31373A]">
                <span class="bg-[#FA4D561A] text-[#FA4D56] text-xs px-2 py-2 rounded-md flex items-center justify-center w-24 h-8 mx-auto">
                  Urgent
                </span>
              </td>
            </tr>
            <tr>
              <td class="px-4 py-2 border-b border-[#31373A]">2</td>
              <td class="px-4 py-2 border-b border-[#31373A]">
                Low stock: Aspirin 500mg
              </td>
              <td class="px-4 py-2 border-b border-[#31373A]">
                Only 5 packs left in stock
              </td>
              <td class="px-4 py-2 border-b border-[#31373A]">
                Jan 25, 2025 - 09:30 AM
              </td>
              <td class="border-b border-[#31373A]">
                <span class="bg-[#F1C21B1A] text-[#F1C21B] text-xs px-2 py-2 rounded-md flex items-center justify-center w-24 h-8 mx-auto">
                  Low Priority
                </span>
              </td>
            </tr>
            <tr>
              <td class="px-4 py-2 border-b border-[#31373A]">3</td>
              <td class="px-4 py-2 border-b border-[#31373A]">
                New inventory added for the Lab
              </td>
              <td class="px-4 py-2 border-b border-[#31373A]">
                50 units of test tubes added.
              </td>
              <td class="px-4 py-2 border-b border-[#31373A]">
                Jan 25, 2025 - 09:00 AM
              </td>
              <td class="border-b border-[#31373A]">
                <span class="bg-[#42BE651A] text-[#42BE65] text-xs px-2 py-2 rounded-md flex items-center justify-center w-24 h-8 mx-auto">
                  Completed
                </span>
              </td>
            </tr>
            <tr>
              <td class="px-4 py-2 border-b border-[#31373A]">4</td>
              <td class="px-4 py-2 border-b border-[#31373A]">
                Tool calibration required for Lab
              </td>
              <td class="px-4 py-2 border-b border-[#31373A]">
                Calibration needed for microscope.
              </td>
              <td class="px-4 py-2 border-b border-[#31373A]">
                Jan 24, 2025 - 06:00 PM
              </td>
              <td class="border-b border-[#31373A]">
                <span class="bg-[#4589FF1A] text-[#4589FF] text-xs px-2 py-2 rounded-md flex items-center justify-center w-24 h-8 mx-auto">
                  In Progress
                </span>
              </td>
            </tr>
            <tr>
              <td class="px-4 py-2 border-b border-[#31373A]">5</td>
              <td class="px-4 py-2 border-b border-[#31373A]">
                Pharmacy order received
              </td>
              <td class="px-4 py-2 border-b border-[#31373A]">
                New order for medications arrived.
              </td>
              <td class="px-4 py-2 border-b border-[#31373A]">
                Jan 24, 2025 - 06:00 PM
              </td>
              <td class="border-b border-[#31373A]">
                <span class="bg-[#42BE651A] text-[#42BE65] text-xs px-2 py-2 rounded-md flex items-center justify-center w-24 h-8 mx-auto">
                  Completed
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
