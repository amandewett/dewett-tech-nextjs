import type { Metadata } from "next";
import { lazy, Suspense } from "react";
import { Nunito } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/store/themeContext/ThemeProvider";
import { Header } from "@/components/header";
import ScreenSizeComponent from "@/components/shared/ScreenSizeComponent";
import PageTransitionLayout from "@/layouts/PageTransitionLayout";
import AppCircularLoader from "@/components/shared/AppCircularLoader";
import CustomCursor from "@/components/shared/CustomCursor";

const HireMeButton = lazy(() => import("@/components/HireMeButton"));

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
        <body className={`themeTransition ${appFont.className} bg-appLightBgColor dark:bg-appDarkBgColor text-appLightTextColor dark:text-appDarkTextColor overflow-x-hidden`}>
          <CustomCursor />
          <PageTransitionLayout>
            <ScreenSizeComponent />
            <Header />
            {children}
            <Suspense fallback={<AppCircularLoader />}>
              <HireMeButton />
            </Suspense>
          </PageTransitionLayout>
        </body>
      </ThemeProvider>
    </html>
  );
};

export default RootLayout;
