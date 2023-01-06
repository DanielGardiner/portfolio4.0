import FullPageWidth from "../components/FullPageWidth";
import Hero from "../components/Hero";
import Intro from "../components/Intro";

export default function Page() {
  return (
    <>
      <Hero styles="col-span-full" />
      <Intro styles="col-span-6 bg-white" />
    </>
  )
}
