'use client';

import Link from 'next/link';
import { useState } from 'react';
import { C, GRADIENT } from '@/lib/theme';
import { useBreakpoint } from '@/lib/useBreakpoint';

const NAV = [
  { label: 'Features', href: '/#features' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'How it works', href: '/#how-it-works' },
];

const desktopLink = {
  color: C.onDark,
  fontWeight: 500,
  fontSize: '15px',
  padding: '9px 14px',
  borderRadius: '8px',
  whiteSpace: 'nowrap',
};

const ctaStyle = {
  background: GRADIENT,
  color: C.white,
  fontWeight: 600,
  fontSize: '15px',
  padding: '12px 20px',
  borderRadius: '9px',
  whiteSpace: 'nowrap',
  boxShadow: '0 3px 14px rgba(102,126,234,0.4)',
};

export default function SiteHeader() {
  const { isMobile } = useBreakpoint();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 60,
        background: C.navy,
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <nav
        aria-label="Primary"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          height: '74px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}
      >
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: C.white, flexShrink: 0 }}>
          <span
            aria-hidden="true"
            style={{
              flex: '0 0 34px',
              width: '34px',
              height: '34px',
              borderRadius: '9px',
              background: GRADIENT,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-jakarta), sans-serif',
              fontWeight: 800,
              fontSize: '16px',
              color: C.white,
            }}
          >
            A
          </span>
          <span
            style={{
              fontFamily: 'var(--font-jakarta), sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(16px,4.2vw,19px)',
              letterSpacing: '.2px',
              whiteSpace: 'nowrap',
              color: C.white,
            }}
          >
            Avanti Cards
          </span>
        </Link>

        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} style={desktopLink}>
                {item.label}
              </Link>
            ))}
            <Link href="/dashboard/cards/edit?card=new" style={{ ...ctaStyle, marginLeft: '8px' }}>
              Get Started
            </Link>
          </div>
        )}

        {isMobile && (
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            style={{
              flex: '0 0 auto',
              width: '46px',
              height: '46px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.16)',
              borderRadius: '10px',
              cursor: 'pointer',
            }}
          >
            <i
              className={'fa-solid ' + (open ? 'fa-xmark' : 'fa-bars')}
              aria-hidden="true"
              style={{ color: C.white, fontSize: '19px' }}
            />
          </button>
        )}
      </nav>

      {isMobile && open && (
        <div
          id="mobile-menu"
          style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '12px 20px 20px' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                style={{ color: '#dde6eb', fontWeight: 500, fontSize: '17px', padding: '14px 12px', borderRadius: '9px' }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/dashboard/cards/edit?card=new"
              onClick={close}
              style={{
                marginTop: '8px',
                textAlign: 'center',
                background: GRADIENT,
                color: C.white,
                fontWeight: 600,
                fontSize: '16px',
                padding: '15px 20px',
                borderRadius: '10px',
              }}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
