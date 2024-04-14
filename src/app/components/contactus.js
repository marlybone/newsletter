
"use client"
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import styles from "./moving-border.module.css"
import { motion, AnimatePresence, useAnimate } from "framer-motion";


export default function ContactUs() {
  const [isSuccess, setIsSuccess] = useState(true);
  const [scope, animate] = useAnimate()
  const {
      register,
      handleSubmit,
      formState: {errors},
  } = useForm();
    const form = useRef();

  const sendEmail = (e) => {
    setIsSuccess(true)

          setTimeout(() => {
            setIsSuccess(false);
          }, 3000)


    // emailjs
    //   .sendForm('service_9pl8maa', 'template_junwsgp', form.current, {
    //     publicKey: 'QOufJT4a6l-SjdOFP',
    //   })
    //   .then(
    //     () => {
    //       console.log("Success");
    //       setIsSuccess(true)

    //       setTimeout(() => {
    //         setIsSuccess(false);
    //       }, 3000)
    //     },
    //     (error) => {
    //       console.log('FAILED...', error.text);
    //     },
    //   );
  }



    return (
      <div className='p-2 items-center h-full mt-6 w-full'>
                <AnimatePresence>
    {isSuccess && <motion.div
      key="1"
      initial={{ opacity: 0, x: 350 }} 
      animate={{ opacity: 1, x: 290 }} 
      exit={{ opacity: 0, x: 350 }} 
      transition={{ duration: 0.8, type: "spring", ease: "easeInOut" }}
      className={`${styles.successPopin} border-[1px] z-10`}
    >
      <div className='flex flex-row'>
        <div className='flex-col justify-center content-center items-center align-middle w-4/6'>
        <span className='flex justify-center text-black text-2xl'>Thank You!</span>
        <p className='text-sm text-black flex justify-center items-center self-center mt-2'>Email Sent</p>
        </div>
        <div className='w-2/6 h-[100px] border-l-[1px] bg-white'>

          <motion.svg 
          initial={{ pathLength: 0}}
          animate={{ pathLength: 1}}
          transition={{ delay: 1, duration: 0.9, ease: "easeInOut"}}
          className="flex content-center mt-2 self-center mx-auto py-auto"
          width="76" height="76" viewBox="0 0 24 24" strokeWidth="1" stroke="#00b341" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <motion.path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <motion.path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <motion.path d="M9 12l2 2l4 -4" />
</motion.svg>
</div>
        </div>
        </motion.div>}
</AnimatePresence>
        <form className='flex flex-col space-y-10 h-full w-full mt-8 justify-start items-center' ref={form} onSubmit={handleSubmit(sendEmail)}>
             <div className='relative'>
     <input
            {...register("firstName", { required: "This Is Required", minLength: {
              value: 2,
              message: "Please enter atleast two characters"
            } })}
            className={styles.boxInput}
            required
            name="firstName"
        ></input>
        <span id={styles.bar} />
        <label className={styles.label}>Name</label>
        <p className={styles.errorMsg}>{errors.firstName?.message}</p>
           </div>
           <div className='relative'>
        <input
                 {...register('email', { required: true, pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gm,
                  message: "Enter valid email"
                 } })}
                className={styles.boxInput} 
                name="email"
                required
                />
        <span id={styles.bar}/>
        <label id="label" className={styles.label}>Email</label>
        <p className={styles.errorMsg}>{errors.email?.message}</p>
     </div>
        <div className='relative mb-10'>
        <textarea 
        name="message" 
        className={`${styles.boxInput} transition-all`} 
        id={styles.textareaInput}
        required
        />
        <span id={styles.bar}/>
        <label htmlFor="boxInput" id="label" className={styles.label}>Message</label>
        </div>
        <div className='md:h-1/8'></div> 
           <div className='relative justify-center self-center '>
        <input className={styles.submitButton} type="submit"/>
        <div className="flex-grow h-full" />
     </div>
        </form>
        </div>
        )
}