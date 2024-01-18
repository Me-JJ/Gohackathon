import React from "react";
import { NavbarWithMegaMenu as Navbar } from "../components/home_page/navbar";
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
import Footer from "../components/home_page/footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="flex justify-between">
        <Announcements />
        <Popularskills />
      </div>
      <Four_p_program />
      <Empower />
      <div className="flex justify-between">
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
