import React from "react";
import * as AiIcons from "react-icons/ai";

function Topnav() {
  return (
    <div>
      <div className="hidden lg:flex items-center border-b py-2 px-6">
        <div className="flex items-center">
          <img src="./icons/logo.png" alt="logo" className="h-8 w-8" />
          <div className="ml-2">
            <h1 className="text-black text-xl font-bold">Dyno Js</h1>
            <p className="text-gray-500 text-xs">Plugins made easy.</p>
          </div>
        </div>
        <div className="text-xs cursor-pointer rounded-full border flex items-start border-green-500 bg-green-50 py-2 px-3 text-green-500 ml-6">
          What&apos;s new in v6.0.0?{" "}
          <AiIcons.AiOutlineRight className="ml-1 mt-[2px]" />
        </div>
        <ul className="flex items-center ml-auto">
          <li className="text-sm text-gray-500 ml-6">
            <a href="">Documentation</a>
          </li>
          <li className="text-sm text-gray-500 ml-6">
            <a href="">Market</a>
          </li>
          <li className="text-sm text-gray-500 ml-6">
            <a href="">Support</a>
          </li>
        </ul>
        <button className="bg-green-500 hover:bg-green-600 text-white h-fit py-2 px-4 rounded-full text-sm ml-6">
          Create new
        </button>
      </div>
    </div>
  );
}

export default Topnav;
