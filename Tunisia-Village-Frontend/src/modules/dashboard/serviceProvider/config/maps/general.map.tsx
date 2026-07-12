import dynamic from 'next/dynamic';
import React from 'react';

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[300px]" dir="rtl">
    <div className="text-gray-400 font-extrabold animate-pulse">جاري التحميل...</div>
  </div>
);

export const generalMap = {
  Overview: dynamic(() => import('../../features/pannel/general/Overview'), { loading: LoadingFallback }),
  Activities: dynamic(() => import('../../features/pannel/general/Activities'), { loading: LoadingFallback }),
  Dates: dynamic(() => import('../../features/avaliability/calendar/Dates'), { loading: LoadingFallback }),
  Analytics: dynamic(() => import('../../features/performance/analytics/Analytics'), { loading: LoadingFallback }),
  Ratings: dynamic(() => import('../../features/revisions/ratings/Ratings'), { loading: LoadingFallback }),
  Payouts: dynamic(() => import('../../features/finance/accounts/Payouts'), { loading: LoadingFallback }),
};
