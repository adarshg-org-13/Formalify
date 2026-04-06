import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Formalify - Physics Chemistry & Maths",
  description: "A comprehensive collection of Physics, Chemistry, and Mathematics formulas."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return(
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}