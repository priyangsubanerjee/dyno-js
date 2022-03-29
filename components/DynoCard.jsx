import React from "react";
import * as AiIcons from "react-icons/ai";
import { deleteDyno } from "../contollers/dyno";

function DynoCard({ dyno, myDynos, setMyDynos }) {
  const delete_this = async () => {
    if (confirm("Are you sure you want to delete this dyno?")) {
      console.log("delete");
      const res = await deleteDyno(dyno.id);
      const updatedDynos = res.dynos;
      setMyDynos(updatedDynos);
    }
  };

  return (
    <div>
      <div className="border flex h-full flex-col rounded-md overflow-hidden relative">
        <div className="flex h-36 grayscale hover:grayscale-0 transition-all overflow-hidden relative">
          <img src={dyno.coverImage} className="w-full h-full object-cover" />
        </div>
        <div className="w-fit h-fit mx-auto absolute top-2 left-2 shadow-2xl">
          <div className="relative rounded-md overflow-hidden flex items-center justify-center h-8 w-8">
            <img src={dyno.icon} className="h-full w-full" alt="" />
          </div>
        </div>
        <div className="px-4 mt-3">
          <h1 className=" font-semibold text-gray-700">{dyno.heading}</h1>
          <p className="text-xs text-gray-500 mt-2 leading-5">
            {dyno.description.substring(0, 100) + "....."}
          </p>
        </div>
        <div className="flex items-center px-4 mb-4 mt-auto">
          <AiIcons.AiOutlineDelete
            onClick={() => delete_this()}
            className="text-xl text-gray-500 hover:text-green-500 cursor-pointer"
          />
          <AiIcons.AiOutlineEdit className="text-xl ml-6 text-gray-500 hover:text-green-500 cursor-pointer" />
          <button className="py-2 p-4 ml-auto bg-green-500 hover:bg-green-600 transition-all rounded-full text-white text-sm">
            View details
          </button>
        </div>
      </div>
    </div>
  );
}

export default DynoCard;
