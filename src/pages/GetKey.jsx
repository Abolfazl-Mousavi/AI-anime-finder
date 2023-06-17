import React from "react";
import OpenAiKey from "../components/OpenAiKey";
const GetKey = ({ setOpenSK, openSK }) => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-evenly px-8 sm:px-24">
      <h1 className="text-5xl">
        Welcome to <span className="text-green-600">ANIME FINDER</span>
      </h1>

      <OpenAiKey setOpenSK={setOpenSK} openSK={openSK} />
    </div>
  );
};

export default GetKey;
