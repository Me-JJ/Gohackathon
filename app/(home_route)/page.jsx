import React from "react";
import { NavbarWithMegaMenu as Navbar } from "../components/navbar";
import Hero from "../components/hero";
import Announcements from "../components/announcements";
import Popularskills from "../components/popularskills";
import Four_p_program from "../components/four_p_program";
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
    </>
  );
}
