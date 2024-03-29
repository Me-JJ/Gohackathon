import React from "react";
import { MicrophoneIcon } from "@heroicons/react/24/solid";
import { Announce_Card } from "./announcement_card";
export default function Announce() {
  return (
    <div className="basis-1/4 mt-40">
      <div className="flex flex-row justify-between items-center hover:scale-105 transition hover:cursor-pointer">
        <h1
          className="text-3xl sm:text-4xl md:text-7xl lg:text-6xl font-extrabold me-5 
        "
        >
          Announcements
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
        >
          <path d="M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z" />
          <path d="M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z" />
        </svg>
      </div>
      <p className="text-xs md:text-md font-light mt-3 mb-5 text-justify">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi modi
        necessitatibus nesciunt cum sed voluptates saepe doloremque magnam fugit
        facilis, deleniti, maxime repellat eveniet architecto
      </p>
      <Announce_Card />
    </div>
  );
}
