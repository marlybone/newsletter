import React from "react";
import styles from './moving-border.module.css'

export default function Newsletter() {

  
  return (
    <div className="bg-white min-h-screen items-center self-center flex rounded-lg">
      <div className="max-w-5xl md:mx-auto text-center border-px shadow-custom rounded-xl relative">
      <img className="inset-0 bg-cover w-full h-40" src="./slice.png"/>
      <div className="top-0 -inset-0">
        <h1 className={`${styles.luminosity} ${styles.Monoton} mt-8`}>E<span className={styles.flickerfast}>x</span>pl<span className={styles.flickerslow}>o</span>re</h1>
        </div>
        <div className="flex mt-8 my-16">
        <p className="text-lg md:mx-12">
        Stay in the loop! Receive updates when new interviews drop, along with valuable resources and insights into the latest in tech and more.
        </p>
        </div>
        <div className=" bg-gray-100 flex px-2 py-1 rounded-full text-left mx-auto mb-10 border focus-within:border-gray-700 w-2/3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full outline-none bg-transparent text-sm py-3"
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
