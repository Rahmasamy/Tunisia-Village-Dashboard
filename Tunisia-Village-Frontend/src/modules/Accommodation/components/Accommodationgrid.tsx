'use client';

import { ACCOMMODATIONS } from '@/src/shared/lib/consts/data';
import React, { useState, useMemo } from 'react';
import { AccommodationFilters } from './Accommodationfilters';
import { AccommodationCard } from './AccommodationCard';

export const AccommodationGrid: React.FC = () => {
  const [activeType, setActiveType] = useState('all');
  const [maxPrice, setMaxPrice] = useState(1000);

  const filtered = useMemo(() => {
    return ACCOMMODATIONS.filter((acc) => {
      const typeMatch = activeType === 'all' || acc.type === activeType;
      const priceMatch = acc.pricePerNight <= maxPrice;
      return typeMatch && priceMatch;
    });
  }, [activeType, maxPrice]);

  const handleBook = (id: string) => {
    console.log('Booking accommodation:', id);
  };

  return (
    <div className="pt-5 pb-[60px]">
      <div className="mb-6">
        <AccommodationFilters
          onTypeChange={setActiveType}
          onPriceChange={([, max]) => setMaxPrice(max)}
        />
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-6">
        {filtered.length > 0 ? (
          filtered.map((acc, i) => (
            <div
              key={acc.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}
            >
              <AccommodationCard accommodation={acc} onBook={handleBook} />
            </div>
          ))
        ) : (
          <div className="col-[1/-1] text-center py-[60px] px-5 text-[var(--color-text-muted)]">
            <div className="text-[48px] mb-4">🏚️</div>
            <div className="text-[20px] font-bold mb-2">لا توجد نتائج</div>
            <p>جرب تغيير الفلاتر للعثور على ما يناسبك</p>
          </div>
        )}
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {[0, 1, 2, 3].map((i) => (
          <button key={i} className={`h-2 border-none cursor-pointer transition-all duration-200 ${i === 0 ? 'w-6 rounded bg-[var(--color-primary)]' : 'w-2 rounded-full bg-[var(--color-border)]'}`} />
        ))}
      </div>
    </div>
  );
};