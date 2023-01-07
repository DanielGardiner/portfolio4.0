import FullPageWidth from "../components/FullPageWidth";
import Hero from "../components/Hero";
import Intro from "../components/Intro";

export default function Page() {
  return (
    <>
      <Hero styles="col-span-full" />
      <Intro styles="col-span-full bg-white" />
    </>
  )
}
