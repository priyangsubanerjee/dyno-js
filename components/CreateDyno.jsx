import React from "react";
import * as HiIcons from "react-icons/hi";
import * as VscIcons from "react-icons/vsc";
import * as MdIcons from "react-icons/md";
import { useState, useEffect } from "react";
import CreateProfile from "./CreateProfile";
import FetchUser from "../user/FetchUser";

function CreateDyno({ createDynoActive, setCreateDynoActive }) {
  const [createProfileActive, setCreateProfileActive] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(async () => {
    const user = FetchUser();
    if (user) {
      setUser(user);
    }
  });
  return (
    <div>
      {createDynoActive ? (
        <div
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          className="fixed top-0 left-0 w-full h-full flex"
        >
          <div className="bg-white rounded-t-lg md:rounded-lg p-4 mt-auto md:max-w-[500px] h-auto md:max-h-[500px] overflow-y-auto md:m-auto w-full">
            <div className="flex  items-center">
              <HiIcons.HiViewGridAdd className="text-2xl text-green-500 mr-2" />
              <h1 className="text-xl font-medium">Create new</h1>
              <MdIcons.MdClose
                onClick={() => setCreateDynoActive(false)}
                className="ml-auto bg-gray-50 rounded-full text-3xl p-2 cursor-pointer"
              />
            </div>
            <hr className="mt-3" />
            {user == null || user == undefined ? (
              <div className="p-6 w-full flex flex-col items-center justify-center bg-gray-50 mt-6 rounded-md">
                <VscIcons.VscAccount className="text-4xl text-green-500" />
                <p className="mt-4 text-center text-sm leading-6 text-gray-500">
                  It seems you have created your profile yet! Your profile is
                  necessary to create a new dyno.
                </p>
                <button
                  onClick={() => setCreateProfileActive(true)}
                  className="bg-green-500 hover:bg-green-600 text-white h-fit w-full mt-4 py-3 px-4 rounded-full text-sm"
                >
                  Start
                </button>
                <span className="text-gray-400 text-xs mt-3">1-2 minutes</span>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
      <CreateProfile
        createProfileActive={createProfileActive}
        setCreateProfileActive={setCreateProfileActive}
      />
    </div>
  );
}

export default CreateDyno;
