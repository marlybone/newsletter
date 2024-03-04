
import React from 'react';
import Link from 'next/link';
import { allPostsQuery } from '../../../sanity/sanity.query';
import Search from "../components/search"


export default async function SpotlightPage({ articles }) {

  // const handleSearch = (query) => {
  //   setSearchQuery(query);

  //   if (query.trim() === '') {
  //     setShowSearchResults(false);
  //   } else {
  //     const searchResults = articles.filter(article => {
  //       return article.title.toLowerCase().includes(query.toLowerCase()) || 
  //              article.categories.some(category => category.title.toLowerCase().includes(query.toLowerCase()));
  //     });

  //     setArticles(searchResults);
  //     setShowSearchResults(true);
  //   }
  // };
    {/* remember to resize images to improve performance*/}
  return (
    <>
       {console.log(allPostsQuery)}
      <div className="relative">
        <img src="sapphire.jpg" className="absolute w-full h-80 object-cover overflow-hidden" alt="Background Image" />
        <div className="relative text-[#333] font-[sans-serif] mb-10 p-4 ">
          <div className="max-w-5xl mx-auto text-center">
            <div className="max-w-lg mx-auto bg-gray-100 flex px-2 py-1 rounded-full text-left border mt-44 focus-within:border-gray-700">
              <input type='search' placeholder='Search' className="outline-none w-full bg-transparent text-sm px-4 py-3"/>
            </div>
          </div>
        </div>
      </div>
       {/* this section needs mobile design*/}
      <section className='max-w-4xl mx-auto'>
        <div className="md:flex justify-between mt-24 space-x-6">
          <div className='border border-transparent shadow-custom md:w-1/5 md:h-96 justify-start custom-shadow mb-2'>
            <div className='justify-center flex flex-col mt-2'>
              <label className='flex justify-start ml-4 font-bold'>Tags</label>
              <select className='border border-transparent h-10 rounded-md w-5/6 justify-center flex mx-4 shadow-custom mt-2 focus-within:border-gray-700 focus:border-gray-700'>
                <option className='' value="software">Software</option>
                <option value="Data Analyst">Data Analyst</option>
              </select>
            </div>
          </div>
       {/* end of section that needs mobile design*/}
          <ul>
            {allPostsQuery &&
              allPostsQuery.map((article) => (
                <li key={article._id}>
                  <div className='border border-gray-300 w-full h-44 rounded-md overflow-hidden custom-shadow mb-3'>
                    <Link href={`/blog/${article.slug}`} >
                      <div className='flex'>
                        <div className="h-full flex">
                          <img className='w-16 h-16 object-cover overflow-hidden rounded-full' src="nasa.jpg" alt="NASA" />
                        </div>
                        <h1 className='text-2xl font-semibold items-center flex ml-5'>{article.title}</h1>
                      </div>
                      <div className='mt-2 mx-4 ml-12 text-sm'><p>{article.smallDescription}</p></div>
                      <div className='flex justify-between mx-4'>
                        <ul className='flex-row flex mt-10 space-x-2'>
                          {Array.isArray(article.categories) ? (
                            article.categories.map((category) => (
                              <li key={article.title}>{category.title}</li>
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
          </ul>
        </div>
      </section>
    </>
  )
          }
