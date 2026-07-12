'use client';

import Image from 'next/image';
import React, { useState } from 'react';

export const CategorySection: React.FC = () => {
  const [active, setActive] = useState('accommodation');

  const categories = [
    { id: 'accommodation', label: 'الإقامة', src: '/imgs/hosting.png', color: '#1a7d5a', bg: '#e8f5f0' },
    { id: 'activities', label: 'الأنشطة', src: '/imgs/kayaking.png', color: '#3b82f6', bg: '#eff6ff' },
    { id: 'market', label: 'المتجر الحرفي', src: '/imgs/pottery.png', color: '#8b5cf6', bg: '#f5f3ff' },
    { id: 'restaurants', label: 'المطاعم', src: '/imgs/food_cat.png', color: '#f59e0b', bg: '#fffbeb' },
    { id: 'transfers', label: 'الإنتقالات', src: '/imgs/trans_cat.png', color: '#06b6d4', bg: '#ecfeff' },
    { id: 'courses', label: 'الدورات', src: '/imgs/amico.png', color: '#ec4899', bg: '#fdf2f8' },
  ];

  return (
    <section className="py-[40px] text-center pb-10">
      <div className="mb-10">
        <h2 className="text-[clamp(22px,4vw,32px)] flex gap-3 items-center justify-center font-bold text-[var(--color-text)] mb-3">
          <>
            اكتشف قلب
            <span className="text-[#008767]">الفيوم</span>
          </>
        </h2>
        <p className="text-xl text-[var(--color-text-muted)] max-w-[600px] mx-auto">
          مع كل تجربة جديدة حيث يلتقي سحر الطبيعة بعراقة التاريخ.
        </p>
      </div>

      <div className="flex gap-4 justify-center flex-wrap mx-auto max-w-6xl px-4">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className={`group flex flex-1 flex-col overflow-hidden rounded-[var(--radius-lg)] cursor-pointer border-2
              transition-all duration-300 bg-white
              min-w-[140px] max-w-[200px] shadow-[var(--shadow-sm)] hover:-translate-y-1 
              hover:shadow-[var(--shadow-md)] ${
                active === cat.id
                  ? 'border-[var(--color-primary)] shadow-[0_4px_20px_rgba(26,125,90,0.18)]'
                  : 'border-transparent'
              }`}
            onClick={() => setActive(cat.id)}
          >
            <div
              className="w-full h-full py-6 px-4 flex gap-3 flex-col items-center justify-center transition-transform duration-300 group-hover:scale-105"
              style={{ background: cat.bg }}
            >
              <Image 
                src={cat.src}
                width={80}
                height={80}
                alt={`${cat.label} image`}
                className="w-20 h-20 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
              />
              <span
                className="text-[16px] font-bold font-[var(--font-primary)] transition-colors duration-200 text-center"
                style={{ color: active === cat.id ? cat.color : 'var(--color-text-muted)' }}
              >
                {cat.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};