import OuterWidthContainer from "./OuterWidthContainer";
import InnerGridContainer from "./InnerGridContainer";

export default function Container({ children, styles }) {
  return (
    <OuterWidthContainer styles={styles}>
      <InnerGridContainer>
        {children}
      </InnerGridContainer>
    </OuterWidthContainer>
  );
}
