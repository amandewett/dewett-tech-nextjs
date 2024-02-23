import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import PageTransitionLayout from "@/layouts/PageTransitionLayout";
import { mNextComponent } from "@/utils/customTypes";

const ubuntuFont = Ubuntu({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-ubuntu",
});

export const metadata: Metadata = {
  title: "Aman Dewett",
  description: "Aman Dewett's portfolio",
};

const RootLayout: mNextComponent = ({ children }) => {
  return (
    <html lang="en" className={`${ubuntuFont.variable} font-mUbuntu`}>
      <body>
        <Header />
        <PageTransitionLayout>{children}</PageTransitionLayout>
      </body>
    </html>
  );
};

export default RootLayout;
