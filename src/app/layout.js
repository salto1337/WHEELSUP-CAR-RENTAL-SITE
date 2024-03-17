import { CenteredContent } from "./components/CenteredContent";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import "./globals.css";


export const metadata = {
  title: "WHEELSUP - WYPOŻYCZALNIA AUT",
  description: "wypozyczalnia aut wheelsup w centrum warszawy",
  icons: {
    icon:"favicon.png"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      
        <body>
          <CenteredContent>
            <Header />
              {children}
            <Footer />
          </CenteredContent>
          </body>
    </html>
  );
}
