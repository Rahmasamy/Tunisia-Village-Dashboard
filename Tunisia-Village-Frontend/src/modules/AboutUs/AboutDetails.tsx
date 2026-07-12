'use client'
import { TitleTag } from '@/src/shared/components/wrappers/BoxWrapper';
import Image from 'next/image';
import React from 'react';



const FeatureBadge = ({ text }: { text: string }) => (
  <div className="flex items-center  justify-between gap-2 border border-gray-100 shadow-sm rounded-xl px-4 py-2 bg-white">
    <span className="w-2 h-2 rounded-full bg-[#00966a]"></span>
    <span className="text-gray-700 font-medium text-sm md:text-base">{text}</span>
  </div>
);

export const AboutDetails = () => {
  return (
    <section className="w-full max-w-7xl mx-auto py-16 px-4 font-cairo" dir="rtl">
      
      {/* Top Part: Text & Map */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mb-12">
        {/* Right Side (Text) */}
        <div className="w-full lg:w-1/2 flex flex-col items-start space-y-4">
          <TitleTag>الفيوم</TitleTag>
          
          <p className="text-gray-600 text-lg leading-loose text-justify w-full lg:w-11/12">
            تبعد مسافة ساعة ونصف إلى ساعتين من القاهرة تجمع الفيوم بين الحمال الطبيعي الساحر، والتاريخ العريق، والجاذبية الريفية الأصيلة. انها كنز دفين من المغامرات الثقافية والطبيعية...
          </p>
          
          <button className="text-[#00966a] font-bold text-lg hover:text-[#007a56] transition-colors mt-2 underline underline-offset-4 decoration-2">
            اقرأ المزيد
          </button>
        </div>

        {/* Left Side (Map) */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg aspect-auto md:aspect-video rounded-3xl overflow-hidden shadow-sm">
            <Image 
              src="/imgs/aboutus-map.png" // Placeholder map image path
              alt="خريطة الفيوم"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Tags Row */}
      <div className="flex w-full flex-wrap items-center justify-evenly  mb-20 px-10">
        <FeatureBadge text="جغرافيا فريدة" />
        <FeatureBadge text="تاريخ عريق" />
        <FeatureBadge text="ثقافة غنية" />
        <FeatureBadge text="نظام هيدرولوجي فريد" />
      </div>

      {/* History Section */}
      <div className="flex flex-col items-start w-full">
        <TitleTag>تاريخيًا</TitleTag>

        <div className="relative w-full min-h-[350px] mt-8 flex items-center justify-center p-8 md:p-16">
          {/* Background image for the old scroll / papyrus */}
           <div className="absolute inset-0 -z-10 bg-[#fbf4ea] rounded-3xl shadow-inner">
             <Image 
               src="/imgs/ma5tota.png" 
               alt="Scroll Background"
               sizes="100vw"
               fill
               className="object-center object-cover drop-shadow-md"
             />
           </div>

           {/* History Text Content */}
           <div className="text-center max-w-4xl mx-auto space-y-8 relative z-10 text-gray-900 font-bold leading-loose text-base md:text-xl lg:text-2xl px-4 md:px-12">
             <p>
               عرفت الفيوم في مصر القديمة باسم &quot;شدت&quot; أو &quot;كروكوديلوبوليس&quot; وكانت مخصصة لعبادة الإله التمساح &quot;سوبك&quot;
             </p>
             <p>
               برزت المنطقة كمركز زراعي حيوي خلال عصر الدولة الوسطى ، وخاصة الأسرة الثانية عشرة ، بفضل &quot;قنوات الري المتطورة &quot; ، وكانت مركزًا لبناء الأهرامات الملكية والمقابر، وأصبحت لاحقاً &quot;سلة خبز العالم الروماني&quot;.
             </p>
             <p>
               يمتد تاريخ الفيوم عبر العصور الفرعونية، اليونانية ، الرومانية والقبطية والإسلامية
             </p>
           </div>
        </div>
      </div>

    </section>
  );
};
