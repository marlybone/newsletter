import React from "react";
import { BackgroundGradientAnimation } from "../components/herogradientbg";

export default function Hero() {
  return (
    <BackgroundGradientAnimation>
    <div className="absolute z-50 inset-0 flex justify-start content-start mx-auto max-w-7xl text-white px-4 pointer-events-none text-3xl text-center">
      <div className="flex mt-32 drop-shadow-2xl flex-col space-y-2">
        <h1 className="md:text-8xl text-5xl flex justify-start">Discover</h1>
        <p className="md:text-2xl text-xl flex justify-start ml-1">Stories from Real People</p>
      </div>
    </div>
  </BackgroundGradientAnimation>
  );
}
