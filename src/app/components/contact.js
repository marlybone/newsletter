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
        <div className='flex flex-col p-2'>
            <div>
                <div>
                    <h1>Name</h1>
                </div>

            </div>
            
        </div>
        <div>
            <ContactUs/>
        </div>
        </div>
        </div>
        </>
        )
}