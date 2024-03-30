import React from "react";
import styles from './moving-border.module.css'

export default function Newsletter() {
  return (
    <div className="bg-white text-[#333] font-[sans-serif] min-h-screen items-center self-center flex rounded-lg">
      <div className="max-w-5xl md:mx-auto text-center border-px shadow-custom rounded-xl py-6 p-4 mx-2 relative overflow-hidden">
      <img className="absolute inset-0 bg-cover z-0 w-full h-40" src="./slice.png"/>
      <div className="z-10 absolute top-0 -inset-0 mt-8">
        <h1 className={`${styles.luminosity} ${styles.Monoton}`}>E<span className={styles.flickerfast}>x</span>pl<span className={styles.flickerslow}>o</span>re</h1>
        </div>
        <div className="flex md:mt-20 mt-28">
        <p className="text-lg md:mx-12 mt-24">
        Stay in the loop! Get quick updates when new interviews drop, along with valuable resources and insights into the latest in tech and more.
        </p>
        </div>
        <div className="flex self-end items-end justify-en content-end place-content-end w-full">
        <svg 
        className="flex absolute md:left-12 left-0 bottom-5 drop-shadow-lg"
        width="60" 
        height="60" 
        viewBox="0 0 100 100">
<circle cx="13" cy="29" r="2" fill="#ee3e54"></circle><circle cx="77" cy="13" r="1" fill="#f1bc19"></circle><circle cx="50" cy="50" r="37" fill="#fce0a2"></circle><circle cx="83" cy="15" r="4" fill="#f1bc19"></circle><circle cx="87" cy="24" r="2" fill="#ee3e54"></circle><circle cx="81" cy="76" r="2" fill="#fbcd59"></circle><circle cx="15" cy="63" r="4" fill="#fbcd59"></circle><circle cx="25" cy="87" r="2" fill="#ee3e54"></circle><circle cx="18.5" cy="53.5" r="2.5" fill="#fff"></circle><circle cx="21" cy="67" r="1" fill="#f1bc19"></circle><circle cx="80" cy="34" r="1" fill="#fff"></circle><path fill="#78a0cf" d="M28.005,65.001l-0.004-30c0-3.866,3.134-7.001,7-7.001H65c3.866,0,7,3.134,7,7v30 c0,3.866-3.134,7-7,7H35.005C31.139,72,28.005,68.867,28.005,65.001z"></path><path fill="#472b29" d="M65,28.4c3.639,0,6.6,2.961,6.6,6.6v30c0,3.639-2.961,6.6-6.6,6.6H35c-3.639,0-6.6-2.961-6.6-6.6V35 c0-3.639,2.961-6.6,6.6-6.6H65 M65,27H35c-4.418,0-8,3.582-8,8v30c0,4.418,3.582,8,8,8h30c4.418,0,8-3.582,8-8V35 C73,30.582,69.418,27,65,27L65,27z"></path><path fill="#fff" d="M61.5,59.5h-23c-1.657,0-3-1.343-3-3v-13c0-1.657,1.343-3,3-3h23c1.657,0,3,1.343,3,3v13 C64.5,58.157,63.157,59.5,61.5,59.5z"></path><path fill="#472b29" d="M61.5,60h-23c-1.93,0-3.5-1.57-3.5-3.5v-13c0-1.93,1.57-3.5,3.5-3.5h23c1.93,0,3.5,1.57,3.5,3.5v13 C65,58.43,63.43,60,61.5,60z M38.5,41c-1.378,0-2.5,1.122-2.5,2.5v13c0,1.378,1.122,2.5,2.5,2.5h23c1.378,0,2.5-1.122,2.5-2.5v-13 c0-1.378-1.122-2.5-2.5-2.5H38.5z"></path><path fill="#472b29" d="M50,53.965c-1.076,0-2.151-0.409-2.97-1.228L36.146,41.854c-0.195-0.195-0.195-0.512,0-0.707 s0.512-0.195,0.707,0L47.737,52.03c1.248,1.247,3.277,1.247,4.525,0l10.884-10.884c0.195-0.195,0.512-0.195,0.707,0 s0.195,0.512,0,0.707L52.97,52.737C52.151,53.556,51.076,53.965,50,53.965z"></path><path fill="#472b29" d="M36.5,59c-0.128,0-0.256-0.049-0.354-0.146c-0.195-0.195-0.195-0.512,0-0.707l8.5-8.5 c0.195-0.195,0.512-0.195,0.707,0s0.195,0.512,0,0.707l-8.5,8.5C36.756,58.951,36.628,59,36.5,59z"></path><path fill="#472b29" d="M63.5,59c-0.128,0-0.256-0.049-0.354-0.146l-8.5-8.5c-0.195-0.195-0.195-0.512,0-0.707 s0.512-0.195,0.707,0l8.5,8.5c0.195,0.195,0.195,0.512,0,0.707C63.756,58.951,63.628,59,63.5,59z"></path><path fill="#472b29" d="M69.5,42c-0.276,0-0.5-0.224-0.5-0.5v-6c0-2.481-2.019-4.5-4.5-4.5h-13c-0.276,0-0.5-0.224-0.5-0.5 s0.224-0.5,0.5-0.5h13c3.033,0,5.5,2.467,5.5,5.5v6C70,41.776,69.776,42,69.5,42z"></path><path fill="#472b29" d="M48.5,31h-3c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h3c0.276,0,0.5,0.224,0.5,0.5 S48.776,31,48.5,31z"></path><path fill="#472b29" d="M64.5,70h-29c-3.033,0-5.5-2.467-5.5-5.5v-29c0-3.033,2.467-5.5,5.5-5.5h7 c0.276,0,0.5,0.224,0.5,0.5S42.776,31,42.5,31h-7c-2.481,0-4.5,2.019-4.5,4.5v29c0,2.481,2.019,4.5,4.5,4.5h29 c2.481,0,4.5-2.019,4.5-4.5v-4c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v4C70,67.533,67.533,70,64.5,70z"></path><path fill="#472b29" d="M69.5,58c-0.276,0-0.5-0.224-0.5-0.5v-9c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v9 C70,57.776,69.776,58,69.5,58z"></path>
</svg>
        <div className="mx-auto bg-gray-100 flex px-2 py-1 rounded-full text-left mt-12 border focus-within:border-gray-700 w-2/3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full outline-none bg-transparent text-sm py-3"
          />
          <button
            type="button"
            className="bg-white transition-all font-semibold text-sm rounded-full px-8 py-3 text-gray-700 shadow-custom"
          >
            Submit
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}
