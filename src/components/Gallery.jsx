"use client";
import { motion } from "framer-motion";

import Image from "next/image";
import Container from "./layout/Container";

export default function Gallery({
  styles,
  items = [
    {
      preTitle: '',
      title: '',
      description: '',
      image: null,
    }
  ]
}) {

  return (
    <div className="relative bg-white">
      <div className="h-[750px] w-[750px] border-[5px] border-gray-100 rounded-full -left-[400px] -top-10 opacity-50 hidden tablet:block tablet:absolute" />
      <div className="h-[650px] w-[650px] border-[5px] border-gray-100 rounded-full -left-[400px] -top-15 opacity-50 hidden tablet:block tablet:absolute" />
      <Container>
        {items.map((item, i) => {

          const isEven = i % 2 === 0;

          const text = (
            <div className="flex flex-col">
              {item.preTitle && (<h6 className="font-semibold text-themeGreen mb-2">{item.preTitle}</h6>)}
              <h5 className="font-bold text-themePurple  mb-4">
                {item.title}
              </h5>
              <p className="text-themeGrey-500">
                {item.description}
              </p>
            </div>
          )

          const image = item.image ? (
            <Image
              src={item.image}
              alt=""
              className="object-cover max-h-[400px] rounded-xl"
            />
          ) : null;

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
    <motion.dev
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        y: {
          duration: 0.8,
          ease: 'easeIn',
          type: 'spring',
          stiffness: 30
        }
      }}
      viewport={{ once: true }}
      className={`
        flex-col justify-center
        mb-[60px] tablet:mb-[150px]  
        col-span-full
        ${isStartPosition && 'tablet:col-start-2 '}
        tablet:col-span-6
        ${styles}
      `}
    >
      {children}
    </motion.dev>
  )
}

function GalleryText({ children, styles, isStartPosition }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        y: {
          duration: 0.8,
          ease: 'easeIn',
          type: 'spring',
          stiffness: 30
        }
      }}
      viewport={{ once: true }}
      className={`
        flex flex-col justify-center
        mb-[60px] tablet:mb-[150px]  
        col-span-full
        ${isStartPosition && 'tablet:col-start-2 '}
        tablet:col-span-4
        ${styles}
      `}
    >
      {children}
    </motion.div>
  )
}

