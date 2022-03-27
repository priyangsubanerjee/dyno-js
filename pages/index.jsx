import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/icons/logo.png";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
export default function Home() {
  return (
    <div>
      <Head>
        <script defer src="/api/support-ukraine/dark"></script>
        <title>Home | Dyno JS</title>
      </Head>
      <div className="flex items-center px-8 py-4 border-b">
        <div className="flex items-center">
          <div className="w-10 h-10 relative">
            <Image
              src={logo}
              layout={"fill"}
              objectFit={"contain"}
              objectPosition={"center"}
            />
          </div>
          <div className="ml-3">
            <h1 className="text-xl font-bold">Dyno JS</h1>
            <p className="text-sm text-gray-500">Embeddable cards</p>
          </div>
        </div>
        <ul className="flex items-center ml-auto">
          <li className="mx-3 text-sm text-gray-500 cursor-pointer">Home</li>
          <li className="mx-3 text-sm text-gray-500 cursor-pointer">Blog</li>
          <li className="mx-3 text-sm text-gray-500 cursor-pointer">
            Documentaion
          </li>
          <li className="mx-3 cursor-pointer">
            <Link href="/main/SignIn">
              <a className="px-8 py-3 text-white bg-green-500 hover:bg-green-600 transition-all rounded-full text-sm">
                Sign in
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="px-48 mt-20">
        <div className="flex items-center justify-center">
          <div className="mr-6">
            <h1 className="text-4xl font-bold leading-[1.4] text-gray-800">
              Create <span className="text-green-500">responsive</span> &amp;
              embeddable cards, with{" "}
              <span className="border-b pb-[1px]">no code</span>, for your
              project.
            </h1>
            <p className="text leading-8 mt-6 text-gray-500">
              Dyno Js is a dynmaically typed javascripted generated code
              injection system system, that allows you to create jaw dropping
              dynamic content with no code. It is a simple, fast and easy to
              use, and it is free.
            </p>
            <div className="flex items-center mt-8">
              <Link href="/main/SignIn">
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
            className="h-[500px] ml-6"
            alt=""
          />
        </div>
        <hr className="my-28" />
        <div className="gap-8 grid grid-cols-2">
          <div className="w-full bg-gradient-to-tr border flex flex-col p-8 mb-16 rounded-xl">
            <div className="flex items-center">
              <BsIcons.BsStars className="text-green-500 text-2xl" />
              <span className="text-black ml-2 text-xs">Featured</span>
            </div>
            <h1 className="text-3xl font-bold mt-4 leading-[1.3]">
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
          <div className="w-full bg-gradient-to-tr border flex flex-col p-8 mb-16 rounded-xl">
            <div className="flex items-center">
              <BsIcons.BsStars className="text-green-500 text-2xl" />
              <span className="text-black ml-2 text-xs">Featured</span>
            </div>
            <h1 className="text-3xl font-bold mt-4 leading-[1.3]">
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
      <div className="mt-10 bg-gray-50 p-8">
        <ul className="flex justify-center">
          <li className="text-sm text-gray-500 mx-3">Home</li>
          <li className="text-sm text-gray-500 mx-3">Blogs</li>
          <li className="text-sm text-gray-500 mx-3">Partners</li>
          <li className="text-sm text-gray-500 mx-3">Support Ukraine</li>
        </ul>
      </div>
    </div>
  );
}
