import React from "react";

function Topnav() {
  return (
    <div>
      <div class="hidden lg:flex items-center border-b py-2 px-6">
        <div class="flex items-center">
          <img src="./icons/logo.png" alt="logo" class="h-8 w-8" />
          <div class="ml-2">
            <h1 class="text-black text-xl font-bold">Dyno Js</h1>
            <p class="text-gray-500 text-xs">Plugins made easy.</p>
          </div>
        </div>
        <div class="text-xs rounded-full border border-green-500 bg-green-50 py-1 px-2 text-green-500 ml-6">
          What's new in v6.0.0?
        </div>
        <ul class="flex items-center ml-auto">
          <li class="text-sm text-gray-500 ml-6">
            <a href="">Documentation</a>
          </li>
          <li class="text-sm text-gray-500 ml-6">
            <a href="">Market</a>
          </li>
          <li class="text-sm text-gray-500 ml-6">
            <a href="">Support</a>
          </li>
        </ul>
        <button class="bg-green-500 hover:bg-green-600 text-white h-fit py-2 px-4 rounded-full text-sm ml-6">
          Create new
        </button>
      </div>
    </div>
  );
}

export default Topnav;
