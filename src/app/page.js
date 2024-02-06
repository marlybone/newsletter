import Image from "next/image";
import Newsletter from "./components/newsletter";
import Hero from "./components/hero"
import { profile, author } from "../../sanity/sanity.query"
import { David_Libre } from "next/font/google";



export default async function Home() {

  return (
    <>
    {/* <Hero/> */}
    {/* <section className="mt-96 flex justify-center p-20">
      <Newsletter/>
      <section className="border flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 lg:mt-32 mt-20 mb-16">
      {profile &&
          profile.map((data) => (
            <div key={data._id} className="lg:max-w-2xl max-w-2xl">
              <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
                {data.title}
              </h1>
              <p className="text-base text-zinc-400 leading-relaxed">
                {data.name}
              </p>
            </div>
          ))}
</section>
      </section> */}
      {/* {profile &&
        profile.map((data) => (
          <div class="min-h-scree w-medium rounded-md mb-4 overflow-hidden relative inset-0 bg-slate-400 bg-opacity-20 backdrop-blur-md shadow-lg">
          <a href="/" className="relative block">
            <img className="block w-full" src={data.mainImage} alt={data.title}/>
          </a>
          <main className="m-4">
            <h1><a href="#">{data.title}</a></h1>
            <p>{data.smallDescription}</p>
            <div className="flex justify-between align-middle">
              <div className="coin-base">
                <h2>0.041 ETH</h2>
              </div>
              <div className="flex align-middle p-4">
                <p>{data.publishedAt}</p>
              </div>
            </div>
          </main>
          <div className="pb-6 border-t-2 flex align-middle p-1 m-4">
            <img src={data.authorImg} alt="avatar" className=" w-5 mr-2"/>
            <p><span><a href="#">{data.author}</a></span></p>
          </div>
        </div>
        // ))} */}
        <div class="min-h-screen flex justify-center items-center py-20">
        <div class="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
        {profile
        && profile.map((data) => (
            <div key={data._id} class="border-gray-300 border-[1px] rounded-md max-w-sm pb-2 overflow-hidden shadow-md transform transition bg-white">
              <div class="relative">
                <img class="w-full block" src={data.mainImage} alt={data.title}/>
                <p class="absolute top-0 bg-amber-500 text-gray-800 font-semibold py-1 px-3 rounded-br-md">NEW!</p>
              </div>
              <div className="p-4">
              <div className="flex justify-between my-2 text-sm space-x-2">
                  <span >Published<p className="font-semibold">{data.publishedAt.slice(0, 10)}</p></span>
                  <div className="flex self-end content-end justify-end">
                  <button href={data.slug} class="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded shadow-md">Read</button>
                  </div>
                </div>
              <h1 className="my-6 text-gray-800 text-2xl font-bold flex">{data.title}</h1>
              <h2 className="mb-14 my-4 text-sm font-light">{data.smallDescription}</h2>
              <div className="absolute bottom-0 w-full">
                <div class="flex space-x-4 my-4">
            <img src={data.authorImg} alt="avatar" className="w-8 rounded-full border border-gray-600"/>
            <p ><span className=" text-sm font-semibold"><a href="#">{data.author}</a></span></p>
            </div>
            </div>
            </div>
            </div>
        ))}
        </div>
     </div>
    </>
  );
}
/*

*/

