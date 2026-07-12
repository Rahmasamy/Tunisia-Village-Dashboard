import dynamic from 'next/dynamic';
import React from 'react';

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[300px]" dir="rtl">
    <div className="text-gray-400 font-extrabold animate-pulse">جاري التحميل...</div>
  </div>
);

export const productsMap = {
  // basics
  LanguageModel: dynamic(() => import('../../features/products/basics/LanguageModel'), { loading: LoadingFallback }),
  Classification: dynamic(() => import('../../features/products/basics/Classification'), { loading: LoadingFallback }),
  Objective: dynamic(() => import('../../features/products/basics/Objective'), { loading: LoadingFallback }),
  Images: dynamic(() => import('../../features/products/basics/Images'), { loading: LoadingFallback }),

  // content
  Meeting: dynamic(() => import('../../features/products/content/Meeting'), { loading: LoadingFallback }),
  TourDetails: dynamic(() => import('../../features/products/content/TourDetails'), { loading: LoadingFallback }),
  LanguageProvided: dynamic(() => import('../../features/products/content/LanguageProvided'), { loading: LoadingFallback }),
  InclusionsExclusions: dynamic(() => import('../../features/products/content/InclusionsExclusions'), { loading: LoadingFallback }),
  Uniqueness: dynamic(() => import('../../features/products/content/Uniqueness'), { loading: LoadingFallback }),
  TravelerInfo: dynamic(() => import('../../features/products/content/TravelerInfo'), { loading: LoadingFallback }),

  // schedules & prices
  TravelerData: dynamic(() => import('../../features/products/timingtables-prices/TravelerData'), { loading: LoadingFallback }),
  PricingSchedules: dynamic(() => import('../../features/products/timingtables-prices/PricingSchedules'), { loading: LoadingFallback }),

  // tickets
  BookingProcess: dynamic(() => import('../../features/products/tickets/BookingProcess'), { loading: LoadingFallback }),
  CancellationPolicy: dynamic(() => import('../../features/products/tickets/CancellationPolicy'), { loading: LoadingFallback }),
  RequiredTravelerData: dynamic(() => import('../../features/products/tickets/RequiredTravelerData'), { loading: LoadingFallback }),
  TicketBuilder: dynamic(() => import('../../features/products/tickets/TicketBuilder'), { loading: LoadingFallback }),
  TicketRefund: dynamic(() => import('../../features/products/tickets/TicketRefund'), { loading: LoadingFallback }),
  Preview: dynamic(() => import('../../features/products/tickets/Preview'), { loading: LoadingFallback }),

  // finishing
  DemoOffer: dynamic(() => import('../../features/products/finishing/DemoOffer'), { loading: LoadingFallback }),
  LinkLodge: dynamic(() => import('../../features/products/finishing/LinkLodge'), { loading: LoadingFallback }),
  SubmitReview: dynamic(() => import('../../features/products/finishing/SubmitReview'), { loading: LoadingFallback }),
};
