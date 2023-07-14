'use client';

import Hero from "../components/Hero";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import ImageGallery from "../components/ImageGallery";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

import ScenePeopleImage from "../assets/images/scene-people.webp";
import SceneLadyWateringImage from "../assets/images/scene-ladywatering.webp";
import SceneDetailedImage from "../assets/images/scene-detailed-people.webp";
import SceneGingerImage from "../assets/images/scene-ginger-people.webp";
import SceneTwoSimpleImage from "../assets/images/scene-two-simple.webp";
import SceneYoungImage from "../assets/images/scene-young.webp";
import SceneHardWorkImage from "../assets/images/scene-hard-work.webp";

import Action1Image from "../assets/images/action-1.jpg";
import Action2Image from "../assets/images/action-2.jpg";
import Action3Image from "../assets/images/action-3.jpg";
import Action4Image from "../assets/images/action-4.jpg";
import Action5Image from "../assets/images/action-5.jpg";
import Action6Image from "../assets/images/action-6.jpg";

import Pricing from "../components/Pricing";

// TODO: add a who we are section 
// TODO: add an image gallery section
// TODO: add pricing section

export default function Page() {
  return (
    <>
      <Hero styles="mb-[220px]" />
      <Services />
      <Gallery items={[
        {
          preTitle: "About us",
          title: "Early establishment of rooted",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima expedita ullam placeat maxime nostrum voluptate at eligendi quae soluta cupiditate, laborum eum harum quasi similique corrupti itaque architecto perferendis quod.",
          image: Action5Image,
        },
        {
          title: "Continue to develop to become a global brand",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima expedita ullam placeat maxime nostrum voluptate at eligendi quae soluta cupiditate, laborum eum harum quasi similique corrupti itaque architecto perferendis quod.",
          image: Action2Image,
        }
      ]}
      />
      <ContactSection styles="mb-[60px] tablet:mb-[120px]" />
      {/* <Gallery items={[
        {
          preTitle: "About us",
          title: "Early establishment of rooted",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima expedita ullam placeat maxime nostrum voluptate at eligendi quae soluta cupiditate, laborum eum harum quasi similique corrupti itaque architecto perferendis quod.",
          image: SceneDetailedImage,
        },
        {
          preTitle: "About us",
          title: "Continue to develop to become a global brand",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima expedita ullam placeat maxime nostrum voluptate at eligendi quae soluta cupiditate, laborum eum harum quasi similique corrupti itaque architecto perferendis quod.",
          image: SceneYoungImage,
        },
      ]}
      /> */}
      <ImageGallery items={[
        {
          image: SceneGingerImage,
        },
        {
          image: SceneTwoSimpleImage,
        },
        {
          image: SceneHardWorkImage,
        },
        {
          image: SceneGingerImage,
        },
        {
          image: SceneTwoSimpleImage,
        },
        {
          image: SceneHardWorkImage,
        },
      ]} />
      <Pricing />
      <ContactSection styles="" />
      <Footer />
    </>
  );
}
