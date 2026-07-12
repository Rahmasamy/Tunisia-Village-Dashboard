"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { useResetPassword } from '../hooks/useResetPassword';
import { Lock, Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from "react-hot-toast";

export default function ResetPasswordForm() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const mutation = useResetPassword();
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams?.get('email') || '';
  const otp = searchParams?.get('otp') || '';

  // Password requirement checks
  const hasMinLength = password.length >= 10;
  const hasUpperLower = /[a-z]/.test(password) && /[A-Z]/.test(password);
  const hasNumberSymbol = /[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("كلمة المرور غير متطابقة");
      return;
    }

    if (!hasMinLength || !hasUpperLower || !hasNumberSymbol) {
      toast.error("يرجى استيفاء جميع شروط كلمة المرور");
      return;
    }
    
    mutation.mutate({ email, otp, newPassword: password }, {
      onSuccess: () => {
        toast.success("تم تغيير كلمة المرور بنجاح");
        router.push('/login');
      }
    });
  };

  const CheckIcon = ({ checked }: { checked: boolean }) => (
    <div className={`w-5 h-5 flex items-center justify-center rounded-full transition-colors border ${
      checked 
        ? "bg-teal-600 border-teal-600 text-white" 
        : "bg-transparent border-gray-300 text-gray-300"
    }`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
  );

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
        <h1 className="text-2xl font-extrabold text-gray-900 mb-2">إنشاء كلمة مرور جديدة</h1>
        <p className="text-gray-500 text-base leading-relaxed max-w-sm">
          قم بتعيين كلمة مرور قوية للحفاظ على أمان حسابك.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full space-y-5">
        <div className="space-y-2">
          <label className="block text-base font-extrabold text-gray-700 text-right">كلمة المرور الجديدة</label>
          <div className="relative flex items-center">
            <input 
              type={showPassword ? "text" : "password"} 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full p-4 pr-12 pl-12 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-400 text-left text-base text-gray-850 placeholder-gray-400"
              dir="ltr" 
              required
            />
            <div className="absolute right-4 text-gray-400">
              <Lock size={20} />
            </div>
            <button 
              type="button" 
              onClick={() => setShowPassword(!showPassword)} 
              className="absolute left-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-base font-extrabold text-gray-700 text-right">تأكيد كلمة المرور الجديدة</label>
          <div className="relative flex items-center">
            <input 
              type={showConfirmPassword ? "text" : "password"} 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full p-4 pr-12 pl-12 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-400 text-left text-base text-gray-850 placeholder-gray-400"
              dir="ltr" 
              required
            />
            <div className="absolute right-4 text-gray-400">
              <Lock size={20} />
            </div>
            <button 
              type="button" 
              onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
              className="absolute left-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        {/* Requirements list */}
        <div className="space-y-3 pt-2 text-right" dir="rtl">
          <div className="flex items-center justify-start gap-3">
            <CheckIcon checked={hasMinLength} />
            <span className={`text-sm font-semibold transition-colors ${hasMinLength ? 'text-gray-900' : 'text-gray-500'}`}>
              على الأقل 10 حروف
            </span>
          </div>

          <div className="flex items-center justify-start gap-3">
            <CheckIcon checked={hasUpperLower} />
            <span className={`text-sm font-semibold transition-colors ${hasUpperLower ? 'text-gray-900' : 'text-gray-500'}`}>
              تحتوي على حروف كبيرة وصغيرة
            </span>
          </div>

          <div className="flex items-center justify-start gap-3">
            <CheckIcon checked={hasNumberSymbol} />
            <span className={`text-sm font-semibold transition-colors ${hasNumberSymbol ? 'text-gray-900' : 'text-gray-500'}`}>
              تحتوي على علامات وأرقام
            </span>
          </div>
        </div>

        <button 
          type="submit" 
          disabled={mutation.isPending}
          className="w-full bg-[#fa8b45] hover:bg-orange-500 text-white font-extrabold py-4 px-6 rounded-2xl shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20 active:scale-[0.99] transition-all text-base cursor-pointer disabled:opacity-50 mt-4"
        >
          {mutation.isPending ? 'جاري التعيين...' : 'تسجيل الدخول'}
        </button>
      </form>
    </div>
  );
}
