import { C } from '@/lib/theme';
import { STATS, TESTIMONIALS } from '@/lib/content';

export default function SocialProof() {
  return (
    <section aria-labelledby="proof-heading" style={{ background: C.white, padding: 'clamp(60px,7vw,88px) 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2
          id="proof-heading"
          style={{
            fontWeight: 800,
            fontSize: 'clamp(24px,3vw,34px)',
            letterSpacing: '-0.7px',
            color: C.navy,
            margin: '0 0 40px',
            maxWidth: '520px',
          }}
        >
          Already in a few thousand pockets
        </h2>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'clamp(28px,5vw,64px)',
            paddingBottom: '44px',
            marginBottom: '44px',
            borderBottom: '1px solid ' + C.line,
          }}
        >
          {STATS.map((st) => (
            <div key={st.label}>
              <div
                style={{
                  fontFamily: 'var(--font-jakarta), sans-serif',
                  fontWeight: 800,
                  fontSize: 'clamp(28px,3.4vw,38px)',
                  letterSpacing: '-1px',
                  color: C.teal,
                }}
              >
                {st.stat}
              </div>
              <div style={{ fontSize: '14px', color: C.body, marginTop: '5px' }}>{st.label}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '22px' }}>
          {TESTIMONIALS.map((t) => (
            <blockquote key={t.name} style={{ margin: 0, background: C.tintBg, borderRadius: '16px', padding: '28px 26px' }}>
              <p style={{ fontSize: '15.5px', lineHeight: 1.68, color: C.bodyStrong, margin: '0 0 20px' }}>{t.quote}</p>
              <footer style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  aria-hidden="true"
                  style={{
                    flex: '0 0 40px',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: '#dfe6ea',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-jakarta), sans-serif',
                    fontWeight: 700,
                    fontSize: '14px',
                    color: '#5c7480',
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontSize: '14.5px', fontWeight: 600, color: C.navy }}>{t.name}</div>
                  <div style={{ fontSize: '13px', color: C.body, marginTop: '1px' }}>{t.role}</div>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
