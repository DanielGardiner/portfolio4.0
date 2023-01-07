import FullPageWidth from "./layout/FullPageWidth";
import InnerGridContainer from "./layout/InnerGridContainer";
import OuterWidthContainer from "./layout/OuterWidthContainer";

export default function Intro({ styles }) {
  return (
    <div className={`${styles}`}>
      <FullPageWidth>
        <OuterWidthContainer>
          <InnerGridContainer>
            {/* <div className="absolute bottom-[0] right-[-380px]  z-[10] h-[100%] w-[200%] rounded-full bg-gradient-to-r from-[#72F3EF] to-[#D53449] opacity-[15%] blur-[90px]" /> */}
            <div className="col-span-full rounded-lg h-[600px]">
              <div className="bg-white  p-3">
                This is the text here
                <br />
                This is the text here
                <br />
                This is the text here
                <br />
                This is the text here
                <br />
              </div>
            </div>
          </InnerGridContainer>
        </OuterWidthContainer>
      </FullPageWidth>
    </div>
  );
}
