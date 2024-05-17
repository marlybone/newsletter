import { profile } from "../../../sanity/sanity.query";
import Link from "next/link";
import React from "react";

export default function RecentPosts() {
  return (
    <div className="flex justify-center p-4 m-4">
      <div className="flex flex-col">
        <div className="my-4 justify-start items-start content-start self-start">
          <h1 className="p-2 border border-transparent mx-auto rounded-md shadow-custom">
            Latest
          </h1>
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 h-auto py-auto mx-auto space-y-4 md:space-y-0 drop-shadow-2xl">
          {profile &&
            profile.map((data) => (
              <div
                key={data._id}
                className="border-b border-transparent rounded-md max-w-sm pb-1 shadow-custom transform transition bg-white"
              >
                <div className="relative">
                  <img
                    className=" h-64 w-larger block object-cover"
                    src={data.mainImage}
                    alt={data.title}
                  />
                  <p className="absolute top-0 bg-amber-500 text-gray-800 font-semibold py-1 px-3 rounded-br-md">
                    NEW!
                  </p>
                </div>
                <div className="p-2">
                  <div className="flex justify-between my-1 text-sm space-x-2">
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
                  <h1 className="my-4 text-gray-800 text-2xl font-bold flex font-[Merriweather]">
                    {data.title}
                  </h1>
                  <h2 className="mb-14 my-4 text-sm font-light font-[Sans]">
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
                          <span className=" text-sm font-semibold ">
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
    </div>
  );
}
