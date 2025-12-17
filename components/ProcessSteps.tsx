import React from 'react';
import { ArrowDown } from 'lucide-react';

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
  const color = isAuto ? 'var(--primary)' : 'var(--text-muted)';
  const finishColor = 'var(--success)';

  return (
    <div className="flex flex-col">
      {steps.map((step, index) => (
        <div key={index} className="p-step">
          {/* Vertical Line */}
          {index < steps.length - 1 && (
            <div className="p-line" style={{ background: isAuto ? 'var(--primary-light)' : 'var(--border)' }}></div>
          )}

          <div className="p-circle" style={{ 
            background: index === steps.length - 1 ? finishColor : color,
            boxShadow: `0 0 0 4px white`
          }}>
            {index + 1}
          </div>
          
          <div className="p-content w-full">
            <div className="flex justify-between items-center">
               <h4 style={{ fontWeight: 700, color: isAuto ? 'var(--primary)' : 'var(--text-main)' }}>{step.title}</h4>
               {index < steps.length - 1 && (
                 <ArrowDown size={14} color="var(--text-light)" />
               )}
            </div>
            <p className="text-sm text-muted" style={{ marginTop: '0.25rem' }}>{step.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};