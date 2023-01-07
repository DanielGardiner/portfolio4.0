"use client";

import Image from "next/image";
import FullPageWidth from "./FullPageWidth";
import GridLayout from "./GridLayout";
import HeroImage from "../assets/images/web-hero-image.png";
import MobileImg from "../assets/images/phone-image.png";
import ScreenImg from "../assets/images/hero-screens-image.jpg";
import PageContainer from "./PageContainer";
import { motion } from "framer-motion";

export default function Hero({ styles }) {
  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.6,
    },
    show: {
      opacity: 1,
      scale: 0.8,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };

  return (
    <div className={`min-h-screen  text-white ${styles}`}>

      <div className="relative z-[1] col-span-full mt-[-100px] flex h-full items-center justify-center pt-9 tablet:col-span-6">
        <GridLayout>
          <motion.div
            initial="hidden"
            animate="show"
            className="col-span-full flex flex-col justify-center tablet:col-span-5"
          >
            <div>
              <h1
                className="text-5xl font-extrabold"
              >
                Fullstack Developer
              </h1>
              <h6
                className="mt-8 text-lg leading-relaxed"
              >
                I love to create elegant and intuitive web applications, and I
                take great pride in my work as a developer.
              </h6>
              <button class="mt-6 inline-flex items-center rounded py-2 px-4 font-bold bg-[#29AC6F] text-black hover:text-white hover:bg-[#0B3215]">
                <svg
                  class="mr-2 h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <span>daniel.gardiner.tech@gmail.com</span>
              </button>
            </div>
          </motion.div>
          <div className="col-span-full tablet:col-span-7">
            <motion.div
              initial="hidden"
              animate="show"
              variants={imageVariants}
            >
              <div className="absolute z-[10] h-[100%] w-[160%] rounded-full bg-gradient-to-r from-white to-[#235835] opacity-50 blur-[150px]" />
              <Image
                src={MobileImg}
                width="auto"
                height="auto"
                alt=""
                className="relative z-[20] max-w-none"
              />
            </motion.div>
          </div>
        </GridLayout>
      </div>
    </div>
  );
}
