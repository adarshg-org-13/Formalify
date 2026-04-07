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

                    <div className="gird grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <FormulaCard
                          title="Newton's Second Law"
                          description="Physics: Force is equal to the rate of change of momentum of a body of a const mass."
                          formula="F = ma"
                          explanation="F is the net force applied, m is the mass of the object, and a is its acceleration."
                        />
                        <FormulaCard
                          title="Quadratic Formula"
                          description="Maths: Roots of ax² + bx + c = 0."
                          formula="x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}"
                          explanation="a,b and c are the coefficients of the quadratic equation for (a != 0), and x represents the unknown roots."
                        />
                        <FormulaCard
                          title="Ideal Gas Law"
                          description="Chemistry: Equation of root of state of a hypothetical ideal gas."
                          formula="PV = nRT"
                          explanation="P is the Pressure, V is the Volume, n is the number of moles, R is the ideal gas constant, and T is the temperature."
                        />
                    </div>
                </div>
            </section>

      {/* Subjects Overview */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3 text-white">
            <FunctionSquare className="w-8 h-8 text-[#22C55E]" />
            Curriculum Coverage
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { subject: "Physics", topics: ["Mechanics", "Thermodynamics", "Electromagnetism", "Optics"] },
              { subject: "Mathematics", topics: ["Algebra", "Calculus", "Geometry", "Trigonometry"] },
              { subject: "Chemistry", topics: ["Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry", "Atomic Structure"] }
            ].map((item) => (
              <div key={item.subject} className="p-8 rounded-3xl bg-[#2A2A2A] border border-[#3A3A3A]">
                <h3 className="text-2xl font-bold mb-6 text-[#22C55E]">{item.subject}</h3>
                <ul className="space-y-3">
                  {item.topics.map(topic => (
                    <li key={topic} className="flex items-center gap-3 text-[#CED0CE] font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

