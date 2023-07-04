"use client";

import InnerGridContainer from "../components/layout/InnerGridContainer";
import OuterWidthContainer from "../components/layout/OuterWidthContainer";

// import CubeIcon from "../assets/images/gardener-4.png";
import CubeIcon from "../assets/images/gardener-4-high.webp";

import Image from "next/image";
import MobileImg from "../assets/images/cube-code-image.png";
import { motion } from "framer-motion";
import FullPageWidth from "./layout/FullPageWidth";
import Container from "./layout/Container";
import ContactButton from "./buttons/ContactButton";
import Header from "./Header";
import PrimaryButton from "./buttons/PrimaryButton";

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
    <div className={`bg-themeGrey-100 relative ${styles}`}>
      {/* <div className="h-[750px] w-[750px] border-[5px] border-gray-100 rounded-full absolute -left-[400px] -top-10 opacity-50" />
      <div className="h-[650px] w-[650px] border-[5px] border-gray-100 rounded-full absolute -left-[400px] -top-15 opacity-50" /> */}

      <Container styles="pb-16">
        <Header styles="mt-5 mb-9 z-10 col-span-full" />
        <div className="col-span-12 tablet:col-span-6 flex-col flex mb-8 tablet:mb-0">

          {/* title */}
          <h1 className="text-6xl font-bold text-themePurple mb-9">
            <span className="block m-0 mb-3">
              Providing
            </span>
            <span className="block m-0 mb-3 text-themeGreen">
              fresh produce
            </span>
            <span className="block m-0 mb-3">
              Every day
            </span>
          </h1>

          {/* lead text */}
          <p className="text-themeGrey-500 mb-6">
            Morbi leo urna molestie at. Sed euismod nisi porta lorem mollis aliquam ut.<br /> Tempor orci dapibus ultrices in iaculis nunc. Viverra ipsum nunc <br />aliquet bibendum enim facilisis gravida neque convallis.
          </p>

          {/* button */}
          <div>
            <PrimaryButton />
          </div>

        </div>
        <div
          className="col-span-12 tablet:col-span-6 text-white relative min-h-[600px] tablet:min-h-0 w-full"
        >
          <Image
            src={CubeIcon}
            alt="cube icon"
            fill={true}
            className="object-cover tablet:object-contain rounded-xl scale-110 tablet:scale-[1.5] tablet:mt-16"
          />
        </div>
      </Container>
    </div>
  )
}

