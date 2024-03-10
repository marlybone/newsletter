"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import client from "@sanity/sanity.client";
import { TagGridOne } from "../components/gradientBox"


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
        <div className="md:flex flex-col justify-center mt-24">
       {/* end of section that needs mobile design*/}
       {filteredPosts && filteredPosts.map((article) => (    
            <div key={article._id} className="border-transparent bg-gray-100 backdrop-filter backdrop-blur-lg bg-opacity-50 shadow-custom md:w-full transition-all md:h-48 h-56 rounded-md md:mb-3 relative mx-8 ml-12 border-b flex-col mb-10">
            <div className="md:absolute md:inset-0 md:flex-row flex flex-col md:justify-start align-middle content-center z-10 drop-shadow-lg h-56 md:h-48 justify-evenly">
              <div className="md:h-32 md:mt-0 h-16 w-24 md:rounded-2xl rounded-full box-border shadow-custom md:ml-[-48px] mt-[-36px] md:w-1/4 inset-y-0 self-center drop-shadow-xl"> <img className="w-full h-full object-cover overflow-hidden rounded-2xl" src="./nasa.jpg" alt="" />
              </div>
              <div className='md:w-3/4 md:mx-6 w-fit h-44 md:h-auto'>
              <div className="flex flex-col space-y-2 w-full md:h-auto h-full md:justify-normal justify-evenly">
                  <h1 className="text-2xl font-bold mb-2 md:mx-0 mx-auto md:text-start text-center md:mt-4" >{article.title}</h1>
                  <p className="text-sm font-light md:mx-auto mx-4">{article.smallDescription}</p>
                  <ul className='flex-row flex mt-10 space-x-1 justify-between'>
                  <div className='md:absolute bottom-0 md:mb-3 flex-row flex space-x-3 self-end md:ml-0 ml-4'>

                  {Array.isArray(article.categories) ? (
                            <TagGridOne category={article.categories}/>
                            )
                           : (
                            <div>None</div>
                          )}
            </div>
                      <Link href={`/blog/${article.slug}`}><button className="md:right-3 bottom-0 md:absolute sticky md:mb-3 mx-4 px-4 py-2 rounded-md border border-black bg-white text-neutral-700 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
            Read
          </button></Link>
          
                      </ul>
              </div>
              </div>
            </div>
          </div>

       ))}
   

       {/* <ul>
      


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
