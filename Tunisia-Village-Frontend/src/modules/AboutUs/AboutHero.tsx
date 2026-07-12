import Image from 'next/image';
import React from 'react';

export const AboutHero = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden font-cairo">
      {/* Background Image */}
      <Image
        src="/imgs/about-us-hero.jpg" // Replace with actual boat image path
        alt="الفيوم"
        sizes="100vw"
        className="absolute inset-0 object-cover"
        priority
        fill
      />

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          <span className="text-[#F97316]">الفيوم </span>
          واحة مصر الخالدة
        </h1>

        <p className="text-lg md:text-xl text-white max-w-3xl mb-8 leading-relaxed">
          اكتشف سحر وادي الحيتان، شلالات وادي الريان، وبحيرة قارون و الحضارات الفرعونية والرومانية في قلب الصحراء المصرية.
        </p>

        <button className="bg-[#00966a] hover:bg-[#007a56] transition-colors text-white font-medium text-lg px-12 py-3 rounded-full">
          ابدأ رحلتك
        </button>
      </div>
    </div>
  );
};
