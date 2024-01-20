import Image from "next/image";
import React from "react";
import img from "../../../public/job.png";
export default function Jobs() {
  return (
    <div
      className="ms-2 p-2 rounded-[30px] bg-gradient-to-br from-cyan-200 to-lime-100 w-1/2 mt-5
    flex flex-col items-center"
    >
      <h1 className="text-2xl font-medium ">Jobs</h1>
      <Image
        src={img}
        style={{ width: "400px", height: "auto" }}
        alt="Training"
        priority={false}
      />
    </div>
  );
}
