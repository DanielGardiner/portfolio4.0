'use client';

import Hero from "../components/Hero";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

import ScenePeopleImage from "../assets/images/scene-people.webp";
import SceneLadyWateringImage from "../assets/images/scene-ladywatering.webp";
import SceneDetailedImage from "../assets/images/scene-detailed-people.webp";
import SceneGingerImage from "../assets/images/scene-ginger-people.webp";
import SceneTwoSimpleImage from "../assets/images/scene-two-simple.webp";
import SceneYoungImage from "../assets/images/scene-young.webp";
import SceneHardWorkImage from "../assets/images/scene-hard-work.webp";

export default function Page() {
  return (
    <>
      <Hero styles="mb-[220px]" />
      <Services />
      <Gallery items={[
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
        }
      ]}
      />
      <ContactSection styles="mb-[60px] tablet:mb-[120px]" />
      <Gallery items={[
        {
          title: "Early establishment of rooted",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima expedita ullam placeat maxime nostrum voluptate at eligendi quae soluta cupiditate, laborum eum harum quasi similique corrupti itaque architecto perferendis quod.",
          image: SceneDetailedImage,
        },
        {
          title: "Continue to develop to become a global brand",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima expedita ullam placeat maxime nostrum voluptate at eligendi quae soluta cupiditate, laborum eum harum quasi similique corrupti itaque architecto perferendis quod.",
          image: SceneYoungImage,
        },
      ]}
      />
      <Footer />
    </>
  );
}
