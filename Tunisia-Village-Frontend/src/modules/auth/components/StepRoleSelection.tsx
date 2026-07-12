import React from 'react';

export const StepRoleSelection = ({ role, setRole, onSubmit, isPending, onNext, onBack }: { role: string, setRole: (val: string) => void, onSubmit: () => void, isPending: boolean, onNext: () => void, onBack: () => void }) => {
  return (
    <div className="w-full flex flex-col items-center animate-in fade-in zoom-in duration-300">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-extrabold text-gray-900 mb-2">اختر نوع حسابك</h1>
        <p className="text-gray-600 text-sm">اختر الدور المناسب لك للانضمام لمجتمعنا المميز.</p>
      </div>

      <div className="flex gap-5 w-full mb-8">
        <button 
          type="button"
          onClick={() => setRole('VISITOR')}
          className={`flex-1 py-10 px-4 flex flex-col items-center justify-center gap-4 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${
            role === 'VISITOR' 
              ? 'border-[#008767] bg-[#eefaf6] shadow-[0_8px_30px_rgba(0,135,103,0.08)] scale-[1.02]' 
              : 'border-gray-200 hover:border-gray-300 hover:shadow-md bg-white'
          }`}
        >
          <div className="text-6xl select-none">🦸</div>
          <span className="font-extrabold text-lg text-gray-800">سفير</span>
        </button>
        
        <button 
          type="button"
          onClick={() => setRole('PROVIDER')}
          className={`flex-1 py-10 px-4 flex flex-col items-center justify-center gap-4 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${
            role === 'PROVIDER' 
              ? 'border-[#008767] bg-[#eefaf6] shadow-[0_8px_30px_rgba(0,135,103,0.08)] scale-[1.02]' 
              : 'border-gray-200 hover:border-gray-300 hover:shadow-md bg-white'
          }`}
        >
          <div className="text-6xl select-none">🎁</div>
          <span className="font-extrabold text-lg text-gray-800">مقدم خدمة</span>
        </button>
      </div>

      <div className="flex gap-4 w-full">
        <button 
          type="button" 
          onClick={onBack} 
          className="flex-1 border border-gray-300 text-gray-700 font-extrabold py-3.5 px-6 rounded-2xl hover:bg-gray-50 transition-all text-base cursor-pointer text-center"
        >
          رجوع
        </button>
        <button 
          type="button"
          onClick={onNext}
          disabled={isPending}
          className="flex-[2] bg-[#fa8b45] hover:bg-orange-500 text-white font-extrabold py-3.5 px-6 rounded-2xl shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20 active:scale-[0.99] transition-all text-base disabled:opacity-50 cursor-pointer"
        >
          {isPending ? 'جاري التحميل...' : 'إرسال'}
        </button>
      </div>
    </div>
  );
};
