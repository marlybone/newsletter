import React from "react";

export default function Hero() {
  return (
    <section className="h-custom bg-gradient-to-r from-sky-600 to-emerald-700 top-0 left-0 w-full absolute">
      {/* <img src='nasa.jpg' className="object-cover w-full h-full absolute inset-0" alt="Backdrop" /> */}
      <div className="flex relative z-10 mx-16">
        {/* Left Side (Text) */}
        <div className="flex-1 p-8">
          <div className="text-white self-center mx-12 justify-center py-6">
            <h1 className="text-3xl">
              Support Us, Join Us, Help Us, Some Example Text
            </h1>
            <p className="my-6">We are here to support this group of people</p>
          </div>
        </div>

        {/* Right Side (Empty for now) */}
        <div className="flex-1">
          <div>{/* You can add content here if needed */}</div>
        </div>
      </div>
    </section>
  );
}
