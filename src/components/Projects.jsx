"use client";

import CubeImage from "../assets/images/cube-machine-image.png";
import MeImage from "../assets/images/me-image.png";
import Image from "next/image";
import { motion } from "framer-motion";
import ContactButton from "./ContactButton";
import InnerGridContainer from "./layout/InnerGridContainer";

const examples = [
  {
    title: 'title',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima expedita ullam placeat maxime nostrum voluptate at eligendi quae soluta cupiditate, laborum eum harum quasi similique corrupti itaque architecto perferendis quod.',
    image: CubeImage
  },
  {
    title: 'title',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima expedita ullam placeat maxime nostrum voluptate at eligendi quae soluta cupiditate, laborum eum harum quasi similique corrupti itaque architecto perferendis quod.',
    image: CubeImage
  },
  {
    title: 'title',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima expedita ullam placeat maxime nostrum voluptate at eligendi quae soluta cupiditate, laborum eum harum quasi similique corrupti itaque architecto perferendis quod.',
    image: CubeImage
  },
]

export default function Projects({ styles }) {
  return (
    <div className={`${styles}`}>
      <h5 className="text-center">Projects</h5>
      <InnerGridContainer styles="mt-10">
        {examples.map((example) => (
          <div key={example.title} className="col-span-4">
            <div>
              <Image
                src={example.image}
                width="150px"
                height="150px"
                alt=""
                className="object-cover bg-blue-500"
              />
            </div>
            {example.title}
          </div>
        )
        )}
      </InnerGridContainer>
    </div >
  );
}
