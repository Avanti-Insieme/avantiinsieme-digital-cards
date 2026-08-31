import Link from 'next/link';
import { C, GRADIENT } from '@/lib/theme';

const colHead = {
  fontSize: '12px',
  fontWeight: 700,
  letterSpacing: '1.4px',
  textTransform: 'uppercase',
  color: C.onDarkMuted,
};

const footLink = { fontSize: '14.5px', color: C.onDark };

const socialBox = {
  width: '38px',
  height: '38px',
  borderRadius: '9px',
  background: 'rgba(38,115,109,0.22)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export default function SiteFooter() {
  return (
    <footer style={{ background: C.navyDeep, padding: '56px 24px 32px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '32px',
            justifyContent: 'space-between',
            paddingBottom: '32px',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <div style={{ maxWidth: '300px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <span
                aria-hidden="true"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '9px',
                  background: GRADIENT,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-jakarta), sans-serif',
                  fontWeight: 800,
                  fontSize: '15px',
                  color: C.white,
                }}
              >
                A
              </span>
              <span style={{ fontFamily: 'var(--font-jakarta), sans-serif', fontWeight: 700, fontSize: '17px', color: C.white }}>
                Avanti Cards
              </span>
            </div>
            <p style={{ fontSize: '14px', lineHeight: 1.6, color: C.onDarkMuted, margin: 0 }}>
              Digital business cards that live in the wallet your contacts already use.
            </p>
          </div>

          <nav aria-label="Footer" style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(28px,5vw,56px)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={colHead}>Product</span>
              <Link href="/#features" style={footLink}>Features</Link>
              <Link href="/#pricing" style={footLink}>Pricing</Link>
              <Link href="/#how-it-works" style={footLink}>How it works</Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={colHead}>Company</span>
              <Link href="/contact" style={footLink}>Contact</Link>
              <Link href="/privacy" style={footLink}>Privacy Policy</Link>
              <Link href="/terms" style={footLink}>Terms of Service</Link>
            </div>
          </nav>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '26px',
          }}
        >
          <p style={{ fontSize: '13.5px', color: C.onDarkMuted, margin: 0 }}>
            &copy; 2026 Avanti Cards - Powered by Avanti Insieme
          </p>
          <div style={{ display: 'flex', gap: '10px' }}>
            <a href="https://www.linkedin.com" aria-label="LinkedIn" style={socialBox}>
              <i className="fa-brands fa-linkedin-in" aria-hidden="true" style={{ color: C.tealPale, fontSize: '15px' }} />
            </a>
            <a href="https://x.com" aria-label="X" style={socialBox}>
              <i className="fa-brands fa-x-twitter" aria-hidden="true" style={{ color: C.tealPale, fontSize: '15px' }} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
