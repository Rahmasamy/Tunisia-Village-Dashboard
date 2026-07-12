'use client';

import { Accommodation } from '@/src/modules/Accommodation/Accomedation.types';
import React, { useState } from 'react';
import { Badge } from '@/src/shared/components/common/Badges/BadgeComponent';
import { StarRating } from '@/src/shared/components/common/StarRating';
import { formatPrice } from '@/src/shared/lib/utils/Data/Utils';
import { Button } from '@/src/shared/components/common/Buttons/button';
import Location from '@/src/shared/components/icons/location/Location';
import OrangeTree from '@/src/shared/components/icons/OrangeTree/OrangeTree';
import Pool from '@/src/shared/components/icons/Pool/Pool';
import Wifi from '@/src/shared/components/icons/Wifi/Wifi';
import RestaurantIcon from '@/src/shared/components/icons/Restaurant/Restaurant';
import Car from '@/src/shared/components/icons/Car/Car';
import Wave from '@/src/shared/components/icons/Wave/Wave';
import Snow from '@/src/shared/components/icons/Snow/Snow';
import Mute from '@/src/shared/components/icons/Mute/Mute';
import Bedroom from '@/src/shared/components/icons/Bedroom/Bedroom';
import Shower from '@/src/shared/components/icons/Shower/Shower';

interface AccommodationCardProps {
  accommodation: Accommodation;
  onBook?: (id: string) => void;
}

const AMENITY_ICONS: Record<string, React.ReactNode> = {
  wifi: <Wifi />,
  kitchen: <RestaurantIcon />,
  parking: <Car />,
  pool: <Wave />,
  ac: <Snow />,
  tv: <Mute />,
};

const TYPE_LABELS: Record<string, string> = {
  hotel: 'فندق',
  villa: 'فيلا',
  'eco-farm': 'مزرعة بيئية',
  guesthouse: 'بيت ضيافة',
  residential: 'إقامة منزلية',
};

export const AccommodationCard: React.FC<AccommodationCardProps> = ({
  accommodation,
  onBook,
}) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const {
    id, title, type, location, rating, pricePerNight,
    originalPrice, discountPercent, isAvailable,
    isSpecialOffer, image, description, amenities, rooms, bathrooms
  } = accommodation;

  return (
    <article className="group bg-white rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-card)] transition-all duration-300 border-[1.5px] border-transparent flex flex-col hover:-translate-y-1.5 hover:shadow-[var(--shadow-lg)] hover:border-[rgba(26,125,90,0.15)]">
      <div className="relative h-[200px] overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-50% to-[rgba(0,0,0,0.3)]" />

        <div className="absolute top-3 right-3 left-3 flex justify-between items-start">
          <Badge variant="type">{TYPE_LABELS[type] || type}</Badge>
          <button
            className="w-[34px] h-[34px] bg-white border-none rounded-full flex items-center justify-center cursor-pointer text-lg shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-all duration-200 shrink-0 hover:scale-110"
            onClick={() => setIsWishlisted(!isWishlisted)}
            aria-label="أضف إلى المفضلة"
          >
            {isWishlisted ? '❤️' : '🤍'}
          </button>
        </div>

        {isSpecialOffer && (
          <div className="absolute bottom-3 right-3">
            <Badge variant="offer">عرض خاص</Badge>
          </div>
        )}

        {!isAvailable && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-[#6b7280] text-white py-2 px-5 rounded-[var(--radius-full)] text-[14px] font-semibold">غير متوفر</span>
          </div>
        )}
      </div>

      <div className="p-4 flex-1 flex flex-col gap-2.5">
        <div className="flex justify-between items-start gap-2">
          <h3 className="text-base font-bold text-[var(--color-text)] leading-[1.3]">{title}</h3>
          <StarRating rating={rating} />
        </div>

        <div className="flex items-center gap-1 text-[13px] text-[var(--color-text-muted)]">
          <span>
            <Location />
          </span>
          <span className='font-extrabold'>{location}</span>
        </div>

        <p className="text-[15px] text-black leading-[1.6] line-clamp-3 py-2">{description}</p>
        <div className="flex justify-between items-center">

          <div>
            {originalPrice && (
              <div className="text-xs text-[var(--color-primary)] line-through">{formatPrice(originalPrice)}</div>
            )}
            <div className="flex items-center gap-2">
              <span className="text-lg font-extrabold text-[var(--color-primary)]">{formatPrice(pricePerNight)}</span>
              {discountPercent && (
                <span className="bg-[var(--color-primary)] text-white py-[2px] px-2 rounded-[var(--radius-full)] text-xs font-bold">وفر {discountPercent}%</span>
              )}
            </div>
            <div className="flex gap-1 items-center">
              <span className="text-xs text-[var(--color-primary)] font-bold">/ الليلة</span>
              <span className="text-[11px] text-[var(--color-primary)] font-bold">شامل الضرائب</span>
            </div>
          </div>
          <div className='flex gap-3 items-center'>
            <OrangeTree />
            <Pool />
          </div>
        </div>
        <div className="flex gap-2 flex-wrap mt-2">
          {amenities.slice(0, 6).map((amenity) => (
            <span key={amenity} className="flex items-center justify-center opacity-90 transition-transform duration-200 hover:scale-110" title={amenity}>
              {AMENITY_ICONS[amenity] || '•'}
            </span>
          ))}
        </div>

        <div className="flex gap-4 text-[13px] text-[var(--color-text-muted)] mt-1 font-semibold">
          <span className="flex items-center gap-1.5"><Bedroom /> {rooms} غرف</span>
          <span className="flex items-center gap-1.5"><Shower /> {bathrooms} حمامات</span>
        </div>

        <div className="flex items-end justify-between mt-auto pt-3 border-t border-[var(--color-border)]">


          <Button
            variant={isAvailable ? 'accent' : 'ghost'}
            size="sm"
            disabled={!isAvailable}
            onClick={() => onBook?.(id)}
            className='bg-[var(--color-accent)] w-full text-center text-white py-2 rounded-xl'
          >
            {isAvailable ? 'احجز الآن' : 'غير متاح'}
          </Button>
        </div>
      </div>
    </article>
  );
};
