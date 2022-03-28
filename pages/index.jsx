import Head from "next/head";
import Link from "next/link";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import Topnav from "../components/Topnav";
import { useEffect } from "react";
import { encrypt, decrypt } from "../crypto";

export default function Home() {
  useEffect(() => {}, []);

  return (
    <div>
      <Head>
        <script defer src="/api/support-ukraine/dark"></script>
        <title>Home | Dyno JS</title>
      </Head>
      <Topnav />
      <div className="px-4 lg:px-48 mt-8 lg:mt-20">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="mr-0 lg:mr-6">
            <h1 className="text-3xl lg:text-4xl font-bold leading-[1.4] text-gray-800">
              Create <span className="text-green-500">responsive</span> &amp;
              embeddable cards, with{" "}
              <span className="border-b pb-[1px]">no code</span>, for your
              project.
            </h1>
            <p className="text leading-7 lg:leading-8 mt-6 text-gray-500">
              Dyno Js is a dynmaically typed javascripted generated code
              injection system system, that allows you to create jaw dropping
              dynamic content with no code. It is a simple, fast and easy to
              use, and it is free.
            </p>
            <div className="flex items-center mt-8">
              <Link href="/authentication/SignIn">
                <a className="px-10 block w-fit bg-green-500 hover:bg-green-600 py-3 text-white rounded-full transition-all">
                  Sign In
                </a>
              </Link>
              <a href="" className="ml-4 text-gray-500">
                It&apos;s free.
              </a>
            </div>
          </div>
          <img
            src="./screenshots/dynoCard.png"
            className="w-full lg:w-auto lg:h-[500px] ml-0 mt-12 lg:mt-0 lg:ml-6"
            alt=""
          />
        </div>
        <hr className="my-16 lg:my-28" />
        <div className="gap-8 grid grid-cols-1 lg:grid-cols-2">
          <div className="w-full border my-3 lg:my-0 flex flex-col p-4 lg:p-8 rounded-xl">
            <div className="flex items-center">
              <BsIcons.BsStars className="text-green-500 text-2xl" />
              <span className="text-black ml-2 text-xs">Featured</span>
            </div>
            <h1 className="text-2xl lg:text-3xl font-bold mt-4 leading-[1.3]">
              Our response towards the war in Ukraine.
            </h1>
            <p className="mt-3 mb-6 text-gray-500 text-sm leading-6">
              Millions of people have no safe place to call home. More than 2.5
              million have already left Ukraine, while countless more are still
              trapped underground, taking cover from the shelling, and desperate
              for a safe escape.
            </p>
            <div className="flex items-center mt-auto justify-end">
              <div className="flex items-center border-b w-fit pb-1 cursor-pointer">
                <span className="text-sm">Continue</span>
                <FaIcons.FaArrowCircleRight className="ml-2 text-lg" />
              </div>
            </div>
          </div>
          <div className="w-full border my-3 lg:my-0 flex flex-col p-4 lg:p-8 rounded-xl">
            <div className="flex items-center">
              <BsIcons.BsStars className="text-green-500 text-2xl" />
              <span className="text-black ml-2 text-xs">Featured</span>
            </div>
            <h1 className="text-2xl lg:text-3xl font-bold mt-4 leading-[1.3]">
              Save green! Save life!
            </h1>
            <p className="mt-3 mb-6 text-gray-500 text-sm leading-6">
              Deforestation, pollution and industrialization are responsible for
              poisoning and killing of our natural resources at astonishing
              rates. I&apos;m sure you&apos;ve asked yourself: What can I do?
              How can I put an end to this? Simple, you can plant a seed of
              Life. Beyond signing this petition, you can help the environment
              in countless ways.
            </p>
            <div className="flex items-center mt-auto justify-end">
              <div className="flex items-center border-b w-fit pb-1 cursor-pointer">
                <span className="text-sm">Continue</span>
                <FaIcons.FaArrowCircleRight className="ml-2 text-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 lg:mt-24 bg-gray-50 p-8">
        <ul className="flex justify-center overflow-x-auto whitespace-nowrap">
          <li className="text-sm text-gray-500 mx-2 lg:mx-3">Home</li>
          <li className="text-sm text-gray-500 mx-2 lg:mx-3">Blogs</li>
          <li className="text-sm text-gray-500 mx-2 lg:mx-3">Partners</li>
          <li className="text-sm text-gray-500 mx-2 lg:mx-3">
            Support Ukraine
          </li>
        </ul>
      </div>
    </div>
  );
}
