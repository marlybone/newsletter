"use client";
import React, { useState } from "react";
import styles from "./moving-border.module.css";
import { motion } from "framer-motion";
import ContactUs from "./contactus";

export default function ContactForm() {
  return (
    <>
      <div className={`${styles.contentWrapper}`}>
        <div
          className={`${styles.contactBox} drop-shadow-xl max-w-6xl rounded-md bg-clip-padding backdrop-filter backdrop-blur-[2px] bg-opacity-10 flex md:justify-between self-center mx-auto py-auto flex-col md:flex-row`}
        >
          <div className="flex flex-col py-auto p-2 mx-auto py-2 h-auto md:mt-2 md:flex-grow">
            <div>
              <div>
                <h1 className="text-3xl ml-2 flex p-2 space-y-2 md:mt-2">Name</h1>
              </div>
            </div>
              <div className="flex flex-col justify-center p-2 mx-2 space-y-2 md:w-5/6 md:flex-grow mt-2">
                <h1 className="text-5xl mb-6 font-bold">Have you got a story you want to tell?</h1>
                <p className="text-sm mt-2">
                  Navigated the difficult path of career transition
                  into tech either through self taught or tradtional education?
                  We would love to hear from you to share your story to help and motivate others to make the leap orstay the course
                </p>
              </div>
            
            <div className={`${styles.contactEmail} flex flex-row align-bottom p-2 mx-2 mb-4`}>
              <div>
                <h2>EMAIL</h2>
                <h3>me@me.com</h3>
              </div>
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
