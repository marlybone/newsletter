"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import client from "../../../sanity/sanity.client";
import { TagGridOne } from "../components/gradientBox";
import Image from "next/image";

const allPostsQuery = `*[_type == "post"] {
  _id,
  title,
  smallDescription,
  "slug": slug.current,
  "mainImage": mainImage.asset->url,
  "author": *[_type == 'author'][0].name,
  "authorImg": *[_type == 'author'][0].image.asset->url,
  publishedAt,
  categories[]-> {title}
}`;

export default function SpotlightPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await client.fetch(allPostsQuery);
      setPosts(result);
    };
    fetchData();
  }, []);

  const filterPosts = (posts, query) => {
    if (!query) return posts;

    return posts.filter((post) => {
      const postTitle = post.title.toLowerCase();
      const postCategories = post.categories.map((category) =>
        category.title.toLowerCase(),
      );
      const searchLower = query.toLowerCase();

      return (
        postTitle.includes(searchLower) ||
        postCategories.some((category) => category.includes(searchLower))
      );
    });
  };

  const filteredPosts = filterPosts(posts, searchQuery);

  return (
    <div>
      <div className="relative font-[Syne]">
        <Image
          src="/sapphire.jpg"
          className="absolute w-full h-80 object-cover overflow-hidden"
          alt="Background Image"
          quality={100}
          height={288}
          width={500}
        />
        <div className="relative text-[#333] mb-10 p-4 ">
          <div className="max-w-5xl mx-auto text-center">
            <div className="max-w-lg mx-auto bg-gray-100 flex px-2 py-1 rounded-full text-left border mt-44 focus-within:border-gray-700">
              <input
                id="id"
                type="search"
                placeholder="Search by title or category"
                className="outline-none w-full bg-transparent text-sm px-4 py-3"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="search"
              />
            </div>
          </div>
        </div>
      </div>
      <section className="max-w-3xl mx-auto min-h-screen">
        <div className="md:flex flex-col justify-center mt-24">
          {/* end of section that needs mobile design*/}
          {filteredPosts &&
            filteredPosts.map((article) => (
              <div
                key={article._id}
                className="border-transparent bg-gray-100 bg-opacity-50 shadow-custom md:w-full transition-transform md:h-48 h-56 rounded-md md:mb-3 relative mx-8 ml-12 border-b flex-col mb-12"
              >
                <div className="md:absolute md:inset-0 md:flex-row flex flex-col md:justify-start content-center z-10 drop-shadow-lg justify-evenly h-[100%]">
                  <div className="md:h-32 md:mt-0 h-16 w-24 md:rounded-2xl rounded-full box-border shadow-custom md:ml-[-48px] mt-[-36px] md:w-1/4 inset-y-0 self-center drop-shadow-xl">
                    {" "}
                    <Image
                      className="w-full h-full object-cover overflow-hidden rounded-2xl"
                      src={article.mainImage}
                      alt=""
                      quality={100}
                      height={288}
                      width={500}
                    />
                  </div>
                  <div className="md:w-3/4 ml-2 h-[100%]">
                    <div className="flex flex-col h-[100%]">
                      <h1 className="md:text-[20px] text-[18px] font-bold mb-2 mx-auto md:text-start text-center mt-4 font-[Syne]">
                        {article.title}
                      </h1>
                      <p className="md:text-[15px] text-[14px] mx-3 font-[DMSans]">
                        {article.smallDescription}
                      </p>
                      <ul className="flex-row flex space-x-2 bottom-0 h-[100%]">
                        <div className="flex flex-row w-[100%]">
                          <div className="relative flex md:ml-0 text-sm md:text-base flex-row items-end mb-1 w-[100%]">
                            <div className="flex-row flex space-x-4 mx-4">
                              {Array.isArray(article.categories) ? (
                                <TagGridOne category={article.categories} />
                              ) : (
                                <div>None</div>
                              )}
                            </div>

                            <div className="items-end flex place-content-end inset-0 right-0 absolute">
                              <Link href={`/blog/${article.slug}`}>
                                <button className="mx-4 px-4 py-1 h-8 items-end rounded-md border border-black bg-white text-neutral-700 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
                                  Read
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}
