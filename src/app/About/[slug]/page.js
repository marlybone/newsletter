"use client"
import React from "react";
import { useState } from "react";
import { Button } from "../../components/moving-border";

export default function About() {
  return (
    <div className="container mt-44 min-h-screen max-w-5xl mx-auto">
      <section>
        <div className="flex justify-center mb-12 mt-10">
            <div>
                <h1 className="text-4xl">The Team</h1>
            </div>
        </div>
    <Button/>
      </section>
    </div>
  );
}
