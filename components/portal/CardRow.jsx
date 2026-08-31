import Link from 'next/link';
import { C, MONO } from '@/lib/theme';

const actionBtn = {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  background: C.tintBg,
  color: C.navy,
  fontWeight: 600,
  fontSize: '14px',
  padding: '11px',
  borderRadius: '9px',
  border: '1px solid #e0e8ec',
  cursor: 'pointer',
};

export default function CardRow({ card }) {
  return (
    <div style={{ background: C.white, border: '1px solid ' + C.line, borderRadius: '16px', padding: '22px' }}>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
        <div
          aria-hidden="true"
          style={{
            flex: '0 0 62px',
            width: '62px',
            height: '62px',
            borderRadius: '50%',
            background: '#dfe6ea',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-jakarta), sans-serif',
            fontWeight: 800,
            fontSize: '20px',
            color: '#5c7480',
          }}
        >
          {card.initials}
        </div>
        <div style={{ minWidth: 0, flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <div style={{ minWidth: 0, flex: 1 }}>
              <div style={{ fontFamily: 'var(--font-jakarta), sans-serif', fontWeight: 700, fontSize: '17px', color: C.navy }}>
                {card.name}
              </div>
              <div
                style={{
                  fontSize: '13.5px',
                  color: C.body,
                  marginTop: '3px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {card.title}
              </div>
            </div>
            <button
              type="button"
              aria-label={'Delete ' + card.name + ' card'}
              style={{
                flex: '0 0 auto',
                width: '30px',
                height: '30px',
                borderRadius: '7px',
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <i className="fa-regular fa-trash-can" aria-hidden="true" style={{ color: '#a05a5a', fontSize: '13px' }} />
            </button>
          </div>
          <div
            style={{
              marginTop: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '3px',
              fontFamily: MONO,
              fontSize: '12.5px',
              color: C.meta,
            }}
          >
            <span>Short: {card.short}</span>
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>URL: {card.url}</span>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        <Link href={card.url} style={actionBtn}>
          <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" style={{ fontSize: '12px' }} />
          View
        </Link>
        <Link href={'/dashboard/cards/edit?card=' + card.id} style={actionBtn}>
          <i className="fa-solid fa-pen" aria-hidden="true" style={{ fontSize: '12px' }} />
          Edit
        </Link>
      </div>
    </div>
  );
}
