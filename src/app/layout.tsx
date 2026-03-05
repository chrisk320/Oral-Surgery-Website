import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SchemaMarkup from "@/components/shared/SchemaMarkup";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "OC Implant Oral Surgery | Dr. Jone Kim | Brea, CA",
    template: "%s | OC Implant Oral Surgery",
  },
  description:
    "Dr. Jone Kim specializes in dental implants, wisdom teeth extraction, sedation, TMJ, oral cancer, and facial injury treatment in Brea, CA. Call (714) 529-0043.",
  keywords: [
    "oral surgery Brea CA",
    "dental implants Brea",
    "wisdom teeth extraction Orange County",
    "Dr. Jone Kim",
    "OC Implant Oral Surgery",
    "TMJ treatment",
    "oral cancer screening",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "OC Implant Oral Surgery",
    title: "OC Implant Oral Surgery | Dr. Jone Kim | Brea, CA",
    description:
      "Expert oral surgery in Brea, CA — dental implants, wisdom teeth, sedation, TMJ, and more. Board-certified surgeon Dr. Jone Kim.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <SchemaMarkup />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
