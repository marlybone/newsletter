"use client"
import React from "react";
import { GridBackgroundDemo } from "./../../components/grid";
import { BentoGridOne } from "../../components/bento"; 
import { authorOne } from "../../components/authors";

export default function About() {
  return (
    <>
    <div>
    <div className="my-4 h-screen max-w-7xl w-full mx-auto flex flex-col justify-center">
    <GridBackgroundDemo/>
    </div>
    <BentoGridOne author={authorOne} />
    </div>
    </>
  );
}
