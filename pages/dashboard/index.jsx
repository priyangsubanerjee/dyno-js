import React from "react";
import { useEffect } from "react";
import { matchToken, logOut } from "../../contollers/account";
import { useRouter } from "next/router";
function Dashboard() {
  const router = useRouter();
  useEffect(async () => {
    const loggedIn = await matchToken();
    loggedIn == true ? null : router.push("/authentication/SignIn");
  }, []);

  const handleLogout = async () => {
    console.log("logout");
    const loggedOut = await logOut();
    loggedOut == true ? router.push("/authentication/SignIn") : null;
  };
  return (
    <div>
      <div className="w-full text-center justify-center items-center p-20">
        <span className="cursor-pointer" onClick={() => handleLogout()}>
          Logout
        </span>
      </div>
    </div>
  );
}

export default Dashboard;
