import React from "react";

export default function Webinar() {
  return (
    <div className="border border-black p-5 mt-5 bg-gradient-to-br from-blue-200 to-green-300">
      <div className="flex justify-evenly">
        <div className="w-1/2 p-5 border border-black">IMAGE</div>
        <div className="flex flex-col items-center">
          <div className="w-1/2 text-center ">
            Follow up our regular webinars and get insights of industry related
            work with our top industry experts
          </div>
          {/* implement button  */}
          <div>Load More...</div>
        </div>
      </div>
    </div>
  );
}
