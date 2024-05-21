"use client";
import React from "react";
import { GridBackgroundDemo } from "./../../components/grid";
import { BentoGridOne } from "../../components/bento";
import { authorOne } from "../../components/authors";
import { FadeIn } from "../../components/fadein";
import styles from "../about.module.css"

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
