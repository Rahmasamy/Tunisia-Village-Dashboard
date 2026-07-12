import { FAQItemProps } from "@/src/modules/FAQ/FAQ.types";

export function FAQItem({ faq, isOpen, onToggle }: FAQItemProps) {
  return (
    <div 
      className={`rounded-2xl transition-all duration-300 overflow-hidden cursor-pointer border ${
        isOpen 
          ? "bg-[#FFF8F4] border-[#FDE0CF] shadow-sm my-3" 
          : "bg-[#EAF9F6] border-[#D7EFEA] hover:shadow-sm my-2"
      }`}
      onClick={onToggle}
      dir="rtl"
    >
      <div className="flex justify-between items-center p-4 md:px-7 md:py-5 select-none">
        <h3 className={`font-bold text-[14px] md:text-[16px] pr-2 ${isOpen ? "text-[#4A3B32]" : "text-[#324541]"}`}>
          {faq.question}
        </h3>
        
        {/* Plus/Minus Icon */}
        <div className={`w-[26px] h-[26px] rounded-full flex items-center justify-center shrink-0 ml-1 transition-colors duration-300 ${
          isOpen ? "bg-[#FFD9BE] text-[#E77836]" : "bg-[#CBECE4] text-[#27A184]"
        }`}>
          {isOpen ? (
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" d="M20 12H4" />
            </svg>
          ) : (
             <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" d="M12 4v16m8-8H4" />
            </svg>
          )}
        </div>
      </div>
      
      {/* Answer container */}
      <div 
        className={`transition-all duration-500 ease-in-out px-4 md:px-7 overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100 pb-5" : "max-h-0 opacity-0 pb-0"
        }`}
      >
        <p className="text-[#8E7E72] text-[15px] leading-relaxed pr-2 pt-1">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}