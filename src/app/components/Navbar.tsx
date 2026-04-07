// Main Navbar file Home page and Formula page
"use client";

import { Sigma } from "lucide-react";

interface NavbarProps {
    currentPage: "home" | "formulas";
    onNavigate: (page:"home" | "formulas") => void;
}

export function Navbar({currentPage,onNavigate}:NavbarProps){
    return(
        <nav className="sticky top-0 z-50 w-full border-b border-[#3A3A3A] bg-[#191919]/80 backdrop-blur-md">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <button onClick={() => onNavigate("home")} className="flex items-center gap-2 text-[#22C55E]">
                    <Sigma className="w-8 h-8"/>
                    <span className="font-bold text-xl tracking-tight text-white">Formalify</span>
                </button>

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-4">
                        <button
                          onClick={() => onNavigate("home")}
                          className={`text=sm font-medium transition-colors hover:text-[#22C55E] ${
                            currentPage === "home" ? "text-[#22C55E]" : "text-[#CED0CE]"
                          }`}
                        >
                            OverView
                        </button>
                        <button
                          onClick={() => onNavigate("formulas")}
                          className={`text-sm font-medium transition-colors hover:text-[#22C55E] ${
                            currentPage === "formulas" ? "text-[22C55E]" : "text-[#CED0CE]"
                          }`}
                        >
                            All Formulas
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}