import { TitleTag } from "@/src/shared/components/wrappers/BoxWrapper";
import { LocationsList } from "./LocationsList";
import { InteractiveMap } from "./InteractiveMap";
import CommonButton from "@/src/shared/components/common/Buttons/CommonButton";

export function RoadMap() {
    return (
        <div className="w-full py-12 px-4 md:px-10 lg:px-20 mt-4 flex flex-col items-center" dir="rtl">
            <div className="flex flex-col items-center mb-8 max-w-4xl">

                <TitleTag>
                    خريطة الأثر التفاعلية

                </TitleTag>

                <TitleTag>
                    خريطة الأثر التفاعلية

                </TitleTag>
                <p className="text-center text-gray-500 text-[17px] leading-relaxed py-4">
                    استكشف خريطة محافظة الفيوم وتعرّف على أماكن التغيير الحقيقي. توضح الخريطة نقاط زراعة الأشجار، مراكز التدريب المجتمعي، الأنشطة البيئية، وقصص الأفراد الذين تغيّرت حياتهم بفضل مساهماتكم. تفاعل مع النقاط لاكتشاف كل أثر ساهمت به على أرض الواقع.
                </p>
            </div>

            <div className="relative flex flex-col lg:flex-row w-full max-w-[1400px] h-[550px] bg-white rounded-[32px] overflow-hidden shadow-[0_12px_40px_rgba(26,125,90,0.06)] border border-gray-100">
                <LocationsList />
                <InteractiveMap />
            </div>
            <div className="flex justify-center items-center py-7">
                <CommonButton text="اكتشف أثرنا" className="bg-[var(--color-primary)] w-[250px]" />
            </div>
        </div>
    );
}