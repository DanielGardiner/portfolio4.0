import GridLayout from "../components/GridLayout";
import Header from "../components/Header";
import PageContainer from "../components/PageContainer";
import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#18181B]">
        <PageContainer>
          <GridLayout>
            <Header styles="col-span-full" />
            {children}
          </GridLayout>
        </PageContainer>
      </body>
    </html>
  );
}
