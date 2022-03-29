import Link from "next/link";
import React from "react";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { createAccount, matchToken, loginUser } from "../../contollers/account";
import { getCurrentUser } from "../../models/User";
import * as AiIcons from "react-icons/ai";
import Toast from "../../alerts/Toast";

function SIgnIn() {
  const router = useRouter();
  const [toast, setToast] = useState({
    show: false,
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  useEffect(async () => {
    setLoading(true);
    const loggedIn = await matchToken();
    loggedIn == true
      ? router.push("/dashboard") & setLoading(false)
      : setLoading(false);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (user.email.length > 0 && user.password.length > 0) {
      const response = await loginUser(user.email, user.password);
      response == true
        ? setToast({
            show: true,
            message: "Login Successful",
          }) &
          router.push("/dashboard") &
          setLoading(false)
        : setToast({
            show: true,
            message: "Login failed",
          }) & setLoading(false);
    } else {
      alert("Please fill all fields");
      setLoading(false);
    }
  };
  return (
    <div className="px-4 flex flex-col justify-center items-center pt-[10%]">
      <Head>
        <title>
          Sign In | Create responsive &amp; embeddable cards, with no code, for
          your project.
        </title>
      </Head>
      <div className="bg-white w-full lg:w-[500px] rounded-lg p-6 border">
        <div className="flex flex-col">
          <img src="../icons/logo.png" className="h-8 w-8" alt="" />
          <h1 className="text-xl lg:text-2xl font-semibold text-gray-700 mt-4">
            Sign in.
          </h1>
          <p className="text-gray-500 text-sm mt-2">
            Dont have an account?{" "}
            <Link href={`/authentication/SignUp`}>
              <a className="text-green-500 hover:text-green-600 font-medium">
                Sign up
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
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                value={user.email}
                placeholder="Enter your registered email"
                className="w-full py-2 px-3 mt-2 text-sm border border-gray-200 rounded"
              />
            </div>
            <div className="flex flex-col mt-4">
              <label className="text-gray-700 text-sm font-semibold">
                Password
              </label>
              <input
                type="password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                value={user.password}
                placeholder="Enter your password"
                className="w-full py-2 px-3 mt-2 text-sm border border-gray-200 rounded"
              />
              <button
                type="submit"
                id=""
                className="bg-green-500 flex justify-center items-center hover:bg-green-600 cursor-pointer transition-all text-white mt-8 text-sm py-3 px-4 w-full rounded"
              >
                <span>
                  {loading ? (
                    <AiIcons.AiOutlineLoading3Quarters className="textw-white animate-spin text-xl" />
                  ) : (
                    "Submit"
                  )}
                </span>
              </button>
            </div>
          </form>
          <Link href={`/authentication/ForgotPassword`}>
            <a className="text-gray-500 mt-6 text-sm">Forgot Password ?</a>
          </Link>
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
      <Toast setToast={setToast} toast={toast} />
    </div>
  );
}

export default SIgnIn;
