"use client";

import Image from "next/image";
import Action1Image from "../assets/images/action-1.jpg";
import Action2Image from "../assets/images/action-2.jpg";
import Action3Image from "../assets/images/action-3.jpg";
import Action4Image from "../assets/images/action-4.jpg";
import Action5Image from "../assets/images/action-5.jpg";
import Action6Image from "../assets/images/action-6.jpg";

import SceneYoungImage from "../assets/images/scene-young.webp";
import ScenePeopleImage from "../assets/images/scene-people.webp";
import SceneLadyWateringImage from "../assets/images/scene-ladywatering.webp";
import SceneDetailedImage from "../assets/images/scene-detailed-people.webp";
import SceneGingerImage from "../assets/images/scene-ginger-people.webp";
import SceneTwoSimpleImage from "../assets/images/scene-two-simple.webp";
import SceneHardWorkImage from "../assets/images/scene-hard-work.webp";
import Container from "./layout/Container";


export default function Gallery({
  styles,
  items = [
    {
      image: null,
    }
  ]
}) {

  return (
    <div className="">
      <Container>
        <div className="col-span-12 text-center mb-8">
          <h6 className="text-themeGreen text-xl mb-2">Images</h6>
          <h5 className="text-themePurple text-4xl">Look at some of our stuff</h5>
        </div>
        <div class="col-span-12 mx-auto py-2">
          <div class="-m-1 flex flex-wrap md:-m-2">
            <div class="flex w-full tablet:w-1/2 flex-wrap">
              <div class="w-full mobile:w-1/2 p-2 md:p-2">
                <Image
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={Action1Image} />
              </div>
              <div class="w-full mobile:w-1/2 p-2 md:p-2">
                <Image
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={Action2Image} />
              </div>
              <div class="w-full p-2 md:p-2">
                <Image
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={Action3Image} />
              </div>
            </div>
            <div class="flex w-full tablet:w-1/2 flex-wrap">
              <div class="w-full p-2 md:p-2">
                <Image
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={Action4Image} />
              </div>
              <div class="w-full mobile:w-1/2 p-2 md:p-2">
                <Image
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={Action5Image} />
              </div>
              <div class="w-full mobile:w-1/2 p-2 md:p-2">
                <Image
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={Action6Image} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )


  return (
    <div className={`relative ${styles} bg-themeGrey-100 py-24`}>
      <Container>
        <div className="col-span-12 text-center mb-20">
          <h6 className="text-themeGreen text-xl mb-2">Images</h6>
          <h5 className="text-themePurple text-4xl">Look at some of our stuff</h5>
        </div>
        {items?.map((item, i) => {

          if (!item.image) return null
          return (
            <div key={i} className="
              col-span-12 tablet:mr-6 mb-12 bg-white
              tablet:col-span-6 rounded-xl border-2 border-themeGrey-100">
              <Image
                src={item.image}
                alt=""
                className="object-cover"
              />
            </div>
          )
        })}
      </Container>
    </div>

  );
}
