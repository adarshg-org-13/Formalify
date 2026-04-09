"use client";

import { useState } from "react";
import { FormulaCard } from "../components/FormulaCard";
import { Search } from "lucide-react";

const formulasData = [
  // Physics - Class 9
  { subject: "Physics", class: "Class 9", topic: "Motion", title: "Equations of Motion (1)", description: "Velocity-time relation", formula: "v = u + at", explanation: "v = final velocity, u = initial velocity, a = acceleration, t = time." },
  { subject: "Physics", class: "Class 9", topic: "Motion", title: "Equations of Motion (2)", description: "Position-time relation", formula: "s = ut + \\frac{1}{2}at^2", explanation: "s = displacement, u = initial velocity, a = acceleration, t = time." },
  { subject: "Physics", class: "Class 9", topic: "Force", title: "Newton's Second Law", description: "Force and acceleration", formula: "F = ma", explanation: "F = net force, m = mass, a = acceleration." },
  { subject: "Physics", class: "Class 9", topic: "Gravitation", title: "Universal Law of Gravitation", description: "Force between two masses", formula: "F = G\\frac{m_1m_2}{r^2}", explanation: "F = gravitational force, G = gravitational constant, m₁, m₂ = masses, r = distance between centers." },
  
  // Physics - Class 10
  { subject: "Physics", class: "Class 10", topic: "Light", title: "Mirror Formula", description: "Relation between object, image distance and focal length", formula: "\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}", explanation: "v = image distance, u = object distance, f = focal length." },
  { subject: "Physics", class: "Class 10", topic: "Electricity", title: "Ohm's Law", description: "Voltage, current, and resistance", formula: "V = IR", explanation: "V = voltage (potential difference), I = current, R = resistance." },
  { subject: "Physics", class: "Class 10", topic: "Electricity", title: "Electrical Power", description: "Power in a circuit", formula: "P = VI = I^2R = \\frac{V^2}{R}", explanation: "P = electrical power, V = voltage, I = current, R = resistance." },

  // Physics - Class 11
  { subject: "Physics", class: "Class 11", topic: "Thermodynamics", title: "First Law of Thermodynamics", description: "Energy conservation", formula: "\\Delta Q = \\Delta U + \\Delta W", explanation: "ΔQ = heat supplied to the system, ΔU = change in internal energy, ΔW = work done by the system." },
  { subject: "Physics", class: "Class 11", topic: "Waves", title: "Doppler Effect", description: "Apparent frequency", formula: "f' = f\\left(\\frac{v \\pm v_o}{v \\mp v_s}\\right)", explanation: "f' = observed frequency, f = source frequency, v = wave velocity, v_o = observer velocity, v_s = source velocity." },

  // Physics - Class 12
  { subject: "Physics", class: "Class 12", topic: "Electrostatics", title: "Coulomb's Law", description: "Force between point charges", formula: "F = \\frac{1}{4\\pi\\epsilon_0}\\frac{q_1q_2}{r^2}", explanation: "F = electrostatic force, q₁, q₂ = point charges, r = distance between charges, ε₀ = vacuum permittivity." },
  { subject: "Physics", class: "Class 12", topic: "Modern Physics", title: "Einstein's Mass-Energy", description: "Equivalence of mass and energy", formula: "E = mc^2", explanation: "E = energy, m = mass, c = speed of light in a vacuum." },

  // Maths - Class 9
  { subject: "Maths", class: "Class 9", topic: "Algebra", title: "Algebraic Identity", description: "Square of a binomial", formula: "(a+b)^2 = a^2 + 2ab + b^2", explanation: "Used to expand the square of the sum of two terms a and b." },
  { subject: "Maths", class: "Class 9", topic: "Geometry", title: "Area of Triangle", description: "Heron's Formula", formula: "A = \\sqrt{s(s-a)(s-b)(s-c)}", explanation: "a, b, c are side lengths and s = (a+b+c)/2 is the semi-perimeter." },

  // Maths - Class 10
  { subject: "Maths", class: "Class 10", topic: "Algebra", title: "Quadratic Formula", description: "Roots of ax² + bx + c = 0", formula: "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}", explanation: "a, b, and c are coefficients of the quadratic equation, and x represents the unknown roots." },
  { subject: "Maths", class: "Class 10", topic: "Trigonometry", title: "Pythagorean Identity", description: "Fundamental identity", formula: "\\sin^2\\theta + \\cos^2\\theta = 1", explanation: "True for any angle θ in a right-angled triangle." },

  // Maths - Class 11
  { subject: "Maths", class: "Class 11", topic: "Trigonometry", title: "Sine Rule", description: "Sides and angles of a triangle", formula: "\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}", explanation: "a, b, c are side lengths and A, B, C are their respective opposite angles." },
  { subject: "Maths", class: "Class 11", topic: "Calculus", title: "Derivative of x^n", description: "Power rule", formula: "\\frac{d}{dx}(x^n) = nx^{n-1}", explanation: "n is any real number, used for differentiating polynomial terms." },

  // Maths - Class 12
  { subject: "Maths", class: "Class 12", topic: "Calculus", title: "Integration by Parts", description: "Integral of a product", formula: "\\int u\\,dv = uv - \\int v\\,du", explanation: "u and v are differentiable functions of x. Used when integrating the product of two functions." },
  { subject: "Maths", class: "Class 12", topic: "Vectors", title: "Dot Product", description: "Scalar product", formula: "\\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}|\\cos\\theta", explanation: "|a| and |b| are the magnitudes of the vectors, and θ is the angle between them." },

  // Chemistry - Class 9
  { subject: "Chemistry", class: "Class 9", topic: "Atomic Structure", title: "Number of Moles", description: "Given mass and molar mass", formula: "n = \\frac{m}{M}", explanation: "n = number of moles, m = given mass of the substance, M = molar mass." },
  { subject: "Chemistry", class: "Class 9", topic: "Solutions", title: "Mass Percentage", description: "Concentration of solution", formula: "\\text{Mass \\%} = \\frac{\\text{Mass of solute}}{\\text{Mass of solution}} \\times 100", explanation: "Expresses the concentration of a component in a mixture or solution as a percentage." },

  // Chemistry - Class 10
  { subject: "Chemistry", class: "Class 10", topic: "Acids & Bases", title: "pH Formula", description: "Measure of acidity", formula: "\\text{pH} = -\\log_{10}[H^+]", explanation: "[H⁺] is the concentration of hydrogen ions in moles per liter." },

  // Chemistry - Class 11
  { subject: "Chemistry", class: "Class 11", topic: "States of Matter", title: "Ideal Gas Law", description: "Equation of state", formula: "PV = nRT", explanation: "P = pressure, V = volume, n = number of moles, R = ideal gas constant, T = absolute temperature." },
  { subject: "Chemistry", class: "Class 11", topic: "Thermodynamics", title: "Gibbs Free Energy", description: "Spontaneity of a reaction", formula: "\\Delta G = \\Delta H - T\\Delta S", explanation: "ΔG = change in free energy, ΔH = change in enthalpy, T = absolute temperature, ΔS = change in entropy." },

  // Chemistry - Class 12
  { subject: "Chemistry", class: "Class 12", topic: "Chemical Kinetics", title: "First Order Reaction", description: "Rate constant", formula: "k = \\frac{2.303}{t}\\log\\frac{[A]_0}{[A]}", explanation: "k = rate constant, t = time, [A]₀ = initial concentration, [A] = concentration at time t." },
  { subject: "Chemistry", class: "Class 12", topic: "Electrochemistry", title: "Nernst Equation", description: "Cell potential", formula: "E = E^\\circ - \\frac{RT}{nF}\\ln Q", explanation: "E = cell potential, E° = standard cell potential, R = gas constant, T = temperature, n = moles of electrons, F = Faraday constant, Q = reaction quotient." },
];

