import GridLayout from "../components/GridLayout";
import Header from "../components/Header";
import PageContainer from "../components/PageContainer";
import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">
        <PageContainer>
          <GridLayout>
            <Header />
            {children}
          </GridLayout>
        </PageContainer>
      </body>
    </html>
  );
}
