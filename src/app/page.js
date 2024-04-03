import Newsletter from "./components/newsletter";
import { profile } from "@sanity/sanity.query";
import Link from "next/link";
import Hero from "./components/hero"
import React from "react";
import RecentPosts from "./components/recentposts";

export default async function Home() {
  return (
    <>
    <div className="min-h-screen">
    <Hero/>
    </div>
    <div className="min-h-screen">
      <RecentPosts/>
      </div>
      <div>
        <Newsletter />
      </div>
    </>
  );
}
/*

*/
