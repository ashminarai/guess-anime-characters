import React from "react";
import Header from "@/components/Header";
import GameImage from "@/components/GameImage";
import InputForm from "@/components/InputForm";

function Play() {
  return (
    <section className="play-page-bg min-h-[100vh] w-full">
      <Header />
      <GameImage />
      <InputForm />
    </section>
  );
}

export default Play;
