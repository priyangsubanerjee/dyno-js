import React from "react";

function About() {
  return (
    <div>
      <div className="bg-gray-50 rounded-md m-2 lg:m-6 p-4 lg:p-6">
        <div className="flex items-center border-b pb-4">
          <img src="./icons/option.png" className="h-6 w-6" alt="" />
          <h1 className="text-2xl font-semibold text-gray-700 ml-2">About</h1>
        </div>
        <div className="flex flex-col lg:flex-row w-full h-full mt-5">
          <div className="flex flex-col w-full lg:w-1/2">
            <p className="text-gray-600 leading-6 lg:leading-7 text-sm lg:text-base">
              Dyno Js is a free and open-sourced dynamically typed javascript
              tool, that allows you to embed dynos into your webpage. These
              dynoa&apos;s can be anything that holds a cause. It can be a
              donation link, a pinned topic or may be an appeal to your audience
              for a petetion.
            </p>
            <div className="flex items-center mt-6">
              <img
                src="./icons/code.png"
                className="h-6 lg:h-8 w-6 lg:w-8"
                alt=""
              />
              <h2 className="text-lg lg:text-xl font-bold ml-2 text-gray-700">
                If your are a developer
              </h2>
            </div>
            <p className="text-gray-500 text-[14px] leading-6 mt-3 mx-4 lg:mx-8">
              and have worked on HTML project&apos;s then you must have noticed
              how a script tag works? Right? Yeah you use it to extablish a link
              between your HTML and Javascript code. Similarly you will get an
              url for each an every Dyno you wanna embed, and need to put that
              url inside a script tag with a defer attribute.{" "}
              <a
                className="text-green-500 font-medium border-b border-green-500"
                href="./documentation"
              >
                View documentation
              </a>
            </p>
            <div className="flex items-center mt-6">
              <img
                src="./icons/hand-shake.png"
                className="h-6 lg:h-8 w-6 lg:w-8"
                alt=""
              />
              <h2 className="text-lg lg:text-xl font-bold ml-2 text-gray-700">
                Not a developer? We still have you onboard.
              </h2>
            </div>
            <p className="text-gray-500 text-[14px] leading-6 mt-3 mx-4 lg:mx-8">
              may be you own a business or you&apos;ve started a donation
              campaign for some cause, we are here to help you! Wanna know how?
              See the mentioned use cases:
            </p>
            <ul className="list-disc">
              <li className="text-gray-500 text-[14px] leading-6 mt-3 mx-8 lg:mx-12">
                If you have a business, you can create adverstisements with Dyno
                and embed them across your business domains.
              </li>
              <li className="text-gray-500 text-[14px] leading-6 mt-3 mx-8 lg:mx-12">
                If you have started a petetion or a donation for a social cause,
                you can share it among a large community of developers, and
                appeal them to emabed your Dyno to their project with just an
                url!{" "}
                <a
                  className="text-green-500 font-medium border-b border-green-500"
                  href=""
                >
                  Doesn't that sound super cool?
                </a>
              </li>
            </ul>
            <button className="bg-green-500 hover:bg-green-600 text-white h-fit py-3 px-4 rounded-full text-sm mt-6">
              Create new
            </button>
          </div>
          <div className="flex justify-center items-center mt-8 lg:mt-0 w-full lg:w-1/2">
            <img
              src="./screenshots/dynoCard.png"
              className="h-full max-h-[500px] hover:scale-105 transition-all cursor-pointer"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
