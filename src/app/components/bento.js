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
        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] mt-12 backdrop-blur-sm ">
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

const SkeletonOne = () => {
  const variants = {
    visible: ({
      opacity: 1,
      transition: {
        duration: 1,
        ease: "linear",
        delay: 0.2
      },
      hidden: { opacity: 0 },
    })
  }

  const variantOne = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        type: "smooth",
        duration: 0.2,
      }
    },
    hidden: {
      y: -10,
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    }
  };

  return (
    <motion.div
    variants={variantOne}
    layout
    initial="hidden"
    animate="visible"
    className="border-gray-200 md:col-span-2 row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-black dark:border-white/[0.2] bg-white border justify-between flex flex-col space-y-4"
    >
      <motion.div
      variants={variantOne}
      className="font-semibold text-gray-800 mt-2 mx-1 text-center leading-relaxed font-mono"
      >
      <motion.p
      variants={variantOne}
      >
        I'm passionate about sharing the remarkable journeys of people
      </motion.p>
      <motion.p
      variants={variantOne}
      >
        who've navigated career shifts. My own transition into development
      </motion.p>
      <motion.p
      variants={variantOne}
      >
        sparked this passion. I'm interested in the motivations,
      </motion.p>
      <motion.p
      variants={variantOne}
      >
       challenges, and triumphs they've encountered. By telling their
      </motion.p>
      <motion.p
    variants={variantOne}
    >
    stories, I hope to inspire others exploring similar career transformations.
    </motion.p>
      </motion.div>
    </motion.div>

  )
}

const SkeletonTwo = () => {
  const variants = {
    visible: ({
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "linear",
        type: "smooth"
      },
    }), 
    hidden: { opacity: 0 },
  }
  
   
    return (
      <motion.div
      className="border-gray-200 row-span-1 md:col-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-black dark:border-white/[0.2] bg-white border justify-between flex flex-col space-y-4"
      layout
      initial="hidden"
      animate="visible"
      variants={variants}
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
    className: "md:col-span-2",
    header: <SkeletonOne />

  },
    {
        header: <SkeletonTwo />,
        className: "md:col-span-1",
      },
  ];

const authorTwo = [

]
