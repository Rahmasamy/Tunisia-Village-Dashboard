"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { useForgetPassword } from '../hooks/useForgetPassword';
import { Mail, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const mutation = useForgetPassword();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ email }, {
      onSuccess: () => {
        router.push(`/verify-otp?email=${encodeURIComponent(email)}`);
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
        <h1 className="text-2xl font-extrabold text-gray-900 mb-2">نسيت كلمة المرور؟ لا تقلق</h1>
        <p className="text-gray-500 text-base leading-relaxed max-w-sm">
          أدخل عنوان بريدك الإلكتروني أدناه وسنرسل لك رمزاً لإعادة تعيين كلمة المرور.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full space-y-6">
        <div className="space-y-2">
          <label className="block text-base font-extrabold text-gray-700 text-right">البريد الإلكتروني</label>
          <div className="relative flex items-center">
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              placeholder="اكتب بريدك الإلكتروني هنا ..."
              className="w-full p-4 pr-12 pl-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-400 text-left text-base text-gray-800 placeholder-gray-400"
              dir="ltr"
              required
            />
            <div className="absolute right-4 text-gray-400">
              <Mail size={20} />
            </div>
          </div>
        </div>

        <button 
          type="submit" 
          disabled={mutation.isPending}
          className="w-full bg-[#fa8b45] hover:bg-orange-500 text-white font-extrabold py-4 px-6 rounded-2xl shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20 active:scale-[0.99] transition-all text-base cursor-pointer disabled:opacity-50"
        >
          {mutation.isPending ? 'جاري الإرسال...' : 'إرسال'}
        </button>
      </form>
    </div>
  );
}
