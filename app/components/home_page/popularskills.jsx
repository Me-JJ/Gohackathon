"use client";
import React from "react";
import Image from "next/image";
import { PopularCard } from "./popular_skills_card";
import { Typography } from "@material-tailwind/react";
import img1 from "../../../public/ai.png";
import img2 from "../../../public/cloud_popular_skill.png";
import img3 from "../../../public/webdevskill.png";

export default function Popularskills() {
  const info = [
    {
      src: img1,
      heading: "AI & ML",
      sub: "Machine Learning (ML), a subset of AI, involves training algorithms on data to recognize patterns and make predictions or decisions without explicit programming. ML algorithms improve over time by learning from experience, enabling systems to adapt to new information. Applications of AI and ML range from image and speech recognition to recommendation systems, autonomous vehicles, and healthcare diagnostics.",
    },
    {
      src: img2,
      heading: "Cloud Computing",
      sub: "Cloud computing refers to the delivery of computing services, including storage, processing power, and applications, over the internet. Instead of owning and maintaining physical servers or infrastructure, users can access and use resources on a pay-as-you-go basis.Cloud computing providers, such as Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform, offer a range of services.",
    },
    {
      src: img3,
      heading: "Full Stack Development",
      sub: "Full Stack Development refers to the practice of working with both the front-end and back-end aspects of a software application. A full stack developer is proficient in a broad range of technologies and is capable of handling various layers of a software stack. The front-end, also known as the client-side, deals with the user interface and user experience.",
    },
  ];
  return (
    <div className="my-80">
      <div className="flex justify-center items-center mt-10 mb-3">
        <p className="text-3xl sm:text-4xl md:text-7xl lg:text-6xl font-extrabold mx-3">
          Popular Skills
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 md:w-12 md:h-12"
        >
          <path
            fillRule="evenodd"
            d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <Typography
        variant="paragraph"
        color="gray"
        className="mb-5 mx-auto text-center
        text-xs md:text-sm"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt dicta
        commodi neque velit sit officia, facere voluptas quas id explicabo Lorem
      </Typography>
      <div className="flex justify-around items-start flex-wrap">
        {info.map((item, ind) => {
          return <PopularCard key={ind} {...item} />;
        })}
      </div>
    </div>
  );
}
