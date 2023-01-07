import InnerGridContainer from "../components/layout/InnerGridContainer";
import Header from "../components/Header";
import OuterWidthContainer from "../components/layout/OuterWidthContainer";
import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#18181B] overflow-x-hidden">
        <OuterWidthContainer>
          <InnerGridContainer>
            <Header styles="col-span-full" />
            {children}
          </InnerGridContainer>
        </OuterWidthContainer>
      </body>
    </html>
  );
}
