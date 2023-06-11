"use client";

import CubeImage from "../assets/images/cube-machine-image.png";
import MeImage from "../assets/images/me-image.png";
import Image from "next/image";
import { motion } from "framer-motion";
import ContactButton from "./buttons/ContactButton";
import InnerGridContainer from "./layout/InnerGridContainer";
import FullPageWidth from "./layout/FullPageWidth";
import OuterWidthContainer from "./layout/OuterWidthContainer";

const examples = [
  {
    title: "title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima expedita ullam placeat maxime nostrum voluptate at eligendi quae soluta cupiditate, laborum eum harum quasi similique corrupti itaque architecto perferendis quod.",
    image: CubeImage,
  },
  {
    title: "title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima expedita ullam placeat maxime nostrum voluptate at eligendi quae soluta cupiditate, laborum eum harum quasi similique corrupti itaque architecto perferendis quod.",
    image: CubeImage,
  },
  {
    title: "title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima expedita ullam placeat maxime nostrum voluptate at eligendi quae soluta cupiditate, laborum eum harum quasi similique corrupti itaque architecto perferendis quod.",
    image: CubeImage,
  },
];

export default function Projects({ styles }) {
  return (
    <div className={`${styles}`}>
      {/* <FullPageWidth styles="bg-[#111] rounded-tr-[100px] bg-gradient-radial from-white to-black bg-size-[40px]"> */}
      <FullPageWidth styles="bg-[#111] rounded-tr-[100px]">
        <OuterWidthContainer>
          <InnerGridContainer>
            <div className="col-span-full">
              <h5 className="mt-16 mb-4 text-white text-center">Projects</h5>
              <InnerGridContainer styles="mt-10">
                {examples.map((example) => (
                  <div key={example.title} className="col-span-4">
                    <div className="bg-blue-500">
                      <Image
                        src={example.image}
                        alt=""
                        width="auto"
                        height="auto"
                      />
                    </div>
                    {example.title}
                  </div>
                ))}
              </InnerGridContainer>
            </div>
          </InnerGridContainer>
        </OuterWidthContainer>
      </FullPageWidth>
    </div >
  );
}

