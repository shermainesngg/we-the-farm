import type { Metadata } from "next";
import { Vollkorn, Albert_Sans } from "next/font/google";
import "./globals.css";

const vollkorn = Vollkorn({
  variable: "--font-vollkorn",
  subsets: ["latin"],
  display: "swap",
});

const albertSans = Albert_Sans({
  variable: "--font-albert",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "We The Farm — Platform for Exchange, Compost & Produce",
  description:
    "A community rooftop farm at Beauty World Centre, Singapore. Join our farming sessions, composting workshops, and volunteer events.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${vollkorn.variable} ${albertSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
