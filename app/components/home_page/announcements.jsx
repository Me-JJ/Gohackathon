import Image from "next/image";
import React from "react";
import hackathon from "../../../public/hackathon.png";
import { MaterialButton } from "../../utils/button";
import { MaterialButton_out } from "../../utils/button";

export default function Announcements() {
  return (
    <div
      className="pt-2 px-5 border bg-gradient-to-tr from-cyan-100
      to-light-green-200  me-2 rounded-[30px] flex flex-col justify-between"
    >
      <div
        id="announcementAndShare"
        className="flex justify-between mb-1 items-center"
      >
        <span className="text-3xl font-medium flex justify-evenly items-center mt-2 me-12">
          Announcements
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="solid"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46"
            />
          </svg> */}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path
            fillRule="evenodd"
            d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className=" rounded-2xl flex flex-col items-center justify-between p-2">
        <Image
          priority={false}
          src={hackathon}
          alt="Hackathon"
          style={{ width: "400px", height: "auto", borderRadius: "30px" }}
          className="mb-3"
        />
        {/* <PurpleToPink text={"Read More"} /> */}
        <MaterialButton_out text={"Read more"} />
      </div>
      <div className="flex justify-around mt-1 mx-5 p-2 mb-5">
        <span id="LeftButton" className="bg-black rounded-lg px-5 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7 text-white font-bold"
          >
            <path
              fillRule="evenodd"
              d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <span
          id="RightButton"
          className="bg-black rounded-lg px-5  text-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7 text-white font-bold"
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
