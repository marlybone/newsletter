
"use client"
import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import styles from "./moving-border.module.css"
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";


export default function ContactUs() {
  const [isSuccess, setIsSuccess] = useState(false);
  const controlsDiv = useAnimationControls()

  const {
      register,
      handleSubmit,
      formState: {errors},
  } = useForm();
    const form = useRef();

   
    useEffect(() => {
      const sequence = async () => {
        controlsDiv.set("hidden")
        controlsDiv.set("initial");
        await controlsDiv.start("animate");
      }
        const sequenceOne = async () => {
          await controlsDiv.start('exit')
        }
      const sequenceTwo = async () => {
        controlsDiv.start("visible")
      }
      const sequenceThree = async () => {
        await sequence();
        await sequenceTwo();
      }

      if (isSuccess) {
        sequenceThree()
        setTimeout(() => {
          sequenceOne()
          setIsSuccess(false)
        }, 3000)
      }
    })

  // const sendEmail = (e) => {
  //   setIsSuccess(true)

  //   emailjs
  //     .sendForm('service_9pl8maaff', 'template_junwsgp', form.current, {
  //       publicKey: 'QOufJT4a6l-SjdOFP',
  //     })
  //     .then(
  //       () => {
  //         console.log("Success");
  //         setIsSuccess(true)

  //         setTimeout(() => {
  //           setIsSuccess(false);
  //         }, 3000)
  //       },
  //       (error) => {
  //         console.log('FAILED...', error.text);
  //       },
  //     );
  // }

  const showSign = () => {
    setIsSuccess(true)
  }

  const variants = {
    hidden: {
      pathLength: 0,
      opacity: 0
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 0.9,
        ease: "easeInOut"
      }
    } 
  }

  const divVariants = {
    initial: {
      opacity: 0,
      x: 350
    },
    animate: {
      opacity: 1,
      x: 290,
      transition: { duration: 0.8, type: 'spring', ease: 'easeInOut' },
    },
    exit: {
      x: 330,
      opacity: 0,
      transition: { duration: 0.3, type: 'spring', ease: 'easeIn' },
    }
  }


    return (
      <div className='p-2 items-center h-full mt-6 w-full'>
                <AnimatePresence>
    {isSuccess && <motion.div
      key="1"
      variants={divVariants}
      animate={controlsDiv}
      exit="exit"
      className={`${styles.successPopin} border-[1px] z-10`}
    >
      <div className='flex flex-row'>
        <div className='flex-col justify-center content-center items-center align-middle w-4/6'>
        <span className='flex justify-center text-emerald-900 text-2xl'>Thank You!</span>
        <p className='text-sm text-emerald-900 flex justify-center items-center self-center mt-2'>Email Sent</p>
        </div>
        <div className='w-2/6 h-[99px] bg-zinc-600 '>

          <motion.svg 
          variants={variants}
          animate={controlsDiv}
          className="flex content-center mt-2 self-center mx-auto py-auto"
          width="76" height="76" viewBox="0 0 24 24" strokeWidth="1" stroke="white" fill="green" strokeLinecap="round" strokeLinejoin="round">
          <motion.path
          variants={variants}
          animate={controlsDiv}
          stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <motion.path
          variants={variants}
          animate={controlsDiv}
          d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <motion.path 
          variants={variants}
          animate={controlsDiv}
          d="M9 12l2 2l4 -4" />
</motion.svg>
</div>
        </div>
        </motion.div>}
</AnimatePresence>
        <form className='flex flex-col space-y-10 h-full w-full mt-8 justify-start items-center' ref={form} >
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
        <input className={styles.submitButton} type="submit" onClick={showSign}/>
        <div className="flex-grow h-full" />
     </div>
        </form>
        </div>
        )
}