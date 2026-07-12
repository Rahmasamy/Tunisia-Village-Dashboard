"use client";

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useLogin } from '../hooks/useLogin';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';

export default function LoginForm() {
  const searchParams = useSearchParams();
  const reason = searchParams?.get('reason');
  
  React.useEffect(() => {
    if (reason === 'session-expired') {
      import('react-hot-toast').then(({ toast }) => {
        toast.error('انتهت صلاحية الجلسة، يرجى تسجيل الدخول مرة أخرى');
      });
    }
  }, [reason]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const loginMutation = useLogin();

  const handleGoogleAuth = () => {
    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '45241092078-tmai4f79ib4slofjj2mu22u37qem5a9m.apps.googleusercontent.com';
    const redirectUri = 'http://localhost:3000/auth/google/callback';
    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=openid%20email%20profile&access_type=offline&prompt=consent`;
    window.location.href = googleAuthUrl;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginMutation.mutate({ email, password });
  };

  return (
    <div className="w-full max-w-md flex flex-col items-center">
      {/* Logo Placeholder */}
      <div className="mb-8">
        <div className="w-24 h-24 flex items-center justify-center overflow-hidden mx-auto">
          <Image src="/imgs/logo-white.png" alt="Logo" width={96} height={96} className="object-contain drop-shadow-md" />
        </div>
      </div>

      <div className="text-center mb-8 max-w-sm">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">مرحبًا بعودتك!</h1>
        <p className="text-gray-600 text-base">هيا نسجل الدخول ونكتشف ما هو جديد.</p>
      </div>

      <form onSubmit={handleSubmit} className="w-full space-y-5">
        
        {/* Email Input */}
        <div className="space-y-1.5">
          <label className="block text-base font-bold text-gray-700 text-right">البريد الإلكتروني</label>
          <div className="relative flex items-center">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="اكتب بريدك الإلكتروني هنا ..."
              className="w-full py-4 pr-12 pl-5 bg-gray-100/80 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#008767] focus:bg-white text-right text-base border border-gray-200/50 transition-all duration-200 autofill:shadow-[inset_0_0_0_1000px_#f3f4f6]"
              required
            />
            <div className="absolute right-4 text-gray-400 flex items-center justify-center">
              <Mail size={22} />
            </div>
          </div>
        </div>

        {/* Password Input */}
        <div className="space-y-1.5">
          <label className="block text-base font-bold text-gray-700 text-right">كلمة المرور</label>
          <div className="relative flex items-center">
            <input 
              type={showPassword ? "text" : "password"} 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="****************"
              className="w-full py-4 pr-12 pl-12 bg-gray-100/80 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#008767] focus:bg-white text-left text-base border border-gray-200/50 transition-all duration-200 autofill:shadow-[inset_0_0_0_1000px_#f3f4f6]"
              dir="ltr"
              required
            />
            <div className="absolute right-4 text-gray-400 flex items-center justify-center">
              <Lock size={22} />
            </div>
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute left-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
            </button>
          </div>
        </div>

        {/* Forgot Password */}
        <div className="flex justify-start pt-1">
          <Link href="/forgot-password" className="text-sm font-extrabold text-gray-700 hover:text-orange-500 transition-colors">
            هل نسيت كلمة المرور ؟
          </Link>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          disabled={loginMutation.isPending}
          className="w-full bg-[#fa8b45] hover:bg-orange-500 text-white font-extrabold py-4 px-6 rounded-2xl shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20 active:scale-[0.99] transition-all duration-200 ease-in-out disabled:opacity-70 disabled:cursor-not-allowed mt-4 cursor-pointer text-base"
        >
          {loginMutation.isPending ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
        </button>

        {/* Register Link */}
        <div className="text-center pt-2">
          <span className="text-gray-600 text-sm font-semibold">ليس لديك حساب ؟ </span>
          <Link href="/register" className="text-[#008f65] font-extrabold text-sm hover:underline">
            أنشئ حساب جديد
          </Link>
        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-200"></div>
          <span className="px-4 text-gray-400 text-sm font-bold">أو</span>
          <div className="flex-1 border-t border-gray-200"></div>
        </div>

        {/* Social Buttons */}
        <div className="space-y-3.5">
          <button 
            type="button" 
            onClick={handleGoogleAuth}
            className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 text-gray-700 py-3.5 px-6 rounded-2xl hover:bg-gray-50 hover:shadow-sm active:scale-[0.99] transition-all cursor-pointer"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.67 15.63 16.89 16.79 15.72 17.57V20.34H19.29C21.38 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4"/>
              <path d="M12 23C14.97 23 17.46 22.02 19.29 20.34L15.72 17.57C14.73 18.23 13.48 18.64 12 18.64C9.13 18.64 6.7 16.7 5.82 14.11H2.15V16.96C3.96 20.55 7.68 23 12 23Z" fill="#34A853"/>
              <path d="M5.82 14.11C5.59 13.45 5.46 12.74 5.46 12C5.46 11.26 5.59 10.55 5.82 9.89V7.04H2.15C1.41 8.52 1 10.21 1 12C1 13.79 1.41 15.48 2.15 16.96L5.82 14.11Z" fill="#FBBC05"/>
              <path d="M12 5.36C13.62 5.36 15.07 5.92 16.21 6.99L19.38 3.82C17.46 2.04 14.97 1 12 1C7.68 1 3.96 3.45 2.15 7.04L5.82 9.89C6.7 7.3 9.13 5.36 12 5.36Z" fill="#EA4335"/>
            </svg>
            <span className="font-extrabold text-base">تسجيل الدخول عبر جوجل</span>
          </button>
          
          <button type="button" className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 text-gray-700 py-3.5 px-6 rounded-2xl hover:bg-gray-50 hover:shadow-sm active:scale-[0.99] transition-all cursor-pointer">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325V22.676C0 23.407 0.593 24 1.325 24H12.82V14.706H9.692V11.084H12.82V8.413C12.82 5.313 14.713 3.625 17.479 3.625C18.804 3.625 19.942 3.724 20.274 3.768V7.008L18.356 7.009C16.852 7.009 16.561 7.724 16.561 8.772V11.085H20.148L19.681 14.707H16.561V24H22.677C23.407 24 24 23.407 24 22.675V1.325C24 0.593 23.407 0 22.675 0Z" fill="#1877F2"/>
            </svg>
            <span className="font-extrabold text-base">تسجيل الدخول عبر فيسبوك</span>
          </button>
        </div>
      </form>
    </div>
  );
}
