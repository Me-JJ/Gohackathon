import React from "react";
import heroImg from "../../../public/homeHeroImage.jpeg";
import Image from "next/image";
export default function Four_p_program() {
  return (
    <div className="grid grid-col-5 grid-rows-6  bg-gradient-to-br from-blue-200 to-green-300 p-10 mt-5">
      <div className="col-start-2 col-span-3 row-span-2 text-center text-2xl mt-5 gap-4">
        4P Program for budding tech professionals
      </div>
      <div className="row-start-3 border border-black rounded-lg text-center">
        Preparation
      </div>
      <div className="row-start-4 col-start-5 border border-black rounded-lg text-center">
        Project
      </div>
      <div className="row-start-5 border border-black rounded-lg text-center">
        Professionals
      </div>
      <div className="row-start-6 col-start-5 border border-black rounded-lg text-center">
        Placement
      </div>
      <div className="col-start-2  col-span-3 row-start-3 row-span-3 m-auto">
        <Image
          src={heroImg}
          priority={false}
          placeholder="blur"
          alt="hero image"
        ></Image>
      </div>
    </div>
  );
}
