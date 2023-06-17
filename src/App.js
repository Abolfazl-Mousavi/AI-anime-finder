import { useEffect, useState } from "react";
import GetKey from "./pages/GetKey";
import SearchAnime from "./pages/SearchAnime";
import call from "./api/call";
import { ThreeDots } from "react-loader-spinner";

function App() {
  const [openSK, setOpenSK] = useState(localStorage.getItem("sk"));
  const [logged, setLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const checkAuth = async () => {
    try {
      if ((await call(openSK)) == true) {
        setLogged(true);
      } else {
        setLogged(false);
      }
    } catch {
      const el = `<div class="fade mb-2 rounded-sm bg-green-600 px-5  py-1 text-lg text-white">
            Sorry! your openai api key is wrong. get a 
            <a
              className="font-semibold underline"
              href="https://platform.openai.com/account/api-keys"
            >
              new one from here_
            </a>
          </div>`;
      const err = document.getElementById("err");
      err.innerHTML = el;
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    localStorage.setItem("sk", openSK);
    checkAuth();
  }, [openSK]);
  useEffect(() => {
    return () => {
      //SUMMON

      console.log(
        '           .d88888b.\n         .8P"     "9bd888b.\n         .8P"     "9bd888b.\n        .8P     .d8P"   `"988.\n     .8888   .d8P"    ,     98.\n   .8P" 88   8"    .d98b.    88\n  .8P   88   8 .d8P"   "98b. 88\n  88    88   8P"  `"8b.    "98.\n  88.   88   8       8"8b.    88\n   88    "98.8       8   88   "88\n    `8b.    "98.,  .d8   88    88\n    88 "98b.   .d8P" 8   88   d8"\n    88    "98bP"    .8   88 .d8"\n    "8b     `    .d8P"   8888"\n     "88b.,   .d8P"     d8"\n       "9888P98b.     .d8"\n               "988888P"\n'
      );
      console.log("\nGive me a JOB\n");
      console.log(
        "BTW, source code is in my github:https://github.com/Abolfazl-Mousavi"
      );
    };
  }, []);

  return (
    <>
      <div className="grid h-screen place-items-center">
        {!isLoading ? (
          <div className=" min-w-fit  rounded-lg bg-white  transition-all  duration-500">
            {logged == true ? (
              <SearchAnime setLogged={setLogged} />
            ) : (
              <GetKey setOpenSK={setOpenSK} openSK={openSK} />
            )}
          </div>
        ) : (
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        )}
        <div id="err" className="absolute bottom-5 left-5"></div>
      </div>
    </>
  );
}

export default App;
