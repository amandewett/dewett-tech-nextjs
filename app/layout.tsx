import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import PageTransitionLayout from "@/layouts/PageTransitionLayout";

export const metadata: Metadata = {
  title: "Aman Dewett",
  description: "Aman Dewett's portfolio",
};

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className="font-Ubuntu">
        <Header />
        <PageTransitionLayout>{children}</PageTransitionLayout>
      </body>
    </html>
  );
};

export default RootLayout;
