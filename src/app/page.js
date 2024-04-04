import Newsletter from "./components/newsletter";
import Hero from "./components/hero"
import React from "react";
import RecentPosts from "./components/recentposts";
import { FadeIn } from "./components/fadein"

export default async function Home() {
  return (
    <>
    <div className="min-h-screen">
    <Hero/>
    </div>
  
    <div className="min-h-screen bg-gray-100">
    <FadeIn>
      <RecentPosts/>
      </FadeIn>
      </div>

      <FadeIn>
      <div id="newsletter">
        <Newsletter />
      </div>
      </FadeIn>
      <div className="min-h-screen">

      </div>
    </>
  );
}
/*

*/
