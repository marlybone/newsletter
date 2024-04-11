"use client"
import React, { useState } from 'react';
import styles from "./moving-border.module.css"
import { motion } from "framer-motion"
import ContactUs from "./contactus"

export default function ContactForm() {

    return (
        <>
        <div className={`${styles.contentWrapper}`}>
         <div className={`${styles.contactBox} drop-shadow-xl shadow-custom max-w-6xl bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100 flex justify-between self-center mx-auto`}>
        <div className='flex flex-col p-2 mx-2 py-2 h-full'>
            <div>
                <div>
                    <h1 className='text-1xl flex ml-2 p-2 space-y-2'>Name</h1>
                </div>
                <div className='flex flex-col justify-center ml-2 p-2 mx-2 space-y-3 w-2/3 self-center'>
                    <h1 className='text-4xl'>Have you got a story to tell?</h1>
                    <p>If you've navigated the difficult path of career transition into tech either through self taught or tradtional education we would love to hear from you and help your share your story.</p>
                </div>
                <div className='flex flex-row bottom-0'>
                    <div>
                        <h2>EMAIL</h2>
                        <h3>me@me.com</h3>
                    </div>
                </div>
            </div>
            
        </div>
        <div className='w-full'>
            <ContactUs/>
        </div>
        </div>
        </div>
        </>
        )
}