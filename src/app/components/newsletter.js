import React from "react";
import NewsletterForm from "./signupNews";

export default function Newsletter() {
  return (
    <div className="bg-white text-[#333] font-[sans-serif] min-h-screen items-center self-center flex">
      <div className="max-w-3xl mx-auto text-center ">
        <h3 className="text-4xl font-extrabold">Newsletter</h3>
        <p className="text-sm mt-6">
          Subscribe to our newsletter and stay up to date with the latest news,
          updates, and exclusive offers. Get valuable insights. Join our
          community today!
        </p>
        <div className="max-w-lg mx-auto bg-gray-100 flex px-2 py-1 rounded-full text-left mt-10 border focus-within:border-gray-700">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full outline-none bg-transparent text-sm px-4 py-3"
          />
          <button
            type="button"
            className="bg-white transition-all font-semibold text-sm rounded-full px-8 py-3 text-gray-700 shadow-custom"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
