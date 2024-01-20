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
  return (
    <div
      className="p-3  rounded-[30px]
      bg-gradient-to-br from-cyan-200
      via-lime-100 to-cyan-200 mt-5 text-center"
    >
      <div id="Heading" className="text-3xl">
        Empowering your vision
      </div>
      <div id="sub-heading" className="text-sm font-light">
        Empowering your digital vision with cutting edge solution
      </div>
      <div className="grid grid-cols-4 grid-row-2 gap-4 mt-2 p-5">
        <div className="shadow-xl rounded-xl p-5">
          <Image
            src={webdev}
            priority={false}
            alt="WebDev"
            style={{ widht: "20px", height: "auto" }}
          ></Image>
          <p className="text-lg font-semibold">Web</p>
        </div>
        <div className="shadow-xl rounded-xl p-5">
          <Image
            src={appdev}
            priority={false}
            style={{ widht: "20px", height: "auto" }}
            alt="AppDev"
          ></Image>
          <p className="text-lg font-semibold">App</p>
        </div>
        <div className="shadow-xl rounded-xl p-5">
          <Image
            src={cloud}
            priority={false}
            style={{ widht: "20px", height: "auto" }}
            alt="Cloud"
          ></Image>
          <p className="text-lg font-semibold">Cloud</p>
        </div>
        <div className="shadow-xl  rounded-xl p-5">
          <Image
            src={open}
            priority={false}
            style={{ widht: "20px", height: "auto" }}
            alt="Open Source"
          ></Image>
          <p className="text-lg font-semibold">Open Source</p>
        </div>
        <div className="shadow-xl rounded-xl p-5">
          <Image
            src={custom}
            priority={false}
            style={{ widht: "20px", height: "auto" }}
            alt="custom software"
          ></Image>
          <p className="text-lg font-semibold">Custom Software</p>
        </div>
        <div className="shadow-xl  rounded-xl p-5">
          <Image
            src={tech}
            priority={false}
            style={{ widht: "20px", height: "auto" }}
            alt="tech assistance"
          ></Image>
          <p className="text-lg font-semibold">Tech Assistance</p>
        </div>
        <div className="shadow-xl  rounded-xl p-5">
          <Image
            src={uiux}
            priority={false}
            style={{ widht: "20px", height: "auto" }}
            alt="UIUX"
          ></Image>
          <p className="text-lg  font-semibold">UI/UX Design</p>
        </div>
        <div className="shadow-xl  rounded-xl p-5">
          <Image
            src={ecommerce}
            priority={false}
            style={{ widht: "20px", height: "auto" }}
            alt="E-Commerce"
          ></Image>
          <p className="text-lg font-semibold">E-Commerce</p>
        </div>
      </div>
    </div>
  );
}
