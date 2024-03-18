"use client";
import React from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
  LayoutGroup,
} from "framer-motion";
import { useRef } from "react";
import { cn } from "../../../utils/cn";
// import { usePathname } from "next/navigation";
import { authors } from "./authors";
import { SkeletonSix } from './bentoskeleton'

export function Button({
  borderRadius = "7rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  isActive,
  isSelected,
  ...otherProps
}) {
  // const [selectedTab, setSelectedTab] = useState();
  // const pathname = usePathname();

  // useEffect(() => {
  //   const author = authors.find((a) => a.slug === pathname);
  //   if (author) {
  //     const authorId = author.id;
  //     setSelectedTab(authors[authorId]);
  //   }
  // }, [pathname]);


  const variants = {
    initial: {
      opacity: 0,
      y: 150,
      scale: 0,
      transition:{
        type: "spring",
        duration: 1,
      },
    },
    animate: {
      opacity: 1,
      y: -15,
      scale: [1.5, 1],
      transition: {
        type: "spring",
        duration: 1.2,
      },
    },
  };

  const authorOneVariant = {
    initial: {
      opacity: 0,
    },
    load: {
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.8,
      },
    },
  };



  return (
    <LayoutGroup>
      <motion.div
        variants={authorOneVariant}
        initial="initial"
        animate="load"
      >
        <div className="flex md:flex-row flex-col">
          {authors.map((item) => (
            <div key={item.id} className="flex flex-col mb-16 mx-8 self-start">
              <motion.div className="flex flex-col self-center">
                <Component
                  className={cn(
                    "shadow-custom relative h-52 w-52 rounded-full p-[4px] overflow-hidden",
                    containerClassName,
                  )}
                  style={{
                    borderRadius: borderRadius,
                  }}
                  {...otherProps}
                >
                  <motion.div
                    className="absolute inset-0"
                    style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
                  >
                    <MovingBorder
                      duration={duration}
                      rx="30%"
                      ry="30%"
                      // isActive={item === selectedTab}
                    >
                      {/* {item === selectedTab && ( */}
                      <div className={cn(`${item.color}`)}></div>
                      {/* // )} */}
                    </MovingBorder>
                  </motion.div>
                  <div
                    className={cn(
                      "relative backdrop-blur-xl flex  justify-center w-full h-full text-sm antialiased",
                      className,
                    )}
                    style={{
                      borderRadius: `calc(${borderRadius} * 0.96)`,
                    }}
                  >
                    <motion.img
                      variants={authorOneVariant}
                      initial="initial"
                      animate="load"
                      src={item.url}
                      // onClick={() => {
                      //   setSelectedTab(item);
                      // }}
                      className={`h-22 w-22 rounded-full`}
                    />
                  </div>
                </Component>
              </motion.div>
              <motion.div
                className="flex flex-col mt-8"
              >
                
                <div className="relative mx-auto">
                      <motion.div
                  initial="initial"
                  animate="animate"
                  variants={variants}
                  className="relative py-4 max-w-xl bg-white bg-dot-black/[0.1] border-transparent shadow-custom drop-shadow-2xl text-center self-start"

                  >
                    <SkeletonSix/>
                    <motion.h2 className="font-bold mx-12 my-2">{item.name}</motion.h2>
                    <motion.h3 className="font-semibold text-sm">{item.title}</motion.h3>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </LayoutGroup>
  );
}

export const MovingBorder = ({
  children,
  duration = 2000,
  rx,
  ry,
  isActive,
  ...otherProps
}) => {
  const pathRef = useRef();
  const progress = useMotionValue(0);
  useAnimationFrame((time) => {
    // if (!isActive) return;

    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x,
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y,
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

