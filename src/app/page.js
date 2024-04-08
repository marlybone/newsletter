import Newsletter from "./components/newsletter";
import Hero from "./components/hero"
import React from "react";
import RecentPosts from "./components/recentposts";
import { FadeIn } from "./components/fadein"
import ContactForm from "./components/contact";
import styles from "./components/moving-border.module.css"

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
      <div id="newsletter" className={`${styles.wrapper} bg-gradient-to-tr from-sky-300 to-rose-300`}>
      <FadeIn>
        <Newsletter />
      </FadeIn>
      </div>
      <section>
        <div className="bg-gray-50 min-h-screen">
        <ContactForm/>
        </div>
      </section>
    </>
  );
}
/*

*/
