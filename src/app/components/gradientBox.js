"use client"
import React, { useState, useMemo, useEffect } from "react";

export const gradientColors = [
    "from-red-400 via-purple-500 to-yellow-500",
    "from-yellow-300 to-green-400",
    "from-green-500 to-blue-600",
    "from-blue-400 to-indigo-500",
    "from-indigo-300 to-purple-400",
    "from-purple-500 to-pink-600",
    "from-pink-400 to-red-500",
    "from-red-300 to-yellow-400",
    "from-yellow-500 to-green-600",
    "from-green-400 to-blue-500",
    "from-blue-300 to-indigo-400",
    "from-indigo-500 to-purple-600",
    "from-purple-400 to-pink-500",
    "from-pink-300 to-red-400",
    "from-red-500 to-yellow-600",
    "from-yellow-400 to-green-500",
    "from-green-300 to-blue-400",
    "from-blue-500 to-indigo-600",
    "from-indigo-400 to-purple-500",
    "from-purple-300 to-pink-400",
    "from-pink-500 to-red-600",
    "from-red-400 to-yellow-500",
    "from-yellow-300 to-green-400",
    "from-green-500 to-blue-600",
    "from-blue-400 to-indigo-500",
    "from-indigo-300 to-purple-400",
    "from-purple-500 to-pink-600",
    "from-pink-400 to-red-500",
    "from-red-300 to-yellow-400",
    "from-yellow-500 to-green-600",
    "from-green-400 to-blue-500",
    "from-blue-300 to-indigo-400",
    "from-indigo-500 to-purple-600",
    "from-purple-400 to-pink-500",
    "from-pink-300 to-red-400",
    "from-red-500 to-yellow-600",
    "from-yellow-400 to-green-500",
    "from-green-300 to-blue-400",
    "from-blue-500 to-indigo-600",
    "from-indigo-400 to-purple-500",
    "from-purple-300 to-pink-400",
    "from-pink-500 to-red-600",
    "from-red-400 to-yellow-500",
    "from-yellow-300 to-green-400",
    "from-green-500 to-blue-600",
    "from-blue-400 to-indigo-500",
    "from-indigo-300 to-purple-400",
    "from-purple-500 to-pink-600",
    "from-pink-400 to-red-500",
    "from-red-300 to-yellow-400"
];


export const TagGridItem = ({category, className}) => {
    const [colorMap, setColorMap] = useState({}); 

    useEffect(() => {
      const newColorMap = {};
      if (Array.isArray(category)) {
      category.forEach((item) => {
        newColorMap[item.title] = gradientColors[Math.floor(Math.random() * gradientColors.length)];
      });
    }
      setColorMap(newColorMap);
    }, [category]); 

    return (
    <div className='relative mx-auto max-w-5xl'>
    <div className={`bg-gradient-to-r absolute -inset-1 rounded-lg blur-sm opacity-50 ${className}`}   />
    <div className='relative px-3 py-2 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6'><h2>{category}</h2>
    </div>
    </div>
    )
}

export function TagGridOne({ category }) {
    const generateColorMap = useMemo(() => {
      const newColorMap = {};
      category.forEach((item) => {
        newColorMap[item.title] = gradientColors[Math.floor(Math.random() * gradientColors.length)];
      });
      return newColorMap;
    }, [category]); 
  
    return (
      category.map((item, i) => (
        <li key={i}>
          <TagGridItem category={item.title} className={generateColorMap[item.title]} />
        </li>
      ))
    );
  }