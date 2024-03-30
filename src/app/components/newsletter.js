import React from "react";
import styles from './moving-border.module.css'

export default function Newsletter() {
  return (
    <div className="bg-white text-[#333] font-[sans-serif] min-h-screen items-center self-center flex rounded-lg">
      <div className="max-w-5xl md:mx-auto text-center border-px shadow-custom rounded-xl py-12 p-4 mx-2 relative overflow-hidden">
      <img className="absolute inset-0 bg-cover z-0 w-full h-40" src="./slice.png"/>
      <div className="z-10 absolute top-0 -inset-0 mt-8">
        <h1 className={`${styles.luminosity} ${styles.Monoton}`}>E<span className={styles.flickerfast}>x</span>pl<span className={styles.flickerslow}>o</span>re</h1>
        </div>
        <div className="flex align-middle items-end md:mt-16 mt-24">
        <p className="text-lg md:mx-12 mt-20">
          Subscribe to our newsletter and stay up to date with the latest news,
          updates, and exclusive offers. Get valuable insights. Join our
          community today!
        </p>
        </div>
        <div className="max-w-lg mx-auto bg-gray-100 flex px-2 py-1 rounded-full text-left mt-16 border focus-within:border-gray-700">
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
