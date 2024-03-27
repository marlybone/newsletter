"use client"
import React from "react";
import { GridBackgroundDemo } from "./../../components/grid";
import { BentoGridOne } from "../../components/bento"; 
import { authorOne } from "../../components/authors";

export default function About() {
  return (
    <>
    <div>
    <div className="my-4 h-screen w-full flex flex-col items-center">
    <GridBackgroundDemo/>
    </div>
    <div className="min-h-screen">
    <BentoGridOne author={authorOne} />
    </div>
    </div>
    </>
  );
}
