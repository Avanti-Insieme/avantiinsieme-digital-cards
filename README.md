# Avanti Cards

Digital business card platform - a paid feature for avantiinsieme.ca. Users build a card
once, then share it via Apple Wallet, Google Wallet, or a public web page.

Built from the `Card Platform.dc.html` design prototype in this project.

## Running it

```bash
cd card-platform
npm install
npm run dev
```

Then open http://localhost:3000.

## Routes

| Route | Screen |
| --- | --- |
| `/` | Marketing landing page |
| `/dashboard` | Sales portal dashboard |
| `/dashboard/cards` | My Cards list |
| `/dashboard/cards/edit?card=<id>` | Card editor with live preview |

The prototype's screen switcher is gone - real routing replaces it. `/dashboard/cards/edit?card=new`
is the create-a-card entry point that every "Get Started" CTA points at.

The editor takes the card id as a query param rather than a `[id]` path segment. If you
prefer the dynamic-route form, move `app/dashboard/cards/edit/page.jsx` to
`app/dashboard/cards/[id]/edit/page.jsx` and read `params` instead of `searchParams`.

## Structure

```
app/
  layout.jsx                     fonts, Font Awesome, skip link
  globals.css                    resets, focus ring, skip link, keyframes
  page.jsx                       landing page composition
  dashboard/
    layout.jsx                   portal shell; steps aside on /edit routes
    page.jsx                     dashboard
    cards/page.jsx               My Cards
    cards/edit/page.jsx          editor route (?card=<id>)
components/
  SiteHeader.jsx  SiteFooter.jsx
  landing/                       Hero, Features, Pricing, HowItWorks, SocialProof, FinalCta, WalletMockups
  portal/                        PortalHeader, PortalSidebar, CardRow
  editor/                        CardEditor, CardPreview, Field
lib/
  theme.js                       palette, card gradients, font stacks
  content.js                     all copy and seed data
  card.js                        initials / slug / public URL / socials helpers
  useBreakpoint.js               860px and 1100px breakpoints
```

## Design system

Navy/teal is the Avanti Insieme foundation; the purple gradient
(`#667eea` to `#764ba2`) is this product's accent and appears only on primary CTAs,
feature icon tiles, the featured pricing tier, and background glows. No gradients on text.

| Token | Value | Use |
| --- | --- | --- |
| `C.navy` | `#112541` | headings, dark sections |
| `C.navyDeep` | `#0b1829` | footer |
| `C.teal` | `#26736d` | links, checkmarks, focus ring |
| `C.body` | `#46616b` | body and meta text (7.0:1 on white) |
| `C.slate` | `#7999a4` | borders and large text ONLY |
| `C.tintBg` | `#eef3f5` | alternating section background |
| `C.appBg` | `#f2f5f7` | portal / editor canvas |

Headings use Plus Jakarta Sans 700-800, body uses Inter 400-600, both via `next/font`.

### Accessibility notes worth preserving

- `#7999a4` fails WCAG AA on small text against white and the light tints. Use `C.body`
  (`#46616b`) for anything under 18px. This was a real defect caught in design review.
- Focus ring is a 3px teal outline with 2px offset, set once in `globals.css`.
- Skip link is in the root layout; every page marks its content region `id="main"`.
- Layout breakpoints live in `useBreakpoint` because the design uses inline styles.
  If you migrate to CSS modules or Tailwind, replace the hook with media queries.

## Styling approach

Inline style objects, ported verbatim from the design prototype so the two stay
comparable during review. There is no CSS framework. If you'd rather use Tailwind or
CSS modules, `lib/theme.js` is the only file that needs to become your token source.

## Not built yet

Everything below is stubbed with seed data from `lib/content.js`:

1. **Auth** - the portal assumes a signed-in user (Marisa Chen is hardcoded).
2. **Billing** - `Choose Plan` and `Upgrade Plan` link to `/dashboard/billing`, which does not exist.
   Wire to Stripe Checkout; the two price points are $5.99 and $9.99/month, no free tier.
3. **Card persistence** - the editor holds state in `useState` and `Save Card` only flips a flag.
   See the `TODO` in `CardEditor.save`.
4. **Wallet pass generation** - needs an Apple Developer pass type ID + certificate for `.pkpass`,
   and the Google Wallet Issuer API for the Android side. This is the real engineering work.
5. **Public card pages** - `/c/[slug]` is referenced throughout but not implemented.
6. **QR codes** - currently a Font Awesome glyph placeholder in `CardPreview`.
7. **Image uploads** - profile photo and banner are visual dropzones with no handler.
8. **Legal + contact pages** - footer links to `/privacy`, `/terms`, `/contact`.
