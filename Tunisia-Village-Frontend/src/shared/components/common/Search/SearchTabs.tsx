'use client';

import React, { useState } from 'react';
import { NAV_TABS } from '@/src/shared/lib/consts/data';

interface SearchTabsProps {
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
}

export const SearchTabs: React.FC<SearchTabsProps> = ({
  activeTab = 'accommodation',
  onTabChange,
}) => {
  const [active, setActive] = useState(activeTab);

  const handleTabClick = (tabId: string) => {
    setActive(tabId);
    onTabChange?.(tabId);
  };

  return (
    <div className="bg-[#EAEBE8]/95 backdrop-blur-md rounded-[40px] p-6 mx-auto w-full max-w-5xl shadow-xl border border-white/60">
      {/* Tabs */}
      <div className="flex items-center gap-3 overflow-x-auto pb-2 justify-start md:justify-center scrollbar-hide">
        {NAV_TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={` flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-[15px] transition-all whitespace-nowrap ${active === tab.id
              ? 'bg-[#4BB58E] text-white shadow-md'
              : ' bg-white text-[#4BB58E] hover:/90 shadow-sm'
              }`}
          >
            <span


            >{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Fields Row */}
      <div className=" rounded-[40px] p-2 flex flex-col md:flex-row items-center justify-between shadow-sm mt-3 h-auto md:h-24 gap-4 md:gap-0">

        {/* Field 1: Type */}
        <div className=" flex-1  flex flex-col items-start w-full h-full justify-center relative">
          <span className="text-[17px] text-black font-bold mb-1"> اختر نوع الإقامة</span>
          <select className="w-full bg-white flex-1 py-3 rounded-xl flex items-center px-8 border-none outline-none text-[13px] font-semibold text-gray-700 cursor-pointer appearance-none pr-2">
            <option>فندق</option>
            <option>فيلا  </option>
            <option value=""> بيت ضيافة</option>
          </select>
          <div className="absolute left-6 top-1/2 mt-4 transform -translate-y-1/2 pointer-events-none">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500"><path d="m6 9 6 6 6-6" /></svg>
          </div>
        </div>

        {/* Field 2: Date */}
        <div className="px-2 flex-[1.4] border-b md:border-b-0 md:border-l border-gray-200 flex flex-col items-start w-full h-full justify-center">
          <span className="text-[17px] text-black font-bold mb-1 text-right w-full">موعد الإقامة</span>
          <div className="flex items-center justify-between gap-3 w-full text-[13px] text-gray-700">
            <div className="flex-1 flex items-center gap-2 p-3 bg-white rounded-xl">

              <div className="flex flex-col items-start leading-none">
                <span className="text-[13px] text-gray-400 mb-[4px]">تسجيل الدخول</span>
                <input type='date' className='font-semibold ' />
              </div>
            </div>
            <div className="flex-1 flex items-center gap-2 p-3 bg-white rounded-xl">

              <div className="flex flex-col items-start leading-none">
                <span className="text-[13px] text-gray-400 mb-[4px]">تسجيل الخروج</span>
                <input type='date' className='font-semibold' />              </div>
            </div>
          </div>
        </div>

        {/* Field 3: Guests */}
        <div className="flex-1 px-2 flex flex-col items-start w-full h-full justify-center relative">
          <span className="text-[17px] text-black font-bold mb-1">الضيوف والغرف</span>
          <select className="w-full bg-white flex-1 py-3 rounded-xl flex items-center px-8 border-none outline-none text-[13px] font-semibold text-gray-700 cursor-pointer appearance-none pr-2">
            <option>2 بالغين في غرفة واحدة</option>
            <option>1 بالغ في غرفة واحدة</option>
            <option>4 بالغين في غرفتين</option>
          </select>
          <div className="absolute left-6 top-1/2 mt-4 transform -translate-y-1/2 pointer-events-none">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500"><path d="m6 9 6 6 6-6" /></svg>
          </div>
        </div>

        {/* Search Button */}
        <button className="mt-3 w-16 h-16 rounded-full bg-[#008767] hover:bg-[#007055] text-white flex items-center justify-center transition-all flex-shrink-0 shadow-md transform md:-ml-0.5">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};
