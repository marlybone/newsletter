"use client";
import React from "react";
import { Button } from "./moving-border";
import { motion } from "framer-motion";
import { SkeletonSix } from "./bentoskeleton";

export function GridBackgroundDemo() {
  const text =
    "Here We Have Some text. Here I'm going to talk about how great we are. We doing some cool things and here is where we talk about all the cool stuff we are doing. I wonder why when i put this on a new line it doesn't work? That's super weird but ok whatever. Here we talk about more cool stuff to enlarge the box slightly and to represent what our actual box size would look like once complete. I could of done Lorem ipsum instead right?";
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
    <div className="min-h-screen bg-white bg-grid-black/[0.1] relative flex">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      <div className="flex md:min-h-screen w-full">
      <div className="md:flex-row flex-col flex md:min-h-screen items-center w-full">
          <div className="relative py-4 space-y-4 md:self-start self-center md:mt-44 md:my-8 mt-36  min-h-screen">
            <motion.h1
              variants={variants}
              initial="initial"
              animate="load"
              className="text-5xl sm:text-6xl font-bold "
            >
              Our Journey
            </motion.h1>
            <div className="flex md:flex-row flex-col space-x-8 space-y-4">
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.2, type: "spring", damping: 10 }}
              className="relative py-4 max-w-2xl bg-white bg-dot-black/[0.1] border-transparent shadow-custom drop-shadow-2xl md:w-5/6 h-fit"
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
                      className="font-light text-lg mr-1"
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
