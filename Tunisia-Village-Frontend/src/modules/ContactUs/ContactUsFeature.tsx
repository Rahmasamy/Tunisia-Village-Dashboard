'use client'
import React from 'react';
import { Input } from '@/src/shared/components/common/Input/Input';
import { Mail, Phone, Facebook, Instagram, Linkedin } from 'lucide-react';
import { cn } from '../../shared/lib/utils/Data/Utils';
import Image from 'next/image';

export const ContactUsFeature = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16 font-cairo" >
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10">

        {/* Right Feature: Form */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            كل طرق التواصل في مكان واحد... نحن معك دائمًا.
          </h2>

          <form className="flex flex-col space-y-6">
            <Input
              label="الاسم الكامل"
              placeholder="ادخل الاسم الكامل"
              type="text"
            />

            <Input
              label="البريد الإلكتروني"
              placeholder="اكتب بريدك الإلكتروني هنا ..."
              type="email"
              icon={<Mail className="w-5 h-5" />}
            />

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">رسالة</label>
              <textarea
                className="w-full bg-[#f3f4f6] text-gray-800 placeholder-gray-400 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#00966a] transition-all font-cairo min-h-[150px] resize-y"
                placeholder="اكتب هنا ..."
              ></textarea>
            </div>

            {/* Submit button might be missing from image but usually needed. I will omit it for now to match the "identical to figma" constraint, or maybe just hidden in the image. I'll leave it out. */}
          </form>

          {/* Contact Details & Social */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-8 pt-8 border-t border-gray-100 gap-6">

            <div className="flex flex-row justify-between w-full md:w-auto gap-8">
              {/* Email */}
              <div className="flex flex-col items-end gap-1">
                <div className="flex items-center gap-2 text-[#F97316]">
                  <Mail className="w-5 h-5" />
                  <span className="font-semibold text-lg">البريد الإلكتروني</span>
                </div>
                <p className="text-gray-600 text-sm">tunisvillage@gamil.com</p>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-end gap-1">
                <div className="flex items-center gap-2 text-[#F97316]">
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold text-lg">رقم الهاتف</span>
                </div>
                <p className="text-gray-600 text-sm" dir="ltr">+20 1234 135 5568</p>
              </div>
            </div>

          </div>

          <div className="flex items-center justify-start gap-4 mt-6">
            <a href="#" className="w-10 h-10 rounded-full border border-[#00966a] flex items-center justify-center text-[#00966a] hover:bg-[#00966a] hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-[#00966a] flex items-center justify-center text-[#00966a] hover:bg-[#00966a] hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-[#00966a] flex items-center justify-center text-[#00966a] hover:bg-[#00966a] hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Left Feature: Image */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="relative w-full max-w-md aspect-square">
            {/* Placeholder for the illustration - typically an SVG or Next.js Image component */}
            <Image
              src="/imgs/contact-us.png"
              alt="Contact us image"
              className="w-full h-full object-cover"
              width={500}
              height={500}
            />
          </div>
        </div>

      </div>
    </section>
  );
};
