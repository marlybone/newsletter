"use client";
import React from "react";
import { FloatingNav } from "./floating-nav";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import SearchBar from "./searchbar";

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
          <img
            src="/super.png"
            className="w-16 h-14 object-cover rounded-full mr-2"
            alt="logo"
          ></img>
          <div className="hidden md:block self-center font-bold text-xl">
            <span className={`text-black  font-[Lilita] text-2xl font-thin`}>MINIMARVELS</span>
          </div>
          <div>
            <FloatingNav navItems={navItems} />
          </div>
        </div>
        <SearchBar />
      </div>
    </div>
  );
}
