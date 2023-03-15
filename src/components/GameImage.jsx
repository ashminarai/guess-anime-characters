import Image from "next/image";
import React from "react";
import Naruto from "../assets/gImages/naruto.jpg";

function GameImage() {
  return (
    <div className="w-full flex justify-center items-center pt-[5rem]">
      <Image
        src={Naruto}
        alt="naruto"
        className="object-cover border-3 h-[400px] max-w-[400px] border-[5px] border-black rounded-xl mx-2"
      />
    </div>
  );
}

export default GameImage;
