import React from "react";
import ChallengeList from "./challenge_youself_card";

export default function Challenge() {
  return (
    <div className="my-40">
      <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-10">
        Challenge Youself!
      </h1>
      <ChallengeList />
    </div>
  );
}
