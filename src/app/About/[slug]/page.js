"use client";
import React from "react";
import { GridBackgroundDemo } from "./../../components/grid";
import { BentoGridOne } from "../../components/bento";
import { authorOne } from "../../components/authors";

export default function About() {
  return (
    <>
      <div className="">
        <div className={`my-4 flex flex-col items-center`}>
          <GridBackgroundDemo />
        </div>
        <div>
          <BentoGridOne author={authorOne} />
        </div>
      </div>
    </>
  );
}
