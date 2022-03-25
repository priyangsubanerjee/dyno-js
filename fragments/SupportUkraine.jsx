import React from "react";
import * as BsIcons from "react-icons/bs";
import Gist from "react-gists";

function SupportUkraine() {
  return (
    <div>
      <div
        id="support-ukraine"
        className="bg-yellow-50 rounded-md m-2 lg:m-6 p-4 lg:p-6"
      >
        <div className="flex items-center border-b border-yellow-400 pb-4">
          <img
            src="./icons/ukraine.png"
            className="h-8 lg:h-10 w-8 lg:w-10"
            alt=""
          />
          <h1 className="text-xl lg:text-2xl font-semibold text-gray-700 ml-2">
            Our response to the war in Ukraine
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row w-full h-full mt-5">
          <div className="flex flex-col w-full">
            <p className="text-gray-500 leading-6 text-sm w-full lg:w-1/2">
              Millions of people have no safe place to call home. More than 2.5
              million have already left Ukraine, while countless more are still
              trapped underground, taking cover from the shelling, and desperate
              for a safe escape.
            </p>
            <div className="mt-6">
              <BsIcons.BsFillCompassFill className="text-3xl text-yellow-400 inline-block" />
              <span className="text-lg lg:text-xl font-semibold ml-2 text-gray-700">
                Made a dyno for the cause.
              </span>
            </div>
            <p className="text-gray-500 w-full lg:w-1/2 text-[14px] leading-6 mt-3 ml-2 lg:mx-8">
              We urge developers to support Ukraine by embedding the following
              code in their projects, which will thereby help to collect funds
              for the campaign hosted by the American Red Cross society.{" "}
              <a className="text-yellow-500 font-medium" href="">
                Read more on Github.
              </a>
            </p>
            <code className="text-sm border bg-blue-50 overflow-auto whitespace-nowrap border-blue-300 px-3 py-3 rounded-md mt-5">
              &lt;head&gt; <br />
              &nbsp;&lt;script defer
              src="https://dynojs.vercel.app/api/support-ukraine/light"&gt;
              &lt;/script&gt; <br />
              &lt;/head&gt;
            </code>
            <a
              className="flex items-center text-gray-500 hover:text-black text-sm mt-6 w-fit transition-all"
              href=""
            >
              <span className="border-b">
                Implementation for other frameworks
              </span>
              <BsIcons.BsChevronRight className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportUkraine;
