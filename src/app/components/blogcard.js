import React from 'react'
import Link from "next/link";

export default function BlogCard() {

    return (
<div className="border-transparent bg-transparent shadow-custom md:w-full h-48 rounded-md mb-3 relative mx-8 ml-12 transition-all border-b">
  <div className="absolute md:inset-0 flex-row flex md:justify-start content-center z-10 drop-shadow-lg">
    <div className="md:h-36 h-22 rounded-2xl box-border shadow-custom md:ml-[-48px] w-1/4 inset-y-0 self-center hidden md:block drop-shadow-xl"> <img className="w-full h-full object-cover overflow-hidden rounded-2xl" src="./nasa.jpg" alt="" />
    </div>
    <div className='w-3/4 mx-6'>
    <div className="flex flex-col mt-5">
        <h1 className="text-3xl font-bold mb-2" >Recruiter to Frontend Developer!</h1>
        <p className="text-sm">How I made the transition from a recruiter to a frontend developer, short description with little overview</p>
        <div className='flex-row flex mt-10 space-x-2'>
            <h2 className='absolute bottom-0 mb-3'>Categories</h2>
            <Link href="#"><button className="right-3 bottom-0 absolute mb-3 mx-4 px-4 py-2 rounded-md border border-black bg-white text-neutral-700 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
  Read
</button></Link>
            </div>
    </div>
    </div>
  </div>
</div>


    )
}