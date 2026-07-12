import { Accommodation } from "@/src/modules/Accommodation/Accomedation.types";
import { CommunityPost, ImpactStat } from "@/src/modules/CommunityPost/CommunityPost.types";
import { TimelineItem } from "@/src/modules/FeatureEffect/components/FeatureEffect.types";
import { Review } from "@/src/modules/Testmonials/components/Testmonial.types";
import Activities from "@/src/shared/components/icons/Activites/Activities";
import Courses from "@/src/shared/components/icons/Courses/Courses";
import Hosting from "@/src/shared/components/icons/hosting/Hosting";
import Resturant from "@/src/shared/components/icons/resturant/Resturant";
import ShoppingCar from "@/src/shared/components/icons/shoppingCar/ShoppingCar";
import Transportation from "@/src/shared/components/icons/Transportation/Transportation";

export const ACCOMMODATION_TYPES = [
    { id: 'all', label: 'الكل' },
    { id: 'hotel', label: 'فندق' },
    { id: 'villa', label: 'فيلا' },
    { id: 'guesthouse', label: 'بيت الضيافة' },
    { id: 'eco-farm', label: 'مزرعة بيئية' },
    { id: 'residential', label: 'إقامة منزلية' },
];

export const ACCOMMODATIONS: Accommodation[] = [
    {
        id: '1',
        title: 'نزل تونس التقليدي',
        type: 'hotel',
        location: 'الفيوم, مصر',
        rating: 4.8,
        pricePerNight: 660,
        isAvailable: true,
        image: '/imgs/hotel1.png',
        description: 'إقامة تقليدية مطلة على بحيرة قارون مع إفطار محلي والاستمتاع بجمال الطبيعة والخضرة، حيث يمكنك الاسترخاء في أجواء هادئة بعيدًا عن صخب المدينة.',
        amenities: ['wifi', 'kitchen', 'parking', 'pool', 'ac', 'tv'],
        rooms: 2,
        bathrooms: 2,
    },
    {
        id: '2',
        title: 'نزل تونس التقليدي',
        type: 'villa',
        location: 'الفيوم, مصر',
        rating: 4.8,
        pricePerNight: 660,
        originalPrice: 750,
        discountPercent: 12,
        isAvailable: true,
        isSpecialOffer: true,
        image: '/imgs/hotel2.png',
        description: 'إقامة تقليدية مطلة على بحيرة قارون مع إفطار محلي والاستمتاع بجمال الطبيعة والخضرة، حيث يمكنك الاسترخاء في أجواء هادئة بعيدًا عن صخب المدينة.',
        amenities: ['wifi', 'kitchen', 'parking', 'pool', 'ac', 'tv'],
        rooms: 2,
        bathrooms: 2,
    },
    {
        id: '3',
        title: 'نزل تونس التقليدي',
        type: 'eco-farm',
        location: 'الفيوم, مصر',
        rating: 4.8,
        pricePerNight: 660,
        isAvailable: false,
        image: '/imgs/hotel3.png',
        description: 'إقامة تقليدية مطلة على بحيرة قارون مع إفطار محلي والاستمتاع بجمال الطبيعة والخضرة، حيث يمكنك الاسترخاء في أجواء هادئة بعيدًا عن صخب المدينة.',
        amenities: ['wifi', 'kitchen', 'parking', 'pool', 'ac', 'tv'],
        rooms: 2,
        bathrooms: 2,
    },
    {
        id: '4',
        title: 'فيلا الواحة',
        type: 'villa',
        location: 'الفيوم, مصر',
        rating: 4.9,
        pricePerNight: 1200,
        isAvailable: true,
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
        description: 'فيلا فاخرة مع حمام سباحة خاص وإطلالات بانورامية على الصحراء والبحيرة.',
        amenities: ['wifi', 'kitchen', 'parking', 'pool', 'ac', 'tv'],
        rooms: 3,
        bathrooms: 3,
    },
];

