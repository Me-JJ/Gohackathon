import Image from "next/image";
import React from "react";
import webinar from "../../../public/webinar.png";

export default function Webinar() {
  return (
    <div
      className="rounded-[30px] p-3 mt-5 bg-gradient-to-tr from-cyan-100 to-lime-100 
      flex justify-evenly items-center"
    >
      <Image
        src={webinar}
        priority={false}
        alt="webinar"
        style={{ width: "400px", height: "auto" }}
      />
      <div className="flex flex-col items-center">
        <div className="w-[400px] text-center font-medium text-xl">
          Follow up our regular webinars and get insights of industry related
          work with our top industry experts
        </div>
        {/* implement button  */}
        <div
          className="italic font-light mt-5 shadow-md rounded-full p-2 
          hover:bg-gradient-to-br from-lime-100 to-cyan-100 "
        >
          Load More...
        </div>
      </div>
    </div>
  );
}
