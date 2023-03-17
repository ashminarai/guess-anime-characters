"use client";
import { useEffect, useState } from "react";

import AboutCoin from "./AboutCoin";
import AboutHint from "./AboutHint";

function UserGuide({ hideUserGuideHandle }) {
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (page >= 3) {
      hideUserGuideHandle();
      localStorage.setItem("userGuide", JSON.stringify(true));
    }
  }, [page]);

  const handlePrevious = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleNext = () => {
    setPage((prevPage) => prevPage + 1);
    console.log(page);
  };

  return (
    <div className="h-[100vh] w-[100vw] fixed z-10 backdrop-blur-[6px] bg-[rgba(0,0,0,0.6)]">
      <h1 className="text-slate-100 text-4xl uppercase text-center py-3 pt-8">
        Guide
      </h1>
      <div className="absolute h-[480px] bg-[rgba(0,0,0,0.2)] backdrop-blur-[10px] rounded-md top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] py-14 px-5 border-2 border-slate-300">
        {page === 1 && <AboutHint />}
        {page === 2 && <AboutCoin />}
      </div>
      <div className="w-[100vw] mx-2 fixed bottom-0">
        <div className="max-w-[500px] h-[100px] m-auto relative">
          {page === 2 && (
            <button
              onClick={handlePrevious}
              className="text-[#e0dbdb] bg-[#5458c1] h-[55px] w-[55px] ml-2 absolute left-2 rounded-full shadow-md flex justify-center items-center text-2xl hover:bg-[#474aa0] active:bg-[#75383c] transition-all ease-in-out duration-300"
            >
              <i className="fa-solid fa-backward"></i>
            </button>
          )}
          <button
            onClick={handleNext}
            className="text-[#e0dbdb] bg-[#5458c1] h-[55px] w-[55px] mr-2 absolute right-2 rounded-full shadow-md flex justify-center items-center text-2xl hover:bg-[#474aa0] active:bg-[#75383c] transition-all ease-in-out duration-300"
          >
            <i className="fa-solid fa-forward"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserGuide;
