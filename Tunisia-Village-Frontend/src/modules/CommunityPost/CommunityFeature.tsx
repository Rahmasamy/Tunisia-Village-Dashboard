

import { TitleTag } from "@/src/shared/components/wrappers/BoxWrapper";
import TrueStoriesCarousel from "./TrueStories";

export default function CommunityFeature() {
  return (
    <>

      <main >
        <div className="flex flex-col items-center mb-4">


          <TitleTag >
            قصصنا المجتمعية
          </TitleTag>
          <p className="text-lg md:text-xl text-gray-600 font-bold mt-1">
            أناس حقيقيون ....تغيير حقيقي
          </p>
        </div>
        <div>
          <TrueStoriesCarousel />
        </div>
      </main>
    </>
  );
}