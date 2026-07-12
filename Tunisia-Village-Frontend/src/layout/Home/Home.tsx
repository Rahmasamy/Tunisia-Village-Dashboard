'use client'

import { AccommodationGrid } from "@/src/modules/Accommodation/components/Accommodationgrid";
import { CategorySection } from "@/src/modules/Categorysection/components/Categorysection";
import { ImpactSection } from "@/src/modules/Impactsection/components/Impactsection";
import CommunityFeature from "@/src/modules/CommunityPost/CommunityFeature";
import { FAQFeature } from "@/src/modules/FAQ/FAQFeature";
import { FeaturEffect } from "@/src/modules/FeatureEffect/FeatureEffect";
import HeroFeature from "@/src/modules/Hero/Hero";
import { HowToEffectFeature } from "@/src/modules/HowToEffect/HomeToEffectFeature";
import { RoadMap } from "@/src/modules/RoadMap/RoadMap";
import TestmonialCarousel from "@/src/modules/Testmonials/TestmonialCarsoual";

export default function HomePage() {
  return (
    <>
      <main>
        {/* 1. Hero with search widget */}
        <HeroFeature />

        <div
          className="px-20"
        >
          {/* 2. Category icons */}
          <CategorySection />

          {/* 3. Featured accommodations */}
          <section className="px-20">

            <AccommodationGrid />
          </section>

          {/* 4. Impact strip */}
          <ImpactSection />

          {/* 5. Community stories */}
          <CommunityFeature />

          <TestmonialCarousel />
         <div className="mt-6">

          <HowToEffectFeature/>
         </div>
        </div>
         <RoadMap />
         <FeaturEffect />
         <FAQFeature />
      </main>

      {/* Footer is now globally handled in layout.tsx */}
    </>
  );
}