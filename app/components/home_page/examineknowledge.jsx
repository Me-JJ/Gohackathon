import React from "react";
import Image from "next/image";
import quiz from "../../../public/quiz.png";

export default function Examine() {
  return (
    <div
      className="me-2 py-4 bg-gradient-to-tr from-cyan-100
    to-lime-100 mt-5 text-center w-1/2 rounded-[30px] "
    >
      <div className="flex flex-col items-center">
        <h1 className="text-2xl">Examine your knowledge</h1>
        {/* <p className="text-lg my-auto p-5">
           </p> */}
        <div
          className="shadow-xl rounded-full p-5 
          bg-gradient-to-tr from-cyan-100 to-lime-100 mt-2"
        >
          {/* #BFF098 → #6FD6FF */}
          <Image
            src={quiz}
            priority={false}
            alt="quiz"
            style={{ width: "200px", height: "auto" }}
          />
        </div>
      </div>
      <div className="flex justify-between font-medium">
        {/* implement Button Texture */}
        <div
          className="rounded-[30px] p-3 ms-10 shadow-md 
        hover:bg-gradient-to-bl from-lime-100 to-cyan-100"
        >
          Daily Practice
        </div>
        <div
          className=" rounded-[30px] p-3 me-10 shadow-md 
         hover:bg-gradient-to-bl from-lime-100 to-cyan-100"
        >
          Monthly Practice
        </div>
      </div>
    </div>
  );
}
