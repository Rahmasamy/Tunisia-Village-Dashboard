import { NavItem } from '../types/navigation.types';
import { generalMap } from './maps/general.map';
import { hotelsMap } from './maps/hotels.map';
import { reservationsMap } from './maps/reservations.map';
import { productsMap } from './maps/products.map';
import { profileMap } from './maps/profile.map';

export const navigationConfig: NavItem[] = [
  {
    id: 'dashboard',
    label: 'لوحة التحكم',
    path: '/dashboard',
    sidebarSections: [
      {
        id: 'overview-sec',
        title: 'الرئيسية',
        items: [
          { id: 'overview', label: 'نظرة عامة', path: '/dashboard/overview', component: generalMap.Overview },
          { id: 'activities', label: 'آخر النشاطات', path: '/dashboard/activities', component: generalMap.Activities }
        ]
      }
    ]
  },
  {
    id: 'hotels',
    label: 'الفنادق',
    path: '/dashboard/hotels',
    sidebarSections: [
      {
        id: 'hotels-sec',
        title: 'إدارة الفنادق',
        items: [
          { id: 'all-hotels', label: 'جميع الفنادق', path: '/dashboard/hotels/all', component: hotelsMap.AllHotels },
          { id: 'new-hotel', label: 'إضافة فندق جديد', path: '/dashboard/hotels/new', component: hotelsMap.NewHotel }
        ]
      }
    ]
  },
  {
    id: 'reservations',
    label: 'الحجوزات',
    path: '/dashboard/reservations',
    sidebarSections: [
      {
        id: 'reservations-sec',
        title: 'العمليات',
        items: [
          { id: 'all-reservations', label: 'قائمة الحجوزات', path: '/dashboard/reservations/all', component: reservationsMap.AllReservations },
          { id: 'requests', label: 'طلبات الحجز المعلقة', path: '/dashboard/reservations/requests', component: reservationsMap.Requests }
        ]
      }
    ]
  },
  {
    id: 'products',
    label: 'المنتجات',
    path: '/dashboard/products',
    sidebarSections: [
      {
        id: 'basics',
        title: 'أ-الأساسيات',
        items: [
          { id: 'language-title', label: '1.أ.اللغة و العنوان', path: '/dashboard/products/language-title', component: productsMap.LanguageModel },
          { id: 'category', label: '2.أ.التصنيف', path: '/dashboard/products/category', component: productsMap.Classification },
          { id: 'attribute', label: '3.أ.السمة', path: '/dashboard/products/attribute', component: productsMap.Objective },
          { id: 'images', label: '4.أ.الصور', path: '/dashboard/products/images', component: productsMap.Images }
        ]
      },
      {
        id: 'content',
        title: 'ب-محتوى المنتج',
        items: [
          { id: 'meeting-pickup', label: '1.ب.الاجتماع والاستلام', path: '/dashboard/products/meeting-pickup', component: productsMap.Meeting },
          { id: 'tour-details', label: '2.ب.تفاصيل الجولة', path: '/dashboard/products/tour-details', component: productsMap.TourDetails },
          { id: 'language-provided', label: '3.ب.اللغة المقدمة', path: '/dashboard/products/language-provided', component: productsMap.LanguageProvided },
          { id: 'inclusions-exclusions', label: '4.ب.الإدماج والاستبعاد', path: '/dashboard/products/inclusions-exclusions', component: productsMap.InclusionsExclusions },
          { id: 'uniqueness', label: '5.ب.تفرد منتجك', path: '/dashboard/products/uniqueness', component: productsMap.Uniqueness },
          { id: 'traveler-info', label: '6.ب.معلومات يحتاجها المسافرون', path: '/dashboard/products/traveler-info', component: productsMap.TravelerInfo }
        ]
      },
      {
        id: 'schedules-prices',
        title: 'ج-الجداول الزمنية والأسعار',
        items: [
          { id: 'traveler-data', label: '1.ج.بيانات المسافر', path: '/dashboard/products/traveler-data', component: productsMap.TravelerData },
          { id: 'pricing-schedules', label: '2.ج.جداول التسعير', path: '/dashboard/products/pricing-schedules', component: productsMap.PricingSchedules }
        ]
      },
      {
        id: 'booking-tickets',
        title: 'د-الحجز والتذاكر',
        items: [
          { id: 'booking-process', label: '1.د.عملية الحجز', path: '/dashboard/products/booking-process', component: productsMap.BookingProcess },
          { id: 'cancellation-policy', label: '2.د.سياسة الإلغاء', path: '/dashboard/products/cancellation-policy', component: productsMap.CancellationPolicy },
          { id: 'required-traveler-data', label: '3.د.بيانات المسافر المطلوبة', path: '/dashboard/products/required-traveler-data', component: productsMap.RequiredTravelerData },
          { id: 'ticket-builder', label: '4.د.منشئ التذاكر', path: '/dashboard/products/ticket-builder', component: productsMap.TicketBuilder },
          { id: 'ticket-refund', label: '5.د.استرداد التذاكر', path: '/dashboard/products/ticket-refund', component: productsMap.TicketRefund },
          { id: 'preview', label: '6.د.معاينة', path: '/dashboard/products/preview', component: productsMap.Preview }
        ]
      },
      {
        id: 'completion',
        title: 'هـ-الإنتهاء',
        items: [
          { id: 'demo-offer', label: '1.هـ.إضافة عرض تمهيدي', path: '/dashboard/products/demo-offer', component: productsMap.DemoOffer },
          { id: 'link-lodge', label: '2.هـ.ربط النزل (قريباً)', path: '/dashboard/products/link-lodge', component: productsMap.LinkLodge },
          { id: 'submit-review', label: '3.هـ.تقديم للمراجعة', path: '/dashboard/products/submit-review', component: productsMap.SubmitReview }
        ]
      }
    ]
  },
  {
    id: 'availability',
    label: 'التوافر',
    path: '/dashboard/availability',
    sidebarSections: [
      {
        id: 'availability-sec',
        title: 'التوافر والنشاط',
        items: [
          { id: 'dates', label: 'إدارة المواعيد', path: '/dashboard/availability/dates', component: generalMap.Dates }
        ]
      }
    ]
  },
  {
    id: 'performance',
    label: 'الأداء',
    path: '/dashboard/performance',
    sidebarSections: [
      {
        id: 'performance-sec',
        title: 'التحليلات والتقارير',
        items: [
          { id: 'analytics', label: 'الأداء العام', path: '/dashboard/performance/analytics', component: generalMap.Analytics }
        ]
      }
    ]
  },
  {
    id: 'reviews',
    label: 'المراجعات',
    path: '/dashboard/reviews',
    sidebarSections: [
      {
        id: 'reviews-sec',
        title: 'آراء العملاء',
        items: [
          { id: 'ratings', label: 'التقييمات والتعليقات', path: '/dashboard/reviews/ratings', component: generalMap.Ratings }
        ]
      }
    ]
  },
  {
    id: 'financials',
    label: 'الماليات',
    path: '/dashboard/financials',
    sidebarSections: [
      {
        id: 'financials-sec',
        title: 'الحسابات المالية',
        items: [
          { id: 'payouts', label: 'الأرباح والمدفوعات', path: '/dashboard/financials/payouts', component: generalMap.Payouts }
        ]
      }
    ]
  },
  {
    id: 'profile',
    label: 'الحساب الشخصي',
    path: '/dashboard/profile',
    sidebarSections: [
      {
        id: 'profile-sec',
        title: 'إعدادات الحساب',
        items: [
          { id: 'settings', label: 'تعديل الملف الشخصي', path: '/dashboard/profile/settings', component: profileMap.Settings }
        ]
      }
    ]
  }
];
