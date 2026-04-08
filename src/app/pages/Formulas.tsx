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
]