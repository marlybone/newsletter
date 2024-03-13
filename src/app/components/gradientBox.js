"use client";
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
  "from-red-300 to-yellow-400",
  "from-amber-300 to-sky-400",
  "from-sky-300 to-emerald-400",
  "from-emerald-300 to-fuchsia-400",
  "from-fuchsia-300 to-rose-400",
  "from-rose-300 to-violet-400",
  "from-violet-300 to-cyan-400",
  "from-cyan-300 to-teal-400",
  "from-teal-300 to-amber-400",
  "from-amber-400 to-sky-500",
  "from-sky-400 to-emerald-500",
  "from-emerald-400 to-fuchsia-500",
  "from-fuchsia-400 to-rose-500",
  "from-rose-400 to-violet-500",
  "from-violet-400 to-cyan-500",
  "from-cyan-400 to-teal-500",
  "from-teal-400 to-amber-500",
  "from-amber-500 to-sky-600",
  "from-sky-500 to-emerald-600",
  "from-emerald-500 to-fuchsia-600",
  "from-fuchsia-500 to-rose-600",
  "from-rose-500 to-violet-600",
  "from-violet-500 to-cyan-600",
  "from-cyan-500 to-teal-600",
  "from-teal-500 to-amber-600",
  "from-amber-600 to-sky-700",
  "from-sky-600 to-emerald-700",
  "from-emerald-600 to-fuchsia-700",
  "from-fuchsia-600 to-rose-700",
  "from-rose-600 to-violet-700",
  "from-violet-600 to-cyan-700",
  "from-cyan-600 to-teal-700",
  "from-teal-600 to-amber-700",
  "from-amber-700 to-sky-800",
  "from-sky-700 to-emerald-800",
  "from-emerald-700 to-fuchsia-800",
  "from-fuchsia-700 to-rose-800",
  "from-rose-700 to-violet-800",
  "from-violet-700 to-cyan-800",
  "from-cyan-700 to-teal-800",
  "from-teal-700 to-amber-800",
  "from-amber-800 to-sky-900",
  "from-sky-800 to-emerald-900",
  "from-emerald-800 to-fuchsia-900",
  "from-fuchsia-800 to-rose-900",
  "from-rose-800 to-violet-900",
  "from-violet-800 to-cyan-900",
  "from-cyan-800 to-teal-900",
  "from-teal-800 to-amber-900",
  "from-amber-900 to-sky-300",
  "from-sky-900 to-emerald-500",
];

export const TagGridItem = ({ category, className, name }) => {
  const [colorMap, setColorMap] = useState({});

  useEffect(() => {
    const newColorMap = {};
    if (Array.isArray(category)) {
      category.forEach((item) => {
        newColorMap[item.title] =
          gradientColors[Math.floor(Math.random() * gradientColors.length)];
      });
    }
    setColorMap(newColorMap);
  }, [category]);

  // use framer motion at a later date to play with animation

  return (
    <div className="group relative mx-auto max-w-5xl">
      <div
        className={`bg-gradient-to-r absolute -inset-[0.10rem] rounded-lg blur-[4px] transition-all opacity-25 duration-500 group-hover:opacity-100 group-hover:duration-200 ${className}`}
      />
      <div className="relative px-3 py-2 bg-white ring-3 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
        <h2>{category}</h2>
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export function TagGridOne({ category }) {
  const generateColorMap = useMemo(() => {
    const newColorMap = {};
    category.forEach((item) => {
      newColorMap[item.title] =
        gradientColors[Math.floor(Math.random() * gradientColors.length)];
    });
    return newColorMap;
  }, [category]);

  return category.map((item, i) => (
    <li key={i}>
      <TagGridItem
        category={item.title}
        className={generateColorMap[item.title]}
      />
    </li>
  ));
}
