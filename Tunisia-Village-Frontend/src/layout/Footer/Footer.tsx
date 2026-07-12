'use client';
import React from 'react';
import Link from 'next/link';
import ChairPerson from '@/src/shared/components/icons/ChairPerson/ChairPerson';
import LinkedIn from '@/src/shared/components/icons/Social/LinkedIn';
import Insta from '@/src/shared/components/icons/Social/Insta';
import FaceBook from '@/src/shared/components/icons/Social/FaceBook';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full font-sans text-white mt-10">
      {/* Newsletter Section with Background Image */}
      <div className="relative w-full h-[250px] md:h-[300px] flex items-center">
        {/* Background Image Setup */}
        <div className="absolute inset-0 bg-[url('/imgs/footer-img.jpg')] bg-contain bg-center z-0" />
        <div className="absolute inset-0 bg-black/40 z-10" />
        
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 flex justify-start">
          <div className="max-w-xl text-right">
            <h2 className="text-[28px] md:text-[36px] font-bold text-white mb-6 leading-tight drop-shadow-md">
              تابع أحدث قصص الأثر والمبادرات الجديدة - اشترك الآن
            </h2>
            <div className="flex flex-col gap-2">
              <label className="text-white/90 text-sm font-semibold">البريد الإلكتروني</label>
              <div className="flex items-center bg-white rounded-full p-1.5 shadow-lg w-full md:w-[450px]">
                <button className="bg-[#F4813F] hover:bg-[#e07030] text-white px-8 py-3 rounded-full font-bold text-sm transition-colors flex-shrink-0">
                  إرسال
                </button>
                <input
                  type="email"
                  placeholder="اكتب بريدك الإلكتروني هنا..."
                  className="bg-transparent border-none outline-none text-gray-800 text-right px-4 w-full text-sm placeholder:text-gray-400"
                />
                <span className="text-gray-400 pl-4 pr-2 text-lg">✉</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Section with Gradient */}
      <div className="w-full bg-gradient-to-b from-[#3c3732] to-[#ed7e3b] pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Top Row: 4 Columns (RTL logic) */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-4 mb-16">
            
            {/* Column 1 (Rightmost): Logo and Text */}
            <div className="text-right flex flex-col items-start md:col-span-1">
              <div className="w-16 h-16 border-2 border-white/80 rounded-full flex flex-col items-center justify-center mb-6">
                <span className="text-xl font-bold leading-none tracking-tight">AS</span>
                <span className="text-xs font-bold leading-none mt-1 text-white/90">أنس</span>
              </div>
              <p className="text-white/80 text-[13px] leading-relaxed max-w-[280px]">
                لوريم إيبسوم دولار سيت أميت، كونسيكتيتور أدايبا يسكينج أليايت،سيت دو أيوسمود تيمبور. أنكايديديونت أبوري ات دولار ماجنا أليكيوا ، يوت انيم آد مينيم فينايم كيوآس نوستريد
              </p>
            </div>

            {/* Column 2: Our Services */}
            <div className="text-right flex flex-col items-start">
              <h3 className="text-lg font-bold mb-6 text-white">خدماتنا</h3>
              <ul className="flex flex-col gap-7 text-sm text-white/80">
                <li><Link href="#" className="hover:text-white transition-colors">سياسة الأثر</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">تقارير الأثر السنوية (PDF)</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">شركاؤنا في التنمية</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">منصة "اكتب"</Link></li>
              </ul>
            </div>

            {/* Column 3: About Us */}
            <div className="text-right flex flex-col items-start">
              <h3 className="text-lg font-bold mb-6 text-white">من نحن</h3>
              <ul className="flex flex-col gap-7 text-sm text-white/80">
                <li><Link href="#" className="hover:text-white transition-colors">تواصل معنا</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">عن الفيوم</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">حجوزات</Link></li>
              </ul>
            </div>

            {/* Column 4 (Leftmost): Back to top, Accessibility, Socials */}
            <div className="flex flex-col items-end h-full justify-between">
              {/* Back to top button */}
              <button 
                onClick={scrollToTop}
                className="w-16 h-16 border border-white/40 rounded-full flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-colors mb-8"
                aria-label="Back to top"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
              </button>
              
              {/* Accessibility Icon */}
              <div className="mb-8">
              <ChairPerson />
              
              </div>

              {/* Social Icons */}
              <div className="flex gap-7">
                {/* LinkedIn */}
                <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                  <LinkedIn />
                </a>
                {/* Instagram */}
                <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                 <Insta />
                </a>
                {/* Facebook */}
                <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                  <FaceBook />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar Container */}
          <div className="pt-6 border-t border-white/20 flex flex-col md:flex-row items-center justify-between text-white/70 text-[13px]">
            {/* Left side (RTL logic) -> in the design it's on the right of the screen? Wait. */}
            <div className="mb-4 md:mb-0">
              جميع الحقوق محفوظة 2025 - tunisvillage.org
            </div>
            
            {/* Right side Links -> in the design it's on the left of the screen? Let's check. */}
            {/* In RTL display, flex-row items usually starts from Right. But the screenshot has "جميع الحقوق محفوظة" on the Far Left! */}
            {/* And "سياسة الخصوصية    الشروط والأحكام" on the Far Right. */}
            <div className="flex gap-6 font-semibold">
              <Link href="#" className="hover:text-white transition-colors">سياسة الخصوصية</Link>
              <Link href="#" className="hover:text-white transition-colors">الشروط والأحكام</Link>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
