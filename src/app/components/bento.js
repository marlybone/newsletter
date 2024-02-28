import { cn } from "@utils/cn";

 
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
  icon,
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-gray-200 hover:border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    > {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
            {description}
        </div>
      </div>
    </div>
  );
};

const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.3] bg-neutral-100 dark:bg-black"></div>
  );

  export function BentoGridOne() {
    return (
        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[18rem] mt-12 backdrop-blur-sm">
        {authorOne.map((item, i) => (
            <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={i === 1|| i === 2 ? "md:col-span-2" : ""}
            />
        ))}
       </BentoGrid>
    );
  }

  export function BentoGridTwo() {
    return (
        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[25rem]">
          <BentoGridItem/>
          <BentoGridItem/>
          <BentoGridItem/>
          <BentoGridItem/>
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
          img: "/sapphire.jpg",
    }
];

const authorOne =  [
    {
      title: "The Dawn of Innovation",
      description: "Explore the birth of groundbreaking ideas and inventions.",
      className: "md:col-span-2",
      header: <Skeleton />,
    },
    {
      title: "The Digital Revolution",
      description: "Dive into the transformative power of technology.",
      className: "md:col-span-1",
      header: <Skeleton />,
    },
    {
      title: "The Art of Design",
      description: "Discover the beauty of thoughtful and functional design.",
      className: "md:col-span-1",
      header: <Skeleton />,
    },
    {
      title: "The Power of Communication",
      description:
        "Understand the impact of effective communication in our lives.",
      className: "md:col-span-2",
      header: <Skeleton />,
    },
  ];

const authorTwo = [

]