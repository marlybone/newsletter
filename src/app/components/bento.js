import { cn } from "@utils/cn";
import React from "react";
import { motion } from "framer-motion";

export const BentoGrid = ({ className, children }) => {
  return (
    <motion.div
      className={cn(
        "p-2 m-2 grid md:auto-rows-[16rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto md:h-[80vh] h-[100vh] content-center font-[Syne]",
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
    <>
      <BentoGrid className="justify-center relative items-center font-[Syne]">
        {author.map((item, i) => (
          <BentoGridItem
            key={i}
            header={item.header}
            image={item.img}
          />
        ))}
      </BentoGrid>
      </>
  );
}