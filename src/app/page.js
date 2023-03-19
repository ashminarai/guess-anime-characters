"use client";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  changeContinue,
  updateLatestLevel,
  updateNewLevel,
} from "@/redux/slice/userSlice";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Script from "next/script";

import Itachi from "../assets/images/h-itachi.png";
import Mikasa from "../assets/images/h-mikasa.png";

export default function Home() {
  const [user, setUser] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeContinue(true));
    dispatch(updateNewLevel("reset"));

    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setUser([userData]);
    }
  }, []);

  if (user) {
    dispatch(updateLatestLevel({ level: user[0].level, coin: user[0].coin }));
  }

  return (
    <>
      <Script
        src="https://kit.fontawesome.com/92ebd06eb0.js"
        crossorigin="anonymous"
      ></Script>
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
              <button
                onClick={() => dispatch(changeContinue(false))}
                className="cursor-pointer bg-[#93474C] w-[200px] uppercase font-semibold text-lg py-1 rounded-3xl shadow-md  text-white hover:bg-[#75383c] transition-all ease-in-out duration-300 active:bg-[#75383c]"
              >
                {user && user[0].level > 1 ? "New Game" : "Play"}
              </button>
            </Link>
            {user && user[0].level > 1 && (
              <Link href="/play">
                <button className="cursor-pointer bg-[#5458c1] w-[200px] uppercase font-semibold text-lg py-1 rounded-3xl shadow-md  text-white hover:bg-[#474aa0] transition-all ease-in-out duration-300 active:bg-[#474aa0]">
                  Continue
                </button>
              </Link>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
