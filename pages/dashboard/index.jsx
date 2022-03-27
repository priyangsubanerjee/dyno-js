import React from "react";
import { getCurrentUser } from "../../user/User";
import { useState, useEffect } from "react";
import logo from "../../public/icons/logo.png";
import Image from "next/image";
import { getSalutation } from "../../helpers/dateTime";
import { useRouter } from "next/router";
function Dashboard() {
  const router = useRouter();
  const [filter, setFilter] = useState("All");
  const [user, setUser] = useState(null);
  useEffect(() => {
    const currentUser = getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/main/SignIn");
  };
  return (
    <div>
      <div className="flex items-center px-8 py-4 border-b">
        <div className="flex items-center">
          <div className="w-10 h-10 relative group cursor-pointer">
            <Image
              src={logo}
              layout={"fill"}
              objectFit={"contain"}
              objectPosition={"center"}
            />
            <div className="w-48 hover:flex bg-transparent group-hover:flex hidden z-20 overflow-hidden absolute top-0 left-0 pt-12">
              <div className="h-full w-full bg-white overflow-hidden rounded border">
                <ul>
                  <li className="px-3 py-3 border-b text-sm text-gray-500 hover:bg-gray-100">
                    Profile
                  </li>
                  <li className="p-3 py-3 border-b text-sm text-gray-500 hover:bg-gray-100">
                    Settings
                  </li>
                  <li
                    onClick={() => handleLogout()}
                    className="p-3 py-3 text-sm text-gray-500 hover:bg-gray-100"
                  >
                    Log out
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="ml-3">
            <p className="text-sm text-gray-500">{getSalutation()}</p>
            <h1 className="text-base font-semibold">
              {user ? (user.name ? user.name : "Guest") : "Guest"}
            </h1>
          </div>
        </div>
        <div className="ml-auto bg-gray-100 px-4 w-86 py-2 rounded mr-6">
          <input
            type="text"
            className="bg-transparent text-sm outline-none"
            placeholder="Search market place.."
          />
        </div>
        <ul className="flex items-center">
          <li className="mx-3 text-sm text-gray-500 cursor-pointer">Home</li>
          <li className="mx-3 text-sm text-gray-500 cursor-pointer">Blog</li>
          <li className="mx-3 text-sm text-gray-500 cursor-pointer">
            Documentaion
          </li>
        </ul>
        <button className="px-5 py-3 text-white font-medium flex text-sm ml-4 bg-green-500 hover:bg-green-600 transition-all rounded-full">
          Create new
        </button>
      </div>
      <div className="p-8">
        <div className="flex items-center overflow-x-auto select-none">
          <h1
            className="text-xl font-bold border-b w-fit pb-2 cursor-pointer"
            style={{ opacity: filter == "All" ? "1" : "0.3" }}
            onClick={() => setFilter("All")}
          >
            All
          </h1>
          <h1
            className="text-xl font-bold border-b w-fit pb-2 ml-8 cursor-pointer"
            style={{ opacity: filter == "Pinned" ? "1" : "0.3" }}
            onClick={() => setFilter("Pinned")}
          >
            Pinned
          </h1>
          <h1
            className="text-xl font-bold border-b w-fit pb-2 ml-8 cursor-pointer"
            style={{ opacity: filter == "Featured" ? "1" : "0.3" }}
            onClick={() => setFilter("Featured")}
          >
            Featured
          </h1>
        </div>
        <div className="grid grid-cols-4 mt-8">
          <div className="h-86 w-[330px] border rounded-md overflow-hidden hover:shadow-xl hover:shadow-gray-100 transition-all">
            <div className="relative">
              <img
                src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2022-02/ukraine-crisis-mc-220225-11a-62c352.jpg"
                alt=""
                className="w-full h-28 object-cover"
              />
              <img
                src="https://easyfidb.herokuapp.com/icons/database.png"
                alt=""
                className="h-10 w-10 object-contain absolute z-20 top-24 left-5 bg-white rounded-md"
              />
            </div>
            <div className="px-3 py-4 mt-4">
              <h1 className="text-lg font-bold text-gray-800 left-5">
                The crisis in Ukraine keeps unfolding - please donate.
              </h1>
              <p className="text-xs text-gray-500 mt-2 leading-5">
                Millions of people have no safe place to call home. More than
                2.5 million have already left Ukraine, while countless more are
                still trapped underground, taking cover from the shelling, and
                desperate for a safe escape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
