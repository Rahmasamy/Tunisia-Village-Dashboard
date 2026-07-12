import React, { useState } from 'react';

const categories = ["أشجار", "مراكز التدريب", "أنشطة بيئية", "قصص التمكين", "الحرفيين", "الأسواق"];

const locationsInfo = [
  { id: 1, title: "زراعة الأشجار - وادي الحيتان", category: "أشجار", image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80" },
  { id: 2, title: "مركز تدريب الخزف - قرية تونس", category: "مراكز التدريب", image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&q=80" },
  { id: 3, title: "حملة تنظيف بحيرة قارون", category: "أنشطة بيئية", image: "https://images.unsplash.com/photo-1618477461853-cf6ed80fbea5?w=600&q=80" },
  { id: 4, title: "سوق الحرف اليدوية", category: "الأسواق", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80" },
  { id: 5, title: "تمكين نساء النسيج", category: "قصص التمكين", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" }
];

export function LocationsList() {
  const [activeCat, setActiveCat] = useState("أشجار");

  return (
    <div className="w-full lg:w-[420px] bg-white h-full flex flex-col p-6 lg:rounded-r-[32px] z-10 shadow-[10px_0_20px_rgba(0,0,0,0.03)] border-l border-gray-100 shrink-0">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-extrabold text-[#2D2D2D]">أماكن الأثر التفاعلي</h3>
        <button className="text-[13px] font-bold text-gray-400 hover:text-[var(--color-primary)] transition underline underline-offset-4 border-b-2 border-transparent">
          اكتشف المزيد
        </button>
      </div>

      <div className="flex flex-wrap gap-2.5 mb-6 justify-end lg:justify-start" dir="rtl">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCat(cat)}
            className={`px-4 py-1.5 rounded-full text-[13px] font-bold transition-all border ${
              activeCat === cat 
                ? "bg-white border-[var(--color-primary)] text-[var(--color-primary)] shadow-sm" 
                : "bg-white border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto pr-3 pl-1 space-y-4 pb-4">
        {locationsInfo.map((loc) => (
          <div key={loc.id} className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-white group flex flex-col">
            <div className="h-44 overflow-hidden relative">
              <img src={loc.image} alt={loc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 isolate" />
            </div>
            <div className="p-4 flex justify-between items-center bg-white z-10 relative">
              <h4 className="font-bold text-gray-800 text-[15px]">{loc.title}</h4>
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 group-hover:text-[var(--color-primary)] group-hover:bg-green-50 transition-colors shrink-0 mr-4">
                 <svg className="w-5 h-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                 </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
