import React from "react";
import Image from "next/image";
import img from "../../../public/coder.png";

export default function Coder() {
  return (
    <div className=" ms-2 p-2 border rounded-[30px] bg-gradient-to-br from-cyan-100 to-lime-100 w-1/2 mt-5">
      <div className="flex flex-col items-center">
        <h1 className="text-xl w-3/4 text-center">
          If you are a coder & want interactive practice & challenge, come visit
          our hackathon!
        </h1>
        <div className="border border-green-100 shadow-lg rounded-full p-10 my-2">
          <Image
            src={img}
            priority={false}
            alt="coder"
            style={{ width: "250px", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}
