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
      <Intro styles="col-span-full mt-52 bg-transparent" />
      {/* <FloatingImage>
        <div
          className="absolute top-0 left-0 z-10 h-[100%] w-[100%] rounded-full bg-gradient-to-r from-white to-[#AB3728]
        opacity-[45%]
        "
        />
        <Image
          src={CubeImage}
          alt="me"
          height="auto"
          width="auto"
          className="relative z-30 h-[350px] w-[350px] rounded-full object-cover"
        />
      </FloatingImage> */}
      <Projects styles="col-span-full mt-72 bg-transparent" />
    </>
  );
}
