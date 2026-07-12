import React from 'react';
import { WaveConnector } from '@/src/shared/components/icons/WaveConnector/WaveConnector';
import ExperiementIcon from '@/src/shared/components/icons/ExperiementIcon/ExperiementIcon';
import LocalProvider from '@/src/shared/components/icons/LocalProvider/LocalProvider';
import Community from '@/src/shared/components/icons/community/Community';
import Tree from '@/src/shared/components/icons/Tree/Tree';
import RegisterData from '@/src/shared/components/icons/RegisterData/RegisterData';
import BlackTree from '@/src/shared/components/icons/BlackTree/BlackTree';

const steps = [
  { id: 1, icon: <ExperiementIcon />, title: "تقوم بحجز تجربة" },
  { id: 2, icon: <LocalProvider />, title: "يحصل مزود محلي\nعلى دخل" },
  { id: 3, icon: <Community />, title: "يشارك المجتمع\nفي التدريب" },
  { id: 4, icon: <BlackTree />, title: "تُزرع شجرة جديدة" },
  { id: 5, icon: <RegisterData />, title: "تُسجل بياناتك في\nلوحة الأثر" },
];

export function HowToEffect() {
  return (
    <section className="w-full  py-10 px-4">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full relative">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            {/* Step Content */}
            <div className="flex flex-col items-center flex-1 max-w-[160px] z-10 my-6 lg:my-0">
              <div className="w-24 h-24 md:w-[104px] md:h-[104px] rounded-3xl bg-[#E4ECE9] flex items-center justify-center mb-5">
                <div className="flex items-center justify-center">
                   {step.icon}
                </div>
              </div>
              <h3 className="text-[#2D2C2C] text-center font-bold text-[15px] md:text-base leading-[1.6] whitespace-pre-line px-1">
                {step.title}
              </h3>
            </div>
            
            {/* Connector Wave (hidden on mobile, visible on desktop) */}
            {index < steps.length - 1 && (
              <div className="hidden lg:flex items-center justify-center flex-shrink-0 -mx-4 xl:-mx-8 z-0 translate-y-[-28px]">
                 <WaveConnector className="w-20 xl:w-28 opacity-80" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
