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

const metaTitle = "vyv-house — a house for builders with taste";
const metaDescription =
  "A vibey hacker house in Seoul for founders, researchers, designers, and internet-native builders to live close to the work.";
const ogImage = "/og/vyv-house-og.jpg";

export const metadata: Metadata = {
  metadataBase: new URL("https://vyv.house"),
  title: metaTitle,
  description: metaDescription,
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    url: "https://vyv.house",
    siteName: "vyv-house",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "vyv-house — a house for builders with taste",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metaTitle,
    description: metaDescription,
    images: [ogImage],
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
