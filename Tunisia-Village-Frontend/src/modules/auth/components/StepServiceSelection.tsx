import React from 'react';

const services = [
  { id: 'hotel', label: 'إقامة', icon: '🏨' },
  { id: 'transport', label: 'نقل', icon: '🚚' },
  { id: 'guide', label: 'أنشطة', icon: '🏃' },
  { id: 'restaurant', label: 'طعام', icon: '🍽️' },
  { id: 'bakery', label: 'طيور', icon: '🦅' },
  { id: 'guidance', label: 'إرشاد', icon: '🗺️' },
];

export const StepServiceSelection = ({ service, setService, onSubmit, isPending, onBack }: { service: string, setService: (val: string) => void, onSubmit: () => void, isPending: boolean, onBack: () => void }) => {
  return (
    <div className="w-full flex flex-col items-center animate-in slide-in-from-right-8 duration-300">
      <div className="text-center mb-6">
        <h2 className="text-lg font-bold text-gray-900">إختر نوع الخدمة:</h2>
      </div>

      <div className="grid grid-cols-3 gap-3 w-full mb-8">
        {services.map((s) => (
          <button 
            type="button"
            key={s.id}
            onClick={() => setService(s.id)}
            className={`py-4 flex flex-col items-center justify-center gap-2 rounded-xl border-2 transition-all ${service === s.id ? 'border-[#008767] bg-green-50' : 'border-gray-100 hover:border-gray-200 bg-white'}`}
          >
            <div className="text-2xl">{s.icon}</div>
            <span className="font-bold text-gray-700 text-xs">{s.label}</span>
          </button>
        ))}
      </div>

      <div className="flex gap-4 w-full">
        <button type="button" onClick={onBack} className="flex-1 border border-gray-300 text-gray-700 font-bold py-2.5 px-4 rounded-full hover:bg-gray-50 transition-all text-sm">
          رجوع
        </button>
        <button 
          type="button"
          onClick={onSubmit} disabled={!service || isPending}
          className="flex-[2] bg-[#fa8b45] hover:bg-orange-500 text-white font-bold py-2.5 px-4 rounded-full shadow-md transition-all text-sm disabled:opacity-50"
        >
          {isPending ? 'جاري التحميل...' : 'إنشاء الكارنية الآن'}
        </button>
      </div>
    </div>
  );
};
