import React from 'react';

interface ReusableButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export default function ReusableButton({
  children,
  variant = 'primary',
  icon,
  iconPosition = 'left',
  className = '',
  ...props
}: ReusableButtonProps) {
  const baseStyle = "font-extrabold py-3.5 px-8 rounded-2xl shadow-sm transition-all duration-200 active:scale-95 text-sm cursor-pointer flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-[#1d275f] hover:bg-[#151c47] text-white hover:shadow-md hover:shadow-indigo-900/10",
    secondary: "bg-orange-500 hover:bg-orange-600 text-white hover:shadow-md hover:shadow-orange-500/10",
    outline: "bg-white border border-gray-250 text-gray-700 hover:bg-gray-50"
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'right' && icon}
      {children}
      {icon && iconPosition === 'left' && icon}
    </button>
  );
}
