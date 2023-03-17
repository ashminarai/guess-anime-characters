import React from "react";

function AboutCoin() {
  return (
    <div className="text-slate-200">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl pb-2">Coin</h2>
        <i className="up-down-animation fa-brands fa-bitcoin text-[#FFEE58] text-[65px]"></i>
      </div>
      <p className="py-3 pt-[50px]">
        You will earn +2 coins for each new level.
      </p>
      <div className="flex justify-around items-center py-2 text-black gap-2">
        <div className="relative flex flex-col items-start justify-center">
          <div className="text-[#FFEE58] bg-[#3d3346] h-[40px] w-[40px] rounded-full border-2 border-white flex items-center justify-center absolute right-0">
            <i className="fa-brands fa-bitcoin text-2xl"></i>
          </div>
          <div className="w-20 bg-white rounded-3xl flex justify-start items-center py-[2px] px-3">
            <p className="font-semibold">15</p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-1">
          <i className="fa-solid fa-arrow-right-long text-white text-3xl"></i>{" "}
          <span className="text-white">+2</span>
        </div>
        <div className="relative flex flex-col items-start justify-center">
          <div className="text-[#FFEE58] bg-[#3d3346] h-[40px] w-[40px] rounded-full border-2 border-white flex items-center justify-center absolute right-0">
            <i className="fa-brands fa-bitcoin text-2xl"></i>
          </div>
          <div className="w-20 bg-white rounded-3xl flex justify-start items-center py-[2px] px-3">
            <p className="font-semibold">17</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCoin;
