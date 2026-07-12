import dynamic from 'next/dynamic';
import React from 'react';

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[300px]" dir="rtl">
    <div className="text-gray-400 font-extrabold animate-pulse">جاري التحميل...</div>
  </div>
);

export const hotelsMap = {
  AllHotels: dynamic(() => import('../../features/hotels/management/AllHotels'), { loading: LoadingFallback }),
  NewHotel: dynamic(() => import('../../features/hotels/management/NewHotel'), { loading: LoadingFallback }),
};
