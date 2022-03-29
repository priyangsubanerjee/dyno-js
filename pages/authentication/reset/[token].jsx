import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import * as AiIcons from "react-icons/ai";
import { findUserByToken, updatePassword } from "../../../contollers/account";

export async function getServerSideProps(context) {
  const token = context.query.token;
  const account = await findUserByToken(token);
  return {
    props: {
      account,
    },
  };
}

function Reset({ account }) {
  const router = useRouter();
  const [user, setUser] = useState({
    id: account ? account.id : "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (user.password !== user.confirmPassword) {
      setLoading(false);
      return alert("Passwords do not match");
    }
    const response = await updatePassword(user.id, user.password);
    response == true
      ? setLoading(false) &
        alert("Password updated") &
        router.push("/authentication/SignIn")
      : setLoading(false) & alert("Password not updated");
    setLoading(false);
  };
  return (
    <div className="px-4 flex flex-col justify-center items-center pt-[10%]">
      <div className="bg-white w-full lg:w-[500px] rounded-lg p-6 border">
        <div className="flex flex-col">
          <img src="../../icons/logo.png" className="h-8 w-8" alt="" />
          <h1 className="text-xl lg:text-2xl font-semibold text-gray-700 mt-4">
            Set new password
          </h1>
          <p className="text-gray-500 text-sm mt-2">
            Please enter the new password and confirm it.{" "}
            <a
              href="./SignIn"
              className="text-green-500 hover:text-green-600 font-medium"
            >
              Sign in
            </a>
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
                New password
              </label>
              <input
                type="password"
                placeholder={`New password for ${account ? account.email : ""}`}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                value={user.password}
                className="w-full py-2 px-3 mt-2 text-sm border border-gray-200 rounded"
              />
            </div>
            <div className="flex flex-col mt-6">
              <label className="text-gray-700 text-sm font-semibold">
                Confirm password
              </label>
              <input
                type="password"
                placeholder={`Confirm password for ${
                  account ? account.email : ""
                }`}
                onChange={(e) =>
                  setUser({ ...user, confirmPassword: e.target.value })
                }
                value={user.confirmPassword}
                className="w-full py-2 px-3 mt-2 text-sm border border-gray-200 rounded"
              />
            </div>
            <div className="flex flex-col mt-0">
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
        </div>
        <div className="mt-6">
          <p className="text-gray-700 text-sm">Having trouble?</p>
          <p className="text-gray-400 text-xs mt-1 leading-5">
            If you&apos;re having trouble signing in, please contact us{" "}
            <a className="text-green-500" href="">
              here.
            </a>
          </p>
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

export default Reset;
