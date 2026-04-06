import type { Metadata } from "next";
import { Inter, Black_Han_Sans, Do_Hyeon } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const blackHanSans = Black_Han_Sans({
  variable: "--font-black-han-sans",
  subsets: ["latin"],
  weight: "400",
});

const doHyeon = Do_Hyeon({
  variable: "--font-do-hyeon",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vyv.house"),
  title: "vyv-house — a hacker house for builders",
  description:
    "vyv-house는 빌더, 연구자, 창업가, 인터넷 네이티브가 함께 살고 만들고 실험하는 해커하우스입니다.",
  openGraph: {
    title: "vyv-house — a hacker house for builders",
    description:
      "vyv-house는 빌더, 연구자, 창업가, 인터넷 네이티브가 함께 살고 만들고 실험하는 해커하우스입니다.",
    url: "https://vyv.house",
    siteName: "vyv-house",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "vyv-house open graph image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "vyv-house — a hacker house for builders",
    description:
      "vyv-house는 빌더, 연구자, 창업가, 인터넷 네이티브가 함께 살고 만들고 실험하는 해커하우스입니다.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://vyv.house",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${blackHanSans.variable} ${doHyeon.variable} antialiased`}
    >
      <body
        className="min-h-screen bg-black text-white"
        style={{ fontFamily: "Inter, Pretendard, -apple-system, BlinkMacSystemFont, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
