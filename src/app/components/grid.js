"use client";
import React from "react";
import { Button } from "./moving-border";
import { motion } from "framer-motion";
import { SkeletonSix } from "./bentoskeleton";

export function GridBackgroundDemo() {
  const text =
    "At 35, I decided to transition to a career in tech. I've always loved technology and have been a computer nerd my entire life, but it never ended up being my career. Determined to make the change, I began my journey with freeCodeCamp. I maintained my day job, and in the evenings, I pushed code to GitHub and absorbed as much as I could through online resources, LeetCode, and hands-on experimentation. I consider myself a developer, though I haven't officially landed my first job yet. Currently, I focus on realising my own ideas and projects. Despite my late entry onto the tech scene I've promised myself I will make it in this industry";
  const content = text.split(" ");

  const variants = {
    initial: {
      opacity: 0,
      x: -100,
    },
    load: {
      x: 0,
      opacity: 1,
      transition: {
        type: "[0.17, 0.55, 0.55, 1]",
        duration: 1,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: -400,
    },
    visible: (i = 1) => ({
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.01,
        delayChildren: 0.01 * (i - 0.8),
      },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      x: -5,
      transition: {
        type: "[0.17, 0.55, 0.55, 1]",
        damping: 10,
        stiffness: 100,
      },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "[0.17, 0.55, 0.55, 1]",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="bg-white bg-grid-black/[0.1] relative flex font-Syne mx-2">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      <div className="flex w-full">
        <div className="md:flex-row flex-col flex items-center w-full">
          <div className="relative py-4 space-y-4 md:self-start self-center md:mt-44 md:my-8 mt-36">
            <motion.h1
              variants={variants}
              initial="initial"
              animate="load"
              className="lg:text-[80px] text-[60px] font-semibold"
            >
              My Journey
            </motion.h1>
            <div className="flex md:flex-row flex-col space-x-8 space-y-4">
              <motion.div
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1.2, type: "spring", damping: 10 }}
                className="relative z-10 py-4 max-w-2xl bg-white bg-dot-black/[0.1] border-transparent shadow-custom drop-shadow-2xl md:w-5/6 h-fit mb-6"
              >
                <SkeletonSix />
                <motion.div
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div className="flex flex-wrap w-auto relative mx-4 text-center overflow-hidden">
                    {content.map((word, i) => (
                      <motion.span
                        variants={child}
                        key={i}
                        className="font-[Syne] text-[21px] leading-[1.45] mr-1 font-weight-[25]"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
