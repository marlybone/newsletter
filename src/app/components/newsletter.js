import React from "react";
import styles from './moving-border.module.css'

export default function Newsletter() {

  
  return (
    <div className="bg-white min-h-screen items-center self-center flex rounded-lg">
      <div className="max-w-5xl md:mx-auto text-center border-px shadow-custom rounded-xl relative ">
      <img className="inset-0 bg-cover w-full h-40" src="./slice.png"/>
      <div className="top-0 -inset-0">
        <h1 className={`${styles.luminosity} ${styles.Monoton} mt-8`}>E<span className={styles.flickerfast}>x</span>pl<span className={styles.flickerslow}>o</span>re</h1>
        </div>
        <div className="flex mt-16 my-16">
        <p className="text-lg md:mx-12">
        Stay in the loop! Receive updates when new interviews drop, along with valuable resources and insights into the latest in tech and more.
        </p>
        </div>
        <div className="flex px-2 py-1 text-left mx-auto justify-center">
        <iframe src="https://embeds.beehiiv.com/489c9dce-212f-498d-b0f3-26978c886db1?slim=true" 
        data-test-id="beehiiv-embed"  
        className="w-1/2"></iframe>
        </div>
      </div>
      
    </div>
  );
}
