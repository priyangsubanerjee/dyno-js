import React from "react";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import * as VscIcons from "react-icons/vsc";
import { Link } from "react-scroll";
import Sidenav from "./Sidenav";
import { useState } from "react";
import CreateDyno from "./CreateDyno";

function Topnav() {
  const [sidenav, setSideNav] = useState(false);
  const [createDynoActive, setCreateDynoActive] = useState(false);
  return (
    <div>
      <div className="flex items-center border-b py-2 px-4 lg:px-6">
        <div className="flex items-center cursor-pointer">
          <img src="./icons/logo.png" alt="logo" className="h-8 w-8" />
          <div className="ml-2">
            <h1 className="text-black text-xl font-bold">Dyno Js</h1>
            <p className="text-gray-500 text-xs">Plugins made easy.</p>
          </div>
        </div>
        <div className="hidden lg:flex text-xs cursor-pointer rounded-full border items-start border-green-500 bg-green-50 py-2 px-3 text-green-500 ml-6">
          What&apos;s new in v6.0.0?{" "}
          <AiIcons.AiOutlineRight className="ml-1 mt-[2px]" />
        </div>
        <ul className="hidden lg:flex items-center ml-auto">
          <li className="text-sm text-gray-500 hover:text-black ml-6 transition-all">
            <Link to="support-ukraine" smooth offset={100}>
              <a className="flex items-center cursor-pointer">
                <FaIcons.FaHandsHelping className="text-xl mr-2 text-green-500" />
                Support Ukraine
              </a>
            </Link>
          </li>
          <li className="text-sm text-gray-500 hover:text-black ml-6 transition-all">
            <a href="" className="flex items-center">
              <BsIcons.BsJournalBookmarkFill className="text-xl mr-2 text-green-500" />
              Documentation
            </a>
          </li>
          <li className="text-sm text-gray-500 hover:text-black ml-6 transition-all">
            <a href="" className="flex items-center">
              <AiIcons.AiOutlineShopping className="text-xl mr-2 text-green-500" />
              Market
            </a>
          </li>
          <li className="text-sm text-gray-500 hover:text-black ml-6 transition-all">
            <a href="" className="flex items-center">
              <VscIcons.VscAccount className="text-xl mr-2 text-green-500" />
              Profile
            </a>
          </li>
        </ul>
        <button
          onClick={() => setCreateDynoActive(true)}
          className="hidden lg:block bg-green-500 hover:bg-green-600 text-white h-fit py-2 px-4 rounded-full text-sm ml-6"
        >
          Create new
        </button>
        <div className="flex lg:hidden items-center ml-auto">
          <MdIcons.MdOutlineAdd className="text-2xl text-green-500 mr-6 cursor-pointer" />
          <MdIcons.MdMenu
            className="text-2xl text-gray-500 cursor-pointer"
            onClick={() => setSideNav(!sidenav)}
          />
        </div>
      </div>
      <Sidenav sidenav={sidenav} setSideNav={setSideNav} />
      <CreateDyno
        createDynoActive={createDynoActive}
        setCreateDynoActive={setCreateDynoActive}
      />
    </div>
  );
}

export default Topnav;
