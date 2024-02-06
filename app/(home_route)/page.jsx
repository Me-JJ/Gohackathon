import React from "react";

import Hero from "../components/home_page/hero";
import Announcements from "../components/home_page/announcements";
import Popularskills from "../components/home_page/popularskills";
import Four_p_program from "../components/home_page/four_p_program";
import Empower from "../components/home_page/empower";
import Examine from "../components/home_page/examineknowledge";
import Coder from "../components/home_page/coder";
import Webinar from "../components/home_page/webinar";
import Training from "../components/home_page/training";
import Jobs from "../components/home_page/jobs";
import About from "../components/home_page/about";
import { NavbarWithMegaMenu as Navbar } from "../components/home_page/navbar";
import Footer from "../components/home_page/footer";
import { Slide_4p } from "../components/home_page/slide_4p";
import Announce from "../components/home_page/announce";
import Image from "next/image";
import img from "../../public/announce.png";
import FourP from "../components/home_page/_4p";
import Challenge from "../components/home_page/challenge_yourself";
import Webinar_card from "../components/home_page/coding_card";
import Webinar_ from "../components/home_page/coding";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="flex justify-around items-center ">
        <Announce />
        <div className="mt-80 hidden md:inline-block hover:hue-rotate-30 rotate-6 hover:rotate-[15deg] transition scale-x-[-1]">
          <Image src={img} alt="announcement" priority={false} />
        </div>
      </div>
      <Popularskills />
      {/* <Slide_4p /> */}
      <FourP />
      <Empower />
      <div className="flex flex-col-reverse items-center md:flex md:flex-row justify-evenly ">
        {/* <Examine /> */}
        <Challenge />
        {/* <Coder /> */}
        <div>
          <Image src={img} priority={false} alt="challenge yourself" />
        </div>
      </div>
      <div className="flex flex-col-reverse items-center md:flex md:flex-row-reverse justify-evenly">
        {/* <Examine /> */}
        <Webinar_ />
        {/* <Coder /> */}
        <div className="-rotate-[20deg] hover:-rotate-[25deg] transition">
          <Image src={img} priority={false} alt="challenge yourself" />
        </div>
      </div>
      <Webinar />
      <div className="flex justify-between">
        <Training />
        <Jobs />
      </div>
      <About />
      <Footer />
    </>
  );
}
