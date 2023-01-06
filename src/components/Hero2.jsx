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
      <div className="pt-9 h-full flex justify-center items-center">
        Oook
      </div>
    </div>
  );
}
