import React from "react";
import Image from "next/image";

import src from "../../../public/cloud_popular_skill.jpeg";

export default function Popularskills() {
  return (
    <div
      className="py-3 px-5 rounded-[30px] bg-gradient-to-tr from-lime-100 to-cyan-100
      ms-2"
    >
      <div className="text-center">
        <div className="flex justify-center items-center">
          <h1 className="text-3xl text-center font-medium">Popular Skills</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-9 h-8"
          >
            <path
              fillRule="evenodd"
              d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <p className="text-sm font-light mb-2">
          Learn, Practice and Test your skills with out courses{" "}
        </p>
      </div>
      <div className="grid grid-row-6 grid-cols-3 gap-2 justify-items-center items-center">
        <div className=" row-span-2">
          <Image
            src={src}
            priority={false}
            alt="cloud computing"
            style={{ width: "200px", height: "auto", borderRadius: "30px" }}
          ></Image>
        </div>
        <div className="col-start-2 col-span-2 row-span-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          provident explicabo, praesentium quos cum dicta et minima numquam
          molestias ?
        </div>
        <div className="col-start-3  row-span-2">
          <Image
            src={src}
            priority={false}
            alt="cloud computing"
            style={{ width: "200px", height: "auto", borderRadius: "30px" }}
          ></Image>
        </div>
        <div className="col-start-1 col-span-2 row-start-3 row-span-2 text-right">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          provident explicabo, praesentium quos cum dicta et provident
          explicabo, praesentium quos cum dicta et minima numquam ?
        </div>
        <div className="col-start-1 row-span-2 ">
          <Image
            src={src}
            priority={false}
            alt="cloud computing"
            style={{ width: "200px", height: "auto", borderRadius: "30px" }}
          ></Image>
        </div>
        <div className="col-start-2 col-span-2 row-start-5 row-span-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          provident explicabo, praesentium quos cum dicta et minima numquam
          molestias ?
        </div>
      </div>
    </div>
  );
}
