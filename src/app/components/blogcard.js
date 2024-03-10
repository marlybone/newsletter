
import React from 'react'
import Link from "next/link";


export default function BlogCard() {

    return (
<div className="border-transparent bg-gray-100 backdrop-filter backdrop-blur-lg bg-opacity-50 shadow-custom md:w-full md:h-48 h-56 rounded-md mb-3 relative mx-8 ml-12 transition-all border-b md:flex-row flex-col">
  <div className="md:absolute md:inset-0 md:flex-row flex flex-col md:justify-start align-middle content-center z-10 drop-shadow-lg h-56 md:h-48 justify-evenly">
    <div className="md:h-32 md:mt-0 h-16 w-24 md:rounded-2xl rounded-full box-border shadow-custom md:ml-[-48px] mt-[-36px] md:w-1/4 inset-y-0 self-center drop-shadow-xl"> <img className="w-full h-full object-cover overflow-hidden rounded-2xl" src="./nasa.jpg" alt="" />
    </div>
    <div className='md:w-3/4 md:mx-6 w-fit h-44 md:h-auto'>
    <div className="flex flex-col space-y-2 w-full md:h-auto h-full md:justify-normal justify-evenly">
        <h1 className="md:text-3xl text-2xl font-bold mb-2 md:mx-0 mx-auto md:text-start text-center md:mt-4" >Recruiter to Frontend Developer!</h1>
        <p className="text-sm font-light md:mx-auto mx-4">How I made the transition from a recruiter to a frontend developer, short description with little overview</p>
        <ul className='flex-row flex mt-10 space-x-1 justify-between'>
            <div className='md:absolute bottom-0 md:mb-3 flex-row flex space-x-3 self-end md:ml-0 ml-4'>
            <div className='relative mx-auto max-w-5xl'>
            <div className={`bg-gradient-to-r  absolute -inset-1 rounded-lg blur-sm opacity-50`} />
            <div className='relative px-3 py-2 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6'><h2>categories</h2>
            </div>
            </div>
            <div className='relative mx-auto max-w-7xl'>
            <div className={`bg-gradient-to-r absolute -inset-1 rounded-lg backdrop-blur-sm blur-sm opacity-50`} />
            <div className='relative px-3 py-2 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6'><h2>categories</h2>
            </div>
            </div>
            </div>
            <Link href="#"><button className="md:right-3 bottom-0 md:absolute sticky md:mb-3 mx-4 px-4 py-2 rounded-md border border-black bg-white text-neutral-700 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
  Read
</button></Link>

            </ul>
    </div>
    </div>
  </div>
</div>
    )
}