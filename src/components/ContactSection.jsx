import ContactButton from "./buttons/ContactButton";
import ContactButtonV2 from "./buttons/ContactButtonV2";
import Container from "./layout/Container";
import FullPageWidth from "./layout/FullPageWidth";

const sides = {
  LEFT: "left",
  RIGHT: "right",
};

export default function ContactSection({ styles }) {

  return (
    <div className={`bg-themeGrey-100 py-[180px] tablet:py-28 ${styles}`}>
      <Container>
        <div className="col-span-12 tablet:col-span-10 tablet:col-start-2 text-center">
          <h4 className="text-themePurple text-4xl font-bold mb-4">
            Contact us now
          </h4>
          <p className="text-themeGrey-500 text-lg font-light mb-8">
            Nice words about why you should contact us. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <ContactButtonV2 isColTabletDown isChunky styles="" />
        </div>
      </Container>
    </div>
  )

}
