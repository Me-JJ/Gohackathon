import React from "react";
import Image from "next/image";
import heroImg from "../../../public/homeHeroImage.jpeg";
import { PurpleToPink } from "../../utils/button";
export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-blue-200 to-green-300 border border-black rounded-xl flex justify-between p-10 my-5 items-center">
      <div
        id="leftGohacathonDescription"
        className="flex flex-col  items-center w-1/2"
      >
        <h2>GoHackathon</h2>
        <h3>Full-Stack Web Development Internship</h3>
        <p className="w-3/4 text-center">
          Collaborate, Innovate, and Hack Your Way to Success! We are trying to
          build a community where everyone can connect, learn, and grow
          together.
        </p>
        <PurpleToPink text={"Get Started"} />
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
