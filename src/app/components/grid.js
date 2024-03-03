import React from "react";
import { Button } from "./moving-border";

export function GridBackgroundDemo() {
  return (
    <div className="h-[60rem] w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-start flex-col align-start">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]"></div>
      <p className="mt-20 text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text py-8">
        Team
      </p>
      <Button></Button>
    </div>
  );
}