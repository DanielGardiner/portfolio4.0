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
    <div className="relative">
      <div className="h-[750px] w-[750px] border-[5px] border-gray-100 rounded-full -left-[400px] -top-10 opacity-50 hidden tablet:block tablet:absolute" />
      <div className="h-[650px] w-[650px] border-[5px] border-gray-100 rounded-full -left-[400px] -top-15 opacity-50 hidden tablet:block tablet:absolute" />
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

          if (isEven) {
            return (
              <>
                <GalleryImage
                  text={text}
                  styles="flex tablet:hidden"
                >
                  {image}
                </GalleryImage>
                <GalleryText
                  isStartPosition
                  image={image}
                >
                  {text}
                </GalleryText>
                <GalleryImage
                  text={text}
                  styles="hidden tablet:flex"
                >
                  {image}
                </GalleryImage>

              </>
            )
          }

          return (
            <>
              <GalleryImage
                isStartPosition
                text={text}
              >
                {image}
              </GalleryImage>
              <GalleryText
                image={image}
              >
                {text}
              </GalleryText>
            </>

          )
        })}
      </Container>
      <div className="h-[750px] w-[750px] border-[5px] border-gray-100 rounded-full absolute -right-[400px] -bottom-10 opacity-50 hidden tablet:block tablet:absolute" />
      <div className="h-[650px] w-[650px] border-[5px] border-gray-100 rounded-full absolute -right-[400px] -bottom-2 opacity-50 hidden tablet:block tablet:absolute" />
    </div>

  );
}

function GalleryImage({ children, styles, isStartPosition }) {
  return (
    <div className={`
      flex-col justify-center
      mb-[60px] tablet:mb-[150px]  
      col-span-full
      ${isStartPosition && '[@media(min-width:870px)]:col-start-2 '}
      [@media(min-width:870px)]:col-span-6
      ${styles}
    `}>
      {children}
    </div>
  )
}

function GalleryText({ children, styles, isStartPosition }) {
  return (
    <div className={`
      flex flex-col justify-center
      mb-[60px] tablet:mb-[150px]  
      col-span-full
      ${isStartPosition && '[@media(min-width:870px)]:col-start-2 '}
      [@media(min-width:870px)]:col-span-4
      ${styles}
    `}>
      {children}
    </div>
  )
}

