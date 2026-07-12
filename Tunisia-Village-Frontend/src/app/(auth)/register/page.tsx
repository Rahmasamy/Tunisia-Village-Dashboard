import React from 'react';
import RegisterForm from '@/src/modules/auth/components/RegisterForm';
import Image from 'next/image';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center w-full p-0 sm:p-4 md:p-6 lg:p-8">
      <div className="flex w-full max-w-[1440px] min-h-screen sm:min-h-0 sm:h-[90vh] bg-white sm:rounded-[30px] shadow-xl border border-gray-100 overflow-hidden">
        {/* Right Side - Form (RTL puts this right) */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-start py-8 px-6 sm:px-8 md:px-12 overflow-y-auto h-full">
          <div className="my-auto w-full max-w-md flex flex-col items-center">
            <RegisterForm />
          </div>
        </div>
        {/* Left Side - Image (RTL puts this left) */}
        <div className="hidden lg:flex lg:w-1/2 p-4 bg-gray-50">
          <div className="relative w-full h-full rounded-[24px] overflow-hidden shadow-inner">
            <Image src="/imgs/register.jpg" alt="Tunisia Village" fill className="object-cover" priority />
          </div>
        </div>
      </div>
    </div>
  );
}
