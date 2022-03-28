import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/icons/logo.png";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
function Topnav() {
  return (
    <div>
      <div className="flex items-center px-4 lg:px-8 py-4 border-b">
        <div className="flex items-center">
          <div className="w-10 h-10 relative">
            <Image
              src={logo}
              layout={"fill"}
              objectFit={"contain"}
              objectPosition={"center"}
            />
          </div>
          <div className="ml-3">
            <h1 className="text-lg lg:text-xl font-bold">Dyno JS</h1>
            <p className="text-sm text-gray-500">Embeddable cards</p>
          </div>
        </div>
        <ul className="hidden lg:flex items-center ml-auto">
          <li className="mx-3 text-sm text-gray-500 cursor-pointer">Home</li>
          <li className="mx-3 text-sm text-gray-500 cursor-pointer">Blog</li>
          <li className="mx-3 text-sm text-gray-500 cursor-pointer">
            Documentaion
          </li>
          <li className="mx-3 cursor-pointer">
            <Link href="/authentication/SignIn">
              <a className="px-8 py-3 text-white bg-green-500 hover:bg-green-600 transition-all rounded-full text-sm">
                Sign in
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Topnav;
