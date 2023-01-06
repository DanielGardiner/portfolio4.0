import Image from "next/image";
import FullPageWidth from "./FullPageWidth";
import GridLayout from "./GridLayout";
import HeroImage from "../assets/images/web-hero-image.png";
import MobileImg from "../assets/images/phone-image.png";
import ScreenImg from "../assets/images/hero-screens-image.jpg";
import PageContainer from "./PageContainer";

export default function Hero({ styles }) {
  return (
    <div className={`grid grid-cols-2 min-h-screen ${styles}`}>
      <div className="z-[1] col-span-2  justify-center bg-[#FACC00] pt-[180px]  tablet:col-span-1">
        <h1 className="text-5xl font-semibold text-black">
          Fullstack Developer
        </h1>
        <h6 className="mt-4 text-3xl leading-relaxed text-black ">
          I love to create elegant and intuitive web applications, and I take
          great pride in my work as a developer.
        </h6>
      </div>

      <div className="relative bg-[#07B4A8]">
        <div className="absolute top-0 left-[-20px] z-[0] h-[150%] w-[150%] bg-gradient-to-r from-[#FACC00] to-[#08B6AC] blur-[20000px]" />
        <Image
          src={ScreenImg}
          width="500"
          height="450"
          alt=""
          className=" relative z-[1]"
        />
      </div>
    </div>
  );
}
