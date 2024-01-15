import React from "react";

export default function ButtonGreenToBlue({ text }) {
  return (
    <button
      type="button"
      className="text-black bg-gradient-to-br from-green-200 to-blue-300 
          hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200
           dark:focus:ring-green-400  border border-black rounded-xl text-sm px-2 py-1.5 text-center me-2 mb-2 my-2"
    >
      {text}
    </button>
  );
}

export function PurpleToPink({ text }) {
  return (
    <button
      type="button"
      className="text-black bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-100 
          hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200
           dark:focus:ring-green-400 border border-black rounded-xl text-sm px-2 py-1.5 text-center me-2 mb-2 my-2"
    >
      {text}
    </button>
  );
}
