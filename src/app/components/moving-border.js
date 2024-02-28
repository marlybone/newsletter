"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
  LayoutGroup
} from "framer-motion";
import { useRef } from "react";
import { cn } from "../../../utils/cn";
import { usePathname } from 'next/navigation'
import { authors } from './authors'
 
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
    const [selectedTab, setSelectedTab] = useState();
    const pathname = usePathname();
    
    useEffect(() => {
        const author = authors.find(a => a.slug === pathname);
        if (author) {
            const authorId = author.id;
            setSelectedTab(authors[authorId])
        }
    }, [])

    return (
        <LayoutGroup>
        <div className="flex flex-col">
            <div className="flex flex-row space-x-6 justify-center">
          {authors.map((item) => (
            <Component
              key={item.id}
              className={cn(
                "shadow-custom relative h-44 w-44 rounded-full p-[4px] overflow-hidden",
                containerClassName
              )}
              style={{
                borderRadius: borderRadius,
              }}
              {...otherProps}
            >
              <div
                className="absolute inset-0"
                style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
              >
                <MovingBorder
                  duration={duration}
                  rx="30%"
                  ry="30%"
                  isActive={item === selectedTab}
                >
                      {item == selectedTab && (
                <div className={cn(`${item.color}`)}></div>
              )}

                </MovingBorder>
              </div>
    
              <div
                className={cn(
                  "relative backdrop-blur-xl flex items-center justify-center w-full h-full text-sm antialiased",
                  className
                )}
                style={{
                  borderRadius: `calc(${borderRadius} * 0.96)`,
                }}
              >
                <img
                  key={item.name}
                  src={item.url}
                  onClick={() => {
                    setSelectedTab(item);
                  }}
                  className={`${item === selectedTab ? "selected" : ""} h-22 w-22 rounded-full`}
                />
              </div>
            </Component>
          ))}
          </div>
            {selectedTab ? (
             <Component >
        <div key={selectedTab.id} className="text-center md:text-start m-28">
          <div className="md:flex-row flex flex-col space-x-2">
            <img
              className="shadow-custom rounded-2xl h-96 w-96 backdrop-blur-xl"
              src={selectedTab.img}
              alt="Background image"
            />
            <div className="font-semibold relative flex flex-col">
              <div className="self-start">
              <h1>{selectedTab.name}</h1>
              </div>
              <div>
              <p className="self-center flex align-center">
                {selectedTab.bio}
              </p>
              </div>
            </div>
          </div>
        </div>
            </Component>
) : (
    <div></div>
)}
        </div>
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
    if (!isActive) return; 

    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });
 
  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y
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