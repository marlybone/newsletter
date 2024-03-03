import { cn } from "@utils/cn";
import { motion } from "framer-motion";
import React from "react";
import { SkeletonOne, SkeletonTwo, SkeletonThree, SkeletonFour } from "./bentoskeleton"

 
export const BentoGrid = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};
 
export const BentoGridItem = ({
  header,
  image,
}) => {
  return (
   <>
    {header}
    {image}
   </>
  );
};


  export function BentoGridOne({author}) {
    return (
        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] mt-12 backdrop-blur-sm ">
        {author.map((item, i) => (
            <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            image={item.img}
            className={i === 1|| i === 2 ? "md:col-span-2" : ""}
            />
        ))}
       </BentoGrid>
    );
  }


const authorOne =  [
  {
    className: "md:col-span-2",
    header: <SkeletonOne />,
  },
    {
        header: <SkeletonTwo />,
        className: "md:col-span-1",
      },
  ];

const authorTwo = [
  {
    className: "md:col-span-1",
    header: <SkeletonThree />,
  },
    {
        header: <SkeletonFour />,
        className: "md:col-span-1",
      },
]

