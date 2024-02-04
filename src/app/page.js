import Image from "next/image";
import Newsletter from "./components/newsletter";
import Hero from "./components/hero"
import { profile, author } from "../../sanity/sanity.query"



export default async function Home() {

  return (
    <>
    <Hero/>
    <section className="mt-96 flex justify-center p-20">
      {/* <Newsletter/> */}
      <section className="border flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 lg:mt-32 mt-20 mb-16">
      {profile &&
          profile.map((data) => (
            <div key={data._id} className="lg:max-w-2xl max-w-2xl">
              <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
                {data.title}
              </h1>
              {data.body.forEach((obj) => {
                })}
              <p className="text-base text-zinc-400 leading-relaxed">
                {author.name}
              </p>
            </div>
          ))}
           <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 lg:mt-32 mt-20 mb-16">
          <div key={author._id} className="lg:max-w-2xl max-w-2xl text-red-900">
            {author && author.map((auth) => (
              <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
                {auth.name}
                </h1>
            ))}
              </div>
</section>
</section>
      </section>
    </>
  );
}

