import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './components/navbar'
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
    <body>
      <header></header>
      <section className="bg-blue-400 h-96">
      <Navbar />
      </section>
      <main className="flex min-h-screen bg-primary p-24">
        {/* Green bottom section */}
        {children}
      </main>
      <Footer />
    </body>
  </html>
  );
}
