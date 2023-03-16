"use client";
import { useRef, forwardRef, useImperativeHandle } from "react";
import Image from "next/image";

const GameImage = forwardRef(({ isLevelComplete, image }, ref) => {
  const imageRef = useRef();
  const imageCoverRef = useRef();

  //allow its parent component to call whatever inside is
  useImperativeHandle(ref, () => ({
    // to shake image if answer is wrong
    shakeImage() {
      const imgPosition = ["30px", "-30px", "30px", "-30px", "30px", "0px"];
      let timeout = 0;

      imgPosition.forEach((position) => {
        setTimeout(() => {
          imageCoverRef.current.style.transform = `translateX(${position})`;
          if (position === "30px") imageRef.current.style.opacity = "0.4";
          else imageRef.current.style.opacity = "10";
        }, (timeout += 120));
      });
    },
  }));

  return (
    <div className="w-full flex justify-center items-center pt-[5rem]">
      <div
        ref={imageCoverRef}
        className="h-[400px] max-w-[400px] border-[5px] border-black rounded-xl mx-2 overflow-hidden bg-red-500 transitioin-all ease-in-out duration-300"
      >
        <Image
          ref={imageRef}
          src={image}
          alt="naruto"
          className={`object-cover border-3 h-[400px] w-auto transitioin-all ease-in-out duration-300 ${
            isLevelComplete
              ? "duration-300 scale-100"
              : "duration-[10ms] scale-[5]"
          }`}
        />
      </div>
    </div>
  );
});

export default GameImage;
