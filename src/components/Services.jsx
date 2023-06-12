"use client";

import LeafImage from "../assets/images/leaf.webp";
import WaterCanImage from "../assets/images/watercan.webp";
import MeImage from "../assets/images/me-image.png";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "./layout/Container";

const examples = [
  {
    title: "title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima expedita ullam placeat maxime nostrum voluptate at eligendi quae soluta cupiditate, laborum eum harum quasi similique corrupti itaque architecto perferendis quod.",
    image: WaterCanImage,
  },
  {
    title: "title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima expedita ullam placeat maxime nostrum voluptate at eligendi quae soluta cupiditate, laborum eum harum quasi similique corrupti itaque architecto perferendis quod.",
    image: WaterCanImage,
  },
  {
    title: "title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima expedita ullam placeat maxime nostrum voluptate at eligendi quae soluta cupiditate, laborum eum harum quasi similique corrupti itaque architecto perferendis quod.",
    image: WaterCanImage,
  },
  {
    title: "title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima expedita ullam placeat maxime nostrum voluptate at eligendi quae soluta cupiditate, laborum eum harum quasi similique corrupti itaque architecto perferendis quod.",
    image: WaterCanImage,
  },
  {
    title: "title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima expedita ullam placeat maxime nostrum voluptate at eligendi quae soluta cupiditate, laborum eum harum quasi similique corrupti itaque architecto perferendis quod.",
    image: WaterCanImage,
  },
  {
    title: "title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima expedita ullam placeat maxime nostrum voluptate at eligendi quae soluta cupiditate, laborum eum harum quasi similique corrupti itaque architecto perferendis quod.",
    image: WaterCanImage,
  },
];

export default function Services({ styles }) {
  return (
    <Container>
      <div className="col-span-12 relaive">
        <Image src={LeafImage} alt="leaf" width={60} className="absolute -left-5 -top-10 rotate-[-45deg]" />
        <div className=" flex items-center flex-col mb-8">
          <h3 className="text-3xl text-themePurple font-bold">All my amazing services</h3>
          <h4 className="text-1xl text-themeGreen  font-bold">(The things I love to do)</h4>
        </div>

        <Image src={LeafImage} alt="leaf" width={60} className="absolute -right-5 -top-10 rotate-[45deg]" />
      </div>

      {examples.map((example) => (
        <div key={example.title} className="col-span-4 flex items-center flex-col ">
          <Image
            src={example.image}
            alt=""
            width={100}
            height={100}
          />
          {example.title}
        </div>
      ))}
    </Container>
  );
}

