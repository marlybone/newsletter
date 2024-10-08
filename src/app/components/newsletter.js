import React from "react";
import Image from "next/image";

export default function Newsletter() {
  return (
    <div className="justify-center flex rounded-lg mx-1 py-8 mb-12 bg-white p-4 m-2">
      <div className="justify-center flex flex-col items-center">
        <div className="max-w-5xl mb-2 justify-start items-start content-start self-start">
          <h1 className="p-2 border border-transparent mx-auto rounded-md shadow-custom font-[Merriweather] bg-white mb-4">
            Newsletter
          </h1>
        </div>
        <div className="max-w-5xl md:mx-auto text-center outline-none border-[1px] border-transparent bg-white drop-shadow-xl shadow-custom rounded-sm relative container">
          <Image
            className="inset-0 bg-cover w-auto h-40"
            src="/slice.png"
            alt="neon light"
            quality={100}
            height={288}
            width={500}
          />
          <div className="top-0 -inset-0">
            <h1
              className={`luminosity font-[Monoton] mt-8 md:text-[100px] sm:text-[80px] text-[50px] transition-all`}
            >
              E<span className="flickerfast">x</span>pl
              <span className="flickerslow">o</span>re
            </h1>
          </div>
          <div className="flex mt-24 my-16 ">
            <p className="text-[20px] md:mx-12 font-[Syne] leading-relaxed">
              Stay in the loop! And keep up to date with new articles, insights
              and resources when they drop. No spam, no nonsense just quality
              content to your inbox
            </p>
          </div>
          <div className="flex px-2 py-1 text-left mx-auto justify-center">
            <iframe
              src="https://embeds.beehiiv.com/489c9dce-212f-498d-b0f3-26978c886db1?slim=true"
              data-test-id="beehiiv-embed"
              className="md:w-1/2"
              id="id-newsletter"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
