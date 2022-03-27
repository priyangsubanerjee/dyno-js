import Link from "next/link";
import React from "react";

function SignUp() {
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
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col w-full"
          >
            <div className="flex flex-col">
              <label className="text-gray-700 text-sm font-semibold">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
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
