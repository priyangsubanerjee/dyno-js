import React from "react";
import * as HiIcons from "react-icons/hi";
import * as VscIcons from "react-icons/vsc";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";
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

    if (createDynoActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  });

  return (
    <div>
      {createDynoActive ? (
        <div
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          className="fixed top-0 left-0 w-full h-full flex"
        >
          <div className="bg-white flex flex-col rounded-t-lg md:rounded-lg p-4 mt-auto md:max-w-[500px] h-auto overflow-y-auto md:m-auto w-full">
            <div className="flex  items-center">
              <HiIcons.HiViewGridAdd className="text-2xl text-green-500 mr-2" />
              <h1 className="text-xl font-semibold">Create dyno</h1>
              {user !== null ? (
                <div
                  onClick={() => setCreateProfileActive(true)}
                  className="flex items-center text-gray-500 text-xs mt-[1px] ml-2 cursor-pointer"
                >
                  <BsIcons.BsChevronRight className="mr-1" /> {user.name}
                </div>
              ) : null}

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
            ) : (
              <div className="flex flex-col h-full">
                <div className="p-2 border border-green-500 mt-4 rounded flex items-center">
                  <div className="ml-2">
                    <p className="text-xs text-gray-500 mt-1 leading-5">
                      <a
                        className="font-medium text-green-500 text-sm"
                        target={"_blank"}
                        rel="noopener noreferrer"
                        href="https://easyfidb.herokuapp.com/#faq-container"
                      >
                        EasyFi Db
                      </a>{" "}
                      is a free image storage solution, that can store you files
                      &amp; images in a secure way, and can be accessed through
                      an url.{" "}
                      <a
                        className="text-green-500"
                        target={"_blank"}
                        rel="noopener noreferrer"
                        href="https://easyfidb.herokuapp.com/#faq-container"
                      >
                        Visit site{" "}
                        <BsIcons.BsChevronRight className="inline-block mt-[1px]" />
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center mt-6">
                  <input
                    type="text"
                    placeholder="Icon image link"
                    className="border py-2 px-4 md:mr-1 mr-0 rounded text-sm bg-transparent w-full focus:border-green-500 outline-none"
                    onChange={(e) => setName(e.target.value)}
                    id=""
                  />
                  <input
                    type="text"
                    placeholder="Cover image link"
                    className="border py-2 px-4 ml-0 md:ml-1 mt-4 md:mt-0 ml-mt-4 rounded text-sm bg-transparent w-full focus:border-green-500 outline-none"
                    onChange={(e) => setName(e.target.value)}
                    id=""
                  />
                </div>

                <input
                  type="text"
                  placeholder="Dyno heading"
                  className="border py-2 mt-4 px-4 rounded text-sm bg-transparent w-full focus:border-green-500 outline-none"
                  onChange={(e) => setName(e.target.value)}
                  id=""
                />
                <input
                  type="text"
                  placeholder="Dyno description"
                  className="border py-2 mt-4 px-4 rounded text-sm bg-transparent w-full focus:border-green-500 outline-none"
                  onChange={(e) => setName(e.target.value)}
                  id=""
                />
                <div className="flex flex-col md:flex-row items-center mt-4">
                  <input
                    type="text"
                    placeholder="Button text"
                    className="border py-2 px-4 mr-0 md:mt-0 md:mr-1 rounded text-sm bg-transparent w-full focus:border-green-500 outline-none"
                    onChange={(e) => setName(e.target.value)}
                    id=""
                  />
                  <input
                    type="text"
                    placeholder="Button link"
                    className="border py-2 px-4 ml-0 md:ml-1 mt-4 md:mt-0 ml-mt-4 rounded text-sm bg-transparent w-full focus:border-green-500 outline-none"
                    onChange={(e) => setName(e.target.value)}
                    id=""
                  />
                </div>
                <div className="flex items-center mt-6">
                  <button
                    onClick={(e) => handleSubmit(e)}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-500 h-fit w-full py-3 rounded mr-1 text-sm"
                  >
                    Generate preview
                  </button>
                  <button
                    onClick={(e) => handleSubmit(e)}
                    className="bg-green-500 hover:bg-green-600 text-white h-fit w-full py-3 rounded ml-1 text-sm"
                  >
                    Publish
                  </button>
                </div>
                <div>
                  <p className="text-sm text-gray-500 rounded-full w-fit py-3 px-4 mx-auto mt-6">
                    Need help?{" "}
                    <a className="text-green-500 font-medium" href="#">
                      Contact us
                    </a>
                  </p>
                </div>
              </div>
            )}
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
