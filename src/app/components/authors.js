import { SkeletonOne, SkeletonTwo, SkeletonThree, SkeletonFour } from "./bentoskeleton"

export const authors = [
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
          img: "/sapphire.jpg",
    }
];

export const authorOne =  [
    {
      className: "md:col-span-2",
      header: <SkeletonOne />,
    },
      {
          header: <SkeletonTwo />,
          className: "md:col-span-1",
        },
    ];
  
  export const authorTwo = [
    {
      className: "md:col-span-1",
      header: <SkeletonThree />,
    },
      {
          header: <SkeletonFour />,
          className: "md:col-span-1",
        },
  ]

 