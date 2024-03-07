"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import client from "@sanity/sanity.client";
import BlogCard from '../components/blogcard'

const allPostsQuery = `*[_type == "post"] {
  _id,
  title,
  smallDescription,
  "slug": slug.current,
  "mainImage": mainImage.asset->url,
  "author": *[_type == 'author'][0].name,
  "authorImg": *[_type == 'author'][0].image.asset->url,
  publishedAt,
  body -> {
    text
  },
  categories[]-> {title}
}`;


export default function SpotlightPage() {
  const [searchQuery, setSearchQuery] = useState('');
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
      const postCategories = post.categories.map(category => category.title.toLowerCase());
      const searchLower = query.toLowerCase();

      return postTitle.includes(searchLower) || postCategories.some(category => category.includes(searchLower));
    });
  };

  const filteredPosts = filterPosts(posts, searchQuery);

  return (
    <>
     <div className="relativ">
        <img src="sapphire.jpg" className="absolute w-full h-80 object-cover overflow-hidden" alt="Background Image" />
        <div className="relative text-[#333] font-[sans-serif] mb-10 p-4 ">
          <div className="max-w-5xl mx-auto text-center">
            <div className="max-w-lg mx-auto bg-gray-100 flex px-2 py-1 rounded-full text-left border mt-44 focus-within:border-gray-700">
            <input
          type="search"
          placeholder="Search by title or category"
          className="outline-none w-full bg-transparent text-sm px-4 py-3"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
            </div>
          </div>
        </div>
      </div>
      <section className='max-w-3xl mx-auto'>
        <div className="md:flex justify-center mt-24 space-x-6">
       {/* end of section that needs mobile design*/}
    
        <BlogCard/>
          {/* <ul>
            {filteredPosts &&
              filteredPosts.map((article) => (
                <li key={article._id}>
                  <div className='border border-gray-300 w-full h-44 rounded-md overflow-hidden custom-shadow mb-3 bg-gray-100'>
                    <Link href={`/blog/${article.slug}`} >
                      <div className='flex flex-row'>
                        <div className="h-full flex">
                          <img className='w-full h-16 object-cover overflow-hidden' src="nasa.jpg" alt="NASA" />
                        </div>
                        <h1 className='text-2xl font-semibold items-center flex ml-5'>{article.title}</h1>
                      </div>
                      <div className='mt-2 mx-4 ml-12 text-sm'><p>{article.smallDescription}</p></div>
                      <div className='flex justify-between mx-4'>
                        <ul className='flex-row flex mt-10 space-x-2'>
                          {Array.isArray(article.categories) ? (
                            article.categories.map((category) => (
                              <li key={category.title}>{category.title}</li>
                            ))
                          ) : (
                            <li>None</li>
                          )}
                        </ul>
                        <div className='mt-10'>{new Date(article.publishedAt).toDateString().slice(4)}</div>
                      </div>
                    </Link>
                  </div>
                </li>
              ))
            }
          </ul> */}
        </div>
      </section>
    </>
  )
          }
