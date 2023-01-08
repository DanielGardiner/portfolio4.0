import FullPageWidth from "./layout/FullPageWidth";
import InnerGridContainer from "./layout/InnerGridContainer";
import OuterWidthContainer from "./layout/OuterWidthContainer";

export default function Header({ styles }) {
  return (
    <FullPageWidth styles="bg-[#111]">
      <OuterWidthContainer>
        <InnerGridContainer>
          <nav className={`flex justify-between py-4 text-white ${styles}`}>
            <div>
              <img
                src="https://i.pinimg.com/originals/df/9f/3a/df9f3a52ef7690188d91b721aaa45f6e.png"
                alt="logo"
                className="h-[40px] w-[40px] rounded-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              <div>Contact</div>
              <div>Contact</div>
              <div>Contact</div>
            </div>
          </nav>
        </InnerGridContainer>
      </OuterWidthContainer>
    </FullPageWidth>
  );
}
