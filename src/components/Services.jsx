"use client";
import { motion } from "framer-motion";

import LeafImage from "../assets/images/leaf.webp";
import WaterCanImage from "../assets/images/watercan.webp";
import PotPlantImage from "../assets/images/potplant.webp";
import PlantVineImage from "../assets/images/plantvine.webp";
import ForkVineImage from "../assets/images/fork.webp";
import SmallPotImage from "../assets/images/smallpot.webp";
import JugImage from "../assets/images/jug.webp";
import FlowerImage from "../assets/images/flower.webp";
import AppleImage from "../assets/images/apple.webp";
import useScreenDimensions from "../hooks/useScreenDimensions";

import MeImage from "../assets/images/me-image.png";
import Image from "next/image";

import Container from "./layout/Container";

const examples = [
  {
    title: "Garden Design and Installation",
    description:
      "Let's create your dream garden together! I'll work closely with you to design and install a personalized oasis that matches your style and preferences. From selecting the perfect plants to adding delightful features, we'll make your outdoor space absolutely enchanting.",
    image: SmallPotImage,
  },
  {
    title: "Planting and Maintenance",
    description:
      "I'm a plant enthusiast! I specialize in selecting and planting a wide variety of flowers, shrubs, trees, and other green wonders that thrive in your local climate. With my expert care, your plants will flourish and bring vibrant beauty to your garden all year round.",
    image: PotPlantImage,
  },
  {
    title: "Lawn Care and Maintenance",
    description:
      "Say hello to a lush, green carpet! I provide top-notch lawn care services to keep your grass looking fabulous. From mowing and fertilizing to aerating and weed control, I'll pamper your lawn and make it the envy of the neighborhood.",
    image: PlantVineImage,
  },
  {
    title: "Irrigation and Water Management",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima expedita ullam placeat maxime nostrum voluptate at eligendi quae soluta cupiditate, laborum eum harum quasi similique corrupti itaque architecto perferendis quod.",
    image: WaterCanImage,
  },
  {
    title: "Garden Clean-Up and Waste Removal",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima expedita ullam placeat maxime nostrum voluptate at eligendi quae soluta cupiditate, laborum eum harum quasi similique corrupti itaque architecto perferendis quod.",
    image: ForkVineImage,
  },
  {
    title: "Seasonal Planting and Decoration",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima expedita ullam placeat maxime nostrum voluptate at eligendi quae soluta cupiditate, laborum eum harum quasi similique corrupti itaque architecto perferendis quod.",
    image: AppleImage,
  },
];

function Leaf({ styles }) {
  return null;
  return (
    <Image
      src={LeafImage}
      alt="leaf"
      width={60}
      className={`hidden mobile:block ${styles}`}
    />
  )
}

export default function Services({ styles }) {

  const { isMobile } = useScreenDimensions();

  return (
    <>
      <div className="relative">
        <Container>
          <div className="col-span-12 relaive z-40 flex items-center justify-center mb-8">
            <Leaf styles="rotate-[-45deg] -mt-8 mr-3" />
            <div className=" flex items-center flex-col">
              <h3 className="text-4xl text-themePurple font-bold mb-6">All our amazing services</h3>
              {/* <h4 className="text-1xl text-themeGreen  font-bold">The things I love to do</h4> */}
            </div>
            <Leaf styles="rotate-[45deg] -mt-5 ml-2" />
          </div>

          {/* <motion.div
            initial={{ y: 0 }}
            animate={{ y: 100 }}
            transition={{ duration: 4 }} // Adjust the duration here
          >
            Content
          </motion.div> */}

          {examples.map((example) => (
            <motion.div
              variants={{
                hide: { opacity: 0, y: 0, scale: 0.9 },
                show: { opacity: 1, y: 0, scale: 1 }
              }}
              initial={'hide'}
              whileInView={'show'}
              transition={{
                duration: 0.8,
                ease: "easeIn",
                stiffness: 30,
              }}
              viewport={{ once: true }}

              key={example.title}
              className="
          col-span-12 [@media(min-width:670px)]:col-span-6 [@media(min-width:820px)]:col-span-4
          mb-16
          rounded-xl
          shadow-[0_15px_30px_15px_rgba(0,0,0,0.04)]
          flex flex-col justify-between items-center
          p-6
          z-40
          "
            >
              <Image
                src={example.image}
                alt=""
                width={80}
                height={100}
                className="mb-8"
              />
              <div>
                <h6 className="font-semibold text-themePurple text-center mb-4 text-xl">
                  {example.title}
                </h6>
                <p>
                  {example.description}
                </p>
              </div>
            </motion.div>
          ))}
        </Container>
      </div >
    </>
  );
}

