import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PlayerContainer from "@/components/utils/Player/PlayerContainer";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MUSICA W3",
  description: "Musica W3, latin american musicians onchain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <Navbar />
          <PlayerContainer />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
