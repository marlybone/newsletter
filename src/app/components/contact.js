"use client"
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from "./moving-border.module.css"
import { motion } from "framer-motion"

export default function ContactForm() {
    const {
        register,
        handleSubmit,
    } = useForm();

    const variants = {
        rest: {
            scaleX: 1
        },
        tap: {
            scaleX: 1.2,
            scaleY: 0.8,
            SkewX: 100,
            transition: {
                duration: 0.1
            },
        }
    }

    const onSubmit = (data) => console.log(data)

    return (
        <>
        <div className='max-w-5xl flex justify-start mx-auto place-self-center '>
        <div className='flex md:flex-row flex-col w-full space-x-2 place-self-center self-center'>
        <div className='container flex justify-end border-[1px] border-transparent w-1/2 bg-neutral-400 rounded-sm drop-shadow-2xl mx-auto p-2 h-contact'>
            <div className='justify-between flex-col space-y-12'>
                <div>
                    <h1>Share Your Journey?</h1>
                    <h2>Get in Touch</h2>
                </div>
                <div className=''>
                    <p>
                        Do you have a story to tell?
                    </p>
                    <p>
                        If you've navigated the landscape of career transition we would love to hear from you and tell your story. No matter how big or small we want to know how you did it and what it took in hopes others will draw inspiration to help them succeed in their own career changes.
                    </p>
                </div>
            </div>
        </div>
        <div className='flex justify-start md:w-1/2 mx-2 py-2 border border-transparent drop-shadow-lg bg-white shadow-custom'>
        <form className='flex flex-col justify-center items-center w-full space-y-24 self-center' onSubmit={handleSubmit(onSubmit)}>
            <div className='relative'>
            <motion.input 
            initial="rest"
            whileTap="tap"
            variants={variants}
            className={styles.boxInput} type="text" />
            <label 
            id={styles.label}>Name</label>
            </div>
            <div className='relative'>
            <input className={styles.boxInput} type="email" />
            <label id={styles.label}>Email</label>
            </div>
            <div className='relative'>
            <textarea className={styles.boxInput} rows="6" />
            <label id={styles.label}>Message</label>
            </div>
            <div>
            <input className='mt-16' type="submit"/>
            </div>
        </form>
        </div>
        </div>
        </div>
        </>
        )
}