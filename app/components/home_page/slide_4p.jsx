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
} from "@material-tailwind/react";
import {
  CodeBracketSquareIcon,
  WrenchScrewdriverIcon,
  CircleStackIcon,
  CurrencyRupeeIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";

export function Slide_4p() {
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
    },
  ];
  return (
    <div className="bg-gradient-to-tr from-cyan-200 to-lime-100 p-3 rounded-[30px] mt-5">
      <Tabs value="dashboard">
        <TabsHeader>
          {data.map(({ label, value, icon }) => (
            <Tab key={value} value={value}>
              <div className="flex items-center gap-2">
                {React.createElement(icon, { className: "w-5 h-5" })}
                {label}
              </div>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ img, value, desc }) => (
            <TabPanel
              key={value}
              value={value}
              className="font-medium text-black flex justify-evenly items-center"
            >
              <Image
                src={img}
                priority={false}
                alt="prep"
                style={{ width: "300px", height: "auto" }}
              />
              {desc}
              {/* Redirect button to training page */}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}
