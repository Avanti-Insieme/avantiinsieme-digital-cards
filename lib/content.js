export const FEATURES = [
  { icon: 'fa-brands fa-apple', title: 'Add to Apple Wallet', desc: 'A real .pkpass lands in Wallet, right beside their boarding passes - always one swipe from the lock screen.' },
  { icon: 'fa-brands fa-google', title: 'Add to Google Wallet', desc: 'The same card, native on Android and Wear OS. Change a phone number once and every saved copy refreshes.' },
  { icon: 'fa-solid fa-globe', title: 'Beautiful web card', desc: 'Every card gets a clean public page at avantiinsieme.ca/c/yourname for anyone who would rather just tap a link.' },
  { icon: 'fa-solid fa-qrcode', title: 'Share instantly', desc: 'One QR code and one short link. Works from your phone screen, a slide, or the back of a printed card.' },
];

export const STEPS = [
  { n: 'STEP 01', title: 'Sign up with your email', desc: 'Choose Single or Unlimited and confirm your address. Nothing to install.', icon: 'fa-regular fa-envelope', hint: 'Email + plan' },
  { n: 'STEP 02', title: 'Build your card', desc: 'Name, title, contact details, photo, links - with a live preview beside you.', icon: 'fa-regular fa-pen-to-square', hint: 'Card editor' },
  { n: 'STEP 03', title: 'Add to wallet or copy your link', desc: 'Apple Wallet, Google Wallet, and the web card all come from one screen.', icon: 'fa-solid fa-wallet', hint: 'Three share options' },
  { n: 'STEP 04', title: 'They tap once and have you saved', desc: 'Recipients open the card and save your contact. No app on their end either.', icon: 'fa-solid fa-address-book', hint: 'Saved to contacts' },
];

export const PLANS = [
  {
    id: 'single',
    name: 'Single Card',
    blurb: 'For one professional identity.',
    price: '$5.99',
    featured: false,
    features: [
      'One business card',
      'Apple Wallet + Google Wallet passes',
      'Public web card at /c/yourname',
      'QR code and short link',
      'Unlimited edits, live everywhere',
    ],
  },
  {
    id: 'unlimited',
    name: 'Unlimited Cards',
    blurb: 'For teams, roles, and side ventures.',
    price: '$9.99',
    featured: true,
    features: [
      'Unlimited business cards',
      'Everything in Single Card',
      'Separate cards per role or event',
      'Custom colour themes per card',
      'Download and scan analytics',
      'Priority support',
    ],
  },
];

export const STATS = [
  { stat: '4,100+', label: 'Cards created' },
  { stat: '18,600', label: 'Wallet saves' },
  { stat: '42 sec', label: 'Median setup time' },
];

export const TESTIMONIALS = [
  { quote: 'I handed out zero paper cards at the trade show and still came home with more follow-ups than last year. People genuinely liked the wallet thing.', name: 'Devon Aluko', role: 'Founder, Aluko Design Build', initials: 'DA' },
  { quote: 'Our whole sales team switched in an afternoon. When someone changes desks I edit one field and every card they have ever sent updates itself.', name: 'Priya Raman', role: 'Sales Ops, Meridian Health', initials: 'PR' },
  { quote: 'The web card is what sold me. Half my clients are on old phones and it just works as a normal link for them.', name: 'Tom Belanger', role: 'Independent Realtor', initials: 'TB' },
];

export const PORTAL_STATS = [
  { label: 'Cards', value: '1', sub: 'of 1 on your plan', icon: 'fa-regular fa-id-card' },
  { label: 'Wallet saves', value: '214', sub: '+18 this week', icon: 'fa-solid fa-wallet' },
  { label: 'Web views', value: '1,038', sub: '+96 this week', icon: 'fa-solid fa-chart-line' },
  { label: 'QR scans', value: '376', sub: '+31 this week', icon: 'fa-solid fa-qrcode' },
];

// Stand-in for the cards API. Shape mirrors what the editor reads and writes.
export const MY_CARDS = [
  { id: 'mchen01', initials: 'MC', name: 'Marisa Chen', title: 'Operations Director - Northbridge Logistics', short: '/MCHEN01', url: '/c/marisachen' },
  { id: 'mchen02', initials: 'MC', name: 'Marisa Chen', title: 'Board Member - Lakeshore Freight Council', short: '/MCHEN02', url: '/c/marisachen-lfc' },
  { id: 'nbsales', initials: 'NB', name: 'Northbridge Sales', title: 'Shared team card - Inbound enquiries', short: '/NBSALES', url: '/c/northbridge-sales' },
];

export const DEFAULT_CARD = {
  first: 'Marisa',
  last: 'Chen',
  title: 'Operations Director',
  company: 'Northbridge Logistics',
  bio: 'Fifteen years moving freight across the Great Lakes corridor. Always happy to talk routing, warehousing, or hockey.',
  phone: '(416) 555-0142',
  email: 'marisa.chen@northbridge.ca',
  website: 'northbridgelogistics.ca',
  location: 'Toronto, ON',
  linkedin: 'linkedin.com/in/marisachen',
  twitter: 'x.com/marisachen',
  instagram: '',
  themeIndex: 0,
  fontIndex: 0,
};

export const SIDEBAR_ITEMS = [
  { label: 'Dashboard', icon: 'fa-solid fa-gauge-high', href: '/dashboard' },
  { label: 'My Cards', icon: 'fa-regular fa-id-card', href: '/dashboard/cards' },
  { label: 'Billing & Subscription', icon: 'fa-regular fa-credit-card', href: '/dashboard/billing' },
  { label: 'Account Settings', icon: 'fa-solid fa-gear', href: '/dashboard/settings' },
  { label: 'Help & Support', icon: 'fa-regular fa-circle-question', href: '/dashboard/support' },
];

export const USER_MENU = [
  { label: 'Profile', icon: 'fa-regular fa-user', href: '/dashboard/settings' },
  { label: 'My Cards', icon: 'fa-regular fa-id-card', href: '/dashboard/cards' },
  { label: 'Billing', icon: 'fa-regular fa-credit-card', href: '/dashboard/billing' },
  { label: 'Support', icon: 'fa-regular fa-circle-question', href: '/dashboard/support' },
  { label: 'Log out', icon: 'fa-solid fa-arrow-right-from-bracket', href: '/' },
];