export const IMPACT_STATS: ImpactStat[] = [
    { id: '1', value: '25,000 شجرة', label: 'تم زراعتها' },
    { id: '2', value: '150', label: 'فرصة عمل خُلقت' },
    { id: '3', value: '1,240', label: 'رحلة موثقة' },
    { id: '4', value: '4,534', label: 'ضيف سعيد' },
];

export const COMMUNITY_POSTS: CommunityPost[] = [
    {
        id: '1',
        author: 'كارى مانكيلاب',
        avatar: 'https://i.pravatar.cc/150?img=47',
        timestamp: 'منذ ساعتين',
        content: 'تجربة رائعة في الفيوم! الطبيعة الخلابة والناس الطيبون جعلوا رحلتي لا تُنسى.',
        images: [
            'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80',
            'https://images.unsplash.com/photo-1548588921-c2c4ef8f3bfc?w=400&q=80',
        ],
        likes: 24,
        comments: 8,
    },
];

export const NAV_TABS = [
  { id: 'accommodation', label: 'الإقامة',      icon: 
    <Hosting />
    , href: '/accommodation' },
  { id: 'transfers',     label: 'الإنتقالات',   icon: <Transportation />,
    
    href: '/transfers'     },
  { id: 'activities',   label: 'الأنشطة',       icon: 
    <Activities />
    , href: '/activities'    },
  { id: 'restaurants',  label: 'المطاعم',        icon:
    <Resturant />
    
    , href: '/restaurants'  },
  { id: 'market',       label: 'المتجر الحرق',   icon: 
    <ShoppingCar />    , 
    href: '/market'        },
  { id: 'courses',      label: 'الدورات',        icon: 
    <Courses />
    , href: '/courses'       },
];

export const TrueStoriesCards = [
  {
    id: 1,
    name: "فاطمة من قرية تونس",
    tag: "تجربة الفخار والطبخ الريفي",
    quote:
      "قبل مؤسسة أنس، مكنتش أعرف إن السياح ممكن يدفعوا قلوس عشان اللي بعمله كل يوم. دالوقتي عندي ضيوف كل أسبوع - وثقة جديدة كمان!",
    thumbnail: "/imgs/true-stories1.png",
    images: [
      "/imgs/true-stories1.png",
      "/imgs/true-stories2.png",
      "/imgs/true-stories3.png",
    ],
  },
  {
    id: 2,
    name: "مريم من الأقصر",
    tag: "تجربة النسيج اليدوي",
    quote:
      "الحمد لله، صنعتي في النسيج اليدوي باتت مصدر دخل حقيقي. الزوار بيحبوا يشوفوا ازاي بنشتغل وبيجوا من كل حتة عشان يتعلموا.",
    thumbnail: "/imgs/true-stories1.png",
    images: [
      "/imgs/true-stories1.png",
      "/imgs/true-stories2.png",
      "/imgs/true-stories3.png",
    ],
  },
  {
    id: 3,
    name: "نور من أسوان",
    tag: "تجربة الطبخ النوبي",
    quote:
      "أكلاتي النوبية بقت مشهورة! السياح بييجوا خصيصاً يتعلموا طبخ الكشري والملوخية بالطريقة الأصلية. حياتي اتغيرت تماماً.",
    thumbnail: "/imgs/true-stories1.png",
    images: [
      "/imgs/true-stories1.png",
      "/imgs/true-stories2.png",
      "/imgs/true-stories3.png",
    ],
  },
];

