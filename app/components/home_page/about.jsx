import Image from "next/image";
import React from "react";
import img from "../../../public/gohackathon.jpeg";
export default function About() {
  return (
    <div className="p-2 rounded-[30px] bg-gradient-to-br from-cyan-100 to-lime-100 mt-5 ">
      <div className="flex justify-around">
        <div className="rounded-full">
          <Image
            src={img}
            priority={false}
            alt="gohackathon"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "100%",
              padding: "3px",
            }}
          />
        </div>
        <div className="flex flex-col items-center w-1/2">
          <div className="text-2xl font-semibold ">About GoHackathon</div>
          <div className="font-light text-balance mt-2">
            Hackathon comprises of eminent Industry professionals, educators and
            students meant to nurture talent among budding tech professional.
            Industry today is looking for talented students who are equipped and
            experience with advanced skills, software, attitude and updated
            industry best practices. We create an eco-system of industry
            academia partnership and help in continuous and sustainable
            development of innovative ideas, which are impactful for the growing
            economy and society.
            <br />
            Go hackathon thrives to provide best nurturing, mentorship, skills
            and professional opportunities to its members and participants.We
            conduct series of events, seminars, hackathons, internships and
            Projects.
          </div>
        </div>
      </div>
    </div>
  );
}
