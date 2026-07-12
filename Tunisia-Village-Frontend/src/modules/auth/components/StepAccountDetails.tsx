import React, { useState, useEffect } from 'react';
import { Mail, Lock, Eye, EyeOff, User, Phone, CheckCircle2, Circle } from 'lucide-react';
import Link from 'next/link';

export const StepAccountDetails = ({ formData, setFormData, onNext }: any) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [passError, setPassError] = useState('');

  const handleGoogleAuth = () => {
    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '45241092078-tmai4f79ib4slofjj2mu22u37qem5a9m.apps.googleusercontent.com';
    const redirectUri = 'http://localhost:3000/auth/google/callback';
    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=openid%20email%20profile&access_type=offline&prompt=consent`;
    window.location.href = googleAuthUrl;
  };

  // Password requirement states
  const [reqLength, setReqLength] = useState(false);
  const [reqUpperLower, setReqUpperLower] = useState(false);
  const [reqSymbolNum, setReqSymbolNum] = useState(false);

  useEffect(() => {
    const password = formData.password || '';
    setReqLength(password.length >= 10);
    setReqUpperLower(/[a-z]/.test(password) && /[A-Z]/.test(password));
    setReqSymbolNum(/[0-9]/.test(password) && /[^a-zA-Z0-9]/.test(password));
  }, [formData.password]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== confirmPassword) {
      setPassError('كلمتا المرور غير متطابقتين');
      return;
    }
    if (!reqLength || !reqUpperLower || !reqSymbolNum) {
      setPassError('الرجاء استيفاء جميع شروط كلمة المرور');
      return;
    }
    if (!agreed) {
      setPassError('يجب الموافقة على الشروط والأحكام');
      return;
    }
    setPassError('');
    onNext();
  };

  return (
    <div className="w-full flex flex-col items-center animate-in slide-in-from-right-8 duration-300">
      <div className="text-center mb-8 max-w-md">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-2 leading-snug">
          مرحباً بك في مؤسسة أنس للسياحة والإقامة والترفيه - الفيوم!
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          لنبدأ معاً رحلة من الاستكشاف والاستمتاع بجمال الفيوم وأصالة ضيافتها.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="w-full space-y-5">
        {/* الاسم الكامل */}
        <div className="space-y-1.5">
          <label className="block text-base font-bold text-gray-700 text-right">الاسم الكامل</label>
          <div className="relative flex items-center">
            <input 
              type="text" 
              name="firstName" 
              value={formData.firstName} 
              onChange={handleChange} 
              placeholder="أدخل الاسم الكامل"
              className="w-full py-4 pr-5 pl-5 bg-gray-100/80 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#008767] focus:bg-white text-right text-base border border-gray-200/50 transition-all duration-200" 
              required
            />
          </div>
        </div>

        {/* البريد الإلكتروني */}
        <div className="space-y-1.5">
          <label className="block text-base font-bold text-gray-700 text-right">البريد الإلكتروني</label>
          <div className="relative flex items-center">
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="اكتب بريدك الإلكتروني هنا ..."
              className="w-full py-4 pr-12 pl-5 bg-gray-100/80 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#008767] focus:bg-white text-right text-base border border-gray-200/50 transition-all duration-200" 
              required
            />
            <div className="absolute right-4 text-gray-400 flex items-center justify-center"><Mail size={22} /></div>
          </div>
        </div>

        {/* رقم الهاتف */}
        <div className="space-y-1.5">
          <label className="block text-base font-bold text-gray-700 text-right">رقم الهاتف</label>
          <div className="relative flex items-center w-full">
            <input 
              type="tel" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
              placeholder="أدخل رقم الهاتف" 
              dir="ltr"
              className="w-full py-4 pr-5 pl-28 bg-gray-100/80 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#008767] focus:bg-white text-left text-base border border-gray-200/50 transition-all duration-200" 
              required
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 border-r pr-3 border-gray-300" dir="ltr">
              <span className="text-xl">🇪🇬</span>
              <span className="text-sm font-bold text-gray-600">+20</span>
              <span className="text-gray-400 text-[10px]">▼</span>
            </div>
          </div>
        </div>

        {/* كلمة المرور */}
        <div className="space-y-1.5">
          <label className="block text-base font-bold text-gray-700 text-right">كلمة المرور</label>
          <div className="relative flex items-center">
            <input 
              type={showPassword ? "text" : "password"} 
              name="password" 
              value={formData.password} 
              onChange={handleChange} 
              placeholder="************" 
              dir="ltr"
              className="w-full py-4 pr-12 pl-12 bg-gray-100/80 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#008767] focus:bg-white text-left text-base border border-gray-200/50 transition-all duration-200" 
              required
            />
            <div className="absolute right-4 text-gray-400 flex items-center justify-center"><Lock size={22} /></div>
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute left-4 text-gray-400 hover:text-gray-600 transition-colors">
              {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
            </button>
          </div>
        </div>

        {/* Password Requirements Checklist */}
        <div className="space-y-2.5 pt-1 text-right" dir="rtl">
          <div className="flex items-center gap-2.5 text-sm font-semibold">
            {reqLength ? (
              <CheckCircle2 size={20} className="text-[#008767] fill-green-50" />
            ) : (
              <Circle size={20} className="text-gray-300" />
            )}
            <span className={reqLength ? "text-[#008767] font-bold" : "text-gray-500"}>على الأقل 10 حروف</span>
          </div>

          <div className="flex items-center gap-2.5 text-sm font-semibold">
            {reqUpperLower ? (
              <CheckCircle2 size={20} className="text-[#008767] fill-green-50" />
            ) : (
              <Circle size={20} className="text-gray-300" />
            )}
            <span className={reqUpperLower ? "text-[#008767] font-bold" : "text-gray-500"}>تحتوي على حروف كبيرة وصغيرة</span>
          </div>

          <div className="flex items-center gap-2.5 text-sm font-semibold">
            {reqSymbolNum ? (
              <CheckCircle2 size={20} className="text-[#008767] fill-green-50" />
            ) : (
              <Circle size={20} className="text-gray-300" />
            )}
            <span className={reqSymbolNum ? "text-[#008767] font-bold" : "text-gray-500"}>تحتوي على علامات وأرقام</span>
          </div>
        </div>

        {/* تأكيد كلمة المرور */}
        <div className="space-y-1.5">
          <label className="block text-base font-bold text-gray-700 text-right">تأكيد كلمة المرور</label>
          <div className="relative flex items-center">
            <input 
              type={showConfirmPassword ? "text" : "password"} 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              placeholder="************" 
              dir="ltr"
              className="w-full py-4 pr-12 pl-12 bg-gray-100/80 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#008767] focus:bg-white text-left text-base border border-gray-200/50 transition-all duration-200" 
              required
            />
            <div className="absolute right-4 text-gray-400 flex items-center justify-center"><Lock size={22} /></div>
            <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute left-4 text-gray-400 hover:text-gray-600 transition-colors">
              {showConfirmPassword ? <EyeOff size={22} /> : <Eye size={22} />}
            </button>
          </div>
        </div>

        {/* Checkbox Terms and Conditions */}
        <div className="flex items-center justify-end gap-2.5 pt-2" dir="rtl">
          <input 
            type="checkbox" 
            id="terms" 
            checked={agreed} 
            onChange={(e) => setAgreed(e.target.checked)}
            className="w-5 h-5 text-[#008767] border-gray-300 rounded focus:ring-[#008767] cursor-pointer accent-[#008767]"
            required
          />
          <label htmlFor="terms" className="text-sm font-semibold text-gray-600 select-none cursor-pointer">
            موافق على <span className="text-[#008f65] hover:underline cursor-pointer">الشروط والأحكام</span> و <span className="text-[#008f65] hover:underline cursor-pointer">بيان الخصوصية</span>
          </label>
        </div>

        {passError && (
          <p className="text-red-500 text-sm text-right font-bold">{passError}</p>
        )}

        <div className="pt-3">
          <button 
            type="submit"
            className="w-full bg-[#fa8b45] hover:bg-orange-500 text-white font-extrabold py-4 px-6 rounded-2xl shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20 active:scale-[0.99] transition-all text-base cursor-pointer"
          >
            إنشاء حساب
          </button>
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
        </div>

        {/* Register Link */}
        <div className="text-center pt-3">
          <span className="text-gray-600 text-sm font-semibold">لديك حساب بالفعل ؟ </span>
          <Link href="/login" className="text-[#008f65] font-extrabold text-sm hover:underline">
            تسجيل الدخول
          </Link>
        </div>
      </form>
    </div>
  );
};
