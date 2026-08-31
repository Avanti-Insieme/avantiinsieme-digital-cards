'use client';

import Link from 'next/link';
import { useState } from 'react';
import { C, GRADIENT } from '@/lib/theme';
import { USER_MENU } from '@/lib/content';

const iconBtn = {
  width: '40px',
  height: '40px',
  borderRadius: '9px',
  border: '1px solid ' + C.line,
  background: C.white,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export default function PortalHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        background: C.white,
        borderBottom: '1px solid ' + C.line,
        position: 'sticky',
        top: 0,
        zIndex: 40,
      }}
    >
      <div
        style={{
          padding: '0 clamp(20px,3vw,32px)',
          height: '66px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}
      >
        <Link href="/dashboard" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
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
          <span style={{ fontFamily: 'var(--font-jakarta), sans-serif', fontWeight: 700, fontSize: '17px', color: C.navy }}>
            Avanti Cards
          </span>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Link href="/dashboard/support" aria-label="Help and support" style={iconBtn}>
            <i className="fa-regular fa-circle-question" aria-hidden="true" style={{ color: C.meta, fontSize: '16px' }} />
          </Link>
          <button
            type="button"
            aria-expanded={open}
            aria-haspopup="menu"
            onClick={() => setOpen((v) => !v)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              background: C.white,
              border: '1px solid ' + C.line,
              borderRadius: '10px',
              padding: '6px 12px 6px 7px',
              cursor: 'pointer',
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: '#dfe6ea',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-jakarta), sans-serif',
                fontWeight: 700,
                fontSize: '12px',
                color: '#5c7480',
              }}
            >
              MC
            </span>
            <span style={{ fontSize: '14px', fontWeight: 600, color: C.navy }}>Marisa Chen</span>
            <i className="fa-solid fa-chevron-down" aria-hidden="true" style={{ color: C.body, fontSize: '11px' }} />
          </button>
        </div>
      </div>

      {open && (
        <div
          role="menu"
          style={{
            position: 'absolute',
            right: 'clamp(20px,3vw,32px)',
            top: '60px',
            background: C.white,
            border: '1px solid ' + C.line,
            borderRadius: '12px',
            padding: '8px',
            minWidth: '200px',
            boxShadow: '0 14px 34px rgba(17,37,65,0.14)',
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
          }}
        >
          {USER_MENU.map((u) => (
            <Link
              key={u.label}
              href={u.href}
              role="menuitem"
              onClick={() => setOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '11px',
                padding: '11px 12px',
                borderRadius: '8px',
                fontSize: '14.5px',
                color: C.bodyStrong,
              }}
            >
              <i className={u.icon} aria-hidden="true" style={{ width: '16px', color: C.body, fontSize: '14px' }} />
              {u.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
