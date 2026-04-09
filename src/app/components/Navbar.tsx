"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sigma } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#3A3A3A] bg-[#191919]/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-[#22C55E]">
          <Sigma className="w-8 h-8" />
          <span className="font-bold text-xl tracking-tight text-white">Formalify</span>
        </Link>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <Link 
              href="/"
              className={`text-sm font-medium transition-colors hover:text-[#22C55E] ${
                pathname === "/" ? "text-[#22C55E]" : "text-[#CED0CE]"
              }`}
            >
              Overview
            </Link>
            <Link 
              href="/formulas"
              className={`text-sm font-medium transition-colors hover:text-[#22C55E] ${
                pathname === "/formulas" ? "text-[#22C55E]" : "text-[#CED0CE]"
              }`}
            >
              All Formulas
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}