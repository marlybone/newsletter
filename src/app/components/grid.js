"use client"
import React, { useRef, useState } from "react";
import { Button } from "./moving-border";
import { BentoGridOne } from "./bento";
import { authorOne } from "./authors";
import { motion,
         AnimatePresence,
         useTransform,    
} from "framer-motion"

export function GridBackgroundDemo() {


const text = "Here We Have Some text. Here I'm going to talk about how great we are. We doing some cool things and here is where we talk about all the cool stuff we are doing. I wonder why when i put this on a new line it doesn't work? That's super weird but ok whatever. Here we talk about more cool stuff to enlarge the box slightly and to represent what our actual box size would look like once complete. I could of done Lorem ipsum instead right?"
const content = text.split(" ");



  const variants = {
    initial: {
      opacity: 0,
      x: -100
    },
    load: {
      x: 0,
      opacity: 1,
      transition: {
        type: "[0.17, 0.55, 0.55, 1]",
        duration: 1
      },
    },
  };

 const textVariants = {
  hidden: {
    opacity: 0 
  },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.01, delayChildren: 0.01 * (i - 0.8)
    },
  })
 } 

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
    }
 }


  

  return (
    <div
    className="min-h-screen bg-white bg-grid-black/[0.1] bg-grid- relative flex flex-col items-center justify-start align-start"
    >
       <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      <div className="md:flex-row flex-col flex h-screen items-center w-full">
      <AnimatePresence>
      <div className="relative py-4 w-2/3 space-y-6 md:self-start self-center md:mt-44 my-8 mx-20">

        <motion.h1 
        variants={variants}
        initial="initial"
        animate="load"
        className="text-5xl sm:text-6xl font-bold "
        >Our Journey</motion.h1>

        <motion.div 
        className=" relative py-4 border max-w-xl rounded-xl bg-white bg-dot-black/[0.1] shadow-custom border-transparent container "
        > 
         <motion.div
         
        className="absolute inset-x-0 w-1/2 mx-auto -top-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" 
        />
        <motion.div
        className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        <motion.div
                  variants={textVariants} 
                  initial="hidden"
                  animate="visible"
                  >
              <motion.div 
          className="flex flex-wrap w-auto relative mx-4 text-center overflow-hidden"
        >
          {content.map((word, i) => (
            <motion.span 
              variants={child} // Apply child variants
              key={i} 
              className="font-light text-lg mr-1"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
        </motion.div>
        </motion.div>
      </div>
      </AnimatePresence>
      <section className="flex justify-center">
      <Button />
      </section>
      </div>
      <section>
      <BentoGridOne author={authorOne} />
      </section>
    </div>
  );
}

