import Link from 'next/link';
import { C, GRADIENT } from '@/lib/theme';
import { PORTAL_STATS, MY_CARDS, PLANS } from '@/lib/content';
import CardRow from '@/components/portal/CardRow';

export const metadata = { title: 'Dashboard - Avanti Cards' };

export default function DashboardPage() {
  const unlimited = PLANS.find((p) => p.id === 'unlimited');

  return (
    <div style={{ padding: 'clamp(24px,3.5vw,40px) clamp(20px,3vw,32px)' }}>
      <div style={{ maxWidth: '1000px' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '30px',
          }}
        >
          <div>
            <h1
              style={{
                fontWeight: 800,
                fontSize: 'clamp(23px,2.8vw,31px)',
                letterSpacing: '-0.7px',
                color: C.navy,
                margin: '0 0 7px',
              }}
            >
              Welcome back, Marisa
            </h1>
            <p style={{ fontSize: '15px', color: C.body, margin: 0 }}>Single Card plan - renews Sept 14, 2026</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <Link
              href="/dashboard/cards/edit?card=new"
              style={{
                background: GRADIENT,
                color: C.white,
                fontWeight: 600,
                fontSize: '14.5px',
                padding: '12px 20px',
                borderRadius: '10px',
                boxShadow: '0 3px 14px rgba(102,126,234,0.36)',
              }}
            >
              + Create New Card
            </Link>
            <Link
              href="/dashboard/billing"
              style={{
                background: C.white,
                color: C.navy,
                fontWeight: 600,
                fontSize: '14.5px',
                padding: '12px 20px',
                borderRadius: '10px',
                border: '1px solid ' + C.lineStrong,
              }}
            >
              Manage Subscription
            </Link>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))',
            gap: '16px',
            marginBottom: '26px',
          }}
        >
          {PORTAL_STATS.map((p) => (
            <div key={p.label} style={{ background: C.white, border: '1px solid ' + C.line, borderRadius: '14px', padding: '20px 22px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <i className={p.icon} aria-hidden="true" style={{ color: C.teal, fontSize: '13px' }} />
                <span
                  style={{
                    fontSize: '12.5px',
                    fontWeight: 600,
                    letterSpacing: '0.4px',
                    textTransform: 'uppercase',
                    color: C.meta,
                  }}
                >
                  {p.label}
                </span>
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-jakarta), sans-serif',
                  fontWeight: 800,
                  fontSize: '29px',
                  letterSpacing: '-0.9px',
                  color: C.navy,
                }}
              >
                {p.value}
              </div>
              <div style={{ fontSize: '13px', color: C.body, marginTop: '4px' }}>{p.sub}</div>
            </div>
          ))}
        </div>

        <div
          style={{
            background: C.navy,
            borderRadius: '16px',
            padding: '26px 28px',
            marginBottom: '26px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '-120px',
              right: '-60px',
              width: '340px',
              height: '340px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(102,126,234,0.4) 0%, rgba(17,37,65,0) 70%)',
            }}
          />
          <div style={{ position: 'relative', maxWidth: '520px' }}>
            <h2 style={{ fontWeight: 700, fontSize: '19px', color: C.white, margin: '0 0 8px' }}>
              Upgrade to Unlimited Cards
            </h2>
            <p style={{ fontSize: '14.5px', lineHeight: 1.6, color: C.onDark, margin: 0 }}>
              You are using 1 of 1 card. Unlimited lets you keep separate cards for each role, event, or
              venture - {unlimited.price}/month.
            </p>
          </div>
          <Link
            href="/dashboard/billing"
            style={{
              position: 'relative',
              background: GRADIENT,
              color: C.white,
              fontWeight: 600,
              fontSize: '14.5px',
              padding: '13px 22px',
              borderRadius: '10px',
              whiteSpace: 'nowrap',
              boxShadow: '0 4px 16px rgba(102,126,234,0.42)',
            }}
          >
            Upgrade Plan
          </Link>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', marginBottom: '16px' }}>
          <h2 style={{ fontWeight: 700, fontSize: '18px', color: C.navy, margin: 0 }}>My Cards</h2>
          <Link href="/dashboard/cards" style={{ fontSize: '14px', fontWeight: 600, color: C.teal }}>
            View all
          </Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '16px' }}>
          {MY_CARDS.map((card) => (
            <CardRow key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}
