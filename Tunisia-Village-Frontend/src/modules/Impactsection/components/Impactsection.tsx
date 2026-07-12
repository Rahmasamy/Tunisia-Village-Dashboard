'use client';

import React from 'react';
import { TitleTag } from '@/src/shared/components/wrappers/BoxWrapper';

const ProgressCircle = ({ percentage }: { percentage: number }) => {
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  
  return (
    <div className="relative flex items-center justify-center w-14 h-14">
      <svg className="transform -rotate-90 w-14 h-14">
        <circle cx="28" cy="28" r={radius} stroke="#d1fae5" strokeWidth="3.5" fill="none" />
        <circle 
          cx="28" 
          cy="28" 
          r={radius} 
          stroke="#008767" 
          strokeWidth="3.5" 
          fill="none" 
          strokeDasharray={circumference} 
          strokeDashoffset={strokeDashoffset} 
          strokeLinecap="round" 
        />
      </svg>
      <span className="absolute text-[11px] font-bold text-[#008767]">{percentage}%</span>
    </div>
  );
};

export const ImpactSection: React.FC = () => {
  const steps = [
    { id: 1, label: 'التسجيل', num: '١', active: true },
    { id: 2, label: 'الحجز', num: '٢', active: false },
    { id: 3, label: 'الدعم المحلي', num: '٣', active: false },
    { id: 4, label: 'التدريب والزراعة', num: '٤', active: false },
    { id: 5, label: 'المتابعة', num: '٥', active: false },
  ];

  const cards = [
    { val: '4,310', label: 'أشجار تم زرعها بفضل تجارب الزوار', icon: '🌳' },
    { val: '7,100', label: 'مستفيدين من فرص عمل مباشرة', icon: '👱' },
    { val: '120', label: 'مزودين حصلوا على دخل مستدام', icon: '🏠' },
    { val: '28,000 kg', label: 'نفايات تم تقليلها أو تدويرها', icon: '♻️' },
  ];

  return (
    <section className="bg-white border border-[#e5e7eb] py-[60px] px-6 rounded-[24px] mb-12 text-center shadow-sm w-full font-[var(--font-primary)] max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-4">
        
        <TitleTag >
     رحلة التأثير المجتمعي
        </TitleTag>
        <TitleTag >
     رحلة التأثير المجتمعي
        </TitleTag>
        <p className="text-lg md:text-xl text-gray-600 font-bold mt-1">
          اكسب نقاط...أحدث أثر...سافر بقيمة
        </p>
      </div>

      <div className="relative mb-10 w-full max-w-4xl mx-auto mt-12 px-2 md:px-12">
        {/* Gray connecting line */}
        <div className="absolute top-[18px] md:top-[20px] left-[4%] right-[4%] h-[2px] bg-[#e5e7eb] z-0"></div>
        <div className="flex justify-between items-start w-full relative z-10">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center gap-4">
              <div className={`w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center text-sm md:text-base font-bold shadow-sm border-2 border-white ${step.active ? 'bg-[#008767] text-white' : 'bg-[#f0f2f5] text-gray-500'}`}>
                {step.num}
              </div>
              <span className={`text-[11px] md:text-[13px] font-bold ${step.active ? 'text-gray-600' : 'text-gray-400'}`}>
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-gray-600 text-[15px] font-bold max-w-[900px] mx-auto mb-10 leading-[1.8] px-4">
        عندما تقوم بإنشاء حساب على منصتنا، فأنت تصبح جزءًا من مجتمع يهتم بالتنمية المستدامة والسياحة المسؤولة. نحن نستخدم بياناتك فقط لتحسين تجربتك وتخصيص الخدمات التي تناسب اهتماماتك
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 max-w-6xl mx-auto">
        {cards.map((card, i) => (
          <div key={i} className="bg-[#f0fbf5] rounded-xl p-5 flex flex-col items-center justify-between text-center relative border border-[#e4f6ed]">
            <div className="w-full flex justify-between items-start mb-4">
               <span className="text-[28px] mt-1">{card.icon}</span>
               <ProgressCircle percentage={75} />
            </div>
            <div className="flex flex-col items-center w-full mt-2">
              <span className="text-xl md:text-2xl font-black text-[#008767] mb-1.5">{card.val}</span>
              <span className="text-[13px] text-gray-500 font-bold leading-relaxed max-w-[80%]">{card.label}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-4 mt-6 pt-6">
        <p className="text-gray-600 font-bold text-lg">استبدل نقاطك بالمكسب</p>
        <button className="bg-[#008767] hover:bg-[#007055] text-white py-2.5 px-10 rounded-full font-bold text-[15px] transition-colors shadow-sm cursor-pointer">
          احسب نظام الولاء والأثر
        </button>
      </div>
    </section>
  );
};
