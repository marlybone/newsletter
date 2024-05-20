
"use client"
import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import styles from "./moving-border.module.css"
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";


export default function ContactUs() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
      register,
      formState: {errors},
  } = useForm();
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDedault();
    setIsSuccess(true)

    emailjs
      .sendForm('service_9pl8maaff', 'template_junwsgp', form.current, {
        publicKey: 'QOufJT4a6l-SjdOFP',
      })
      .then(
        () => {
          setIsSuccess(true)

          setTimeout(() => {
            setIsSuccess(false);
          }, 3000)
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  }



    return (
      <div className='p-2 h-full md:mt-6 w-full flex'>
        <form className='flex flex-col h-full w-full mt-2 justify-start items-center space-y-8' ref={form} >
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
        <div className='relative'>
        <textarea 
        name="message" 
        className={`${styles.boxInput}`} 
        id={styles.textareaInput}
        required
        />
        <span id={styles.bar}/>
        <label htmlFor="boxInput" id="label" className={styles.label}>Message</label>
        </div>
        <Button/>
        </form>
        </div>
        )
}

const Button = ({
}) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const controlsDiv = useAnimationControls()

  const showSign = () => {
    setIsSuccess(true)
  }

  useEffect(() => {
    const sequence = async () => {
      controlsDiv.set("hidden")
      await controlsDiv.start("visible");
    }
    if (isSuccess) {
      sequence()
      setTimeout(() => {
        setIsSuccess(false)
      }, 3000)
    }
  })

  const variants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        delay: 0.5,
        duration: 1,
        ease: "easeInOut"
      }
    } 
  }

  return (
  <AnimatePresence>
  <motion.div 
  className='h-full flex items-end self-center p-4 relative'>
  <motion.button 
  animate={{backgroundColor: isSuccess ? "#388e3c" : "#52525B"}}
  transition={{duration: "1"}}
  className={`${styles.submitButton} justify-center items-center relative`} onClick={(showSign)}>
      <motion.p 
      animate={{x : isSuccess ? "-40px" : "0px"}}
      transition={{ duration: "1" }}
      className="flex justify-center align-middle p-1 text-lg">{isSuccess ? "Thanks" : "Submit"}</motion.p>
      <motion.div
      className={`${styles.checkBox} justify-center flex items-center p-2`}
      animate={{ opacity: isSuccess ? "1" : "0", right: isSuccess ? "0px" : "-45px" }}
      transition={{ duration: "1"}}
      >
<motion.svg 
variants={variants}
animate={controlsDiv}
width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">
<motion.path 
variants={variants}
animate={controlsDiv}
d="M5 12l5 5l10 -10" />
</motion.svg>
    </motion.div>
  </motion.button>
</motion.div>
</AnimatePresence>
  )
}

