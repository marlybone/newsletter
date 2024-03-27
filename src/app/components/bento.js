import { cn } from "@utils/cn";
import React, { useRef} from "react";
import { motion, useInView } from "framer-motion"
import { SocialElement } from "../components/sociallinks"; 
import { authors } from "../components/authors";

export const BentoGrid = ({ className, children }) => {
  

  return (
    <motion.div
      className={cn(
        "grid md:auto-rows-[16rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto w-screen",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const BentoGridItem = ({ header, image }) => {
  return (
    <>
      {header}
      {image}
    </>
  );
};

export function BentoGridOne({ author, authors }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
    ref={ref}
    style={{
      scale: isInView ? 1 : 0.8,
      opacity: isInView ? 1 : 0,
      y: isInView ? 25 : 200,
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
    }}
    >
    <BentoGrid className="max-w-5xl md:mx-auto mx-6 auto-rows-[20rem] my-14 min-h-screen">
      {author.map((item, i) => (
        <BentoGridItem
          key={i}
          header={item.header}
          image={item.img}
          className={item.className}
        />
      ))}
    <SocialElement/>
    </BentoGrid>
    </motion.div>
  );
}
