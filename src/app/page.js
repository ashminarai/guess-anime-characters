"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";

import Itachi from "../assets/images/h-itachi.png";
import Mikasa from "../assets/images/h-mikasa.png";

export default function Home() {
  const [isContinue, setIsContinue] = useState(false);

  return (
    <main className="home-section min-h-[100vh] [w-[100vw] relative">
      <Header />
      <div className="flex justify-between items-end max-w-7xl m-auto h-[100vh]">
        <div className="h-[600px] w-[50%] overflow-hidden flex justify-start blur-sm">
          <Image
            src={Itachi}
            alt="itachi"
            className="-scale-x-100 h-[800px] w-auto object-cover opacity-[0.5]"
          />
        </div>
        <div className="h-[600px] w-[50%] flex justify-end overflow-hidden blur-sm">
          <Image
            src={Mikasa}
            alt="mikasa"
            className="h-[800px] w-auto object-cover opacity-[0.5]"
          />
        </div>
      </div>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="text-center text-white uppercase">
          <h1 className="text-8xl pb-2">Guess</h1>
          <h2 className="text-6xl">Characters</h2>
        </div>
        <div className="h-[200px] flex flex-col items-center justify-center gap-8">
          <Link href="/play">
            <button className="cursor-pointer bg-[#93474C] w-[200px] uppercase font-semibold text-lg py-1 rounded-3xl shadow-md border-2 border-[#f2e5e5] text-white hover:bg-[#75383c] transition-all ease-in-out duration-300 active:bg-[#75383c]">
              Play
            </button>
          </Link>
          {isContinue && (
            <Link href="/play">
              <button className="cursor-pointer bg-[#5458c1] w-[200px] uppercase font-semibold text-lg py-1 rounded-3xl shadow-md border-2 border-[#f2e5e5] text-white hover:bg-[#474aa0] transition-all ease-in-out duration-300 active:bg-[#474aa0]">
                Continue
              </button>
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
