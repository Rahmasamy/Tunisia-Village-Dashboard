"use client";

import React, { useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useGoogleLogin } from '@/src/modules/auth/hooks/useGoogleLogin';
import { Spinner } from '@/src/shared/components/common/Spinners/Spinner';

function CallbackContent() {
  const searchParams = useSearchParams();
  const code = searchParams?.get('code');
  const googleLoginMutation = useGoogleLogin();
  const hasTriggered = useRef(false);

  useEffect(() => {
    if (code && !hasTriggered.current) {
      hasTriggered.current = true;
      googleLoginMutation.mutate({ code });
    }
  }, [code, googleLoginMutation]);

  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center max-w-sm w-full text-center animate-in zoom-in duration-300">
      <Spinner />
      <p className="mt-4 text-gray-700 font-extrabold text-lg">جاري تسجيل الدخول عبر جوجل...</p>
      <p className="text-gray-400 text-sm mt-1">يرجى الانتظار لحين اكتمال التحقق.</p>
    </div>
  );
}

export default function GoogleCallbackPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <Suspense fallback={
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center max-w-sm w-full text-center">
          <Spinner />
          <p className="mt-4 text-gray-700 font-extrabold text-lg">جاري التحميل...</p>
        </div>
      }>
        <CallbackContent />
      </Suspense>
    </div>
  );
}
