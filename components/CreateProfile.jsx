import React from "react";
import * as HiIcons from "react-icons/hi";
import * as VscIcons from "react-icons/vsc";
import { useState, useEffect } from "react";
import User from "../user/User";

function CreateProfile({ createProfileActive, setCreateProfileActive }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setEmail(user.email);
      setName(user.name);
    }
  }, []);

  console.log(createProfileActive);

  const handleSubmit = (e) => {
    e.preventDefault();
    const new_user = new User(name, email);
    new_user.save();
    setCreateProfileActive(false);
  };
  return (
    <div>
      {createProfileActive ? (
        <div
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          className="fixed top-0 left-0 w-full h-full flex m-0 p-0"
        >
          <div className="bg-white rounded-t-lg md:rounded-lg p-4 mt-auto md:max-w-[500px] h-auto lg:max-h-[540px] overflow-y-auto md:m-auto w-full">
            <div className="p-4 w-full flex flex-col justify-center  rounded-md">
              <div className="flex flex-col items-center justify-center">
                <VscIcons.VscAccount className="text-2xl text-green-500 mr-2" />
                <h1 className="text-xl font-semibold ml-2 mt-2">
                  {name !== "" ? "Update" : "Create"} profile
                </h1>
              </div>
              <p className="text-center text-gray-500 text-sm mt-2">
                Enter your recovery details correctly.
              </p>
              <hr className="mt-4" />
              <input
                type="text"
                placeholder="Enter your name"
                className="border py-2 mt-6 px-4 bg-transparent w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id=""
              />
              <input
                type="text"
                placeholder="Enter your email"
                className="border py-2 px-4 mt-3 bg-transparent w-full"
                name=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id=""
              />
              <button
                onClick={(e) => handleSubmit(e)}
                className="bg-green-500 hover:bg-green-600 text-white h-fit w-full mt-6 py-3 rounded-full text-sm"
              >
                Complete
              </button>
              <span
                className="text-gray-400 mx-auto block text-sm mt-4 cursor-pointer"
                onClick={() => setCreateProfileActive(false)}
              >
                Cancel
              </span>
              <p className="mt-6 text-sm lg:text-xs text-gray-500 lg:leading-6 leading-6">
                Note: We use cookies to store your personal details, none of the
                above data are sent to our servers except your email.
              </p>
              <div>
                <p className="text-sm text-gray-500 rounded-full w-fit py-3 px-4 mx-auto mt-6">
                  Need help?{" "}
                  <a className="text-green-500 font-medium" href="#">
                    Contact us
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default CreateProfile;
