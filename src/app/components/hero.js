import React from "react";
import { BackgroundGradientAnimation } from "../components/herogradientbg";

export default function Hero() {
  return (
    <>
    <BackgroundGradientAnimation>
    <div className="absolute z-50 inset-0 flex justify-start content-start mx-auto max-w-7xl text-white px-4 text-3xl text-center">
      <div className="flex mt-32 drop-shadow-2xl flex-col space-y-3">
        <h1 className="md:text-8xl text-5xl flex justify-start font-bold text-left">Discover</h1>
        <p className="md:text-2xl text-xl flex justify-start text-left">Stories from Real People</p>
        <p className="md:text-lg text-sm md:w-1/3 w-2/4 text-left">
        We cast a spotlight on the bold individuals who've navigated career changes, showcasing their journeys of resilience, determination, and self-discovery.
        </p>
        <button className="border self-start flex cursor-pointer text-sm font-medium relative border-neutral-200 text-white px-4 py-2 rounded-full w-24 shadow-custom justify-start">
          <span>Subscribe</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </button>
      </div>
    </div>
  </BackgroundGradientAnimation>
  </>
  );
}
