import React from "react";
import Image from "next/image";
import heroImg from "../../../public/homeHeroImage.png";
// import { PurpleToPink } from "../../utils/button";
import { MaterialButton } from "@/app/utils/button";
export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-cyan-100 via-light-green-200 to-cyan-200  rounded-[30px] flex justify-around p-10 my-5 items-center">
      <div
        id="leftGohacathonDescription"
        className="flex flex-col items-center w-1/2"
      >
        <h2 className="text-5xl font-medium subpixel-antialiased tracking-wide">
          GoHackathon
        </h2>
        <p className="text-2xl tracking-wide mb-1 text-center">
          Full-Stack Web Development Internship
        </p>
        <p className="text-sm font-light text-balance text-center">
          Collaborate, Innovate, and Hack Your Way to Success! We are trying to
          build a community where everyone can connect, learn, and grow
          together.
        </p>
        {/* <PurpleToPink text={"Get Started"} /> */}
        <MaterialButton text={"Get Started"} />
      </div>
      <div id="imageIllustration">
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
