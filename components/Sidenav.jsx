import React from "react";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

function Sidenav({ sidenav, setSideNav }) {
  return (
    <div>
      {sidenav && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#00000080]">
          <div className="w-[80%] h-full flex flex-col ml-auto bg-white overflow-y-auto overflow-x-hidden">
            <MdIcons.MdClose
              className="mt-4 ml-4 text-xl cursor-pointer text-gray-500"
              onClick={() => setSideNav(!sidenav)}
            />
            <div className="mt-3">
              <ul>
                <li>
                  <a
                    href=""
                    className="flex items-center py-4 px-4 border-b text-sm text-gray-500 font-medium"
                  >
                    <MdIcons.MdHome className="mr-2 text-xl text-green-500" />
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="flex items-center py-4 px-4 border-b text-sm text-gray-500 font-medium"
                  >
                    <FaIcons.FaHandsHelping className="text-xl mr-2 text-green-500" />
                    Support Ukraine
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="flex items-center py-4 px-4 border-b text-sm text-gray-500 font-medium"
                  >
                    <AiIcons.AiOutlineShopping className="text-xl mr-2 text-green-500" />
                    Market
                  </a>
                </li>
              </ul>
              <div className="flex px-6 py-8 bg-gray-50">
                <button className="bg-green-500 hover:bg-green-600 text-white flex h-fit text-center justify-center py-3 px-4 rounded-full text-sm w-full">
                  Create new
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidenav;
