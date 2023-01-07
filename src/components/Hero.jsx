"use client";

import Image from "next/image";
import InnerGridContainer from "./layout/InnerGridContainer";
import HeroImage from "../assets/images/web-hero-image.png";
// import MobileImg from "../assets/images/phone-image.png";
import MobileImg from "../assets/images/cube-code-image.png";
import { motion } from "framer-motion";

export default function Hero({ styles }) {
  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.6,
      x: 100,
    },
    show: {
      opacity: 1,
      scale: 0.8,
      x: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };

  return (
    <div
      className={`mt-24 grid grid-cols-1 text-white tablet:grid-cols-2 ${styles}`}
    >
      <div className="relative z-[50]">
        <h1 className="text-5xl font-extrabold">Fullstack Developer</h1>
        <h6 className="mt-8 max-w-md text-lg leading-relaxed tablet:max-w-none">
          I love to create elegant and intuitive web applications, and I take
          great pride in my work as a developer.
        </h6>
        <button className="mt-6 inline-flex items-center rounded bg-[#5DC1C2] py-2 px-4 font-bold text-black hover:bg-[#7AF9F2]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
          <span className="ml-3">daniel.gardiner.tech@gmail.com</span>
        </button>
      </div>
      <div className="relative flex items-center justify-center">
        <div className="absolute top-[-200px] right-[-380px]  z-[10] h-[100%] w-[200%] rounded-full bg-gradient-to-r from-[#72F3EF] to-[#D53449] opacity-[15%] blur-[90px]" />
        <motion.div
          initial="hidden"
          animate="show"
          variants={imageVariants}
          className="mt-[-150px] ml-[220px] tablet:mt-[-360px] tablet:ml-0"
        >
          <Image
            src={MobileImg}
            width="auto"
            height="auto"
            alt=""
            className="relative z-[20] max-w-none"
          />
        </motion.div>
      </div>
    </div>
  );
}
