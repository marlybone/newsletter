import { cn } from "@utils/cn";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Link from "next/link";

 
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
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: { duration: 2, ease: "easeInOut" },
    },
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
  };

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
        I'm interested in learning about the remarkable journeys of people
      </motion.p>
      <motion.p
      variants={variantOne}
      >
        who've navigated career shifts. My own transition into development
      </motion.p>
      <motion.p
      variants={variantOne}
      >
        sparked this passion. I want to understand their motivations,
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
    <motion.div>
     <motion.div
     className="text-center mb-4 font-semibold text-lg font-mono"
     variants={variantOne}
     >
      Let's Connect
      </motion.div> 
    <motion.div
        variants={variantOne}
        className="flex flex-row rounded-full border border-gray-300 items-center space-x-2 bg-white mb-2 mx-2 justify-center "
      >
        <Link         href="https://www.linkedin.com/in/marlon-stevenson-510738109/"
        target="_blank">
        <motion.svg
        className=""
        initial="hidden"
        animate="visible"
        variants={variants}
        width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <motion.path  stroke="none" fill="none" variants={variants}/>
          <motion.path  d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" variants={variants}/>
          <motion.path  d="M8 11l0 5" variants={variants}/>
          <motion.path  d="M8 8l0 .01" variants={variants}/>
          <motion.path  d="M12 16l0 -5" variants={variants}/>
          <motion.path  d="M16 16v-3a2 2 0 0 0 -4 0" variants={variants}/>
        </motion.svg>
        </Link>
        <Link href="https://github.com/marlybone"
        target="_blank"
        >
        <motion.svg 
        initial="hidden"
        animate="visible"
        variants={variants}
        width="37" height="37" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" fill="white" strokeLinecap="round" strokeLinejoin="round">
        <motion.path stroke="none" d="M0 0h24v24H0z" fill="none" variants={variants}/>
        <motion.path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" variants={variants}/>
        </motion.svg>
        </Link>
        <Link href="https://twitter.com/mRockSwe"
        target="_blank"
        >
        <motion.svg 
        initial="hidden"
        animate="visible"
        variants={variants}
        width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <motion.path stroke="none" d="M0 0h24v24H0z" fill="none" variants={variants}/>
        <motion.path d="M4 4l11.733 16h4.267l-11.733 -16z" variants={variants}/>
        <motion.path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" variants={variants}/>
        </motion.svg>
        </Link>
      </motion.div>
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

