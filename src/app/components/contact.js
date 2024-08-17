"use client";
import React from "react";
import styles from "./moving-border.module.css";
import ContactUs from "./contactus";

export default function ContactForm() {
  return (
    <>
      <div>
        <div
          className={`${styles.contactBox} p-2 m-4 bg-white drop-shadow-xl max-w-6xl lg:h-[50vh] rounded-md bg-clip-padding backdrop-filter backdrop-blur-[1px] flex lg:justify-between self-center justify-center mx-auto flex-col lg:flex-row`}
        >
          <div className="flex flex-col p-2 lg:mt-2">
            <div>
              <div>
                <h1 className="text-4xl mb-4 ml-2 flex p-2 lg:mt-2 font-[Syne] font-thin ">
                  MINIMARVELS
                </h1>
              </div>
            </div>
            <div className="flex flex-col justify-center p-2 mx-2 lg:w-5/6 mt-2">
              <h1 className="lg:text-[46px] text-[33px] mb-4 font-bold font-[Syne] mx-auto leading-tight">
                Ready to Share Your Journey?
              </h1>
              <p className="lg:text-[18px] text-[20px] font-[Syne] mx-auto">
                Have you successfully transitioned into a new career or are you
                striving to break into a different field? We&apos;d love to hear your
                story! Share your journey to inspire and motivate others to take
                the leap or stay the course.
              </p>
            </div>

            <div
              className={`${styles.contactEmail} flex flex-row align-bottom p-2 mx-2 mb-4`}
            ></div>
          </div>

          <div className="w-full p-2 mx-2 justify-center flex mb-2">
            <ContactUs />
          </div>
        </div>
      </div>
    </>
  );
}
