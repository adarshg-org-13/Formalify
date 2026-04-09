import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Formulary",
  description: "Your Ultimate Science & Math Companion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 3. Apply montserrat.className to the body */}
      <body className={`${montserrat.className} bg-[#121212] text-white min-h-screen`}>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}