import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import PageTransitionLayout from "@/layouts/PageTransitionLayout";
import dynamic from "next/dynamic";

const appFont = Nunito({
  subsets: ["latin"],
  variable: "--app-font",
});

export const metadata: Metadata = {
  title: "Aman Dewett",
  description: "Aman Dewett's portfolio",
};

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${appFont.className}`}>
        <Header />
        <PageTransitionLayout>{children}</PageTransitionLayout>
      </body>
    </html>
  );
};

export default RootLayout;
