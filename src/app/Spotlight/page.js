import React from 'react';

export default function SpotlightPage() {

  return (
    <>
    <div className="relative">
  <img src="sapphire.jpg" className="absolute inset-0 w-full h-80 object-cover" alt="Background Image" />
  <div className="relative text-[#333] font-[sans-serif] mb-10 p-4 ">
    <div className ="max-w-5xl mx-auto text-center">
      <div className="max-w-lg mx-auto bg-gray-100 flex px-2 py-1 rounded-full text-left border mt-44 focus-within:border-gray-700">
        <input type='search' placeholder='Search' className="outline-none w-full bg-transparent text-sm px-4 py-3" />
      </div>
    </div>
  </div>
</div>
<section className='max-w-5xl mx-auto'>
  <div className="flex justify-between mt-24 space-x-6">
    <div className='border border-transparent shadow-custom w-1/5 h-96 justify-start custom-shadow '>
      <div className='justify-center flex flex-col mt-2'>
      <label className='flex justify-start ml-4 font-bold' for="categories">Tags</label>
      <select className='border border-transparent h-10 rounded-md w-5/6 justify-center flex mx-4 shadow-custom mt-2 focus-within:border-gray-700 focus:border-gray-700'>
        <option className='' value="software">Software</option>
        <option value="Data Analyst">Data Analyst</option>
      </select>
      </div>
    </div>
    <div className='border border-gray-300 w-4/5 h-44 items-start rounded-md overflow-hidden custom-shadow'>
  <div className='flex'>
    <div className="h-full flex mt-2 ml-2">
      <img className='w-16 h-16 object-cover rounded-full' src="nasa.jpg" alt="NASA" />
    </div>
    <h1 className='text-4xl font-semibold items-center flex ml-4'>This is the title, it might be a little long.</h1>
  </div>
  <div className='mt-2 mx-4 ml-12 text-sm'><p>This is a summary, short summary summarising what this article is about and who is is interviewing, for example Einstein, Albert Einstein the great physicist.</p></div>
 <div className='flex justify-between mx-4'>
    <div className='mt-6'>Categories</div>
    <div className='mt-6'>Published</div>
 </div>
</div>
  </div>
</section>
    </>
  );
};
