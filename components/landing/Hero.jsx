'use client';

import Link from 'next/link';
import { C, GRADIENT } from '@/lib/theme';
import { useBreakpoint } from '@/lib/useBreakpoint';
import WalletMockups from './WalletMockups';

export default function Hero() {
  const { isNarrow } = useBreakpoint();

  return (
    <section
      aria-labelledby="hero-heading"
      style={{
        background: C.navy,
        padding: 'clamp(56px,7vw,96px) 24px clamp(64px,8vw,104px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-180px',
          right: '-140px',
          width: '620px',
          height: '620px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(118,75,162,0.55) 0%, rgba(102,126,234,0.22) 42%, rgba(17,37,65,0) 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'relative',
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: isNarrow ? '1fr' : '1.05fr 0.95fr',
          gap: 'clamp(40px,5vw,64px)',
          alignItems: 'center',
        }}
      >
        <div>
          <span
            style={{
              display: 'inline-block',
              fontSize: '12.5px',
              fontWeight: 600,
              letterSpacing: '2.2px',
              textTransform: 'uppercase',
              color: '#c3b6ee',
              background: 'rgba(102,126,234,0.2)',
              border: '1px solid rgba(147,166,246,0.4)',
              padding: '7px 15px',
              borderRadius: '30px',
              marginBottom: '24px',
            }}
          >
            Zero apps required
          </span>
          <h1
            id="hero-heading"
            style={{
              fontWeight: 800,
              fontSize: 'clamp(34px,5.4vw,58px)',
              lineHeight: 1.06,
              letterSpacing: '-1.4px',
              color: C.white,
              margin: '0 0 20px',
            }}
          >
            Your business card goes everywhere
          </h1>
          <p
            style={{
              fontSize: 'clamp(16px,1.9vw,19px)',
              lineHeight: 1.65,
              color: C.onDark,
              margin: '0 0 32px',
              maxWidth: '520px',
            }}
          >
            One card, saved natively to Apple Wallet and Google Wallet - plus a clean web page for
            everyone else. Update it once and every copy you have ever shared updates with it.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
            <Link
              href="/dashboard/cards/edit?card=new"
              style={{
                background: GRADIENT,
                color: C.white,
                fontWeight: 600,
                fontSize: '16.5px',
                padding: '16px 30px',
                borderRadius: '11px',
                boxShadow: '0 6px 22px rgba(102,126,234,0.45)',
              }}
            >
              Get Started
            </Link>
            <Link
              href="/#how-it-works"
              style={{
                border: '1.5px solid rgba(255,255,255,0.35)',
                color: C.white,
                fontWeight: 600,
                fontSize: '16.5px',
                padding: '16px 28px',
                borderRadius: '11px',
              }}
            >
              View Demo
            </Link>
          </div>
          <p style={{ fontSize: '14px', color: C.onDarkMuted, margin: '22px 0 0' }}>
            Plans from $5.99/month - Cancel anytime
          </p>
        </div>

        <WalletMockups />
      </div>
    </section>
  );
}
