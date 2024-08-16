"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import styles from "./moving-border.module.css";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactUs() {
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    formState: { errors },
  } = useForm();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    console.log("true");
    setTimeout(() => {
      setIsSuccess(false);
    }, 3000);

    // emailjs
    //   .sendForm('service_9pl8maa', 'template_junwsgp', form.current, {
    //     publicKey: 'QOufJT4a6l-SjdOFP',
    //   })
    //   .then(
    //     () => {
    //       setIsSuccess(true)
    //       console.log("true")
    //       setTimeout(() => {
    //         setIsSuccess(false);
    //       }, 3000)
    //     },
    //     (error) => {
    //       console.log('FAILED...', error.text);
    //     },
    //   );
  };

  return (
    <div className="p-2 h-full lg:mt-6 w-full flex">
      <form
        className="flex flex-col h-full w-full mt-2 justify-start items-center space-y-8"
        ref={form}
        onSubmit={sendEmail}
        aria-label="contact"
      >
        <div className="relative">
          <input
            {...register("firstName", {
              required: "This Is Required",
              minLength: {
                value: 2,
                message: "Please enter atleast two characters",
              },
            })}
            className={styles.boxInput}
            required
            name="firstName"
            aria-label="Name"
          ></input>
          <span id={styles.bar} />
          <label className={styles.label} htmlFor="username">
            Name
          </label>
          <p className={styles.errorMsg}>{errors.firstName?.message}</p>
        </div>
        <div className="relative">
          <input
            {...register("email", {
              required: true,
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gm,
                message: "Enter valid email",
              },
            })}
            className={styles.boxInput}
            name="email"
            required
            aria-label="Email"
          />
          <span id={styles.bar} />
          <label id="label" className={styles.label} htmlFor="email">
            Email
          </label>
          <p className={styles.errorMsg}>{errors.email?.message}</p>
        </div>
        <div className="relative">
          <textarea
            name="message"
            className={`${styles.boxInput}`}
            id={styles.textareaInput}
            required
            aria-label="Message"
          />
          <span id={styles.bar} />
          <label htmlFor="boxInput" id="label" className={styles.label}>
            Message
          </label>
        </div>
        <Button isSuccess={isSuccess} />
      </form>
    </div>
  );
}

const Button = ({ isSuccess }) => {
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
        ease: "easeInOut",
      },
    },
  };

  return (
    <AnimatePresence>
      <div className="h-full flex items-end self-center p-4 relative bg-white">
        <motion.button
          type="submit"
          animate={{ backgroundColor: isSuccess ? "#388e3c" : "#52525B" }}
          transition={{ duration: "1" }}
          className={`btn justify-center items-center relative outline-none overflow-hidden border-none h-[50px] w-[220px] text-white text-[22px] text-center rounded-full shadow-md shadow-[-1px_6px_10px_2px rgba(0, 0, 0, 0.2)]`}
        >
          <motion.p
            animate={{ x: isSuccess ? "-40px" : "0px" }}
            transition={{ duration: "1" }}
            className="flex justify-center align-middle p-1 text-lg"
          >
            {isSuccess ? "Thanks" : "Submit"}
          </motion.p>
          <motion.div
            className={`${styles.checkBox} justify-center flex items-center p-2`}
            animate={{
              opacity: isSuccess ? "1" : "0",
              right: isSuccess ? "0px" : "-40px",
            }}
            transition={{ duration: "1" }}
          >
            {isSuccess && (
              <motion.svg
                initial="hidden"
                animate="visible"
                variants={variants}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <motion.path
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  d="M5 12l5 5l10 -10"
                />
              </motion.svg>
            )}
          </motion.div>
        </motion.button>
      </div>
    </AnimatePresence>
  );
};
