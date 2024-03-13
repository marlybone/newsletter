"use client";
import React from "react";
import { useState } from "react";
import { Button } from "../../components/moving-border";
import { GridBackgroundDemo } from "./../../components/grid";

export default function About() {
  return (
    <>
      <div className="container my-16 min-h-screen max-w-7xl mx-auto">
        <GridBackgroundDemo />
        <section>
          <div className="flex justify-center mb-12 mt-10"></div>
        </section>
        {/* <section>
        <div>From Passion to Profession: We Share Your Journey to Success</div>
      </section> */}
      </div>
    </>
  );
}
