import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "QUESTION1",
  description: "App router implementation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen h-screen overflow-hidden py-3 px-6 `}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
