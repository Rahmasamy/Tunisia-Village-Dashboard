"use client";
import Image from 'next/image';
import React, { useState, useRef } from 'react';
import { useVerifyOtp } from '../hooks/useVerifyOtp';
import { ArrowLeft } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function VerifyOtpForm() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const mutation = useVerifyOtp();
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams?.get('email') || 'emmy@gmail.com';
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    const cleanedValue = value.replace(/[^0-9]/g, '');
    if (!cleanedValue) {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
      return;
    }

    // Handle full pasted code inside onChange just in case
    if (cleanedValue.length === 6) {
      setOtp(cleanedValue.split(''));
      inputRefs.current[5]?.focus();
      return;
    }

    // Take the last entered character to overwrite existing digit
    const digit = cleanedValue.slice(-1);
    const newOtp = [...otp];
    newOtp[index] = digit;
    setOtp(newOtp);

    // Auto-focus next input
    if (index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Auto-focus previous input on Backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const text = e.clipboardData.getData('text').replace(/[^0-9]/g, '');
    if (text.length === 6) {
      setOtp(text.split(''));
      inputRefs.current[5]?.focus();
    } else if (text.length > 0) {
      const newOtp = [...otp];
      for (let i = 0; i < Math.min(text.length, 6); i++) {
        newOtp[i] = text[i];
      }
      setOtp(newOtp);
      inputRefs.current[Math.min(text.length, 5)]?.focus();
    }
  };

  const handleFocus = (index: number) => {
    // Select the content on focus to allow easy overwrite
    inputRefs.current[index]?.select();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const otpString = otp.join('');
    if (otpString.length < 6) return;
    
    mutation.mutate({ email, otp: otpString }, {
      onSuccess: () => {
        router.push(`/reset-password?email=${encodeURIComponent(email)}&otp=${otpString}`);
      }
    });
  };

  return (
    <div className="w-full max-w-md flex flex-col items-center animate-in fade-in duration-500">
      {/* Back Button on the Right */}
      <div className="w-full flex justify-end mb-6" dir="ltr">
        <button 
          onClick={() => router.back()} 
          className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-900 text-gray-900 hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <ArrowLeft size={24} />
        </button>
      </div>

      {/* Logo */}
      <div className="mb-6 flex justify-center">
        <div className="w-28 h-28 relative flex items-center justify-center overflow-hidden">
          <Image 
            src="/imgs/logo.png" 
            alt="Logo" 
            width={112} 
            height={112} 
            className="object-contain" 
          />
        </div>
      </div>

      {/* Header and Subtext */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-extrabold text-gray-900 mb-2">تحقق من بريدك الإلكتروني</h1>
        <p className="text-gray-500 text-base leading-relaxed max-w-sm">
          لقد أرسلنا رمزًا مكونًا من 6 أرقام إلى بريدك الإلكتروني <br/>
          <span className="text-[#008767] underline font-semibold dir-ltr inline-block">{email}</span> يرجى إدخاله أدناه للمتابعة.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full space-y-6">
        <div className="space-y-4">
          <label className="block text-base font-extrabold text-gray-700 text-right">الكود</label>
          <div className="flex justify-between gap-3" dir="ltr">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={el => { inputRefs.current[index] = el; }}
                type="text"
                maxLength={2} // Set to 2 to capture fast double-typing and overwrite it cleanly
                value={digit}
                onFocus={() => handleFocus(index)}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className="w-14 h-14 text-center text-xl font-bold bg-gray-100 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-gray-900 shadow-inner"
              />
            ))}
          </div>
        </div>

        <button 
          type="submit" 
          disabled={mutation.isPending || otp.join('').length < 6}
          className="w-full bg-[#fa8b45] hover:bg-orange-500 text-white font-extrabold py-4 px-6 rounded-2xl shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20 active:scale-[0.99] transition-all text-base cursor-pointer disabled:opacity-50"
        >
          {mutation.isPending ? 'جاري التأكيد...' : 'تأكيد'}
        </button>
      </form>
    </div>
  );
}
