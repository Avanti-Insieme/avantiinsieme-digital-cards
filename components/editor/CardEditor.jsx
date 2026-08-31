'use client';

import Link from 'next/link';
import { useState } from 'react';
import { C, GRADIENT, CARD_THEMES, CARD_FONTS, MONO } from '@/lib/theme';
import { DEFAULT_CARD } from '@/lib/content';
import { useBreakpoint } from '@/lib/useBreakpoint';
import { initialsOf, publicUrlOf } from '@/lib/card';
import CardPreview from './CardPreview';
import Field, { fieldsetStyle, legendStyle, rowStyle, labelStyle, inputStyle } from './Field';

const primaryBtn = {
  background: GRADIENT,
  color: C.white,
  fontWeight: 600,
  fontSize: '15px',
  padding: '14px 26px',
  borderRadius: '10px',
  border: 'none',
  cursor: 'pointer',
  boxShadow: '0 3px 14px rgba(102,126,234,0.36)',
};

const secondaryBtn = {
  background: C.white,
  color: C.navy,
  fontWeight: 600,
  fontSize: '15px',
  padding: '14px 24px',
  borderRadius: '10px',
  border: '1px solid ' + C.lineStrong,
  cursor: 'pointer',
};

const uploadBtn = {
  background: C.white,
  border: '1px solid ' + C.lineStrong,
  borderRadius: '8px',
  padding: '9px 14px',
  fontSize: '13.5px',
  fontWeight: 600,
  color: C.navy,
  cursor: 'pointer',
};

const dropZone = {
  background: '#f8fafb',
  border: '1px dashed #cfdbe0',
  borderRadius: '12px',
  padding: '16px',
};

const toggleBase = {
  fontFamily: 'inherit',
  fontSize: '13px',
  fontWeight: 600,
  padding: '7px 14px',
  borderRadius: '7px',
  cursor: 'pointer',
  border: 'none',
};

