import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import {
  createAccount,
  loginAccount,
  checkIfLoggedIn,
} from "../../controllers/account";
import { User } from "../../user/User";
import { useRouter } from "next/router";

function SignUp() {
  const router = useRouter();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("trying..");
      const res = await createAccount(user.email, user.password);
      res == true
        ? router.push("/dashboard")
        : alert("error creating account, this email is already in use");
    } catch (error) {
      console.log(error);
      const error_msg = error.message.split(":")[0];
      if (error_msg === `value is not unique for the field "email"`) {
        alert("User already exists");
      }
    }
  };

  useEffect(async () => {
    const response = await checkIfLoggedIn();
    response == true ? router.push("/dashboard") : null;
  }, []);

  return (
    <div className="px-6 flex flex-col justify-center items-center pt-[10%]">
      <div className="bg-white w-full lg:w-[500px] rounded-lg p-6 border">
        <div className="flex flex-col">
          <img src="../icons/logo.png" className="h-8 w-8" alt="" />
          <h1 className="text-xl lg:text-2xl font-semibold text-gray-700 mt-4">
            Sign Up.
          </h1>
          <p className="text-gray-500 text-sm mt-2">
            Already have an account?{" "}
            <Link href={`/main/SignIn`}>
              <a className="text-green-500 hover:text-green-600 font-medium">
                Sign in
              </a>
            </Link>
          </p>
          <hr className="mt-4" />
        </div>
        <div className="mt-6 flex flex-col items-center">
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-col w-full"
          >
            <div className="flex flex-col">
              <label className="text-gray-700 text-sm font-semibold">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                className="w-full py-2 px-3 mt-2 text-sm border border-gray-200 rounded"
              />
            </div>
            <div className="flex flex-col mt-4">
              <label className="text-gray-700 text-sm font-semibold">
                Password
              </label>
              <input
                type="password"
                placeholder="Set a password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                className="w-full py-2 px-3 mt-2 text-sm border border-gray-200 rounded"
              />
              <input
                type="submit"
                value={`Sign up`}
                name=""
                id=""
                className="bg-green-500 hover:bg-green-600 cursor-pointer transition-all text-white mt-8 text-sm py-3 px-4 w-full rounded"
              />
            </div>
          </form>
          <div className="mt-6">
            <p className="text-sm">Cookiee Policy</p>
            <p className="text-xs text-gray-500 mt-1 leading-5">
              We run a cookie policy to ensure that we give you the best
              experience on our website.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <ul className="flex">
          <li className="text-sm text-gray-400 mx-3">Home</li>
          <li className="text-sm text-gray-400 mx-3">About</li>
          <li className="text-sm text-gray-400 mx-3">Partners</li>
          <li className="text-sm text-gray-400 mx-3">Support Ukraine</li>
        </ul>
      </div>
      <div className="fixed top-0 left-0 w-full h-1/2 bg-gray-100 border-b border-gray-200 -z-10"></div>
    </div>
  );
}

export default SignUp;
