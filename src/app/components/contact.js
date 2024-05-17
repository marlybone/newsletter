"use client";
import React, { useState } from "react";
import styles from "./moving-border.module.css";
import { motion } from "framer-motion";
import ContactUs from "./contactus";

export default function ContactForm() {
  return (
    <>
      <div>
        <div
          className={`${styles.contactBox} p-2 m-4 bg-white drop-shadow-xl max-w-6xl md:h-[50vh] h-auto rounded-md bg-clip-padding backdrop-filter backdrop-blur-[1px] flex md:justify-between self-center mx-auto py-auto flex-col md:flex-row`}
        >
          <div className="flex flex-col py-auto p-2 mx-auto h-auto md:mt-2">
            <div>
              <div>
                <h1 className="text-3xl ml-2 flex p-2 space-y-2 md:mt-2">Name</h1>
              </div>
            </div>
              <div className="flex flex-col justify-center p-2 mx-2 space-y-2 md:w-5/6 mt-2">
                <h1 className="md:text-[46px] text-3xl mb-4 font-bold font-[Merriweather] leading-tight">Have you got a story you want to tell?</h1>
                <p className="md:text-md text-[15px] mt-2 font-[Sans]">
                  Navigated the difficult path of career transition
                  into tech either through self taught or tradtional education?
                  We would love to hear from you to share your story to help and motivate others to make the leap orstay the course
                </p>
              </div>
            
            <div className={`${styles.contactEmail} flex flex-row align-bottom p-2 mx-2 mb-4`}>
            </div>
          </div>

          <div className="w-full p-2 mx-2 py-2 justify-center flex mt-2 mb-2">
            <ContactUs />
          </div>
        </div>
      </div>
    </>
  );
}
