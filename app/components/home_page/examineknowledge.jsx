import React from "react";

export default function Examine() {
  return (
    <div className="me-2 p-2 border border-black bg-gradient-to-br from-blue-200 to-green-300 w-1/2 mt-5">
      <div className="text-center">
        <h1 className="text-2xl">Examine your knowledge</h1>
        <p className="text-lg my-auto p-5">QUIZ image </p>
      </div>
      <div className="flex justify-between mx-5">
        {/* implement Button Texture */}
        <div className="border border-black p-5">Daily Practice</div>
        <div className="border border-black p-5">Monthly Practice</div>
      </div>
    </div>
  );
}
