//Formula card file
"use client";

import React from "react";
import { useState } from "react";
import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";
import { Copy, Check } from "lucide-react";

interface FormulaCardProps {
  title: string;
  description: string;
  formula: string;
  explanation?: string;
  className?: string;
}

//Copy to clipboard mechanism
export function FormulaCard({ title, description, formula, explanation, className }: FormulaCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(formula);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`p-6 rounded-2xl border border-[#3A3A3A] bg-[#2A2A2A] shadow-sm hover:shadow-md transition-shadow relative group flex flex-col ${className || ""}`}>
      <button 
        onClick={handleCopy}
        className="absolute top-4 right-4 p-2 rounded-lg bg-[#191919] text-[#CED0CE] hover:text-[#22C55E] opacity-0 group-hover:opacity-100 transition-opacity"
        title="Copy LaTeX formula"
      >
        {copied ? <Check className="w-4 h-4 text-[#22C55E]" /> : <Copy className="w-4 h-4" />}
      </button>
      <h3 className="text-lg font-bold mb-2 text-white pr-8">{title}</h3>
      <p className="text-sm text-[#CED0CE] mb-4">{description}</p>
      <div className="p-4 rounded-xl bg-[#191919] overflow-x-auto mb-auto">
        <BlockMath math={formula} />
      </div>
      {explanation && (
        <div className="mt-4 pt-4 border-t border-[#3A3A3A]">
          <p className="text-sm text-[#CED0CE] leading-relaxed">
            <span className="font-semibold text-[#22C55E]">Where: </span>
            {explanation}
          </p>
        </div>
      )}
    </div>
  );
}
