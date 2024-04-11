import { cn } from "@utils/cn";
import React from "react";
import { motion } from "framer-motion";
import { SocialElement } from "../components/sociallinks";

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

export function BentoGridOne({ author }) {
  return (
    <motion.div>
      <BentoGrid className="max-w-5xl md:mx-auto mx-6 auto-rows-[20rem] my-14 min-h-screen">
        {author.map((item, i) => (
          <BentoGridItem
            key={i}
            header={item.header}
            image={item.img}
            className={item.className}
          />
        ))}
        <SocialElement />
      </BentoGrid>
    </motion.div>
  );
}
