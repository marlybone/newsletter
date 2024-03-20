import Newsletter from "./components/newsletter";
import { profile } from "@sanity/sanity.query";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <div className="min-h-screen h-full flex justify-center items-center py-20">
        <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0 flex">
          {profile &&
            profile.map((data) => (
              <div
                key={data._id}
                className="border-b border-transparent rounded-md max-w-sm pb-2 overflow-hidden shadow-custom transform transition bg-white"
              >
                <div className="relative">
                  <img
                    className="h-72 w-larger block object-cover"
                    src={data.mainImage}
                    alt={data.title}
                  />
                  <p className="absolute top-0 bg-amber-500 text-gray-800 font-semibold py-1 px-3 rounded-br-md">
                    NEW!
                  </p>
                </div>
                <div className="p-4">
                  <div className="flex justify-between my-2 text-sm space-x-2">
                    <span>
                      Published
                      <p className="font-semibold">
                        {new Date(data.publishedAt).toDateString().slice(4)}
                      </p>
                    </span>
                    <div className="flex self-end content-end justify-end">
                      <Link href={`/blog/${data.slug}`} key={data._id}>
                        <button className="mb-3 mx-4 px-4 py-2 rounded-md border border-black bg-white text-neutral-700 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
                          Read
                        </button>
                      </Link>
                    </div>
                  </div>
                  <h1 className="my-6 text-gray-800 text-2xl font-bold flex">
                    {data.title}
                  </h1>
                  <h2 className="mb-14 my-4 text-sm font-light">
                    {data.smallDescription}
                  </h2>
                  <div className="absolute bottom-0 w-full">
                    <Link key={data._id} href={`/About/${data.author.slug}`}>
                      <div className="flex space-x-4 my-4">
                        <img
                          src={data.author.image}
                          alt="avatar"
                          className="w-8 rounded-full border border-transparent shadow-custom"
                        />
                        <p>
                          <span className=" text-sm font-semibold">
                            {data.author.name}
                          </span>
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="min-h-screen">
        <Newsletter />
      </div>
    </>
  );
}
/*

*/
