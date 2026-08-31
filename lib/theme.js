// Single source of truth for the palette. Navy/teal is the Avanti Insieme
// foundation; the purple gradient is this product's accent only.
export const C = {
  navy: '#112541',
  navyDeep: '#0b1829',
  teal: '#26736d',
  tealHover: '#2e857e',
  tealPale: '#9fe3da',
  tealTint: '#e3efed',
  slate: '#7999a4',      // borders and large text only - fails AA on small text
  body: '#46616b',       // 7.0:1 on white
  bodyStrong: '#354a53',
  meta: '#5c7480',
  line: '#e4ebee',
  lineStrong: '#d5e2e6',
  tintBg: '#eef3f5',
  appBg: '#f2f5f7',
  white: '#ffffff',
  onDark: '#c2d0d8',
  onDarkMuted: '#8ea3b5',
};

export const GRADIENT = 'linear-gradient(135deg,#667eea,#764ba2)';

export const CARD_THEMES = [
  { name: 'Purple', gradient: 'linear-gradient(135deg,#667eea,#764ba2)' },
  { name: 'Deep Teal', gradient: 'linear-gradient(135deg,#2f8f86,#112541)' },
  { name: 'Indigo', gradient: 'linear-gradient(135deg,#5566d6,#2b2f7a)' },
  { name: 'Slate', gradient: 'linear-gradient(135deg,#7999a4,#38566b)' },
  { name: 'Midnight', gradient: 'linear-gradient(135deg,#1f3a5f,#0b1829)' },
];

export const CARD_FONTS = [
  { label: 'Modern sans', stack: 'var(--font-jakarta), system-ui, sans-serif' },
  { label: 'Classic serif', stack: "Georgia, 'Times New Roman', serif" },
];

export const MONO = 'ui-monospace, SFMono-Regular, Menlo, monospace';
