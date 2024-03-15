import React from "react";
import { Button } from "./moving-border";
import { BentoGridOne } from "./bento";
import { authorOne } from "./authors";
import { motion,
         useScroll,        
} from "framer-motion"

export function GridBackgroundDemo() {

  const variants = {
    initial: {
      z: -300,
      opacity: 0,
      scale: 0.5,
      x: -10,
    },
    load: {
      z: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        duration: 1,
      }
    }
  }

  const variantsText = {
    initial: {
      z: -300,
      opacity: 0,
    },
    load: {
      z: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1,
        stiffness: 100
      }
    }
  }

  return (
    <div className="min-h-screen mx-8 bg-white bg-grid-small-black/[0.1] relative flex flex-col items-center justify-start align-start">
      <div className="md:flex-row flex-col flex h-screen items-center w-full">
      <div className="relative py-4 self-center w-2/3 space-y-6">
        <h1 className="text-2xl sm:text-5xl font-bold ">Get to Know Our Journey</h1>
        <motion.div 
        variants={variants}
        initial="initial"
        whileInView="load"
        className="relative py-4 border max-w-xl rounded-xl bg-white bg-dot-black/[0.1] shadow-custom border-transparent"
        > 
        <motion.span
        className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        <motion.p
        variants={variantsText}
        initial="initial"
        whileInView="load"
        className="font-light text-lg mx-2 py-2">Here we are to talk about some cool stuff about cool things we're working on. Here we are to talk about some cool stuff about cool things we're working on. 
        Here we are to talk about some cool stuff about cool things we're working on. Here we are to talk about some cool stuff about cool things we're working on. 
        Here we are to talk about some cool stuff about cool things we're working on. Here we are to talk about some cool stuff about cool things we're working on. 
        </motion.p>
        </motion.div>
      </div>
      <section className=" flex justify-center">
      <Button />
      </section>
      </div>
      <section>
      <BentoGridOne author={authorOne} />
      </section>
    </div>
  );
}

