import React from "react";
import Webinar_card from "./coding_card";

export default function Webinar_() {
  return (
    <div className="my-40 flex flex-col items-center">
      <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-10">
        Compete with others!
      </h1>
      <Webinar_card />
    </div>
  );
}
