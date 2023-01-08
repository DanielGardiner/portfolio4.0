"use client";

import Image from "next/image";
import InnerGridContainer from "./layout/InnerGridContainer";
import MobileImg from "../assets/images/cube-code-image.png";
import { motion } from "framer-motion";
import FullPageWidth from "./layout/FullPageWidth";
import OuterWidthContainer from "./layout/OuterWidthContainer";
import ContactButton from "./ContactButton";

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
    <FullPageWidth styles="bg-[#111] rounded-bl-[0px] rounded-bl-[170px] tablet:rounded-bl-[200px]">
      <OuterWidthContainer>
        <InnerGridContainer>
          <div
            className={`mt-24  grid grid-cols-1 text-white tablet:grid-cols-2 ${styles}`}
          >
            <div className="relative z-[50]">
              <h1 className="text-5xl font-extrabold">Fullstack Developer</h1>
              <h6 className="mt-8 max-w-md text-lg leading-relaxed tablet:max-w-none">
                I love to create elegant and intuitive web applications, and I
                take great pride in my work as a developer.
              </h6>
              <ContactButton />
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
        </InnerGridContainer>
      </OuterWidthContainer>
    </FullPageWidth>
  );
}
