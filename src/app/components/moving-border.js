"use client";
import React from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
  LayoutGroup,
  useInView,
  useScroll,
} from "framer-motion";
import { useRef } from "react";
import { cn } from "../../../utils/cn";
// import { usePathname } from "next/navigation";
import { authors } from "./authors";

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
    ofscreen: {
      opacity: 0,
      y: -150,
      scale: 0.2,
    },
    onscreen: {
      opacity: 1,
      y: -20,
      scale: 1,
      rotateX: 0,
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

  const authorTwoVariant = {};

  return (
    <LayoutGroup>
      <motion.div
        variants={authorOneVariant}
        initial="initial"
        whileInView="load"
      >
        <div className="flex flex-row space-x-6 justify-center mb-20">
          {authors.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <motion.div className="flex flex-col items-center">
                <Component
                  className={cn(
                    "shadow-custom relative h-44 w-44 rounded-full p-[4px] overflow-hidden",
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
                      "relative backdrop-blur-xl flex items-center justify-center w-full h-full text-sm antialiased",
                      className,
                    )}
                    style={{
                      borderRadius: `calc(${borderRadius} * 0.96)`,
                    }}
                  >
                    <motion.img
                      variants={authorOneVariant}
                      initial="initial"
                      whileInView="load"
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
                className="flex flex-col items-center mt-4"
                initial="ofscreen"
                whileInView="onscreen"
                variants={variants}
              >
                <div className="group relative mx-auto items-center self-center justify-center">
                  <div
                    className={`bg-gradient-to-r ${item.gradient} absolute -inset-[0.10rem] rounded-lg blur-[4px] transition-all opacity-25 duration-500 group-hover:opacity-100 group-hover:duration-200`}
                  />
                  <motion.div className="relative px-4 py-4 bg-white ring-3 ring-gray-900/5 rounded-lg leading-none space-y-2 text-center">
                    <h2 className="font-bold">{item.name}</h2>
                    <h3 className="font-semibold text-sm">{item.title}</h3>
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
