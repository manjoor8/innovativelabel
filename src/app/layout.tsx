import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Innovative Label Solutions Pvt. Ltd. | Packaging & Label Manufacturer",
    template: "%s | Innovative Label Solutions"
  },
  description: "ISO 9001:2015 & cGMP Certified manufacturer of high-quality pressure-sensitive labels, self-adhesive labels, shrink sleeves, and cartons in Dombivli MIDC, Mumbai, Maharashtra.",
  metadataBase: new URL("https://labelsolutions.in"),
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Innovative Label Solutions Pvt. Ltd.",
    description: "Complete B2B Packaging & Label Printing Solutions in India. ISO 9001:2015 & cGMP Certified facility.",
    url: "https://labelsolutions.in",
    siteName: "Innovative Label Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Innovative Label Solutions Pvt. Ltd.",
    description: "Complete B2B Packaging & Label Printing Solutions in India.",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900 font-sans antialiased">
        <Header />
        <Breadcrumb />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
