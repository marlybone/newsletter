import React from "react";
import styles from './moving-border.module.css'

export default function Newsletter() {

  
  return (
    <div className="bg-white min-h-screen items-center self-center justify-center flex rounded-lg mx-1">
      <div className="justify-center flex flex-col items-center content-center">
        <div className="max-w-5xl  mb-20 justify-start items-start content-start self-start"><h1 className="p-2 border border-transparent mx-auto rounded-md shadow-custom">Newsletter</h1></div>
      <div className="max-w-5xl md:mx-auto text-center outline-none border-[1px] border-transparent bg-white drop-shadow-xl shadow-custom rounded-sm relative container">
      <img className="inset-0 bg-cover w-full h-40" src="./slice.png"/>
      <div className="top-0 -inset-0">
        <h1 className={`${styles.luminosity} ${styles.Monoton} mt-8`}>E<span className={styles.flickerfast}>x</span>pl<span className={styles.flickerslow}>o</span>re</h1>
        </div>
        <div className="flex mt-24 my-16 ">
        <p className="text-lg md:mx-12">
        Stay in the loop! And keep up to date with new articles, insights and resources when they drop. No spam, no nonsense just quality content to your inbox
        </p>
        </div>
        <div className="flex px-2 py-1 text-left mx-auto justify-center">
        <iframe src="https://embeds.beehiiv.com/489c9dce-212f-498d-b0f3-26978c886db1?slim=true" 
        data-test-id="beehiiv-embed"  
        className="w-1/2"></iframe>
        </div>
      </div>
      </div>
    </div>
  );
}
