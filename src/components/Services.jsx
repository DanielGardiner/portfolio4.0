"use client";

import LeafImage from "../assets/images/leaf.webp";
import WaterCanImage from "../assets/images/watercan.webp";
import PotPlantImage from "../assets/images/potplant.webp";
import PlantVineImage from "../assets/images/plantvine.webp";
import ForkVineImage from "../assets/images/fork.webp";
import SmallPotImage from "../assets/images/smallpot.webp";
import JugImage from "../assets/images/jug.webp";
import FlowerImage from "../assets/images/flower.webp";
import AppleImage from "../assets/images/apple.webp";

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
    image: PotPlantImage,
  },
  {
    title: "title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima expedita ullam placeat maxime nostrum voluptate at eligendi quae soluta cupiditate, laborum eum harum quasi similique corrupti itaque architecto perferendis quod.",
    image: PlantVineImage,
  },
  {
    title: "title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima expedita ullam placeat maxime nostrum voluptate at eligendi quae soluta cupiditate, laborum eum harum quasi similique corrupti itaque architecto perferendis quod.",
    image: ForkVineImage,
  },
  {
    title: "title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima expedita ullam placeat maxime nostrum voluptate at eligendi quae soluta cupiditate, laborum eum harum quasi similique corrupti itaque architecto perferendis quod.",
    image: SmallPotImage,
  },
  {
    title: "title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima expedita ullam placeat maxime nostrum voluptate at eligendi quae soluta cupiditate, laborum eum harum quasi similique corrupti itaque architecto perferendis quod.",
    image: JugImage,
  },
  {
    title: "title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima expedita ullam placeat maxime nostrum voluptate at eligendi quae soluta cupiditate, laborum eum harum quasi similique corrupti itaque architecto perferendis quod.",
    image: FlowerImage,
  },
  {
    title: "title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima expedita ullam placeat maxime nostrum voluptate at eligendi quae soluta cupiditate, laborum eum harum quasi similique corrupti itaque architecto perferendis quod.",
    image: AppleImage,
  },
];

export default function Services({ styles }) {
  return (
    <Container>
      <div className="col-span-12 relaive">
        <Image src={LeafImage} alt="leaf" width={60} className="absolute -left-5 -top-10 rotate-[-45deg]" />
        <div className=" flex items-center flex-col mb-8">
          <h3 className="text-4xl text-themePurple font-bold">All my amazing services</h3>
          <h4 className="text-1xl text-themeGreen  font-bold">(The things I love to do)</h4>
        </div>

        <Image src={LeafImage} alt="leaf" width={60} className="absolute -right-5 -top-10 rotate-[45deg]" />
      </div>

      {examples.map((example) => (
        <div
          key={example.title}
          className="col-span-12 mobile:col-span-6 tablet:col-span-4 flex items-center flex-col mb-12"
        >
          <Card>
            <Image
              src={example.image}
              alt=""
              width={100}
              height={100}
            />
            {example.title}
          </Card>
        </div>
      ))}
    </Container>
  );
}


function Card({ children }) {
  return (
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div class="md:flex p-10">
        {children}
      </div>
    </div>
  )
}