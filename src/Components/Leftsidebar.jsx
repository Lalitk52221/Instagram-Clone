import React from "react";
import logo_black from "../assets/logo.png";
import { NAV_LINKS_DATA } from "./Constants/NavlinksData";
import { LuLogOut } from "react-icons/lu";

const Leftsidebar = () => {
  return (
    <div className="text-white w-64 h-full items-center flex flex-col border-r">
      <img src={logo_black} alt="logo" width={180} className="p-3 mt-6" />
      <div className="flex flex-col gap-4 list-none mt-10 text-xl font-semibold ">
        {NAV_LINKS_DATA.map((navlink, index) => (
          
            <li key={index} className="flex gap-5 hover:bg-slate-800 py-3 px-5 rounded-lg transition-all cursor-pointer">
              {navlink.icon} <span>{navlink.Name}</span>
            </li>
          
        ))}
        <button className=" flex items-center justify-center flex-row bg-slate-100 py-2 px-5 rounded-lg gap-2 mt-3 cursor-pointer hover:bg-gray-300 transition-all">
        <LuLogOut className='h-6 w-4 text-red-700' /> <p className="text-red-700 text-lg">Logout</p>
        </button>
      </div>
    </div>
  );
};

export default Leftsidebar;
