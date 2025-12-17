import React from 'react';

interface BPMNPlaceholderProps {
  label: string;
}

export const BPMNPlaceholder: React.FC<BPMNPlaceholderProps> = ({ label }) => {
  return (
    <div className="w-full h-64 border-2 border-dashed border-slate-300 rounded-xl bg-slate-50 flex flex-col items-center justify-center p-8 text-center hover:border-blue-400 transition-colors">
      <div className="w-24 h-16 bg-white border border-slate-300 shadow-sm rounded mb-4 flex items-center justify-center relative">
         <div className="absolute -right-4 top-1/2 w-4 h-0.5 bg-slate-400"></div>
         <span className="text-xs text-slate-500 font-mono">Process</span>
      </div>
      <p className="text-slate-500 font-medium">BPMN Diagram Placeholder</p>
      <p className="text-sm text-slate-400 mt-1">{label}</p>
    </div>
  );
};