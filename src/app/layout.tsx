import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Merriweather } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Giá Trị Thặng Dư - Lý Thuyết Kinh Tế Chính Trị",
  description: "Khám phá lý thuyết giá trị thặng dư và tác động của nó đến nền kinh tế hiện đại",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${merriweather.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
