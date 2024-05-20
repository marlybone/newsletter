
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

  const sendEmail = (e) => {
    e.preventDedault();
    setIsSuccess(true)

    emailjs
      .sendForm('service_9pl8maaff', 'template_junwsgp', form.current, {
        publicKey: 'QOufJT4a6l-SjdOFP',
      })
      .then(
        () => {
          console.log("Success");
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
      <div className='p-2 h-full md:mt-6 w-full flex'>
                <AnimatePresence>
    {isSuccess && <motion.div
      key="1"
      variants={divVariants}
      animate={controlsDiv}
      exit="exit"
      className={`${styles.successPopin} border-[1px] z-10 rounded-lg`}
    >
      <div className="flex flex-row">
        <div className='flex-col content-center w-4/6'>
        <span className='flex justify-center text-white text-2xl'>Thank You!</span>
        <p className='text-sm text-white flex justify-center items-center self-center mt-2'>Email Sent</p>
        </div>
        <div className='w-2/6 h-[99px] bg-zinc-400'>

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
  onClick
}) => {
  const [isSuccess, setIsSuccess] = useState(false);

  const showSign = () => {
    setIsSuccess(true)
  }


  return (
  <div className='h-full flex items-end self-center p-4 relative'>
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
    {/* <motion.svg 
    initial={{ pathLength: "0"}}
    animate={{ pathLength: isSuccess ? "1" : "" }}
    transition={{ duration: 4, ease: "easeInOut" }}
    xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">
      <motion.path
      initial={{ pathLength: "0"}}
      animate={{ pathLength: isSuccess ? "1" : "" }}
      transition={{ duration: 4, ease: "easeInOut" }}
      stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <motion.path 
      initial={{ pathLength: "0"}}
      animate={{ pathLength: isSuccess ? "1" : "" }}
      transition={{ duration: 4, ease: "easeInOut" }}
      d="M5 12l5 5l10 -10" />
      </motion.svg> */}

<motion.svg
initial={{ pathLength: "0"}}
xmlns="http://www.w3.org/2000/svg" fill="white" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
<motion.path
initial={{ pathLength: "0"}}
d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344"></motion.path>
</motion.svg>

    </motion.div>
  </motion.button>
</div>
  )
}

