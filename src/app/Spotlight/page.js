import React from 'react';

export default function SpotlightPage() {

  return (
    <>
    <div class="relative">
  <img src="sapphire.jpg" className="absolute inset-0 w-full h-80 object-cover" alt="Background Image" />
  <div className="relative text-[#333] font-[sans-serif] mb-10 min-h-screen p-4 ">
    <div clasNames="max-w-5xl mx-auto text-center">
      <div className="max-w-lg mx-auto bg-gray-100 flex px-2 py-1 rounded-full text-left mt-44 border focus-within:border-gray-700">
        <input type='email' placeholder='Search' className="w-full bg-transparent text-sm px-4 py-3" />
      </div>
    </div>
  </div>
</div>
<section>
  <div className="flex">
    <div>

    </div>
    <div>

    </div>
  </div>
</section>
    </>
  );
};
