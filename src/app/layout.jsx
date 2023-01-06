import GridLayout from '../components/GridLayout';
import Header from '../components/Header';
import PageContainer from '../components/PageContainer';
import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PageContainer>
          <GridLayout styles="bg-[#FACC00]">
            <Header />
            {children}
          </GridLayout>
        </PageContainer>
      </body>
    </html>
  );
}
