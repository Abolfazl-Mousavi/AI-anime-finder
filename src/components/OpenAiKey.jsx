import React from "react";
import { ImEnter } from "react-icons/im";
import { HiInformationCircle } from "react-icons/hi";
import openaiguide from "../assets/api.png";

import "react-tooltip/dist/react-tooltip.css";

const OpenAiKey = ({ setOpenSK, OpenSK }) => {
  return (
    <form
      id="getKeyForm"
      className=" relative flex"
      onSubmit={(e) => {
        e.preventDefault();
        setOpenSK(document.getElementById("OpenSK").value);
      }}
    >
      <input
        className="mr-1  h-10 rounded-l-lg border-2 border-green-600 px-2 py-3"
        type="text"
        id="OpenSK"
        value={OpenSK}
        placeholder="YOUR OPENAI KEY"
      />
      <button
        className="aspect-square h-10 rounded-r-lg border-none bg-green-600 p-3 text-center text-xl font-semibold text-white "
        type="submit"
        value="Submit"
      >
        <ImEnter />
      </button>
      <div className="absolute -right-4 top-0">
        <a
          rel="help"
          target="_blank"
          className="underline"
          href="https://platform.openai.com/account/api-keys"
        >
          <HiInformationCircle className="relative w-4 cursor-pointer text-green-600" />
        </a>
      </div>
    </form>
  );
};

export default OpenAiKey;
