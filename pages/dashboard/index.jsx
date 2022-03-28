import React from "react";
import { useEffect } from "react";
import { matchToken } from "../../contollers/account";
import { useRouter } from "next/router";
function index() {
  const router = useRouter();
  useEffect(async () => {
    const loggedIn = await matchToken();
    loggedIn == true ? null : router.push("/authentication/SignIn");
  }, []);
  return (
    <div>
      <div className="w-full text-center justify-center items-center p-20">
        Logout
      </div>
    </div>
  );
}

export default index;
