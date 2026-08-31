'use client';

import { useEffect, useState } from 'react';

// The design switches layout at 860px (nav) and 1100px (two-column splits).
// Inline styles can't hold media queries, so the breakpoints are read in JS.
export function useBreakpoint() {
  const [bp, setBp] = useState({ isMobile: false, isNarrow: false, ready: false });

  useEffect(() => {
    const read = () => {
      const w = window.innerWidth;
      setBp({ isMobile: w < 860, isNarrow: w < 1100, ready: true });
    };
    read();
    window.addEventListener('resize', read);
    return () => window.removeEventListener('resize', read);
  }, []);

  return bp;
}
