import React from "react";
import heroImg from "../../../public/homeHeroImage.png";
import Image from "next/image";
import prep from "../../../public/prep.png";
import project from "../../../public/project.png";
import prof from "../../../public/prof.png";
import place from "../../../public/place.png";
export default function Four_p_program() {
  return (
    <div
      className="bg-gradient-to-tr from-lime-100 
    via-cyan-200 to-light-lime-200 mt-5 rounded-[30px] p-3"
    >
      <h1 className="font-medium font-serif text-3xl text-center my-3"></h1>
      <div className="grid grid-col-3 grid-rows-3 items-center gap-4">
        <div className="row-start-1 col-start-2 flex flex-row items-center rounded-full px-10 shadow-md  ">
          <Image
            src={prep}
            priority={false}
            style={{ width: "200px", height: "auto" }}
            alt="Prep"
          ></Image>
          <h1 className="text-2xl font-medium">Preparation</h1>
        </div>
        <div className="row-start-2 col-start-3 flex flex-row-reverse items-center  rounded-full px-10 shadow-md ">
          <Image
            src={project}
            priority={false}
            style={{ width: "200px", height: "auto" }}
            alt="Project"
          ></Image>
          <h1 className="text-2xl font-medium">Project</h1>
        </div>
        <div className="row-start-3 col-start-2 flex flex-row items-center  rounded-full px-10 shadow-md pb-5">
          <Image
            src={prof}
            priority={false}
            style={{ width: "200px", height: "auto" }}
            alt="Prof"
          ></Image>
          <h1 className="text-2xl font-medium">Professional</h1>
        </div>
        <div className="row-start-2 col-start-1 flex flex-row items-center rounded-full px-10 shadow-md">
          <Image
            src={place}
            priority={false}
            style={{ width: "200px", height: "auto" }}
            alt="Placement"
          ></Image>
          <h1 className="text-2xl font-medium ">Placement</h1>
        </div>
        <div className="col-start-2 row-start-2  m-auto ">
          <button
            className="relative inline-flex items-center justify-center p-1 overflow-hidden
             text-xl font-medium text-gray-900 rounded-full group
          bg-gradient-to-br from-lime-400 to-cyan-300 group-hover:from-lime-400
          group-hover:to-cyan-300 hover:text-white dark:text-white focus:ring-4
           focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
          >
            <span className="relative font-serif px-2 py-5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
              4P Program for budding tech professionals
            </span>
          </button>
          {/* <Image
            src={heroImg}
            priority={false}
            placeholder="blur"
            alt="hero image"
            style={{ width: "155px", height: "auto" }}
          ></Image> */}
        </div>
      </div>
    </div>
  );
}
