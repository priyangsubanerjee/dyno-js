import React from "react";
import uploadFile from "../db/uploadFile";
import uploadFileLink from "../db/uploadFileLink";
import publishFile from "../db/publishFile";
import { useState } from "react";

function UploadAsset() {
  const [upload_mode, set_upload_mode] = useState("file");
  const [upload_url, set_upload_url] = useState("");
  const [upload_file, set_upload_file] = useState("");

  const openFileDialog = () => {
    const fileInput = document.getElementById("file-input");
    fileInput.click();
    fileInput.onchange = async (e) => {
      const file = e.target.files[0];
      set_upload_file(file);
      document.getElementById("file-input").value = "";
      document.getElementById("file-name").innerText = file.name;
      document.getElementById("file-preview").src = URL.createObjectURL(file);
    };
  };

  const uploadFileHandler = async () => {
    if (upload_mode === "file") {
      const file = upload_file;
      const response = await uploadFile(file);
      console.log(response);
    } else {
      const url = upload_url;
      const response = await uploadFileLink(url);
      console.log(response);
    }
  };

  return (
    <div>
      <div
        className="fixed top-0 left-0 w-full h-full flex"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        <div className="w-[530px] bg-white rounded-md m-auto">
          <div className="flex w-full justify-center mt-6">
            <ul className="flex items-center bg-gray-100 px-1 py-1 rounded-md">
              <li
                className="text-[13px] mr-1 text-gray-500 py-1 px-2 rounded transition-all cursor-pointer"
                onClick={() => set_upload_mode("file")}
                style={{
                  backgroundColor:
                    upload_mode == "file" ? "white" : "transparent",
                }}
              >
                Upload from device
              </li>
              <li
                className="text-[13px] ml-1 text-gray-500 py-1 px-2 rounded transition-all cursor-pointer"
                onClick={() => set_upload_mode("link")}
                style={{
                  backgroundColor:
                    upload_mode == "link" ? "white" : "transparent",
                }}
              >
                Upload from link
              </li>
            </ul>
          </div>
          <hr className="mt-4" />
          <div className="p-6">
            {upload_mode == "file" ? (
              <>
                <div
                  onClick={() => openFileDialog()}
                  className="bg-gray-50 py-6 h-[270px] flex flex-col items-center justify-center rounded-md overflow-hidden cursor-pointer"
                >
                  <img
                    src="./icons/upload.png"
                    id="file-preview"
                    className="h-16"
                    alt=""
                  />
                  <span id="file-name" className="text-sm text-gray-500 mt-4">
                    Click here to choose file
                  </span>
                  <input hidden type="file" id="file-input" />
                </div>{" "}
              </>
            ) : (
              <>
                <div className="w-full h-[270px] bg-gray-50 flex flex-col items-center justify-center">
                  <img src="./icons/broken-link.png" className="h-16" alt="" />
                  <input
                    type="text"
                    value={upload_url}
                    onChange={(e) => set_upload_url(e.target.value)}
                    placeholder="Paste image link"
                    className="w-[90%] mt-10 bg-transparent px-0 border-b border-gray-300 overflow-x-auto outline-none"
                  />
                </div>
              </>
            )}
            <div className="flex items-center mt-8">
              <button className="py-2 px-10 bg-gray-100 hover:bg-gray-200 text-gray-500 flex justify-center w-full mr-1 rounded">
                Cancel
              </button>
              <button
                onClick={() => uploadFileHandler()}
                className="py-2 px-10 border border-green-500 hover:bg-green-500 text-green-500 hover:text-white flex justify-center w-full ml-1 rounded"
              >
                Start upload
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadAsset;
