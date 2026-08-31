import CardEditor from '@/components/editor/CardEditor';

export const metadata = { title: 'Edit card - Avanti Cards' };

export default async function EditCardPage({ searchParams }) {
  const { card } = await searchParams;
  const cardId = card || 'new';
  // TODO: fetch the card by id and pass it in as the editor's initial state.
  return <CardEditor cardId={cardId} />;
}
