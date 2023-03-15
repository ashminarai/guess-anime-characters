import Link from "next/link";
import React from "react";

const DATA = [
  {
    input: "naruto",
    buttons: "hnasdouasdd",
  },
  {
    input: "mikasaa",
    buttons: "hnaasdads",
  },
];

function InputForm() {
  return (
    <>
      <div className="w-full text-center justify-center flex flex-col items-center mt-[1rem]">
        <div className="flex gap-2 flex-wrap py-6">
          {[...DATA[0].input].map((input, i) => (
            <input
              key={i}
              type="text"
              disabled
              value=""
              className="w-[35px] h-[35px] text-center bg-transparent border-b-2 border-white uppercase text-white text-2xl rounded-sm"
            />
          ))}
        </div>
        <div className="flex flex-wrap gap-2 max-w-[400px] justify-center">
          {[...DATA[0].buttons].map((btn, i) => (
            <button
              key={i}
              className="uppercase w-[40px] h-[40px] text-2xl bg-slate-200 rounded-sm curser-pointer shadow-md hover:bg-slate-300 active:bg-slate-400 transation-all ease-in-out duration-300"
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
      <div className="text-center flex justify-center items-center gap-10 mt-[40px]">
        <button className="text-[#e0dbdb] bg-[#786170] h-[45px] w-[45px] rounded-full shadow-md flex justify-center items-center text-2xl hover:bg-[#675260] active:bg-[#675260] transition-all ease-in-out duration-300">
          <i className="fa-solid fa-backward"></i>
        </button>
        <Link href="/">
          <button className="text-[#e0dbdb] bg-[#786170] h-[55px] w-[55px] rounded-full shadow-md flex justify-center items-center text-2xl hover:bg-[#675260] active:bg-[#675260] transition-all ease-in-out duration-300">
            <i className="fa-sharp fa-solid fa-house"></i>
          </button>
        </Link>
        <button className="text-[#e0dbdb] bg-[#786170] h-[45px] w-[45px] rounded-full shadow-md flex justify-center items-center text-2xl hover:bg-[#675260] active:bg-[#675260] transition-all ease-in-out duration-300 relative">
          <i className="fa-solid fa-lightbulb"></i>
          <p className="text-[#2D1C3D] absolute right-[-12px] bottom-[0px] text-[20px] font-semibold bg-[#ffff00] h-[25px] w-[25px] flex items-center justify-center rounded-full">
            3
          </p>
        </button>
      </div>
    </>
  );
}

export default InputForm;
