"use client";
import React from "react";
import { FloatingNav } from "./floating-nav";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", () => {
    setVisible(scrollYProgress.get() > 0.05);
  });

  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/About/about",
    },
    {
      name: "Spotlight",
      link: "/Spotlight",
    },
  ];

  const navbarClasses = `fixed top-0 left-0 w-full z-20 h-16 ${visible ? "border border-transparent shadow-md backdrop-filter backdrop-blur-sm" : "border-gray-200"}`;

  return (
    <div className={navbarClasses}>
      <div className="mx-auto flex justify-between items-end p-2 max-w-6xl">
        <div className="flex">
          <Image
            src="/super.png"
            className="w-16 h-14 object-cover rounded-full mr-2"
            alt="logo"
            quality={100}
            height={288}
            width={500}
          />
          <div className="hidden md:block self-center font-bold text-xl">
            <span className={`text-black font-[Syne] text-2xl`}>
              MINIMARVELS
            </span>
          </div>
          <div>
            <FloatingNav navItems={navItems} />
          </div>
        </div>
      </div>
    </div>
  );
}
