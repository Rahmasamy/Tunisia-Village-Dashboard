import { TitleTag } from "@/src/shared/components/wrappers/BoxWrapper";

import CommonButton from "@/src/shared/components/common/Buttons/CommonButton";
import Timeline from "@/src/modules/FeatureEffect/components/TimeLineMain";

export function FeaturEffect() {
    return (
        <div className="w-full py-12 px-4 md:px-10 lg:px-20 mt-4 flex flex-col items-center" dir="rtl">

            <div className="flex flex-col items-center mb-8 max-w-4xl">

                <TitleTag >
                    الأثر القادم
                </TitleTag>

                <TitleTag >
                    الأثر القادم
                </TitleTag>
                <p className="text-center text-gray-500 text-[17px] leading-relaxed py-4">
                    منذ انطلاقتنا في عام 2025، عملنا بجد لدعم المجتمعات المحلية وتعزيز التنمية المستدامة في فايوم. والآن، نسعى لتطوير رؤيتنا في 2026 من خلال تحقيق تغيير إيجابي يشمل:

                </p>
            </div>
            <div className="relative flex flex-col lg:flex-row w-full max-w-[1400px] h-[600px] bg-white rounded-[32px] overflow-hidden shadow-[0_12px_40px_rgba(26,125,90,0.06)] border border-gray-100">
                <Timeline />
            </div>

        </div>
    );
}