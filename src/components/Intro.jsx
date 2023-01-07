import FullPageWidth from "./layout/FullPageWidth";
import InnerGridContainer from "./layout/InnerGridContainer";
import OuterWidthContainer from "./layout/OuterWidthContainer";

export default function Intro({ styles }) {
  return (
    <div className={`${styles}`}>
      <FullPageWidth styles="bg-red-500">
        <OuterWidthContainer>
          <InnerGridContainer>
            <div className="col-span-full">
              This is the text here
            </div>
          </InnerGridContainer>
        </OuterWidthContainer>
      </FullPageWidth>
    </div>
  )
}
