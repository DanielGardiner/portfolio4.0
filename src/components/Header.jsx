import Image from "next/image";
import ContactButton from "./buttons/ContactButton";
import LogoImage from "../assets/images/garden-logo.webp";

import FullPageWidth from "./layout/FullPageWidth";
import InnerGridContainer from "./layout/InnerGridContainer";
import OuterWidthContainer from "./layout/OuterWidthContainer";

export default function Header({ styles }) {
  return (
    <div className={`w-full flex justify-end items-center ${styles}`}>
      {/* <Image src={LogoImage} alt="logo" width={110} className="opacity-70" /> */}
      <ContactButton styles="hidden mobile:flex" />
    </div>
  );
}
