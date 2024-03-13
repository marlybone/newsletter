import { cn } from "@utils/cn";
import React from "react";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className,
      )}
    >
      {children}
    </div>
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
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] mt-12 backdrop-blur-sm ">
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
