import ContactButton from "./buttons/ContactButton";
import FullPageWidth from "./layout/FullPageWidth";
import InnerGridContainer from "./layout/InnerGridContainer";
import OuterWidthContainer from "./layout/OuterWidthContainer";

export default function Header({ styles }) {
  return (
    <div className={`w-100 flex justify-end ${styles}`}>
      <ContactButton />
    </div>
  );
}
