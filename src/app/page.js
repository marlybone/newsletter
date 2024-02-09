import Image from "next/image";
import Newsletter from "./components/newsletter";
import Hero from "./components/hero"
import { profile, author } from "../../sanity/sanity.query"



export default async function Home() {

  return (
    <>
        <div class="min-h-screen flex justify-center items-center py-20">
        <div class="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
        {profile
        && profile.map((data) => (
            <div key={data._id} class="border-b border-transparent rounded-md max-w-sm pb-2 overflow-hidden shadow-custom transform transition bg-white">
              <div class="relative">
                <img class="w-full block" src={data.mainImage} alt={data.title}/>
                <p class="absolute top-0 bg-amber-500 text-gray-800 font-semibold py-1 px-3 rounded-br-md">NEW!</p>
              </div>
              <div className="p-4">
              <div className="flex justify-between my-2 text-sm space-x-2">
                  <span >Published<p className="font-semibold">{data.publishedAt.slice(0, 10)}</p></span>
                  <div className="flex self-end content-end justify-end">
                  <button href={`/article/data.currentSlug`} class="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded shadow-custom border border-transparent">Read</button>
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
     <div className=" mb-20">
     <Newsletter/>
     </div>
    </>
  );
}
/*

*/

