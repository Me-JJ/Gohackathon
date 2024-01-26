import React from "react";

import Hero from "../components/home_page/hero";
import Announcements from "../components/home_page/announcements";
import Popularskills from "../components/home_page/popularskills";
import Four_p_program from "../components/home_page/four_p_program";
import Empower from "../components/home_page/empowering_vision";
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
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="flex justify-around items-center ">
        {/* <Announcements /> */}
        <Announce />
        {/* <Popularskills /> */}
        <div>
          <Image src={img} alt="announcement" priority={false} />
        </div>
      </div>
      {/* <Four_p_program /> */}
      <Slide_4p />
      <Empower />
      <div className="flex justify-evenly">
        <Examine />
        <Coder />
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
