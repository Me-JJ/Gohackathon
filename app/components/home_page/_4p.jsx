"use client";
import React from "react";
import prep from "../../../public/prep.png";
import prof from "../../../public/prof.png";
import project from "../../../public/project.png";
import place from "../../../public/place.png";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Typography,
} from "@material-tailwind/react";
import {
  CodeBracketSquareIcon,
  WrenchScrewdriverIcon,
  CircleStackIcon,
  CurrencyRupeeIcon,
} from "@heroicons/react/24/solid";
// import { Image } from "@nextui-org/react";
import Image from "next/image";

export default function Slide_4p() {
  const data = [
    {
      label: "Preparation",
      value: "dashboard",
      icon: CodeBracketSquareIcon,
      desc: `In the MERN (MongoDB, Express.js, React, Node.js) stack, the
       preparation module involves setting up the development environment and installing
        necessary tools. Begin with MongoDB, a NoSQL database, and initialize a database
         and collection. Set up an Express.js server to handle backend logic, routes, and 
         API endpoints. Install Node.js for server-side JavaScript execution.
       Create React components for the frontend, ensuring a responsive user interface.`,
      img: prep,
      color: "#FFBA49",
    },
    {
      label: "Project",
      value: "profile",
      icon: WrenchScrewdriverIcon,
      desc: `In the project module, developers execute the planned tasks, coding functionalities
       according to specifications. They integrate components, perform testing, and address bugs.
        Collaboration is crucial, with ongoing communication among team members. The project module 
        is where the envisioned software takes shape, evolving through iterative development cycles
         towards a functional and polished product.`,
      img: project,
      color: "#B8B3E9",
    },
    {
      label: "Professional",
      value: "settings",
      icon: CircleStackIcon,
      desc: `
      The professional module focuses on enhancing skills, fostering teamwork, and promoting ethical
      conduct in a professional setting. It involves ongoing learning, staying updated with industry 
      trends, and adapting to new technologies. Communication, time management, and collaboration are
       emphasized to ensure effective and responsible contributions to the workplace.`,
      img: prof,
      color: "#F5B0CB",
    },
    {
      label: "Placement",
      value: "placement",
      icon: CurrencyRupeeIcon,
      desc: `In the placement module, developers not only focus on technical aspects but also 
      include resume and LinkedIn building, as well as job application strategies. They emphasize 
      crafting compelling resumes, optimizing LinkedIn profiles, and developing effective application
       techniques. This comprehensive approach ensures that candidates present themselves professionally
       , stand out to recruiters, and navigate the job application process successfully.
      `,
      img: place,
      color: "#90BE6D",
    },
  ];
  return (
    <div className="my-80">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-6xl font-extrabold gap-1">
          4P Program
        </h1>
        <p className="text-xs md:text-md font-light mt-2 mb-10 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
          modi necessitatibus nesciunt cum sed voluptates saepe doloremque
          magnam fugit facilis, deleniti, maxime repellat eveniet architecto
        </p>
      </div>
      <Tabs value="dashboard" className="mx-10">
        <TabsHeader className="mb-5">
          {data.map(({ label, value, icon, color }) => (
            <Tab key={value} value={value}>
              <div className="flex items-center gap-2">
                {React.createElement(icon, {
                  className: "w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8",
                })}
                <span
                  className={`hidden md:inline-block text-xl md:text-2xl lg:text-2xl font-extrabold p-3`}
                  style={{ color: `${color}` }}
                >
                  {/* {console.log(`text${color}`)} */}
                  {label}
                </span>
              </div>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="">
          {data.map(({ img, value, desc, color }) => (
            <TabPanel
              key={value}
              value={value}
              className="mt-5 rounded-[30px] py-10 px-10  flex flex-col md:flex md:flex-row justify-evenly items-center md:items-start sm:items-center gap-5"
              style={{ backgroundColor: `${color}` }}
            >
              <Image
                // isZoomed
                src={img}
                priority="false"
                alt="prep"
                style={{ width: "500", height: "auto" }}
              />
              <Typography
                color="black"
                className={`text-justify text-base md:text-lg 2xl:text-xl`}
              >
                {desc}
              </Typography>
              {/* Redirect button to training page */}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}
