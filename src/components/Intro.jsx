"use client";

import CubeImage from "../assets/images/cube-machine-image.png";
import MeImage from "../assets/images/me-image.png";
import Image from "next/image";
import { motion } from "framer-motion";
import ContactButton from "./ContactButton";

export default function Intro({ styles }) {
  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0, transition: { duration: 1 } },
  };
  const textVariants = {
    hidden: { opacity: 0, x: 100 },
    show: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <div className={`rounded-3xl ${styles}`}>
      <div className="grid grid-cols-1 tablet:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={imageVariants}
          className="flex items-center justify-center">
          <Image
            src={MeImage}
            alt="me"
            height="auto"
            width="auto"
            className="h-[350px] w-[350px] rounded-full object-cover"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={textVariants}
          className="flex flex-col justify-center"
        >
          <h5>Hi, I&apos;m Dan.</h5>
          <p className="mt-6">
            I am a full-stack developer with over three years of experience
            building web applications using React and Node.js. I have had the opportunity to work on a variety
            of projects ranging from single page sites to large applications with complex user
            journeys. I am constantly seeking new challenges and opportunities to grow as a developer.
            Please don&apos;t hesitate to contact me if you have any questions or opportunities.
          </p>
          <div>
            <ContactButton />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
