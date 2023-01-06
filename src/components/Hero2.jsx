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
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 80 },
    show: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.6 },
    show: { opacity: 1, scale: 0.6, transition: { delay: 1 } },
  };

  return (
    <div className={`min-h-screen  text-white ${styles}`}>
      <FullPageWidth>
        <div className="absolute z-[0] h-screen w-full">
          {/* <img
            src="../assets/images/hero-screens-image.jpg"
            alt=""
            className="h-full w-full object-cover opacity-20"
          /> */}
        </div>
      </FullPageWidth>
      <div className="relative z-[1] col-span-full mt-[-100px] flex h-full items-center justify-center pt-9 tablet:col-span-6">
        <GridLayout>
          <motion.div
            initial="hidden"
            animate="show"
            variants={containerVariants}
            className="col-span-full flex flex-col justify-center tablet:col-span-5"
          >
            <div>
              <motion.h1
                variants={itemVariants}
                className="text-5xl font-semibold"
              >
                Fullstack Developer
              </motion.h1>
              <motion.h6
                variants={itemVariants}
                className="mt-8 text-2xl leading-relaxed"
              >
                I love to create elegant and intuitive web applications, and I
                take great pride in my work as a developer.
              </motion.h6>
            </div>
          </motion.div>
          <div className="col-span-full tablet:col-span-7">
            <motion.div
              initial="hidden"
              animate="show"
              variants={imageVariants}
            >
              <div className="absolute z-[10] h-[100%] w-[200%] rounded-full bg-gradient-to-r from-white to-[#235835] opacity-50 blur-[250px]" />
              <Image src={MobileImg} width="auto" height="auto" alt="" className="relative z-[20]" />
            </motion.div>
          </div>
        </GridLayout>
      </div>
    </div>
  );
}
