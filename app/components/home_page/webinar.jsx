"use client";
import Image from "next/image";
import React from "react";
import webinar from "../../../public/webinar.jpeg";
import img from "../../../public/announce.png";
import { Button } from "@material-tailwind/react";

export default function Webinar() {
  const image = () => {
    return (
      <Image
        src={img}
        priority={false}
        alt="dummy"
        style={{ width: "200px", height: "auto" }}
      />
    );
  };
  return (
    <div className="my-40 ">
      {/* <div>
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold">
          Webinars
        </h1>
        <p className="text-sm sm:text-lg md:text-base font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quia
          placeat provident facere
        </p>
      </div> */}
      <div className="relative mx-auto bg-cover bg-center">
        <Image
          src={webinar}
          priority={false}
          alt="webinar"
          style={{ opacity: "0.8" }}
        />
        <h1
          className="top-[20%] left-[10%] absolute text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-extrabold
         hover:scale-105 transition cursor-pointer"
        >
          Webinars
        </h1>
        <p className="backdrop-blur-md rounded-lg top-[30%] left-[10%] w-[70%] absolute text-[8px] sm:text-sm md:text-base line-clamp-3 sm:line-clamp-[4] md:line-clamp-[5] lg:line-clamp-none lg:text-xl font-light my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quia
          placeat provident facere Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Voluptatem consectetur reiciendis, facere, dolor
          laudantium a eveniet, consequatur incidunt pariatur consequuntur sit
          quia iste et ipsam alias est beatae reprehenderit illo. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Dolor hic quisquam eos
        </p>
        <div className="top-[50%] absolute flex flex-row justify-evenly w-full my-10">
          <div className="w-[50px] sm:w-[100px] md:w-[200px] hover:scale-105 transition cursor-pointer">
            {image()}
          </div>
          <div className="w-[50px] sm:w-[100px] md:w-[200px] hover:scale-105 transition cursor-pointer">
            {image()}
          </div>
          <div className="w-[50px] sm:w-[100px] md:w-[200px] hover:scale-105 transition cursor-pointer">
            {image()}
          </div>
          <div className="w-[50px] sm:w-[100px] md:w-[200px] hover:scale-105 transition cursor-pointer">
            {image()}
          </div>
        </div>
      </div>
    </div>
  );
}
