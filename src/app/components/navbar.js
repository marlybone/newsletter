"use client"
import React from 'react';
import { FloatingNav } from "./floating-nav";
import {
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useState } from 'react'
import SearchBar from './searchbar';

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
      link: "/About/about",
    },
    {
      name: "Spotlight",
      link: "/Spotlight",
    },
  ];

  const navbarClasses = `flex-row opacity-100 fixed top-0 left-0 w-full z-50 h-16 ${visible ? 'border border-transparent shadow-md backdrop-filter backdrop-blur-sm' : 'border-gray-200'}`;

  return (
    <div className={navbarClasses}>
      <div className="max-w-screen-xl container mx-auto flex justify-between items-end p-2">
        <div className='flex'>
          <img src="super.png" className="w-16 h-14 object-cover rounded-full mr-2" alt="logo"></img>
          <div className='hidden md:block self-center font-bold text-xl'><span>Mini Mini</span></div>
          <div>
            <FloatingNav navItems={navItems} />
          </div>
        </div>
          <SearchBar/>
      </div>
    </div>
  );
  }