import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import "../styles/reset.css";

export const metadata: Metadata = {
  title: "Yeahzzl's Portfolio",
  description: "프론트엔드 개발자 이예지의 포트폴리오 사이트",
};

const globalFont = localFont({
  src: [
    {
      path: "./assets/fonts/GmarketSansBold.woff",
      weight: "600",
    },
    {
      path: "./assets/fonts/GmarketSansMedium.woff",
      weight: "400",
    },
    {
      path: "./assets/fonts/GmarketSansLight.woff",
      weight: "200",
    },
  ],
  variable: "--main-font",
  display: "swap",
});

const logoFont = localFont({
  src: [
    {
      path: "./assets/fonts/Rakkas-Regular.woff",
    },
  ],
  variable: "--logo-font",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${globalFont.variable} ${logoFont.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
