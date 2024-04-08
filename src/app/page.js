import Newsletter from "./components/newsletter";
import Hero from "./components/hero"
import React from "react";
import RecentPosts from "./components/recentposts";
import { FadeIn } from "./components/fadein"
import ContactForm from "./components/contact";

export default async function Home() {
  return (
    <>
    <div className="min-h-screen">
    <Hero/>
    </div>
  
    <div className="min-h-screen bg-gray-50">
    <FadeIn>
      <RecentPosts/>
      </FadeIn>
      </div>
      <div id="newsletter" className=" bg-gradient-to-tr from-sky-300 to-rose-300">
      <FadeIn>
        <Newsletter />
      </FadeIn>
      </div>
      <div className="min-h-screen bg-zinc-100 flex">
        <ContactForm/>
      </div>
    </>
  );
}
/*

*/
