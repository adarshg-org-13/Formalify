import { useState } from "react";
import { FormulaCard } from "../components/FormulaCard";
import { Search } from "lucide-react";

const fomrulaCard = [
    //Physics Class - 9 
    {subjects: "Physics", class: "Class 9", topic: "Motion", title: "Equations of Motion(1)",description:"Velocity-time relation", formula: "v = u + at",explaination:"v = final velocity, u = intial velocity, a = acceleration, t = time."},
    {subjetcs: "Physics", class: "Class 9", topic: "Motion", title:"Equations of Motion(2)",description:"Position-time relation",formula: "s = ut + \\frac{1}{2}at^2",explaination:"s = displacement, u = initial velocity, a= acceleration,t = time"},
    {subjetcs: "Physics", class: "Class 9", topic: "Force", title:"Newton's Second Law",description:"Force and acceleration",formula:"F = ma",explainnation:"Rate of change of momentum is directly proportional to the applied unbalanced force. "},
    {subjects: "Physics", class: "Class 9", topic: "Gravitation", title: "Unviersal Law of Graviation", description:"Force between two masses",formula:"F = G\\frac{m_1m_2}{r^2}",explaination:"F = graviational force, G = gravitational constant, m₁, m₂ = masses, r = distance between centers."},

    //Physics Class - 10
    {subjetcs: "Physics", class: "Class 10", topic: "Light", title: "Mirror formula",description: "Relation between object, image distance and focal length",formula:"\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}",explaination:"v = image distance, u = object distance, f = focal length."},
    {subjects: "Physics", class: "Class 10", topic: "Electricity", title: "Ohm's Law",descirption:"Voltage, current, and resistance",formula:"V = IR",explaintaion:"P = electrical power, V = voltage, I = current, R = resistance."},
    {subjects: "Physcis", class: "Class 10", topic: "Electricity", title: "Electrical Power",description:"Power in a current",formula:"P = VI = I^2R = \\frac{V^2}{R} ",explaination:"P = eletrical power, V = voltage, I = current, R = resistance"},

    //Physics Class - 11
    {subjects: "Physics", class: "Class 11", topic: "Thermodynamics", title: "First Law of Thermodynamics",description:"Energy Conservation", formula:"\\Delta Q = \\Delta U + \\Delta W",explination:"ΔQ = Heat supplied to the system or released by the system, ΔU = change in internal energy, ΔW = work done by the system or on the system."},
    {subjects: "Physics", class: "Class 11", topic: "Waves", title: "Doopler Effect", description:"Apparent frequency",formula:"f' = f\\left(\\frac{v \\pm v_o}{v \\mp v_s}\\right)",explination:" f' = observed frequency, f = source frequency, v = wave velocity, v_o = observer velocity, v_s = source velocity. "},

    //Physics Class - 12
    {subjects: "Physcis", class: "Class 12", topic: "Electrostatics", title: "Coulumb's Law", description: "Force between point charge",formula:" f = \\frac{1}{4\\pi\\epsilon_0}\\frac{q_1q_2}{r^2}",explainantion: "F = electrostatic force, q₁, q₂ = point charges, r = distance between charges, ε₀ = vacuum permittivity "},
    {subjects: "Physics", class: "Class 12", topic: "Modern Physics", title: "Einstein's Mass-Energy",description:"Equivalence of mass and energy", formula: "E = mc^2",explaination:"E = energy, m = mass , c = speed of light in a vacuum."},

    //Maths Class - 9
    {subjects: "Maths", class: "Class 9", topic: "Algebra", title:"Algebric Identity", description:"Square of a binomial", formula:"(a+b)^2 = a^2 + 2ab + b^2",explaination:"Used to expand the square of the sum of two terms a and b."},
    {subjects: "Maths", class: "Class 9", topic: "Geommetry", title: "Area of Triangle",description:"Heron's Formula",formula:"A = \\sqrt{s(s-a)(s-b)(s-c)}",explaination:"a, b, c are side lengths and s = (a + b + c)/2 is the semi-perimeter."},

    //Math Class - 10
    {subjects: "Maths", class: "Class 10", topic: "Algebra", title: "Quadratic Formula", description:"Roots of ax² + bx + c = 0",formula:"x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",explaination:"a, b, c are coefficients of the quadratic equation, and x represents the unkown roots."},
    {subjetcs: "Maths", class: "Class 10", topic: "Trigonometry", title: "Pythagorean Identity",description:"Fundamental identity",formula:"\\sin^2\\theta + \\cos^2\\theta = 1",explaination:"True for any angle in a right-angled tirangle."},

    //Math Class - 11
    {subjects: "Math", class:"Class 11", topic: "Trigonometry", title: "Sine Rule", description:"Sides and angles of a triangle", formula:"\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}",explaination:"a, b, c are the side lenghts and A, B, C are their respective opposite angles."},
    {subjects: "Math", class:"Class 11", topic: "Calculus", title:"Derivative of x^n ", description: "Power rule", formula:"\\frac{d}{dx}(x^n) = nx^{n-1}",explaination:"n is any real number, used for differentiable functions of x. Used when integrating the product of two functions."},

    //Math Class - 12
    {subjects: "Math", class: "Class 12", topic: "Calculus", title: "Integration by Parts", description: "Integral of a product", formula:"\\int u\\,dv = uv - \\int v\\,du",explaination:"u and v are differentiable functions of x. Used when integrating the product of two functions."},
    {subjects: "Math", class: "Class 12", topic: "Vectors", title: "Dot Product", description: "Scalar product", formula:"\\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}|\\cos\\theta",explaination:"|a| and |b| are the magnitudes of the vectors, and θ is the angle between them. "},
]