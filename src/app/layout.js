import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"],
display: "swap"
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body>
        <header></header>
        <main className="h-auto min-h-[80vh]">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
