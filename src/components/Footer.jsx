import Container from "./layout/Container";

export default function Footer({ styles }) {
  return (
    <div className={`bg-themePurple py-12 tablet:py-20 h-[100px] ${styles}`}>
      <Container>
        <div className="col-span-12 tablet:col-span-4 text-white">
          This is the footer - col 1
        </div>
        <div className="col-span-12 tablet:col-span-4 text-white">
          This is the footer - col 2
        </div>
        <div className="col-span-12 tablet:col-span-4 text-white">
          This is the footer - col 3
        </div>
      </Container>
    </div>
  );
}
