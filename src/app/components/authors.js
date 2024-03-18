import {
  SkeletonOne,
  SkeletonTwo,
  SkeletonThree,
  SkeletonFour,
  SkeletonFive,
} from "./bentoskeleton";

export const authors = [
  {
    id: "0",
    url: "/mainimg.webp",
    name: "Marlon Stevenson",
    color:
      "bg-gradient-to-r from-violet-700 to-teal-400 bg-radial bg-opacity-60 h-20 w-20 flex items-center justify-center rounded-full blur transition-all",
    slug: "/About/marlon-stevenson",
    bio: "I'm a self-taught developer, tech enthusiast, and avid learner with a deep interest in science, technology, and games. His curiosity and passion for learning have led him to create this site as a platform to gain insights from individuals who have successfully transitioned to new careers, especially in the tech industry. Marlon is dedicated to continuous growth and self-improvement, and he believes that sharing experiences and learning from others is a valuable way to achieve personal and professional development.",
    img: "/bgimg.webp",
    title: "Founder & Author",
    gradient: "from-sky-700 via-teal-300 to-cyan-600",
  },
  // {
  //   id: "1",
  //   url: "/bgimg.webp",
  //   name: "Carlos Rimba",
  //   color:
  //     "bg-gradient-to-r from-sky-700 to-teal-400 bg-radial bg-opacity-90 h-20 w-20 flex items-center justify-center rounded-full blur transition-all",
  //   slug: "/About/carlos-rami",
  //   bio: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet. lorem ipsum dolor sit amet lorem ipsum dolor sit amet. lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet.",
  //   img: "/sapphire.jpg",
  //   title: "Co-Founder, Author",
  //   gradient: "from-sky-700 via-cyan-300 to-teal-600",
  // },
];

export const authorOne = [
  {
    className: "md:col-span-2",
    header: <SkeletonOne />,
  },
  {
    header: <SkeletonTwo />,
    className: "md:col-span-1",
  },
  {
    header: <SkeletonFive />,
    className: "md:col-span-1",
  },
];

export const authorTwo = [
  {
    className: "md:col-span-2",
    header: <SkeletonThree />,
  },
  {
    header: <SkeletonFour />,
    className: "md:col-span-1",
  },
  {
    header: <SkeletonFive />,
    className: "md:col-span-1",
  },
];
