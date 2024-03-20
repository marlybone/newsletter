import { cn } from "@utils/cn";
import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform  } from "framer-motion"

export const BentoGrid = ({ className, children }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const variants = {
    initial: {},
    animate: {},
  }

  return (
    <motion.div
    ref={ref}
    style={{ }}
      className={cn(
        "grid md:auto-rows-[16rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto w-screen min-h-screen",
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

export function BentoGridOne({ author }) {
  return (
    <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[20rem] my-14">
      {author.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          image={item.img}
          className={item.className}
        />
      ))}
    </BentoGrid>
  );
}
