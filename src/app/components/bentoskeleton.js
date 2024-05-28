import React from "react";
import { motion } from "framer-motion";
import styles from "./moving-border.module.css";

export const SkeletonSix = () => {
  return (
    <>
      <motion.div className="absolute inset-x-0 mx-auto -top-px bg-gradient-to-bl from-sky-600 via-transparent to-sky-600 h-px" />
      <motion.div className="absolute -inset-y-0 mx-auto -top-px  bg-gradient-to-tl from-sky-600 via-transparent to-sky-600 w-px" />
      <motion.div className="absolute inset-y-0 mx-auto  -top-px -right-px bg-gradient-to-tl from-sky-600 via-transparent to-sky-600 w-px" />
      <motion.div className="absolute inset-x-0 mx-auto -bottom-px bg-gradient-to-br from-sky-600 via-transparent to-sky-600 h-px" />
    </>
  );
};

export const SkeletonOne = ({}) => {
  const text =
    "I'm a developer, frequent gym-goer, married for 10 years, and a father of one. I also own a Japanese Akita. British born, I now live in Sweden. I'm passionate about learning and driven to create a platform where others can share their career transition journeys. My goal is to build a community of self-taught enthusiasts who can help, inspire, and offer advice, tips, and motivation to others on a similar journey";

  const content = text.split(" ");

  return (
    <div
      className={`${styles.blurBackdrop} shadow-custom md:col-span-2 row-span-1 rounded-xl justify-between flex flex-col space-y-2 w-auto`}
    >
      <div className="flex flex-wrap w-auto relative mx-4 text-center overflow-hidden mt-3 align-center justify-center ">
        {content.map((item, i) => (
          <motion.p className="mr-1 mx-px my-px font-[Syne] leading-[1.50] text-[20px]" key={i}>
            {item}
          </motion.p>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export const SkeletonTwo = () => {
  return (
    <motion.div
      style={{ rotate: 20 }}
      className="border-transparent w-96 md:w-full relative row-span-1 drop-shadow-xl md:col-span-1 content-center rounded-xl group/bento shadow-custom bg-white border justify-between flex flex-col space-y-4"
    >
      <img
        className="w-full h-full object-cover rounded-xl"
        src="/bgimg.webp"
      />
    </motion.div>
  );
};

// export const SkeletonFour = () => {

//       return (
//         <motion.div
//         variants={variants}
//           layout
//           className="border-gray-200 row-span-1 md:col-span-1 rounded-xl hover:shadow-xl bg-white border justify-between flex flex-col space-y-4"
//         >
//           <motion.img
//             className="w-full h-full object-cover rounded-xl"
//             src="/mainimg.webp"
//           />
//         </motion.div>
//       );
//     };

// export const SkeletonThree = ({
// }) => {
//   const variants = {
//     visible: {
//       opacity: 1,
//       pathLength: 1,
//       transition: { duration: 2, ease: "easeInOut" },
//     },
//     hidden: {
//       opacity: 0,
//       pathLength: 0,
//     },
//   };

//   const variantOne = {
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         when: "beforeChildren",
//         staggerChildren: 0.1,
//         type: "smooth",
//         duration: 0.2,
//       }
//     },
//     hidden: {
//       y: -10,
//       opacity: 0,
//       transition: {
//         when: "afterChildren",
//       },
//     },
//   };

//   return (
//     <motion.div
//     variants={variantOne}
//     layout
//     initial="hidden"
//     animate="visible"
//     className="border-gray-200 md:col-span-2 row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-black dark:border-white/[0.2] bg-white border justify-between flex flex-col space-y-4"
//     >
//       <motion.div
//       variants={variantOne}
//       className="font-semibold text-gray-800 mt-2 mx-1 text-center leading-relaxed font-mono"
//       >
//       <motion.p
//       variants={variantOne}
//       >
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//       </motion.p>
//       <motion.p
//       variants={variantOne}
//       >
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//       </motion.p>
//       <motion.p
//       variants={variantOne}
//       >
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//       </motion.p>
//       <motion.p
//       variants={variantOne}
//       >
//        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//       </motion.p>
//       <motion.p
//     variants={variantOne}
//     >
//     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//     </motion.p>
//       </motion.div>
//     <motion.div>
//      <motion.div
//      className="text-center mb-4 font-semibold text-lg font-mono"
//      variants={variantOne}
//      >
//       Let's Connect
//       </motion.div>
//     <motion.div
//         variants={variantOne}
//         className="flex flex-row rounded-full border border-gray-300 items-center space-x-6 bg-white mb-2 mx-2 justify-center "
//       >
//         <Link         href="https://www.linkedin.com/in/marlon-stevenson-510738109/"
//         target="_blank">
//         <motion.svg
//         className=""
//         initial="hidden"
//         animate="visible"
//         variants={variants}
//         width="36px" height="36px" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
//           <motion.path  stroke="none" fill="none" variants={variants}/>
//           <motion.path  d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" variants={variants}/>
//           <motion.path  d="M8 11l0 5" variants={variants}/>
//           <motion.path  d="M8 8l0 .01" variants={variants}/>
//           <motion.path  d="M12 16l0 -5" variants={variants}/>
//           <motion.path  d="M16 16v-3a2 2 0 0 0 -4 0" variants={variants}/>
//         </motion.svg>
//         </Link>
//         <Link href="https://github.com/marlybone"
//         target="_blank"
//         >
//         <motion.svg
//         initial="hidden"
//         animate="visible"
//         variants={variants}
//         width="36px" height="36px" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" fill="white" strokeLinecap="round" strokeLinejoin="round">
//         <motion.path stroke="none" d="M0 0h24v24H0z" fill="none" variants={variants}/>
//         <motion.path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" variants={variants}/>
//         </motion.svg>
//         </Link>
//         <Link href="https://twitter.com/mRockSwe"
//         target="_blank"
//         >
//         <motion.svg
//         initial="hidden"
//         animate="visible"
//         variants={variants}
//         width="36px" height="36px" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
//         <motion.path stroke="none" d="M0 0h24v24H0z" fill="none" variants={variants}/>
//         <motion.path d="M4 4l11.733 16h4.267l-11.733 -16z" variants={variants}/>
//         <motion.path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" variants={variants}/>
//         </motion.svg>
//         </Link>
//       </motion.div>
//     </motion.div>
//     </motion.div>
//   )
// };

//  export const SkeletonSeven = () => {

//   return (
//     <></>
//   )
//  }
