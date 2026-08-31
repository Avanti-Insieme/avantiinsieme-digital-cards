import { C } from '@/lib/theme';
import { STEPS } from '@/lib/content';

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-heading"
      style={{ background: C.tintBg, padding: 'clamp(60px,7vw,88px) 24px' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2
          id="how-heading"
          style={{
            fontWeight: 800,
            fontSize: 'clamp(24px,3vw,34px)',
            letterSpacing: '-0.7px',
            color: C.navy,
            margin: '0 0 44px',
            maxWidth: '560px',
          }}
        >
          Four steps from sign-up to saved contact
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: '22px' }}>
          {STEPS.map((s) => (
            <div
              key={s.n}
              style={{
                background: C.white,
                border: '1px solid ' + C.line,
                borderRadius: '16px',
                padding: '26px 24px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-jakarta), sans-serif',
                  fontWeight: 800,
                  fontSize: '13px',
                  letterSpacing: '1.4px',
                  color: '#764ba2',
                  marginBottom: '16px',
                }}
              >
                {s.n}
              </span>
              <h3 style={{ fontWeight: 700, fontSize: '16.5px', lineHeight: 1.35, color: C.navy, margin: '0 0 9px' }}>
                {s.title}
              </h3>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: C.body, margin: '0 0 18px' }}>{s.desc}</p>
              <div
                aria-hidden="true"
                style={{
                  marginTop: 'auto',
                  background: C.appBg,
                  border: '1px solid ' + C.line,
                  borderRadius: '10px',
                  padding: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <i className={s.icon} style={{ color: C.body, fontSize: '15px' }} />
                <span style={{ fontSize: '12px', color: C.body, fontWeight: 500 }}>{s.hint}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
