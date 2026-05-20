import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Toaster } from "react-hot-toast";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Study Nook | Find Your Perfect Study Room",
  description:
    "Find quiet study rooms, book instantly, and boost your productivity.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={` ${roboto.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Toaster/>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
