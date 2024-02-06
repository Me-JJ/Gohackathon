import React from "react";
import Image from "next/image";
import webdev from "../../../public/webdev.png";
import appdev from "../../../public/appdev.png";
import cloud from "../../../public/cloud.png";
import open from "../../../public/openSource.png";
import custom from "../../../public/customsoftware.png";
import uiux from "../../../public/uiux.png";
import tech from "../../../public/techassist.png";
import ecommerce from "../../../public/ecommerce.png";

export default function Empower() {
  const colors = [
    "#ffdbdb",
    "#ffcea5",
    "#fff9d4",
    "#d2fafd",
    "#c9ffc7",
    "#ffe4d2",
    "#d8eeff",
  ];
  const div = 7;
  return (
    <div className="my-40">
      <div className="flex flex-col items-start ms-10 my-10">
        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">
          Empowering you vision
        </h1>
        <p className="text-sm md:text-base font-light ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus esse
          ipsa iusto laboriosam
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 mx-10 ">
        <div
          className="shadow-xl flex flex-col items-center rounded-xl p-5 hover:scale-105 transition duration-500"
          style={{
            backgroundColor: `${colors[Math.floor(Math.random() * 100) % div]}`,
          }}
        >
          <Image
            src={webdev}
            priority={false}
            alt="Web Dev"
            style={{ width: "170px", height: "auto" }}
          ></Image>
          <p className="text-sm sm:text-base md:text-lg font-semibold">
            Web Dev
          </p>
        </div>
        <div
          className="shadow-xl flex flex-col items-center rounded-xl p-5 hover:scale-105 transition duration-500"
          style={{
            backgroundColor: `${colors[Math.floor(Math.random() * 100) % div]}`,
          }}
        >
          <Image
            src={appdev}
            priority={false}
            alt="App Dev"
            style={{ width: "170px", height: "auto" }}
          ></Image>
          <p className="text-sm sm:text-base md:text-lg font-semibold">
            App Web
          </p>
        </div>
        <div
          className="shadow-xl flex flex-col items-center rounded-xl p-5 hover:scale-105 transition duration-500"
          style={{
            backgroundColor: `${colors[Math.floor(Math.random() * 100) % div]}`,
          }}
        >
          <Image
            src={cloud}
            priority={false}
            alt="Cloud Computing"
            style={{ width: "170px", height: "auto" }}
          ></Image>
          <p className="text-sm sm:text-base md:text-lg font-semibold">
            Cloud Computing
          </p>
        </div>
        <div
          className="shadow-xl flex flex-col items-center rounded-xl p-5 hover:scale-105 transition duration-500"
          style={{
            backgroundColor: `${colors[Math.floor(Math.random() * 100) % div]}`,
          }}
        >
          <Image
            src={open}
            priority={false}
            alt="Open Source"
            style={{ width: "170px", height: "auto" }}
          ></Image>
          <p className="text-sm sm:text-base md:text-lg font-semibold">
            Open Source
          </p>
        </div>
        <div
          className="shadow-xl flex flex-col items-center rounded-xl p-5 hover:scale-105 transition duration-500"
          style={{
            backgroundColor: `${colors[Math.floor(Math.random() * 100) % div]}`,
          }}
        >
          {/* <Image
            src={custom}
            priority={false}
            alt="Custom Software"
            style={{ width: "170px", height: "auto" }}
          ></Image> */}
          <p className="text-sm sm:text-base md:text-lg font-semibold">
            Lottie Icon circular
          </p>
        </div>
        <div
          className="shadow-xl flex flex-col items-center rounded-xl p-5 hover:scale-105 transition duration-500"
          style={{
            backgroundColor: `${colors[Math.floor(Math.random() * 100) % div]}`,
          }}
        >
          <Image
            src={uiux}
            priority={false}
            alt="uiux"
            style={{ width: "170px", height: "auto" }}
          ></Image>
          <p className="text-sm sm:text-base md:text-lg font-semibold">
            UI/UX Design
          </p>
        </div>
        <div
          className="shadow-xl flex flex-col items-center rounded-xl p-5 hover:scale-105 transition duration-500"
          style={{
            backgroundColor: `${colors[Math.floor(Math.random() * 100) % div]}`,
          }}
        >
          <Image
            src={tech}
            priority={false}
            alt="Techinal"
            style={{ width: "170px", height: "auto" }}
          ></Image>
          <p className="text-sm sm:text-base md:text-lg font-semibold">
            Technical Assistance
          </p>
        </div>
        <div
          className="shadow-xl flex flex-col items-center rounded-xl p-5 hover:scale-105 transition duration-500"
          style={{
            backgroundColor: `${colors[Math.floor(Math.random() * 100) % div]}`,
          }}
        >
          <Image
            src={ecommerce}
            priority={false}
            alt="Open Source"
            style={{ width: "170px", height: "auto" }}
          ></Image>
          <p className="text-sm sm:text-base md:text-lg font-semibold">
            E-commerce Store
          </p>
        </div>
        <div
          className="shadow-xl flex flex-col items-center rounded-xl p-5 hover:scale-105 transition duration-500"
          style={{
            backgroundColor: `${colors[Math.floor(Math.random() * 100) % div]}`,
          }}
        >
          <Image
            src={custom}
            priority={false}
            alt="Custom Software"
            style={{ width: "170px", height: "auto" }}
          ></Image>
          <p className="text-sm sm:text-base md:text-lg font-semibold">
            Custom Software
          </p>
        </div>
      </div>
    </div>
  );
}
