import { ArrowRight,BookOpen,Calculator,FunctionSquare } from "lucide-react";
import {FormulaCard} from '../components/FormulaCard';

interface HomeProps {
    onNavigate: (page:'home' | 'formualas') => void;
}

export function Home({onNavigate} : HomeProps){
    return(
        <div className="min-h-screen pb-20">
            {/* Hero section */}
            <section className="pty-24 pb-16 px-4">
                <div className="contianer mx-auto max-w-5xl text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2A2A2A] text-[#22C55E] text-sm font-medium mb-6">
                        <BookOpen className="w-4 h-4"/>
                        <span>Best Website for you Physics Chemistry & Math Reivison</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
                        Master Concepts With <br className="hidden md:block"/>
                        <span className="text-[#22C55E]">Essential Formulas</span>
                    </h1>
                    <p className="text-lg md:text-xl text-[#CED0CE] max-w-2xl mx-auto mb-10">
                        A comprehensive collection of Physics, Chemistry, and Mathematics formulas for classes 9, 10, 11, and 12.
                        Clear, concise, and ready for your next exam.
                    </p>
                    <div className="flex flex-col sm:flex-row items:center justify-center gap-4">
                        <button
                          onClick={() => onNavigate("formualas")}
                          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#22C55E] text-white font-bold hover:bg-[#16a24a] transition-colors w-full sm:w-auto"
                        >
                            Browse Formulas
                            <ArrowRight className="w-5 h-5"/>
                        </button>
                    </div>
                </div>
            </section>

            {/* Featured Formulas*/}
            <section className="py-16 px-4 bg-[#191919]">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex items-center justify-between mb-10">
                        <h2 className="text-3xl font-bold flex items-center gap-3 text-white">
                            <Calculator className="w-8 h-8 text-[#22C55E]"/>
                            Featured Formulas
                        </h2>
                        <button onClick={() => onNavigate("formualas")} className="text-[#22C55E] font-medium hover:underline hidden sm:block">
                            View all
                        </button>
                    </div>

                    
                </div>
            </section>
        </div> 
    )
}