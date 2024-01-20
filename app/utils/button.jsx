"use client";
import React from "react";
import { Button } from "@material-tailwind/react";

export function MaterialButton({ text }) {
  return (
    <Button
      variant="filled"
      className="mt-2 font-medium normal-case rounded-2xl px-10 text-white"
    >
      {text}
    </Button>
  );
}
export function MaterialButton_out({ text }) {
  return (
    <Button
      variant="outlined"
      className="mt-2 font-medium normal-case rounded-2xl px-10 text-black"
    >
      {text}
    </Button>
  );
}
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
      className="text-black bg-gradient-to-r from-blue-100 via-pink-50 to-blue-100 
          hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200
           dark:focus:ring-green-400 border border-black rounded-xl text-sm tracking-wider px-5 py-2 text-center me-2 mb-2 my-2"
    >
      {text}
    </button>
  );
}
