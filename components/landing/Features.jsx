import { C, GRADIENT } from '@/lib/theme';
import { FEATURES } from '@/lib/content';

export default function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      style={{ background: C.tintBg, padding: 'clamp(60px,7vw,88px) 24px' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ maxWidth: '640px', marginBottom: '44px' }}>
          <h2
            id="features-heading"
            style={{
              fontWeight: 800,
              fontSize: 'clamp(24px,3vw,34px)',
              letterSpacing: '-0.7px',
              color: C.navy,
              margin: '0 0 14px',
            }}
          >
            Native where it counts, universal everywhere else
          </h2>
          <p style={{ fontSize: '16.5px', lineHeight: 1.65, color: C.body, margin: 0 }}>
            No app for you to install. No app for the person you just met.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: '22px' }}>
          {FEATURES.map((f) => (
            <div
              key={f.title}
              style={{
                background: C.white,
                border: '1px solid ' + C.line,
                borderRadius: '16px',
                padding: '28px 26px',
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '13px',
                  background: GRADIENT,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '18px',
                }}
              >
                <i className={f.icon} style={{ color: C.white, fontSize: '20px' }} />
              </div>
              <h3 style={{ fontWeight: 700, fontSize: '18px', color: C.navy, margin: '0 0 9px' }}>{f.title}</h3>
              <p style={{ fontSize: '14.5px', lineHeight: 1.62, color: C.body, margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
