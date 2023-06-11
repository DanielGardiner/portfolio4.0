import InnerGridContainer from "../components/layout/InnerGridContainer";
import OuterWidthContainer from "../components/layout/OuterWidthContainer";
import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
