import Image from "next/image";
import Newsletter from "./components/newsletter";
import Hero from "./components/hero"
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
    <Hero/>
    <section className="mt-96 flex justify-center p-20">
      <Newsletter/>
      </section>
    </>
  );
}
