import React from "react";
import { BackgroundGradientAnimation } from "../components/herogradientbg";

export default function Hero() {
  return (
    <>
      <BackgroundGradientAnimation>
        <div className="absolute z-10 inset-0 flex justify-start content-start mx-auto max-w-5xl text-white px-4 text-3xl text-center p-2">
          <div className="flex mt-32 drop-shadow-2xl flex-col space-y-3">
            <h1 className="md:text-9xl text-7xl flex justify-start font-bold text-left font-[Merriweather] mt-8">
              Discover
            </h1>
            <p className="md:text-4xl text-1xl flex justify-start text-left font-[Syne]">
            Real Stories by Real People
            </p>
            <p className="md:text-xl text-sm md:w-3/5 w-3/6 text-left font-[Syne]">
            We shine a spotlight on bold individuals who have navigated career changes, showcasing their journeys of resilience, determination, and self-discovery
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
