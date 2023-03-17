"use client";
import { useDispatch, useSelector } from "react-redux";

import Header from "@/components/Header";
import InputForm from "@/components/InputForm";
import UserGuide from "@/components/UserGuide";
import { useEffect } from "react";
import { hideUserGuide } from "@/redux/slice/userSlice";

function Play() {
  const userGuide = useSelector((state) => state.userGuide);
  const dispatch = useDispatch();

  useEffect(() => {
    const userGuide = JSON.parse(localStorage.getItem("userGuide"));
    if (userGuide) {
      dispatch(hideUserGuide());
    }
  }, []);

  const hideUserGuideHandle = () => {
    dispatch(hideUserGuide());
  };

  return (
    <section className="play-page-bg min-h-[100vh] w-full">
      {userGuide && <UserGuide hideUserGuideHandle={hideUserGuideHandle} />}
      <Header />
      <InputForm />
    </section>
  );
}

export default Play;
