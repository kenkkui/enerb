import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EnerB | Kenzo & Dominic",
  description: "A creation by Kenzo & Dominic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