export const reviews:Review[] = [
  {
    id: 1,
    name: "أحمد محمد – القاهرة",
    date: "12/4/2025",
    rating: 4,
    text: "المكان تحفة فعلاً، المنظر على البحيرة يخطف القلب! الغرف نضيفة جداً والخدمة ممتازة. أكيد هرجع تاني!",
  },
  {
    id: 2,
    name: "نهى إبراهيم – الجيزة",
    date: "12/4/2025",
    rating: 4,
    text: "الفندق هادي ومريح والأكل كان لذيذ جداً، بس العيب الوحيد إن الواي فاي كان ضعيف شوية في الغرفة.",
  },
  {
    id: 3,
    name: "محمود سامي – طنطا",
    date: "12/4/2025",
    rating: 4,
    text: "المكان لطيف جداً، الخدمة ممتازة والأسعار مناسبة. العشاء كان حلو أوي!",
  },
  {
    id: 4,
    name: "سارة علي – الإسكندرية",
    date: "15/4/2025",
    rating: 5,
    text: "تجربة رائعة من أول لآخر. الموظفين محترمين جداً والغرف فيها كل حاجة. هنرجع تاني بالتأكيد.",
  },
  {
    id: 5,
    name: "كريم حسن – المنصورة",
    date: "18/4/2025",
    rating: 4,
    text: "المكان هادي ومريح والخدمة كانت سريعة. الفطار كان ممتاز وفيه تنوع كبير.",
  },
];


export const timelineItems: TimelineItem[] = [
  {
    year: 2025,
    title: "انطلاق المشروع",
    description: "بداية رحلتنا نحو التغيير المستدام",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=300&q=80",
    position: "below",
  },
  {
    year: 2026,
    title: "التوسع الأول",
    description: "توسيع نطاق العمل في المناطق الريفية",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=300&q=80",
    position: "above",
  },
  {
    year: 2027,
    title: "الطاقة المتجددة",
    description: "إطلاق مبادرة الطاقة الشمسية",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=300&q=80",
    position: "below",
  },
  {
    year: 2028,
    title: "الشراكات الدولية",
    description: "بناء شبكة من الشركاء العالميين",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=300&q=80",
    position: "above",
  },
  {
    year: 2029,
    title: "مئة مجتمع",
    description: "الوصول إلى مئة مجتمع محلي",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=300&q=80",
    position: "below",
  },
  {
    year: 2030,
    title: "الرؤية المكتملة",
    description: "تحقيق الاستدامة الكاملة",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&q=80",
    position: "above",
  },
];

export const faqs = [
  {
    id: 1,
    question: "ما هو الهدف الأساسي من مشروع مؤسسة أنس؟",
    answer: "يهدف المشروع على الأرجح إلى تعزيز التنمية المستدامة في الفيوم من خلال الجمع بين الحفاظ على التراث الأثري وتطوير الزراعة المحلية لتنشيط السياحة الثقافية والبيئية وتوفير أنشطة تفاعلية تدعم المجتمع المحلي وتجذب الزوار."
  },
  {
    id: 2,
    question: "كيف يدعم المشروع التنمية المستدامة؟",
    answer: "نعتمد على ممارسات زراعية صديقة للبيئة وتقنيات موفرة للطاقة، بجانب دعم وتمكين أفراد المجتمع المحلي اقتصادياً واجتماعياً لضمان استمرارية الأثر الإيجابي."
  },
  {
    id: 3,
    question: "ما هي المدة المتاحة لإلغاء الحجز؟",
    answer: "يمكنك إلغاء الحجز أو تعديله مجاناً قبل 48 ساعة من موعد التجربة أو الفعالية، يرجى مراجعة سياسة الإلغاء الخاصة بنا للمزيد من التفاصيل."
  },
  {
    id: 4,
    question: "كيف يساهم المشروع في تطوير الزراعة بالفيوم؟",
    answer: "يوفر المشروع التدريب ومستلزمات الزراعة العضوية للمزارعين، ويفتح لهم منافذ بيع مباشرة لمنتجاتهم، مما يحسن من دخلهم ويحمي بيئة المنطقة."
  },
  {
    id: 5,
    question: "كيف يمكن للسياح أو المجتمع المحلي المشاركة في المشروع؟",
    answer: "يمكن للسياح حجز تجارب زراعية وحرفية، بينما يمكن لأفراد المجتمع المحلي الانضمام لورش العمل التدريبية وعرض منتجاتهم في الأسواق المخصصة."
  }
];
