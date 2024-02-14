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
<section>
  <div className="flex mt-20 mx-6">
    <div className='border border-red-500 w-52 h-96 justify-start items-start custom-shadow'>
      <label className='flex justify-center mt-2' for="categories"></label>
      <select>
        <option value="software">Software</option>
        <option value="Data Analyst">Data Analyst</option>
      </select>
    </div>
    <div>

    </div>
  </div>
</section>
    </>
  );
};
