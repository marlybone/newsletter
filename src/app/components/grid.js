"use client"
import React, { useRef, useState } from "react";
import { Button } from "./moving-border";
import { BentoGridOne } from "./bento";
import { authorOne } from "./authors";
import { motion,
         useScroll,    
         useTransform,
         useMotionValue,
         useInView,
         MotionConfig,
         AnimatePresence    
} from "framer-motion"
import { type } from "os";

export function GridBackgroundDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [isTilted, setIsTilted] = useState(false);





  const variants = {
    initial: {
      opacity: 0,
      x: -100
    },
    load: {
      x: 0,
      opacity: 1,
      transition: {
        type: "[0.4,0,0.58,1]",
        duration: 1
      },
    },
  };


  

  return (
    <MotionConfig transtion ={{ duration: 0.5, type: "spring"}}>
      <AnimatePresence>
    <motion.div
    className="min-h-screen bg-white bg-grid-black/[0.1] bg-grid- relative flex flex-col items-center justify-start align-start"
    >
       <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      <div className="md:flex-row flex-col flex h-screen items-center w-full">
      <div className="relative py-4 self-center w-2/3 space-y-6">
        <motion.h1 
        variants={variants}
        initial="initial"
        animate="load"
        className="text-2xl sm:text-5xl font-bold "
        >Our Journey</motion.h1>
        <motion.div
        style={{ 
          transform: "rotateY(10deg) rotateX(20deg)",
          transformStyle: "preserve-3d",
          background: "bg-violet-500 rounded[24px]"
        }}
        >
        <motion.div 
        style={{ 
          transformStyle: "preserve-3d",
          transform: "translateZ(30px), translateY(-8px)"
        }}
        transition={{
          repeatType: "mirror"
        }}
        initial={{ rotateX: [5, -5], rotateY: 0, translateZ: 0 }} // No transformation in normal state


        className=" relative py-4 border max-w-xl rounded-xl bg-white bg-dot-black/[0.1] shadow-custom border-transparent"
        > 
         <motion.span
        className="absolute inset-x-0 w-1/2 mx-auto -top-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        <motion.span
        className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        <motion.p
        className="font-light text-lg mx-2 py-2">Here we are to talk about some cool stuff about cool things we're working on. Here we are to talk about some cool stuff about cool things we're working on. 
        Here we are to talk about some cool stuff about cool things we're working on. Here we are to talk about some cool stuff about cool things we're working on. 
        Here we are to talk about some cool stuff about cool things we're working on. Here we are to talk about some cool stuff about cool things we're working on. 
        </motion.p>
        </motion.div>
        </motion.div>
      </div>
      <section className=" flex justify-center">
      <Button />
      </section>
      </div>
      <section>
      <BentoGridOne author={authorOne} />
      </section>
    </motion.div>
    </AnimatePresence>
    </MotionConfig>
  );
}

