import { AccommodationGrid } from "@/src/modules/Accommodation/components/Accommodationgrid";
import { SearchTabs } from "@/src/shared/components/common/Search/SearchTabs";

export default function AccommodationFeature() {
  return (
    <>

      <main style={{ paddingTop: '70px' }}>
        {/* Sub-hero */}
        <div
          style={{
            background: 'linear-gradient(135deg, #1a7d5a 0%, #145e43 100%)',
            padding: '48px 24px 80px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'url(https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1440&q=80)',
            backgroundSize: 'cover', backgroundPosition: 'center',
            opacity: 0.18,
          }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <span style={{
              display: 'inline-block',
              background: 'rgba(255,255,255,0.15)',
              color: 'white',
              padding: '4px 18px',
              borderRadius: '9999px',
              fontSize: '13px',
              fontWeight: 600,
              marginBottom: '14px',
              backdropFilter: 'blur(8px)',
            }}>🏠 الإقامة</span>
            <h1 style={{
              fontSize: 'clamp(28px,4vw,46px)',
              fontWeight: 900,
              color: 'white',
              marginBottom: '12px',
              lineHeight: 1.2,
            }}>
              اختر إقامتك المثالية
            </h1>
            <p style={{
              fontSize: '16px',
              color: 'rgba(255,255,255,0.85)',
              maxWidth: '480px',
              margin: '0 auto 32px',
              lineHeight: 1.7,
            }}>
              من الفنادق الفاخرة إلى المزارع البيئية — كل خيار يدعم مجتمع الفيوم
            </p>
          </div>

          {/* Search widget floated down */}
          <div style={{
            position: 'absolute',
            bottom: '-28px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            maxWidth: '900px',
            padding: '0 24px',
            zIndex: 10,
          }}>
            <SearchTabs activeTab="accommodation" />
          </div>
        </div>

        {/* Content */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '60px 24px 80px',
        }}>
          <AccommodationGrid />
        </div>
      </main>
    </>
  );
}