export default function FormulasPage() {
  const [activeSubject, setActiveSubject] = useState<string>("Physics");
  const [activeClass, setActiveClass] = useState<string>("Class 9");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFormulas = formulasData.filter(f => {
    const matchesSubject = f.subject === activeSubject;
    const matchesClass = f.class === activeClass;
    const matchesSearch = f.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          f.topic.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSubject && matchesClass && matchesSearch;
  });

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Formula Directory</h1>
          <p className="text-lg text-[#CED0CE]">Find the formulas you need, organized by subject and class.</p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col gap-6 mb-10">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            {/* Subject Tabs */}
            <div className="flex gap-2 p-1 rounded-xl bg-[#2A2A2A] w-full md:w-auto overflow-x-auto">
              {["Physics", "Maths", "Chemistry"].map(subject => (
                <button
                  key={subject}
                  onClick={() => setActiveSubject(subject)}
                  className={`px-6 py-2.5 rounded-lg font-medium text-sm transition-all whitespace-nowrap ${
                    activeSubject === subject 
                      ? "bg-[#191919] text-[#22C55E] shadow-sm" 
                      : "text-[#CED0CE] hover:text-white"
                  }`}
                >
                  {subject}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-72">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-[#CED0CE]" />
              </div>
              <input
                type="text"
                placeholder="Search formulas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2.5 border border-[#3A3A3A] rounded-xl leading-5 bg-[#191919] text-white placeholder-[#CED0CE] focus:outline-none focus:ring-2 focus:ring-[#22C55E] focus:border-[#22C55E] sm:text-sm transition-colors"
              />
            </div>
          </div>

          {/* Class Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {["Class 9", "Class 10", "Class 11", "Class 12"].map(cls => (
              <button
                key={cls}
                onClick={() => setActiveClass(cls)}
                className={`px-5 py-2 rounded-full border font-medium text-sm transition-all whitespace-nowrap ${
                  activeClass === cls 
                    ? "border-[#22C55E] bg-[#22C55E]/10 text-[#22C55E]" 
                    : "border-[#3A3A3A] text-[#CED0CE] hover:border-[#CED0CE] hover:text-white"
                }`}
              >
                {cls}
              </button>
            ))}
          </div>
        </div>

        {/* Formulas Grid */}
        {filteredFormulas.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFormulas.map((item, index) => (
              <div key={index} className="flex flex-col">
                <div className="text-xs font-bold uppercase tracking-wider text-[#22C55E] mb-2 ml-2">
                  {item.topic}
                </div>
                <FormulaCard 
                  title={item.title}
                  description={item.description}
                  formula={item.formula}
                  explanation={item.explanation}
                  className="flex-1"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#2A2A2A] mb-4">
              <Search className="w-8 h-8 text-[#CED0CE]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No formulas found</h3>
            <p className="text-[#CED0CE]">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}