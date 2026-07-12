import React, { InputHTMLAttributes } from 'react';
import { cn } from '@/src/shared/lib/utils/Data/Utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
  wrapperClassName?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  icon,
  className,
  wrapperClassName,
  ...props
}) => {
  return (
    <div className={cn("flex flex-col gap-2 relative", wrapperClassName)}>
      {label && <label className="text-sm font-medium text-gray-700 font-cairo">{label}</label>}
      <div className="relative">
        <input
          className={cn(
            "w-full bg-[#f3f4f6] text-gray-800 placeholder-gray-400 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#00966a] transition-all font-cairo",
            icon ? "pl-10" : "", // adjust padding if icon is present
            className
          )}
          {...props}
        />
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};
