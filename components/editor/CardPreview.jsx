import { C, CARD_THEMES, CARD_FONTS, MONO } from '@/lib/theme';
import { initialsOf, fullNameOf, publicUrlOf, socialsOf } from '@/lib/card';

const contactRow = { display: 'flex', alignItems: 'center', gap: '12px' };
const contactIcon = { width: '15px', color: C.teal, fontSize: '13px' };
const contactText = { fontSize: '14.5px', color: C.bodyStrong, overflow: 'hidden', textOverflow: 'ellipsis' };

const walletBtn = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  fontWeight: 600,
  fontSize: '14.5px',
  padding: '13px',
  borderRadius: '10px',
  cursor: 'pointer',
};

export default function CardPreview({ card, width }) {
  const gradient = CARD_THEMES[card.themeIndex].gradient;
  const fontStack = CARD_FONTS[card.fontIndex].stack;
  const socials = socialsOf(card);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div
        style={{
          width: '100%',
          maxWidth: width,
          background: C.white,
          border: '1px solid ' + C.line,
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 14px 40px rgba(17,37,65,0.12)',
          transition: 'max-width .3s ease',
        }}
      >
        <div aria-hidden="true" style={{ height: '96px', background: gradient }} />
        <div style={{ padding: '0 24px 26px' }}>
          <div
            aria-hidden="true"
            style={{
              width: '78px',
              height: '78px',
              borderRadius: '50%',
              background: '#dfe6ea',
              border: '4px solid ' + C.white,
              marginTop: '-39px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-jakarta), sans-serif',
              fontWeight: 800,
              fontSize: '25px',
              color: '#5c7480',
            }}
          >
            {initialsOf(card)}
          </div>

          <h3
            style={{
              fontFamily: fontStack,
              fontWeight: 800,
              fontSize: '24px',
              letterSpacing: '-0.6px',
              color: C.navy,
              margin: '16px 0 5px',
            }}
          >
            {fullNameOf(card)}
          </h3>
          <p style={{ fontSize: '14.5px', color: C.body, margin: '0 0 3px', fontWeight: 500 }}>{card.title}</p>
          <p style={{ fontSize: '14.5px', color: C.body, margin: 0 }}>{card.company}</p>
          {card.bio && (
            <p style={{ fontSize: '14.5px', lineHeight: 1.6, color: C.bodyStrong, margin: '16px 0 0' }}>{card.bio}</p>
          )}

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '13px',
              margin: '22px 0 0',
              paddingTop: '20px',
              borderTop: '1px solid ' + C.line,
            }}
          >
            <div style={contactRow}>
              <i className="fa-solid fa-phone" aria-hidden="true" style={contactIcon} />
              <span style={contactText}>+1 {card.phone}</span>
            </div>
            <div style={contactRow}>
              <i className="fa-solid fa-envelope" aria-hidden="true" style={contactIcon} />
              <span style={contactText}>{card.email}</span>
            </div>
            <div style={contactRow}>
              <i className="fa-solid fa-globe" aria-hidden="true" style={contactIcon} />
              <span style={contactText}>{card.website}</span>
            </div>
            <div style={contactRow}>
              <i className="fa-solid fa-location-dot" aria-hidden="true" style={contactIcon} />
              <span style={contactText}>{card.location}</span>
            </div>
          </div>

          {socials.length > 0 && (
            <div style={{ display: 'flex', gap: '9px', marginTop: '22px' }}>
              {socials.map((s) => (
                <span
                  key={s.icon}
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '9px',
                    background: C.tintBg,
                    border: '1px solid #e0e8ec',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <i className={s.icon} aria-hidden="true" style={{ color: C.teal, fontSize: '15px' }} />
                </span>
              ))}
            </div>
          )}

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginTop: '24px',
              paddingTop: '22px',
              borderTop: '1px solid ' + C.line,
            }}
          >
            <div
              aria-hidden="true"
              style={{
                flex: '0 0 72px',
                width: '72px',
                height: '72px',
                borderRadius: '12px',
                background: C.appBg,
                border: '1px solid ' + C.line,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <i className="fa-solid fa-qrcode" style={{ color: C.navy, fontSize: '38px' }} />
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: '13.5px', fontWeight: 600, color: C.navy }}>Scan to save</div>
              <div
                style={{
                  fontSize: '12.5px',
                  color: C.body,
                  marginTop: '3px',
                  fontFamily: MONO,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {publicUrlOf(card)}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', marginTop: '22px' }}>
            <button type="button" style={{ ...walletBtn, background: '#000000', color: C.white, border: 'none' }}>
              <i className="fa-brands fa-apple" aria-hidden="true" style={{ fontSize: '16px' }} />
              Add to Apple Wallet
            </button>
            <button
              type="button"
              style={{ ...walletBtn, background: C.white, color: C.navy, border: '1.5px solid ' + C.lineStrong }}
            >
              <i className="fa-brands fa-google" aria-hidden="true" style={{ fontSize: '15px' }} />
              Add to Google Wallet
            </button>
            <button type="button" style={{ ...walletBtn, background: C.teal, color: C.white, border: 'none' }}>
              <i className="fa-solid fa-address-book" aria-hidden="true" style={{ fontSize: '14px' }} />
              Save to Contacts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
