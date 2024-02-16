import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import Layout2 from "@/components/Layout2";

export const metadata: Metadata = {
  title: "Aman Dewett",
  description: "Aman Dewett's portfolio",
};

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className="font-Ubuntu">
        <Header />
        <Layout2>{children}</Layout2>
      </body>
    </html>
  );
};

export default RootLayout;
