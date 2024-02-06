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

export default function Empowering() {
  return (
    <div
      className="p-3  rounded-[30px]
      bg-gradient-to-br from-cyan-100
       to-lime-200 mt-5 text-center"
    >
      <div id="Heading" className="text-3xl">
        Empowering your vision
      </div>
      <div id="sub-heading" className="text-sm font-light">
        Empowering your digital vision with cutting edge solution
      </div>
      <div className="grid grid-cols-4 grid-row-2 gap-4 mt-2 p-5 gap-4">
        <div className="shadow-xl flex flex-col items-center rounded-xl p-5">
          <Image
            src={webdev}
            priority={false}
            alt="WebDev"
            style={{ width: "100px", height: "auto" }}
          ></Image>
          <p className="text-lg font-medium">Web</p>
        </div>
        <div className="shadow-xl flex flex-col items-center rounded-xl p-5">
          <Image
            src={appdev}
            priority={false}
            style={{ width: "100px", height: "auto" }}
            alt="AppDev"
          ></Image>
          <p className="text-lg font-medium">App</p>
        </div>
        <div className="shadow-xl flex flex-col items-center rounded-xl p-5">
          <Image
            src={cloud}
            priority={false}
            style={{ width: "100px", height: "auto" }}
            alt="Cloud"
          ></Image>
          <p className="text-lg font-medium">Cloud</p>
        </div>
        <div className="shadow-xl flex flex-col items-center  rounded-xl p-5">
          <Image
            src={open}
            priority={false}
            style={{ width: "100px", height: "auto" }}
            alt="Open Source"
          ></Image>
          <p className="text-lg font-medium">Open Source</p>
        </div>
        <div className="shadow-xl flex flex-col items-center rounded-xl p-5">
          <Image
            src={custom}
            priority={false}
            style={{ width: "100px", height: "auto" }}
            alt="custom software"
          ></Image>
          <p className="text-lg font-medium">Custom Software</p>
        </div>
        <div className="shadow-xl flex flex-col items-center  rounded-xl p-5">
          <Image
            src={tech}
            priority={false}
            style={{ width: "100px", height: "auto" }}
            alt="tech assistance"
          ></Image>
          <p className="text-lg font-medium">Tech Assistance</p>
        </div>
        <div className="shadow-xl flex flex-col items-center  rounded-xl p-5">
          <Image
            src={uiux}
            priority={false}
            style={{ width: "100px", height: "auto" }}
            alt="UIUX"
          ></Image>
          <p className="text-lg  font-medium">UI/UX Design</p>
        </div>
        <div className="shadow-xl flex flex-col items-center  rounded-xl p-5">
          <Image
            src={ecommerce}
            priority={false}
            style={{ width: "100px", height: "auto" }}
            alt="E-Commerce"
          ></Image>
          <p className="text-lg font-medium">E-Commerce</p>
        </div>
      </div>
    </div>
  );
}
