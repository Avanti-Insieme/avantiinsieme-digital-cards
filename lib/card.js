export function initialsOf(card) {
  const a = (card.first || ' ').trim().charAt(0);
  const b = (card.last || ' ').trim().charAt(0);
  return (a + b).toUpperCase() || 'AC';
}

export function slugOf(card) {
  const raw = ((card.first || '') + (card.last || '')).toLowerCase().replace(/[^a-z0-9]/g, '');
  return raw || 'yourname';
}

export function fullNameOf(card) {
  return ((card.first || '') + ' ' + (card.last || '')).trim() || 'Your name';
}

export function publicUrlOf(card) {
  return 'avantiinsieme.ca/c/' + slugOf(card);
}

export function socialsOf(card) {
  const out = [];
  if ((card.linkedin || '').trim()) out.push({ icon: 'fa-brands fa-linkedin-in', href: card.linkedin });
  if ((card.twitter || '').trim()) out.push({ icon: 'fa-brands fa-x-twitter', href: card.twitter });
  if ((card.instagram || '').trim()) out.push({ icon: 'fa-brands fa-instagram', href: card.instagram });
  return out;
}
