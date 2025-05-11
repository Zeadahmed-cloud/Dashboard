import React from 'react'
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
export default function MessageIcon() {
  return (<>
    
    
    <div className="fixed bottom-6 right-6 z-50">
    <div
      className="bg-[#04A4C8] p-4  rounded-full shadow-lg hover:scale-105 transition-transform duration-200"
    >
      <BiSolidMessageRoundedDetail className="text-white size-7" />
    </div>
  </div>    
    </>
  )
}
