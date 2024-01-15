import Image from "next/image";
import React from "react";
import hackathon from "../../public/hackathon.jpeg";
import { PurpleToPink } from "../utils/button";

export default function Announcements() {
  return (
    <div className="p-2 border border-black bg-gradient-to-br from-blue-200 to-green-300 w-1/2 me-2">
      <div id="announcementAndShare" className="flex justify-between mb-1 ">
        <span className="text-xl">Announcements</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="border border-black p-2 flex flex-col items-center">
        <Image priority={false} src={hackathon} alt="Hackathon" />
        <PurpleToPink text={"Read More"} />
      </div>
      <div className="flex justify-end my-2 p-2">
        <span id="LeftButton" className="bg-orange-400 rounded-xl px-2 me-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <span id="RightButton" className="bg-orange-500 rounded-xl px-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}
