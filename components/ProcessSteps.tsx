import React from 'react';
import { ArrowDown, ArrowRight, Check } from 'lucide-react';

interface Step {
  title: string;
  desc: string;
}

interface ProcessStepsProps {
  steps: Step[];
  orientation?: 'horizontal' | 'vertical';
  variant?: 'manual' | 'automated';
}

export const ProcessSteps: React.FC<ProcessStepsProps> = ({ 
  steps, 
  orientation = 'vertical',
  variant = 'manual' 
}) => {
  const isAuto = variant === 'automated';
  // Updated colors to Teal
  const activeColor = isAuto ? 'bg-teal-600' : 'bg-slate-500';
  const finishColor = 'bg-emerald-500';
  const lineColor = isAuto ? 'bg-teal-200' : 'bg-slate-200';

  return (
    <div className={`flex ${orientation === 'vertical' ? 'flex-col gap-0' : 'flex-wrap gap-4 items-start'}`}>
      {steps.map((step, index) => (
        <div key={index} className="flex group relative pb-8 last:pb-0">
          {/* Vertical Line */}
          {orientation === 'vertical' && index < steps.length - 1 && (
            <div className={`absolute left-5 top-10 bottom-0 w-0.5 ${lineColor} z-0`}></div>
          )}

          <div className={`relative flex z-10 ${orientation === 'vertical' ? 'w-full items-start' : 'flex-col text-center max-w-[150px]'}`}>
            
            {/* Step Circle */}
            <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shadow-lg ring-4 ring-white z-10 transition-transform group-hover:scale-110 
              ${index === steps.length - 1 ? finishColor : activeColor}`}>
              {index + 1}
            </div>
            
            {/* Content */}
            <div className={`flex-grow ${orientation === 'vertical' ? 'ml-6 pt-1' : 'mt-4 w-full'}`}>
              <div className="flex items-center justify-between">
                 <h4 className={`font-bold text-base ${isAuto ? 'text-teal-900' : 'text-slate-700'}`}>{step.title}</h4>
                 {orientation === 'vertical' && index < steps.length - 1 && (
                   <ArrowDown size={14} className="text-slate-300 mr-2" />
                 )}
              </div>
              <p className="text-sm text-slate-500 mt-1 leading-relaxed">{step.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};