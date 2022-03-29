import React from "react";

function Details({ dyno, details, setDetails }) {
  return (
    <div>
      {details && (
        <div
          className="fixed top-0 left-0 h-full w-full z-30 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="bg-white flex flex-col w-1/2 min-h-[500px] rounded-md overflow-hidden pb-6">
            <img
              src={dyno.coverImage}
              className="h-36 w-full object-cover"
              alt=""
            />
            <img
              src={dyno.icon}
              className="h-20 rounded-full -mt-8 ml-6 w-20 object-cover"
              alt=""
            />
            <div className="px-6 mt-3 flex flex-col">
              <h1 className="text-3xl font-bold text-gray-700 leading-[1.3]">
                {dyno.heading}
              </h1>
              <p className="text leading-7 mt-3 text-gray-500">
                {dyno.description}
              </p>
              <div className="mt-4">
                <span className="font-semibold text-sm">Dark mode:</span>
                <p className="bg-gray-100 mt-1 whitespace-nowrap text-sm p-2 rounded overflow-x-auto">
                  {
                    '<script defer src="https://dynojs.vercel.app/api/support-ukraine/dark"></script>'
                  }
                </p>
              </div>
              <div className="mt-4">
                <span className="font-semibold text-sm">Light mode:</span>
                <p className="bg-gray-100 mt-1 whitespace-nowrap text-sm p-2 rounded overflow-x-auto">
                  {
                    '<script defer src="https://dynojs.vercel.app/api/support-ukraine/light"></script>'
                  }
                </p>
              </div>
              <button
                onClick={() => setDetails(false)}
                className="py-2 px-4 bg-black text-white rounded mt-6 ml-auto"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
