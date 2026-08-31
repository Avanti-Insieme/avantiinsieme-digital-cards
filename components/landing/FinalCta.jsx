import Link from 'next/link';
import { C, GRADIENT } from '@/lib/theme';

export default function FinalCta() {
  return (
    <section
      aria-labelledby="cta-heading"
      style={{ background: C.navy, padding: 'clamp(60px,7vw,92px) 24px', position: 'relative', overflow: 'hidden' }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-260px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '760px',
          height: '520px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(102,126,234,0.42) 0%, rgba(17,37,65,0) 68%)',
          pointerEvents: 'none',
        }}
      />
      <div style={{ position: 'relative', maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
        <h2
          id="cta-heading"
          style={{
            fontWeight: 800,
            fontSize: 'clamp(26px,3.6vw,42px)',
            lineHeight: 1.14,
            letterSpacing: '-1.1px',
            color: C.white,
            margin: '0 0 18px',
          }}
        >
          Ready to modernize your business card?
        </h2>
        <p style={{ fontSize: '17px', lineHeight: 1.65, color: C.onDark, margin: '0 0 32px' }}>
          Pick a plan, build your card in a few minutes, and start sharing it today.
        </p>
        <Link
          href="/dashboard/cards/edit?card=new"
          style={{
            display: 'inline-block',
            background: GRADIENT,
            color: C.white,
            fontWeight: 600,
            fontSize: '17px',
            padding: '17px 36px',
            borderRadius: '11px',
            boxShadow: '0 8px 26px rgba(102,126,234,0.5)',
          }}
        >
          Get Started Now
        </Link>
        <p style={{ fontSize: '14px', color: C.onDarkMuted, margin: '20px 0 0' }}>
          Plans from $5.99/month - Cancel anytime - No hidden fees
        </p>
      </div>
    </section>
  );
}
