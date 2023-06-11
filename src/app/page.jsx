import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import FloatingImage from "../components/FloatingImage";
import CubeImage from "../assets/images/cube-machine-image.png";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <Hero styles="col-span-full" />
      {/* <Intro styles="col-span-full mt-52 bg-transparent" /> */}
      {/* <Projects styles="col-span-full mt-72 bg-transparent" /> */}
    </>
  );
}
