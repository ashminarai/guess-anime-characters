import React from "react";

function AboutHint() {
  return (
    <div className="text-slate-200">
      <div className="flex justify-between flex-row items-center">
        <h2 className="text-2xl pb-2">Hint Button</h2>
        <button className="up-down-animation cursor-default text-[#e0dbdb] bg-[#786170] h-[65px] w-[65px] rounded-full shadow-md flex justify-center items-center text-4xl relative">
          <i className="fa-solid fa-lightbulb"></i>
        </button>
      </div>
      <p className="py-3 pt-[40px]">
        If you cannot guess the name than you can use a hint. <br />
        Each hint will cost your 5 coins.
      </p>
      <div className="flex justify-around items-center py-2 gap-2">
        <button className="text-[#e0dbdb] cursor-default bg-[#786170] h-[45px] w-[45px] rounded-full flex justify-center items-center text-2xl relative">
          <i className="fa-solid fa-lightbulb"></i>
          <p className="text-[#2D1C3D] absolute right-[-12px] bottom-[0px] text-[20px] font-semibold bg-[#ffff00] h-[25px] w-[25px] flex items-center justify-center rounded-full">
            3
          </p>
        </button>
        <div className="flex flex-row items-center gap-1">
          <span className="text-white">-1</span>
          <i className="fa-solid fa-arrow-right-long text-white text-3xl"></i>
        </div>
        <button className="text-[#e0dbdb] cursor-default bg-[#786170] h-[45px] w-[45px] rounded-full flex justify-center items-center text-2xl relative">
          <i className="fa-solid fa-lightbulb"></i>
          <p className="text-[#2D1C3D] absolute right-[-12px] bottom-[0px] text-[20px] font-semibold bg-[#ffff00] h-[25px] w-[25px] flex items-center justify-center rounded-full">
            2
          </p>
        </button>
      </div>
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
          <span className="text-white">-5</span>
          <i className="fa-solid fa-arrow-right-long text-white text-3xl"></i>
        </div>
        <div className="relative flex flex-col items-start justify-center">
          <div className="text-[#FFEE58] bg-[#3d3346] h-[40px] w-[40px] rounded-full border-2 border-white flex items-center justify-center absolute right-0">
            <i className="fa-brands fa-bitcoin text-2xl"></i>
          </div>
          <div className="w-20 bg-white rounded-3xl flex justify-start items-center py-[2px] px-3">
            <p className="font-semibold">10</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHint;
