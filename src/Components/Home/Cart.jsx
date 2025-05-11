import React from 'react'
import logo from "../../assets/Img/stash_chart-trend-up-duotone.png";
import logo1 from "../../assets/Img/mingcute_alert-fill.png";
export default function Cart() {


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

  return (<>
    
    <div className="flex flex-wrap justify-start gap-4 sm:gap-6">
    {cards.map((card) => (
      <div
        key={card.id}
        className="bg-[#26282A] rounded-2xl p-4 w-full sm:w-[48%] md:w-[270px] h-[130px] shadow-sm shadow-[#FFFFFF40] flex flex-col justify-center"
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
    </>
  )
}
