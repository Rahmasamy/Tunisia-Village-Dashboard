import React from 'react';

export const TitleTag = ({ children }: { children: React.ReactNode }) => (
  <div className="relative inline-block mb-6">
    <h2 className="text-3xl font-bold text-gray-800 pb-2 pr-6">
      {children}
    </h2>
    {/* Decorative orange border mimicking the design */}
    <div className="absolute top-0 right-0 h-full w-full rounded-br-3xl border-r-4 border-b-4 border-[#F97316] opacity-60"></div>
  </div>
);