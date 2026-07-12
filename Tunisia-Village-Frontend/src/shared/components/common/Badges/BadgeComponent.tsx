import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  variant?: 'available' | 'unavailable' | 'offer' | 'type' | 'discount';
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<string, string> = {
  available: 'bg-[#1a7d5a] text-white',
  unavailable: 'bg-gray-500 text-white',
  offer: 'bg-[#f5a623] text-white',
  type: 'bg-white/92 text-gray-800',
  discount: 'bg-[#1a7d5a] text-white',
};

export const Badge: React.FC<BadgeProps> = ({ variant = 'type', children, className }) => {
  return (
    <span className={cn('inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap', variantStyles[variant], className)}>
      {children}
    </span>
  );
};