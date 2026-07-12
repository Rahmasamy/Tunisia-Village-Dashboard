'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  loading?: boolean;
  children: React.ReactNode;
}

const variantStyles: Record<string, string> = {
  primary: 'bg-[#1a7d5a] text-white hover:bg-[#157d5a] hover:shadow-lg hover:-translate-y-0.5',
  secondary: 'bg-white text-[#1a7d5a] border-2 border-[#1a7d5a] hover:bg-[#1a7d5a] hover:text-white',
  outline: 'bg-transparent text-white border-2 border-white/70 hover:bg-white/15 hover:border-white',
  ghost: 'bg-transparent text-gray-700 hover:bg-gray-100',
  accent: 'bg-[#f5a623] text-white hover:bg-[#e67e3a] hover:shadow-lg hover:-translate-y-0.5',
};

const sizeStyles: Record<string, string> = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-7 py-3 text-base',
  lg: 'px-10 py-4 text-lg',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  children,
  className,
  disabled,
  ...props
}) => {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 border-none cursor-pointer font-semibold transition-all duration-200 no-underline whitespace-nowrap rounded-full',
        'disabled:opacity-60 disabled:cursor-not-allowed',
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && 'w-full',
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      )}
      {children}
    </button>
  );
};