export default function CardEditor({ cardId }) {
  const { isNarrow } = useBreakpoint();
  const [card, setCard] = useState(DEFAULT_CARD);
  const [saved, setSaved] = useState(false);
  const [previewMode, setPreviewMode] = useState('desktop');

  const set = (key) => (value) => {
    setCard((c) => ({ ...c, [key]: value }));
    setSaved(false);
  };

  const save = (e) => {
    if (e) e.preventDefault();
    // TODO: POST to /api/cards/[id] and regenerate the wallet passes.
    setSaved(true);
  };

  const gradient = CARD_THEMES[card.themeIndex].gradient;
  const previewWidth = previewMode === 'mobile' ? '340px' : '460px';

  return (
    <>
      <header
        style={{
          background: C.white,
          borderBottom: '1px solid ' + C.line,
          position: 'sticky',
          top: 0,
          zIndex: 40,
          padding: '0 clamp(20px,3vw,32px)',
          height: '66px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', minWidth: 0 }}>
          <Link
            href="/dashboard"
            aria-label="Back to dashboard"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '9px',
              border: '1px solid ' + C.line,
              background: C.white,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flex: '0 0 auto',
            }}
          >
            <i className="fa-solid fa-arrow-left" aria-hidden="true" style={{ color: C.bodyStrong, fontSize: '14px' }} />
          </Link>
          <div style={{ minWidth: 0 }}>
            <div
              style={{
                fontFamily: 'var(--font-jakarta), sans-serif',
                fontWeight: 700,
                fontSize: '16.5px',
                color: C.navy,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {cardId === 'new' ? 'New card' : 'Edit card'}
            </div>
            <div style={{ fontSize: '12.5px', color: C.body, fontFamily: MONO }}>{publicUrlOf(card)}</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span
            role="status"
            style={{ fontSize: '13px', color: C.teal, fontWeight: 600, display: 'flex', alignItems: 'center', gap: '7px' }}
          >
            <i className="fa-solid fa-circle" aria-hidden="true" style={{ fontSize: '7px' }} />
            {saved ? 'Saved' : 'Unsaved changes'}
          </span>
          <button type="button" onClick={save} style={{ ...primaryBtn, padding: '12px 22px', fontSize: '14.5px' }}>
            Save Card
          </button>
        </div>
      </header>

      <main
        id="main"
        style={{
          display: 'grid',
          gridTemplateColumns: isNarrow ? '1fr' : '1.05fr 0.95fr',
          gap: 'clamp(20px,2.5vw,28px)',
          padding: 'clamp(20px,3vw,32px)',
          alignItems: 'start',
          maxWidth: '1440px',
          margin: '0 auto',
          animation: 'fadeUp .35s ease-out',
        }}
      >
        <form
          onSubmit={save}
          style={{
            background: C.white,
            border: '1px solid ' + C.line,
            borderRadius: '18px',
            padding: 'clamp(22px,3vw,32px)',
            minWidth: 0,
          }}
        >
          <h1 style={{ fontWeight: 800, fontSize: '20px', color: C.navy, margin: '0 0 4px' }}>Card details</h1>
          <p style={{ fontSize: '14px', color: C.body, margin: '0 0 28px' }}>
            Changes appear in the preview as you type.
          </p>

          <fieldset style={{ border: 'none', margin: '0 0 28px', padding: 0 }}>
            <legend style={legendStyle}>Personal info</legend>
            <div style={{ ...rowStyle, marginBottom: '16px' }}>
              <Field id="first" label="First name" value={card.first} onChange={set('first')} />
              <Field id="last" label="Last name" value={card.last} onChange={set('last')} />
            </div>
            <div style={{ ...rowStyle, marginBottom: '16px' }}>
              <Field id="jobtitle" label="Job title" value={card.title} onChange={set('title')} />
              <Field id="company" label="Company" value={card.company} onChange={set('company')} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
              <label htmlFor="bio" style={labelStyle}>Bio</label>
              <textarea
                id="bio"
                rows={3}
                maxLength={150}
                value={card.bio}
                onChange={(e) => set('bio')(e.target.value)}
                aria-describedby="bio-help"
                style={{ ...inputStyle, lineHeight: 1.55, resize: 'vertical' }}
              />
              <span id="bio-help" style={{ fontSize: '12.5px', color: C.body }}>
                {card.bio.length} of 150 characters
              </span>
            </div>
          </fieldset>

          <fieldset style={fieldsetStyle}>
            <legend style={legendStyle}>Contact</legend>
            <div style={{ ...rowStyle, marginBottom: '16px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                <label htmlFor="phone" style={labelStyle}>Phone</label>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'stretch',
                    border: '1px solid ' + C.lineStrong,
                    borderRadius: '9px',
                    overflow: 'hidden',
                    background: C.white,
                  }}
                >
                  <span
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0 12px',
                      background: C.appBg,
                      borderRight: '1px solid ' + C.lineStrong,
                      fontSize: '14.5px',
                      color: C.meta,
                    }}
                  >
                    +1
                  </span>
                  <input
                    id="phone"
                    type="tel"
                    value={card.phone}
                    onChange={(e) => set('phone')(e.target.value)}
                    style={{ ...inputStyle, border: 'none', borderRadius: 0, flex: 1, background: 'transparent' }}
                  />
                </div>
              </div>
              <Field id="email" label="Email" type="email" value={card.email} onChange={set('email')} />
            </div>
            <div style={rowStyle}>
              <Field id="website" label="Website" value={card.website} onChange={set('website')} />
              <Field id="location" label="Location" value={card.location} onChange={set('location')} />
            </div>
          </fieldset>

          <fieldset style={fieldsetStyle}>
            <legend style={legendStyle}>Media</legend>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '16px' }}>
              <div>
                <span style={{ display: 'block', ...labelStyle, marginBottom: '9px' }}>Profile photo</span>
                <div style={{ ...dropZone, display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div
                    aria-hidden="true"
                    style={{
                      flex: '0 0 56px',
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      background: '#dfe6ea',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-jakarta), sans-serif',
                      fontWeight: 800,
                      fontSize: '17px',
                      color: '#5c7480',
                    }}
                  >
                    {initialsOf(card)}
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <button type="button" style={uploadBtn}>Upload photo</button>
                    <div style={{ fontSize: '12px', color: C.body, marginTop: '7px' }}>Square, 500x500px minimum</div>
                  </div>
                </div>
              </div>
              <div>
                <span style={{ display: 'block', ...labelStyle, marginBottom: '9px' }}>Banner image</span>
                <div style={dropZone}>
                  <div aria-hidden="true" style={{ height: '44px', borderRadius: '8px', background: gradient, marginBottom: '12px' }} />
                  <button type="button" style={uploadBtn}>Upload banner</button>
                  <div style={{ fontSize: '12px', color: C.body, marginTop: '7px' }}>1200x400px recommended</div>
                </div>
              </div>
            </div>
          </fieldset>

          <fieldset style={fieldsetStyle}>
            <legend style={legendStyle}>
              Social media{' '}
              <span style={{ fontWeight: 500, letterSpacing: 0, textTransform: 'none', color: C.body }}>
                - optional
              </span>
            </legend>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <Field id="linkedin" label="LinkedIn" value={card.linkedin} onChange={set('linkedin')} placeholder="linkedin.com/in/username" />
              <Field id="twitter" label="X / Twitter" value={card.twitter} onChange={set('twitter')} placeholder="x.com/username" />
              <Field id="instagram" label="Instagram" value={card.instagram} onChange={set('instagram')} placeholder="instagram.com/username" />
            </div>
          </fieldset>

          <fieldset style={fieldsetStyle}>
            <legend style={legendStyle}>Design</legend>
            <span style={{ display: 'block', ...labelStyle, marginBottom: '11px' }}>Color theme</span>
            <div role="radiogroup" aria-label="Color theme" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '22px' }}>
              {CARD_THEMES.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  role="radio"
                  aria-checked={i === card.themeIndex}
                  aria-label={t.name}
                  onClick={() => set('themeIndex')(i)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '7px',
                    padding: '9px',
                    borderRadius: '11px',
                    cursor: 'pointer',
                    background: C.white,
                    border: '2px solid ' + (i === card.themeIndex ? C.teal : C.line),
                  }}
                >
                  <span aria-hidden="true" style={{ width: '34px', height: '34px', borderRadius: '8px', background: t.gradient, display: 'block' }} />
                  <span style={{ fontSize: '12px', fontWeight: 600, color: C.bodyStrong }}>{t.name}</span>
                </button>
              ))}
            </div>

            <span style={{ display: 'block', ...labelStyle, marginBottom: '11px' }}>Font style</span>
            <div role="radiogroup" aria-label="Font style" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {CARD_FONTS.map((f, i) => (
                <button
                  key={f.label}
                  type="button"
                  role="radio"
                  aria-checked={i === card.fontIndex}
                  onClick={() => set('fontIndex')(i)}
                  style={{
                    fontFamily: 'inherit',
                    fontSize: '14px',
                    fontWeight: 600,
                    padding: '12px 18px',
                    borderRadius: '9px',
                    cursor: 'pointer',
                    background: i === card.fontIndex ? C.tintBg : C.white,
                    border: '1.5px solid ' + (i === card.fontIndex ? C.teal : C.lineStrong),
                    color: i === card.fontIndex ? C.navy : C.body,
                  }}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </fieldset>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', borderTop: '1px solid ' + C.line, paddingTop: '24px' }}>
            <button type="submit" style={primaryBtn}>Save Card</button>
            <button type="button" style={secondaryBtn}>Preview Full Card</button>
            <button
              type="button"
              style={{
                marginLeft: 'auto',
                background: 'none',
                color: '#a05a5a',
                fontWeight: 600,
                fontSize: '14.5px',
                padding: '14px 16px',
                borderRadius: '10px',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Delete Card
            </button>
          </div>
        </form>

        <div
          style={{
            background: C.white,
            border: '1px solid ' + C.line,
            borderRadius: '18px',
            padding: isNarrow ? 'clamp(20px,3vw,28px)' : '28px',
            minWidth: 0,
            position: isNarrow ? 'static' : 'sticky',
            top: isNarrow ? undefined : '90px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', marginBottom: '16px' }}>
            <span style={legendStyle}>Live preview</span>
            <div role="group" aria-label="Preview size" style={{ display: 'flex', gap: '4px', background: '#e7edf0', padding: '4px', borderRadius: '9px' }}>
              {['desktop', 'mobile'].map((mode) => {
                const on = previewMode === mode;
                return (
                  <button
                    key={mode}
                    type="button"
                    aria-pressed={on}
                    onClick={() => setPreviewMode(mode)}
                    style={{
                      ...toggleBase,
                      background: on ? C.white : 'transparent',
                      color: on ? C.navy : C.body,
                      boxShadow: on ? '0 1px 4px rgba(17,37,65,0.12)' : 'none',
                      textTransform: 'capitalize',
                    }}
                  >
                    {mode}
                  </button>
                );
              })}
            </div>
          </div>

          <CardPreview card={card} width={previewWidth} />
        </div>
      </main>
    </>
  );
}
