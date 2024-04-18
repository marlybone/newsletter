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
import styles from "./moving-border.module.css";

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
      y: 250,
    },
    animate: {
      y: 0,
      transition: {
        type: "spring",
        duration: 1,
      },
    },
  };

  const authorOneVariant = {
    initial: {
      opacity: 0,
    },
    load:{
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.8,
      },
    },
  };

  const child = {
    initial: {
      opacity: 0,
      y: 200,
    },
    animate: {
      opacity: 1,
      y: 30,
      transition: {
        type: "spring",
        stiffness: 50,
        duration: 1.5,
        delay: 2,
      },
    },
  };

  const floatVariant = {
    initial: {
      y: 0,
      boxShadow: "0 5px 15px 0px rgba(0,0,0,0.6)",
    },
    animate: {
      y: [0, -40, 0],
      boxShadow: ["0 5px 15px 0px rgba(0,0,0,0.6)", "0 25px 15px 0px rgba(0,0,0,0.2)", "0 5px 15px 0px rgba(0,0,0,0.6)"],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        damping: "15"
      }
    }
  }

  return (
    <LayoutGroup>
      <motion.div variants={authorOneVariant} initial="initial" animate="load">
        <div className="flex md:flex-row flex-col">
          {authors.map((item, i) => (
            <div key={i} className="flex flex-col mb-16 mx-8">
              <motion.div
              initial="initial"
              animate="animate"
              variants={floatVariant}
              className="flex flex-col self-center rounded-full">
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
                      "relative backdrop-blur-xl flex justify-center w-full h-full text-sm antialiased",
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
              <div className="flex flex-col mt-8">
                <div className="relative mx-auto bg-transparent">
                  <div className="absolute inset-0 bg-gray-100 bg-opacity-0 backdrop-blur-sm rounded-xl"></div>
                  <motion.div
                    initial="initial"
                    animate="animate"
                    variants={variants}
                    className={`${styles.blurBackdrop}`}
                  >
                    <motion.h2 className="font-bold mx-12 my-1">
                      {item.name}
                    </motion.h2>
                    <motion.h3 className="font-semibold text-center text-sm">
                      {item.title}
                    </motion.h3>
                  </motion.div>
                  <motion.div
                    initial="initial"
                    animate="animate"
                    variants={child}
                    className="h-28 w-28 z-1 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 shadow-custom drop-shadow-md absolute -inset-x-20 -inset-y-10"
                  ></motion.div>
                  <motion.div
                    initial="initial"
                    animate="animate"
                    variants={child}
                    className="h-12 w-12 z-1 rounded-full bg-gradient-to-r from-blue-800 to-indigo-900 absolute shadow-custom drop-shadow-md inset-x-24 inset-y-7"
                  ></motion.div>
                  <motion.div
                    initial="initial"
                    animate="animate"
                    variants={child}
                    className="h-10 w-10 z-10 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400  absolute inset-x-48 shadow-custom drop-shadow-md -inset-y-10"
                  ></motion.div>
                </div>
              </div>
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
