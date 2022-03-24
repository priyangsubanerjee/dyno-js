import React from "react";
import * as IoIcons from "react-icons/io5";

function UnderDevelopment() {
  return (
    <div className=" flex items-center justify-center mb-16 mt-16 p-4">
      <div className="bg-gray-100 py-3 px-4 text-gray-500 text-sm rounded-md flex flex-col lg:flex-row items-center justify-center">
        <IoIcons.IoWarningOutline className="text-xl mb-[3px]" />
        <span className="ml-1 text-center">
          This page is under development.{" "}
          <a className="text-green-500" href="">
            View documentation
          </a>
        </span>
      </div>
    </div>
  );
}

export default UnderDevelopment;
