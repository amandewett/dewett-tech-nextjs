import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
// import HomePage from "@/components/home/HomePage";
import ThemeProvider from "@/store/themeContext/ThemeProvider";
import { Header } from "@/components/header";
import PageTransitionLayout from "@/layouts/PageTransitionLayout";

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
      <ThemeProvider>
        <body className={`themeTransition ${appFont.className} bg-appLightBgColor dark:bg-appDarkBgColor text-appDarkBgColor dark:text-appLightBgColor`}>
          <Header />
          <PageTransitionLayout>{children}</PageTransitionLayout>
        </body>
      </ThemeProvider>
    </html>
  );
};

export default RootLayout;
