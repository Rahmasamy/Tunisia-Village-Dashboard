'use client';
import { useState } from 'react';
import { faqs } from '@/src/shared/lib/consts/data';
import { FAQItem } from '@/src/modules/FAQ/components/FAQ';





export function FAQFeature() {
  const [openId, setOpenId] = useState<number | null>(1); // 1 is default open

  return (
    <div className="w-full py-20 px-4 md:px-10 lg:px-20 bg-[#FCFBF4] flex flex-col items-center">
      <h2 className="text-[28px] md:text-3xl font-extrabold text-[#3D3A38] mb-12 text-center" dir="rtl">الأسئلة الشائعة</h2>

      <div className="w-full max-w-3xl flex flex-col gap-1">
        {faqs.map((faq) => (
          <FAQItem
            key={faq.id}
            faq={faq}
            isOpen={openId === faq.id}
            onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
          />
        ))}
      </div>
    </div>
  );
}
