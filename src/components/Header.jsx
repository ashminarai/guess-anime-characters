import React from "react";

function Header() {
  return (
    <header className="fixed top-0 w-[100vw] py-4">
      <div className="max-w-7xl flex h-20 justify-between items-center m-auto text-xl px-4">
        <div className="relative flex flex-col items-start justify-center">
          <div className="text-[#FFEE58] bg-[#3d3346] h-[40px] w-[40px] rounded-full border-2 border-white flex items-center justify-center absolute">
            <i className="fa-regular fa-star"></i>
          </div>
          <div className="w-20 bg-white rounded-3xl flex justify-end items-center py-[2px] px-3">
            <p className="font-semibold">1</p>
          </div>
        </div>
        <div className="relative flex flex-col items-start justify-center">
          <div className="text-[#FFEE58] bg-[#3d3346] h-[40px] w-[40px] rounded-full border-2 border-white flex items-center justify-center absolute right-0">
            <i className="fa-solid fa-bitcoin-sign"></i>
          </div>
          <div className="w-20 bg-white rounded-3xl flex justify-start items-center py-[2px] px-3">
            <p className="font-semibold">15</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
