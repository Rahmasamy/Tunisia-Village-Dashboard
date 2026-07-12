import React from 'react';
import { Check } from 'lucide-react';

export const RegisterProgress = ({ currentStep }: { currentStep: number }) => {
  const steps = [1, 2];

  return (
    <div className="flex items-center justify-center gap-4 mb-8">
      {steps.map((step, index) => {
        const isCompleted = step < currentStep || currentStep === 3;
        const isActive = step === currentStep;

        return (
          <React.Fragment key={step}>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
              isCompleted ? 'bg-[#008767] text-white' : isActive ? 'bg-white border-2 border-[#008767] text-[#008767]' : 'bg-gray-100 text-gray-400'
            }`}>
              {isCompleted ? <Check size={14} strokeWidth={3} /> : step}
            </div>
            {index < steps.length - 1 && (
              <div className="w-16 h-[2px] bg-gray-200">
                <div className={`h-full bg-[#008767] transition-all ${isCompleted || isActive ? 'w-full' : 'w-0'}`} />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
