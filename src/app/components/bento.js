import { cn } from "@utils/cn";
import React from "react";
import { motion } from "framer-motion";
import { SocialElement } from "../components/sociallinks";
import styles from "./moving-border.module.css"

export const BentoGrid = ({ className, children }) => {
  return (
    <motion.div
      className={cn(
        "grid md:auto-rows-[16rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto",
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
    <motion.div className={styles.bentoWrapper}>
      <h1 className="text-5xl max-w-4xl flex justify-center">About Me</h1>
      <BentoGrid className="md:mx-auto mx-6 auto-rows-[15rem] my-10">
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
