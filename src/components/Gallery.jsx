"use client";

import Image from "next/image";
import ScenePeopleImage from "../assets/images/scene-people.webp";
import SceneLadyWateringImage from "../assets/images/scene-ladywatering.webp";
import Container from "./layout/Container";

const examples = [
  {
    title: "Early establishment of rooted",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima expedita ullam placeat maxime nostrum voluptate at eligendi quae soluta cupiditate, laborum eum harum quasi similique corrupti itaque architecto perferendis quod.",
    image: ScenePeopleImage,
  },
  {
    title: "Continue to develop to become a global brand",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima expedita ullam placeat maxime nostrum voluptate at eligendi quae soluta cupiditate, laborum eum harum quasi similique corrupti itaque architecto perferendis quod.",
    image: SceneLadyWateringImage,
  },
];

export default function Gallery({ styles }) {
  return (
    <Container>

      {examples.map((example, i) => {

        const isEven = i % 2 === 0;

        const text = (
          <div className="flex flex-col">
            <h6 className="font-semibold text-themeGreen mb-2">About us</h6>
            <h5 className="font-bold text-themePurple  mb-4">
              {example.title}
            </h5>
            <p className="text-themeGrey-500">
              {example.description}
            </p>
          </div>
        )

        const image = (
          <Image
            src={example.image}
            alt=""
            className="object-cover"
          />
        )


        return (
          <>
            <div
              className={`
                col-start-2  mb-[150px] flex flex-col justify-center
                ${isEven ? 'col-span-4' : 'col-span-6'}
              `}
            >
              {isEven ? text : image}
            </div>

            <div className={`
              flex flex-col justify-center mb-[150px]
              ${isEven ? 'col-span-6' : 'col-span-4'} 
            `}>
              {isEven ? image : text}
            </div>
          </>
        )
      })}
    </Container>
  );
}

