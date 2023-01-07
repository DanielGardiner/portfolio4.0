import FullPageWidth from "./layout/FullPageWidth";
import InnerGridContainer from "./layout/InnerGridContainer";
import OuterWidthContainer from "./layout/OuterWidthContainer";

export default function Intro({ styles }) {
  return (
    <div className={`${styles}`}>
      <FullPageWidth>
        <OuterWidthContainer>
          <InnerGridContainer>
            <div className="col-span-full rounded-lg">
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
