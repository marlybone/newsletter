"use client"
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from "./moving-border.module.css"
import { motion } from "framer-motion"

export default function ContactForm() {
    const [isName, setIsName] = useState('Name')
    const [isEmail, setIsEmail] = useState('Email')

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm();

    handleNameChange = (e) => {
        setIsName(e.target.value)
    }

    handleEmailChange = (e) => {
        setIsEmail(e.target.value)
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
    <div className={`${styles.contactBox} drop-shadow-xl shadow-custom w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100 flex justify-center align-center`}>
    <form className='flex flex-col justify-center items-center w-full space-y-24 self-center' onSubmit={handleSubmit(onSubmit)}>
     <div className='relative'>
        <input
           {...register("firstName", {required : "This is Required", maxLength: 35})} 
           className={styles.boxInput} type="text" />
           <span id={styles.bar}/>
           <p className='bottom-0 left-0 mt-2'>{errors.firstName?.message}</p>
           <label 
           id={styles.label}>{isName}</label>
           </div>
           <div className='relative'>
        <input 
         {...register('email', { required: "This is required", pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gm })}
        className={styles.boxInput} type="email" />
        <span id={styles.bar}/>
        <p className='bottom-0 left-0 mt-2'>{errors.firstName?.message}</p>
        <label id={styles.label}>{isEmail}</label>
     </div>
        <div className='relative'>
        <textarea className={styles.boxInput} rows="6" />
        <span id={styles.bar}/>
        <label id={styles.label}>Message</label>
        </div>
           <div>
        <input className='mt-8 w-96 h-24 bg-sky-300 border shadow-custom rounded-lg' type="submit"/>
     </div>
 </form>
    </div>
 </div>
 </div>

        </>
        )
}