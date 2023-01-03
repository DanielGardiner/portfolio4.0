import GridLayout from '../components/GridLayout';
import PageContainer from '../components/PageContainer';
import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PageContainer>
          <GridLayout>
            {children}
          </GridLayout>
        </PageContainer>
      </body>
    </html>
  );
}
