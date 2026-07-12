'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { Heart, ChevronRight, ChevronLeft, ArrowLeft } from 'lucide-react';
import { cn } from '@/src/shared/lib/utils/Data/Utils';

interface FayoumCardProps {
  images: string[];
  title: string;
  subtitle: string;
  bullets: string[];
  onFavoriteClick?: () => void;
  onReadMoreClick?: () => void;
}

export const FayoumCard: React.FC<FayoumCardProps> = ({
  images,
  title,
  subtitle,
  bullets,
  onFavoriteClick,
  onReadMoreClick,
}) => {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIdx((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  const activeImage = images[currentImageIdx] || '/imgs/placeholder.png'; // Fallback

  return (
    <div className="flex flex-col bg-white rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden font-cairo w-full h-full" dir="rtl">

      {/* Image Section */}
      <div className="relative w-full h-[240px] group">
        <Image
          src={activeImage}
          alt={title}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          fill
          className="transition-transform duration-500 hover:scale-105"
        />

        {/* Favorite Button */}
        <button
          className="absolute top-4 left-4 p-2 bg-white/80 rounded-full hover:bg-white text-gray-500 hover:text-red-500 transition-colors z-10 shadow-sm"
          onClick={onFavoriteClick}
        >
          <Heart className="w-5 h-5" />
        </button>

        {/* Image Controls (Arrows) */}
        {images.length > 1 && (
          <>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-white/70 hover:bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10 shadow-sm"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-white/70 hover:bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10 shadow-sm"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
          </>
        )}

        {/* Image Pagination Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  currentImageIdx === idx ? "bg-white w-4" : "bg-white/50"
                )}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow p-6 text-center">
        <h3 className="text-[#00966a] font-bold text-lg mb-2">{title}</h3>
        <h4 className="text-gray-900 font-bold text-base md:text-lg mb-4">{subtitle}</h4>

        {/* Bullets */}
        <ul className="flex flex-col gap-2 text-gray-600 text-sm mb-6 flex-grow items-start text-right">
          {bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-gray-400 shrink-0"></span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {/* Read More Button */}
        <button
          onClick={onReadMoreClick}
          className="mt-auto w-full flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#e66a15] text-white font-bold py-3 px-6 rounded-full transition-colors"
        >
          <span>اقرأ المزيد</span>
          <ArrowLeft className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
};
