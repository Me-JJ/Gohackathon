import React from "react";

export default function Popularskills() {
  return (
    <div className="p-2 border border-black bg-gradient-to-br from-blue-200 to-green-300 w-1/2 ms-2">
      <div className="text-center">
        <h1 className="text-xl">Popular Skills</h1>
        <p className="text-sm">
          Learn, Practice and Test your skills with out courses{" "}
        </p>
      </div>
      <div className="grid grid-row-6 grid-cols-3 gap-4">
        <div className="col-span-2 row-span-2 border border-black p-10">
          Cloud Computing
        </div>
        <div className="col-start-2 col-span-2 row-span-2 border border-black p-10">
          Web Development
        </div>
        <div className="col-span-2 row-span-2 border border-black p-10">
          Open Source
        </div>
      </div>
    </div>
  );
}
