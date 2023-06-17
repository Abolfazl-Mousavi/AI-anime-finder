import React, { useState, useEffect } from "react";
import CompletionSearch from "../api/CompletionSearch";
import { HiInformationCircle } from "react-icons/hi";
import { Tooltip } from "react-tooltip";
const SearchAnime = ({ setLogged }) => {
  const [prompt, setPrompt] = useState("");
  const [history, setHistory] = useState("");
  const Search = async () => {
    const res = await CompletionSearch(prompt);
    res === undefined && setLogged(false);
    setHistory(res);
  };

  useEffect(() => {
    const dom = document.getElementById("DOM");
    var h = document.createElement("div");
    var text = document.createTextNode(history);
    h.appendChild(text);
    h.style.borderBottom = "1px solid";
    dom.appendChild(h);
    dom.scrollTop = dom.scrollHeight;

    return () => {};
  }, [history]);

  return (
    <form
      className="flex px-5 flex-col justify-center"
      onSubmit={(e) => {
        e.preventDefault();
        Search();
      }}
    >
      <div className="  mx-2 my-3 flex flex-row-reverse justify-around">
        <div className="relative">
          <textarea
            placeholder="ENTER YOUR PROMPT HERE"
            className="m-2 ml-5 max-h-[85vh] min-h-full  border-2 border-solid border-gray-400 p-3"
            onChange={(e) => {
              setPrompt(e.target.value);
            }}
          ></textarea>
          <div data-tooltip-id="my-tooltip" className="absolute -right-4 top-2">
            <HiInformationCircle className="relative w-4 cursor-pointer text-green-600" />
          </div>

          <Tooltip
            className=" max-w-[80vw] bg-[#333333] text-lg sm:max-w-[50vw]"
            id="my-tooltip"
          >
            I will be more accurate if you can provide the following details:
            <br />
            1.Genre: Are you looking for a specific genre like action,
            romance,comedy, fantasy, set-fi, or something else?
            <br />
            2.Plot Synopsis: Can you give me a brief description or summary of
            the anime's plot or storyline?
            <br />
            3.Setting: Do you have a preference for the setting of the anime?
            For example, modern-day Tokyo, a fantasy world, a post-apocalyptic
            future, or something else? Main
            <br />
            4.Characters: If you have any information about the main characters,
            their names, or their roles in the story, that can be helpful.
            <br />
            5.Art Style: Do youhave any preferences for the art style? Anime can
            vary from realistic to highly stylized.
            <br />
            6.Similar Anime: If there are any other anime that you've watched
            and enjoyed, mentioning them can help me find similar
            recommendations.
            <br />
            Providing as many details as possible will increase the chances of
            finding the anime you're looking for.
          </Tooltip>
        </div>

        <div
          className="max-h-[85vh] min-h-[30vh] overflow-y-auto"
          id="DOM"
        ></div>
      </div>
      <button
        className="mx-auto my-2 w-fit rounded-lg border-2 border-solid border-green-600 p-2 transition active:bg-green-600 active:text-white"
        type="submit"
      >
        Search!!
      </button>
    </form>
  );
};

export default SearchAnime;
