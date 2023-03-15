"use client";
import { useRef, forwardRef, useImperativeHandle } from "react";
import Image from "next/image";
import Naruto from "../assets/gImages/naruto.jpg";

const GameImage = forwardRef((props, ref) => {
  const imageRef = useRef();

  //allow its parent component to call whatever inside is
  useImperativeHandle(ref, () => ({
    // to shake image if answer is wrong
    shakeImage() {
      const imgPosition = ["30px", "-30px", "30px", "-30px", "30px", "0px"];
      let timeout = 0;

      imgPosition.forEach((position) => {
        setTimeout(() => {
          imageRef.current.style.transform = `translateX(${position})`;
          if (position === "30px") imageRef.current.style.opacity = "0.4";
          else imageRef.current.style.opacity = "10";
        }, (timeout += 120));
      });
    },
  }));

  return (
    <div className="w-full flex justify-center items-center pt-[5rem]">
      <Image
        ref={imageRef}
        src={Naruto}
        alt="naruto"
        // onClick={shakeImage}
        className="object-cover border-3 h-[400px] max-w-[400px] border-[5px] border-black rounded-xl mx-2 transitioin-all ease-in-out duration-300"
      />
    </div>
  );
});

export default GameImage;
