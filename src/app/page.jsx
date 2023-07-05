'use client';

import Hero from "../components/Hero";
import Services from "../components/Services";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import FloatingImage from "../components/FloatingImage";
import CubeImage from "../assets/images/cube-machine-image.png";
import Image from "next/image";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import ContactSection from "../components/ContactSection";

export default function Page() {
  return (
    <>
      <Hero styles="mb-[220px]" />
      <Services />
      <Gallery />
      <ContactSection />
      {/* <Intro styles="col-span-full mt-52 bg-transparent" /> */}
      {/* <Projects styles="col-span-full mt-72 bg-transparent" /> */}
    </>
  );
}
