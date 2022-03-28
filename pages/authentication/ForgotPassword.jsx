import React from "react";
import { useState } from "react";
import * as AiIcons from "react-icons/ai";
import { send2FA } from "../../contollers/account";
function ForgotPassword() {
  const [code, setCode] = useState("");
  const [sentCode, setSentCode] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const sendCode = async (e) => {
    e.preventDefault();
    setLoading(true);
    const resposne = await send2FA(email);
    if (resposne.data.code) {
      setCode(resposne.data.code);
      setCodeSent(true);
      console.log(resposne.data.code);
    }
    setLoading(false);
  };

  const matchCode = async (e) => {
    e.preventDefault();
    if (sentCode == code) {
      alert("Code Matched");
      window.location.reload();
    } else {
      alert("Code not matched");
    }
  };
  return (
    <div className="px-4 flex flex-col justify-center items-center py-[10%]">
      <div className="bg-white w-full lg:w-[500px] rounded-lg p-6 border">
        <div className="flex flex-col">
          <img src="../icons/logo.png" className="h-8 w-8" alt="" />
          <h1 className="text-xl lg:text-2xl font-semibold text-gray-700 mt-4">
            Forgot password ?
          </h1>
          <p className="text-gray-500 text-sm mt-2">
            Dont&apos;t we will help you get back into your account.{" "}
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
          {codeSent == false ? (
            <form
              onSubmit={(e) => sendCode(e)}
              className="flex flex-col w-full"
            >
              <div className="flex flex-col">
                <label className="text-gray-700 text-sm font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter registered email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="w-full py-2 px-3 mt-2 text-sm border border-gray-200 rounded"
                />
                <small className="mt-3 text-gray-500">
                  You will receive a 2FA code in this email.
                </small>
              </div>
              <div className="flex flex-col mt-6">
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
          ) : (
            <form
              onSubmit={(e) => matchCode(e)}
              className="flex flex-col w-full"
            >
              <div className="flex flex-col">
                <label className="text-gray-700 text-sm font-semibold">
                  Code
                </label>
                <input
                  type="text"
                  placeholder="Enter code"
                  onChange={(e) => setSentCode(e.target.value)}
                  value={sentCode}
                  className="w-full py-2 px-3 mt-2 text-sm border border-gray-200 rounded"
                />
                <small className="mt-3 text-gray-500">
                  Enter the code you received in your email.
                </small>
              </div>
              <div className="flex flex-col mt-6">
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
          )}
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

export default ForgotPassword;
