import { C, GRADIENT, MONO } from '@/lib/theme';

const shell = { borderRadius: '18px', boxShadow: '0 20px 50px rgba(0,0,0,0.34)' };
const eyebrow = {
  fontSize: '10.5px',
  fontWeight: 700,
  letterSpacing: '1.6px',
  textTransform: 'uppercase',
};

// Flat card mockups - deliberately no device chrome.
export default function WalletMockups() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div
        style={{
          ...shell,
          background: C.navyDeep,
          border: '1px solid rgba(255,255,255,0.14)',
          padding: '20px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <span style={{ ...eyebrow, color: C.onDarkMuted }}>Apple Wallet</span>
          <i className="fa-brands fa-apple" aria-hidden="true" style={{ color: C.white, fontSize: '16px' }} />
        </div>
        <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
          <div
            aria-hidden="true"
            style={{
              flex: '0 0 52px',
              width: '52px',
              height: '52px',
              borderRadius: '13px',
              background: GRADIENT,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-jakarta), sans-serif',
              fontWeight: 800,
              fontSize: '19px',
              color: C.white,
            }}
          >
            MC
          </div>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontFamily: 'var(--font-jakarta), sans-serif', fontWeight: 700, fontSize: '17px', color: C.white }}>
              Marisa Chen
            </div>
            <div style={{ fontSize: '13px', color: '#a8bcc7', marginTop: '2px' }}>Operations Director</div>
          </div>
          <div
            aria-hidden="true"
            style={{
              marginLeft: 'auto',
              width: '44px',
              height: '44px',
              borderRadius: '8px',
              background: C.white,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <i className="fa-solid fa-qrcode" style={{ color: C.navy, fontSize: '24px' }} />
          </div>
        </div>
      </div>

      <div style={{ ...shell, background: C.white, overflow: 'hidden' }}>
        <div style={{ background: GRADIENT, padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ ...eyebrow, color: 'rgba(255,255,255,0.85)' }}>Google Wallet</span>
          <i className="fa-brands fa-google" aria-hidden="true" style={{ color: C.white, fontSize: '14px' }} />
        </div>
        <div style={{ padding: '18px 20px', display: 'flex', alignItems: 'center', gap: '13px' }}>
          <div
            aria-hidden="true"
            style={{
              flex: '0 0 42px',
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: '#dfe6ea',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-jakarta), sans-serif',
              fontWeight: 800,
              fontSize: '15px',
              color: '#5c7480',
            }}
          >
            MC
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-jakarta), sans-serif', fontWeight: 700, fontSize: '16px', color: C.navy }}>
              Marisa Chen
            </div>
            <div style={{ fontSize: '13px', color: C.body, marginTop: '2px' }}>Northbridge Logistics</div>
          </div>
        </div>
      </div>

      <div style={{ ...shell, background: C.white, overflow: 'hidden' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '11px 16px',
            background: C.appBg,
            borderBottom: '1px solid ' + C.line,
          }}
        >
          <i className="fa-solid fa-lock" aria-hidden="true" style={{ fontSize: '10px', color: C.body }} />
          <span style={{ fontSize: '12.5px', color: C.meta, fontFamily: MONO }}>avantiinsieme.ca/c/marisachen</span>
        </div>
        <div aria-hidden="true" style={{ height: '56px', background: GRADIENT }} />
        <div style={{ padding: '0 20px 20px' }}>
          <div
            aria-hidden="true"
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: '#dfe6ea',
              border: '3px solid ' + C.white,
              marginTop: '-28px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-jakarta), sans-serif',
              fontWeight: 800,
              fontSize: '18px',
              color: '#5c7480',
            }}
          >
            MC
          </div>
          <div style={{ fontFamily: 'var(--font-jakarta), sans-serif', fontWeight: 700, fontSize: '17px', color: C.navy, marginTop: '12px' }}>
            Marisa Chen
          </div>
          <div style={{ fontSize: '13.5px', color: C.body, marginTop: '3px' }}>
            Operations Director - Northbridge Logistics
          </div>
          <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
            <span style={{ flex: 1, textAlign: 'center', background: C.navy, color: C.white, fontSize: '12.5px', fontWeight: 600, padding: '9px', borderRadius: '8px' }}>
              Save contact
            </span>
            <span style={{ flex: 1, textAlign: 'center', border: '1px solid ' + C.lineStrong, color: C.teal, fontSize: '12.5px', fontWeight: 600, padding: '9px', borderRadius: '8px' }}>
              Share
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
