import Image from "next/image";
import React from "react";
import img from "../../../public/training.png";
export default function Training() {
  return (
    <div
      className="me-2 p-2 rounded-[30px] bg-gradient-to-br from-cyan-200 to-lime-100 w-1/2 mt-5
    flex flex-col items-center"
    >
      <h1 className="text-2xl font-medium ">Training</h1>
      <Image
        src={img}
        style={{ width: "400px", height: "auto" }}
        alt="Training"
        priority={false}
      />
    </div>
  );
}
