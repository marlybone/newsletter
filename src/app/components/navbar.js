"use client"
import React from 'react';
import { FloatingNav } from "./floating-nav";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useState } from 'react'

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  
  useMotionValueEvent(scrollYProgress, "change", () => {
    // Apply styles as soon as scrolling down starts
    setVisible(scrollYProgress.get() > 0.05);
  });

  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/About",
    },
    {
      name: "Spotlight",
      link: "/Spotlight",
    },
  ];

  const navbarClasses = `opacity-100 sticky top-0 left-0 w-full z-50 h-16 backdrop-filter backdrop-blur-sm ${visible ? 'border-b-[1px] border-gray-350 shadow-sm' : 'border-gray-200'}`;

  return (
    <div className={navbarClasses}>
      <div className="relative w-full">
        <FloatingNav navItems={navItems} />
      </div>
    </div>
  );
};
