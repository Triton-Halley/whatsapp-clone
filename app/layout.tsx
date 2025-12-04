import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Providers from "./providers";
import './globals.css'
import SideMenuLayout from "@/components/sidemenu/SideMenuLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WhatsApp Clone",
  description: "whatsapp clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#1d1f1f]`}
      >
        <Providers>
          <SideMenuLayout>
            {children}
          </SideMenuLayout>
        </Providers>
      </body>
    </html>
  );
}
