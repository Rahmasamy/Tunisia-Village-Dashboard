'use client'
import React, { useState } from 'react';
import { TitleTag } from '@/src/shared/components/wrappers/BoxWrapper';
import { FayoumCard } from '@/src/shared/components/common/Cards/FayoumCard';

const tabsStr = [
  "أفضل الأوقات للزيارة",
  "أفضل الأماكن للزيارة",
  "تخطيط الرحلة",
  "السياحة الريفية",
  "عجائب طبيعة الفيوم الخضراء والزرقاء",
  "حضارات الفيوم عبر الأزمان"
];

const mockCardsData = [
  {
    id: 1,
    title: "الفيوم الفرعونية",
    subtitle: "أهرامات ، معابد ، إرث ملكي",
    bullets: [
      "هرم أمنمحات الثالث (هوارة)",
      "هرم سنوسرت الثاني (اللاهون)",
      "هرم سيلا",
      "مدينة ماضي",
      "منطقة الخلوة",
      "قاعدتا بيبمو"
    ],
    images: ["/imgs/pharaonic.png", "/imgs/pharaonic.png"]
  },
  {
    id: 2,
    title: "اليونانية - الرومانية",
    subtitle: "مدن مزدهرة و عبادات التماسيح",
    bullets: [
      "كوم أوشيم (كارانيس)",
      "قصر قارون (ديونيسوس)",
      "ديمية السباع “سوكنوبايوس”",
      "أم البريجات “تبتونيس”",
      "كوم الأثل (باكياس)"
    ],
    images: ["/imgs/greco-roman.png", "/imgs/greco-roman.png"]
  },
  {
    id: 3,
    title: "الفيوم القبطية",
    subtitle: "إيمان راسخ وأديرة عريقة",
    bullets: [
      "دير رئيس الملائكة جبرائيل",
      "دير العذراء مريم",
      "دير العزب “دير الأنبا إبرام”",
      "كنائس مدينة الفيوم"
    ],
    images: ["/imgs/coptic.png", "/imgs/coptic.png"]
  },
  {
    id: 4,
    title: "الفيوم الإسلامية",
    subtitle: "جواهر معمارية ومواقع روحية",
    bullets: [
      "المسجد المعلق",
      "ضريح علي الروبي",
      "مسجد قايتباي"
    ],
    images: ["/imgs/islamic.png", "/imgs/islamic.png"]
  }
];

export const CivilizationsFeature = () => {
  const [activeTab, setActiveTab] = useState("حضارات الفيوم عبر الأزمان");

  return (
    <section className="w-full max-w-7xl mx-auto py-16 px-4 font-cairo" dir="rtl">
      
      {/* Top Tabs */}
      <div className="w-full  pb-4 mb-10  scrollbar-hide ">
        <div className="flex items-center gap-4 min-w-max">
          {tabsStr.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-lg font-medium transition-colors border ${
                activeTab === tab 
                  ? 'bg-[#F97316] text-white border-[#F97316]' 
                  : 'bg-transparent text-[#F97316] border-[#F97316] hover:bg-[#F97316] hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Section Title */}
      <div className="mb-10 w-full flex justify-start">
        <TitleTag>حضارات الفيوم عبر الأزمان</TitleTag>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* We reverse the array to match the visual order in the RTL layout if needed,
            but Tailwind Grid handles it naturally in RTL so Card 1 is right-most. */}
        {mockCardsData.map((card) => (
          <FayoumCard
            key={card.id}
            title={card.title}
            subtitle={card.subtitle}
            bullets={card.bullets}
            images={card.images}
            onReadMoreClick={() => console.log('Read more clicked for', card.title)}
            onFavoriteClick={() => console.log('Favorite toggled for', card.title)}
          />
        ))}
      </div>

    </section>
  );
};
