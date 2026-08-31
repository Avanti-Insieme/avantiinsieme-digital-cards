import Link from 'next/link';
import { C, GRADIENT } from '@/lib/theme';
import { PLANS } from '@/lib/content';

export default function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      style={{ background: C.white, padding: 'clamp(60px,7vw,92px) 24px' }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <h2
            id="pricing-heading"
            style={{
              fontWeight: 800,
              fontSize: 'clamp(24px,3vw,34px)',
              letterSpacing: '-0.7px',
              color: C.navy,
              margin: '0 0 14px',
            }}
          >
            Simple pricing, no free tier to outgrow
          </h2>
          <p style={{ fontSize: '16.5px', lineHeight: 1.65, color: C.body, margin: '0 auto', maxWidth: '520px' }}>
            Both plans include wallet passes, the web card, and unlimited updates.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
            gap: '24px',
            alignItems: 'start',
          }}
        >
          {PLANS.map((plan) => {
            const dark = plan.featured;
            return (
              <div
                key={plan.id}
                style={{
                  background: dark ? C.navy : C.white,
                  border: dark ? 'none' : '1px solid ' + C.line,
                  borderRadius: '18px',
                  padding: '32px 30px',
                  position: 'relative',
                  boxShadow: dark ? '0 18px 44px rgba(17,37,65,0.24)' : 'none',
                }}
              >
                {dark && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '-13px',
                      left: '30px',
                      background: GRADIENT,
                      color: C.white,
                      fontSize: '11.5px',
                      fontWeight: 700,
                      letterSpacing: '1.3px',
                      textTransform: 'uppercase',
                      padding: '6px 14px',
                      borderRadius: '20px',
                    }}
                  >
                    Best value
                  </span>
                )}
                <h3 style={{ fontWeight: 700, fontSize: '17px', color: dark ? C.white : C.navy, margin: '0 0 6px' }}>
                  {plan.name}
                </h3>
                <p style={{ fontSize: '14px', color: dark ? '#9fb2be' : C.body, margin: '0 0 22px' }}>{plan.blurb}</p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '26px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-jakarta), sans-serif',
                      fontWeight: 800,
                      fontSize: '42px',
                      letterSpacing: '-1.5px',
                      color: dark ? C.white : C.navy,
                    }}
                  >
                    {plan.price}
                  </span>
                  <span style={{ fontSize: '15px', color: dark ? '#9fb2be' : C.body }}>/month</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                  {plan.features.map((t) => (
                    <div key={t} style={{ display: 'flex', gap: '11px', alignItems: 'flex-start' }}>
                      <i
                        className="fa-solid fa-check"
                        aria-hidden="true"
                        style={{ color: dark ? C.tealPale : C.teal, fontSize: '13px', marginTop: '4px' }}
                      />
                      <span style={{ fontSize: '14.5px', lineHeight: 1.55, color: dark ? '#dde6eb' : C.bodyStrong }}>{t}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href={'/dashboard?plan=' + plan.id}
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    background: dark ? GRADIENT : C.white,
                    color: dark ? C.white : C.navy,
                    fontWeight: 600,
                    fontSize: '15.5px',
                    padding: '14px',
                    borderRadius: '10px',
                    border: dark ? 'none' : '1.5px solid ' + C.navy,
                    boxShadow: dark ? '0 4px 16px rgba(102,126,234,0.42)' : 'none',
                  }}
                >
                  Choose Plan
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
