import { C } from '@/lib/theme';
import { MY_CARDS } from '@/lib/content';
import CardRow from '@/components/portal/CardRow';

export const metadata = { title: 'My Cards - Avanti Cards' };

export default function MyCardsPage() {
  return (
    <div style={{ padding: 'clamp(24px,3.5vw,40px) clamp(20px,3vw,32px)' }}>
      <div style={{ maxWidth: '1000px' }}>
        <h1
          style={{
            fontWeight: 800,
            fontSize: 'clamp(23px,2.8vw,31px)',
            letterSpacing: '-0.7px',
            color: C.navy,
            margin: '0 0 7px',
          }}
        >
          My Cards
        </h1>
        <p style={{ fontSize: '15px', color: C.body, margin: '0 0 30px' }}>
          {MY_CARDS.length} cards - all edits go live on saved wallet passes immediately.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '16px' }}>
          {MY_CARDS.map((card) => (
            <CardRow key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}
