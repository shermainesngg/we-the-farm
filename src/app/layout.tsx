import type { Metadata } from "next";
import { Young_Serif, Figtree } from "next/font/google";
import { CartProvider } from "@/contexts/CartContext";
import "./globals.css";

const youngSerif = Young_Serif({
  variable: "--font-young-serif",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-figtree",
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
      className={`${youngSerif.variable} ${figtree.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
