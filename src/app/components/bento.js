import { cn } from "@utils/cn";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

 
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
  className,
  title,
  description,
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

const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.3] bg-neutral-100 dark:bg-black"></div>
  );

  export function BentoGridOne() {
    return (
        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[18rem] mt-12 backdrop-blur-sm ">
        {authorOne.map((item, i) => (
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


  export const author = [
    {id: "0",
     url: "/mainimg.jpg",
      name: "Marlon Stevenson",
       color: "h-20 w-20 opacity-[0.9] bg-[radial-gradient(var(--fuchsia-600)_40%,transparent_60%)]",
        slug: "/About/marlon-stevenson",
         bio: "I'm a self-taught developer, tech enthusiast, and avid learner with a deep interest in science, technology, and games. His curiosity and passion for learning have led him to create this site as a platform to gain insights from individuals who have successfully transitioned to new careers, especially in the tech industry. Marlon is dedicated to continuous growth and self-improvement, and he believes that sharing experiences and learning from others is a valuable way to achieve personal and professional development.",
          img: "/bgimg.jpg",
    },
    {id: "1",
     url: "/bgimg.jpg",
      name: "Carlos Rimba",
       color: "h-20 w-20 opacity-[0.9] bg-[radial-gradient(var(--sky-600)_40%,transparent_60%)]",
        slug: "/About/carlos-rami",
         bio: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet. lorem ipsum dolor sit amet lorem ipsum dolor sit amet. lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet.",
          img: (<img src="/sapphire.jpg" />),
    }
];

const SkeltonOne = () => {


  return (
    <motion.div>


    </motion.div>

  )
}

const SkeletonTwo = () => {
  const variants = {
    visible: ({
      opacity: 1,
      transition: {
        duration: 1,
        ease: "linear",
      },
    }), 
    hidden: { opacity: 0 },
    hover: {
      y: 4
    },
  }
  
   
    return (
      <motion.div
      className="border-gray-200 row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-black dark:border-white/[0.2] bg-white border justify-between flex flex-col space-y-4"
      layout
      initial="hidden"
      animate="visible"
      variants={variants}
      whileHover="hover"
      >
        <motion.img
        className="w-full h-full object-cover rounded-xl"
        src="/bgimg.jpg"
        >
       </motion.img>
       </motion.div> 
    );
  };

const authorOne =  [
    {
        header: <SkeletonTwo />,
        className: "md:col-span-1",
      },
      {
        className: "md:col-span-1",
        // header: <SkeletonOne />

      }
  ];

const authorTwo = [

]
