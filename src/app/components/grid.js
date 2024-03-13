import React from "react";
import { Button } from "./moving-border";

export function GridBackgroundDemo() {
  return (
    <div className="min-h-screen w-full bg-white bg-grid-small-black/[0.2] relative flex items-center justify-start flex-col align-start ">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]"></div>
      <p className="mt-20 text-2xl sm:text-7xl font-bold relative z-20 bg-clip-text py-8 mb-20">
        Get To Know Us
      </p>
      <Button />
    </div>
  );
}
