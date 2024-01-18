import React from "react";

export default function Empower() {
  return (
    <div
      className="p-2 border border-black 
    bg-gradient-to-br from-blue-200 to-green-300 mt-5 text-center"
    >
      <div id="Heading" className="text-2xl">
        Empowering your vision
      </div>
      <div id="sub-heading" className="">
        Empowering your digital vision with cutting edge solution
      </div>
      <div className="grid grid-cols-4 grid-row-2 gap-4 mt-2">
        <div className="border border-black rounded-xl p-5">Web</div>
        <div className="border border-black rounded-xl p-5">App</div>
        <div className="border border-black rounded-xl p-5">Cloud</div>
        <div className="border border-black rounded-xl p-5">Open Source</div>
        <div className="border border-black rounded-xl p-5">
          Custom Software
        </div>
        <div className="border border-black rounded-xl p-5">
          Tech Assistance
        </div>
        <div className="border border-black rounded-xl p-5">UI/UX Design</div>
        <div className="border border-black rounded-xl p-5">E-Commerce</div>
      </div>
    </div>
  );
}
