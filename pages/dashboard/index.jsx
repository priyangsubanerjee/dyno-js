import React from "react";
import { useEffect, useState } from "react";
import { matchToken, logOut } from "../../contollers/account";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/icons/logo.png";
import war from "../../public/screenshots/war.jpg";
import { getCurrentUser } from "../../models/User";
import Toast from "../../alerts/Toast";
import DynoCard from "../../components/DynoCard";
import { getDynos } from "../../contollers/dyno";

function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [myDynos, setMyDynos] = useState([]);
  const [featuredDynos, setFeaturedDynos] = useState([]);
  const [dynoMode, setDynoMode] = useState("all");
  const [toast, setToast] = useState({
    show: false,
    message: "",
  });
  useEffect(async () => {
    const loggedIn = await matchToken();
    loggedIn == true ? null : router.push("/authentication/SignIn");
    const user = await getCurrentUser();
    const myDynos = await getDynos();
    setMyDynos(myDynos.dynos);
    setUser(user);
  }, []);

  const handleLogout = async () => {
    console.log("logout");
    const loggedOut = await logOut();
    loggedOut == true ? router.push("/authentication/SignIn") : null;
  };
  return (
    <div>
      {user !== null && (
        <div>
          <div className="flex items-center px-4 lg:px-8 py-4 border-b">
            <div className="relative group flex items-center cursor-pointer">
              <div
                onClick={() =>
                  setToast({
                    show: true,
                    message: "Profile page coming soon",
                  })
                }
                className="flex items-center cursor-pointer z-20"
              >
                <div className="w-10 h-10 relative">
                  <Image
                    src={logo}
                    layout={"fill"}
                    objectFit={"contain"}
                    objectPosition={"center"}
                  />
                </div>
                <div className="ml-3">
                  <p className="text-xs text-gray-500">Good morning,</p>
                  <h1 className="text font-bold">
                    {user.getEmail().split("@")[0]}
                  </h1>
                </div>
              </div>
              <div className="group-hover:flex hidden absolute top-0 left-0 w-48 z-10">
                <div className="flex h-full w-full bg-white border mt-14">
                  <ul className="flex flex-col w-full">
                    <li
                      onClick={() => handleLogout()}
                      className="flex w-full p-3 border-b text-sm text-gray-500 hover:bg-gray-50 transition-all"
                    >
                      Logout
                    </li>
                    <li className="flex w-full p-3 border-b text-sm text-gray-500 hover:bg-gray-50 transition-all">
                      Contact us
                    </li>
                    <li className="flex w-full p-3 text-sm text-gray-500">
                      F.A.Q
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <ul className="hidden lg:flex items-center ml-auto">
              <li className="mx-3 text-sm text-gray-500 cursor-pointer">
                Blog
              </li>
              <li className="mx-3 text-sm text-gray-500 cursor-pointer">
                Documentaion
              </li>
              <li className="mx-3 cursor-pointer">
                <Link href="/authentication/SignIn">
                  <a className="px-6 py-3 text-white bg-green-500 hover:bg-green-600 transition-all rounded-full text-sm">
                    Create new
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="px-10 py-6">
            <ul className="flex items-center select-none">
              <li
                style={{ opacity: dynoMode == "all" ? "1" : "0.3" }}
                onClick={() => setDynoMode("all")}
                className="text-2xl font-bold text-gray-700 border-b w-fit px-3 pb-2 cursor-pointer"
              >
                Your&apos;s
              </li>
              <li
                style={{ opacity: dynoMode == "featured" ? "1" : "0.3" }}
                onClick={() => setDynoMode("featured")}
                className="text-2xl ml-5 font-bold text-gray-700 border-b w-fit px-3 pb-2 cursor-pointer"
              >
                Featured
              </li>
            </ul>
            <div className="mt-10 grid grid-cols-4 gap-8">
              {myDynos.length > 0 &&
                myDynos.map((dyno, index) => {
                  return (
                    <DynoCard
                      key={index}
                      dyno={dyno}
                      myDynos={myDynos}
                      setMyDynos={setMyDynos}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      )}
      <Toast toast={toast} setToast={setToast} />
    </div>
  );
}

export default Dashboard;
