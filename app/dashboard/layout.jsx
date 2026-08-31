'use client';

import { usePathname } from 'next/navigation';
import { C } from '@/lib/theme';
import { useBreakpoint } from '@/lib/useBreakpoint';
import PortalHeader from '@/components/portal/PortalHeader';
import PortalSidebar from '@/components/portal/PortalSidebar';

export default function DashboardLayout({ children }) {
  const { isMobile } = useBreakpoint();
  const pathname = usePathname();

  // The card editor is a focused, full-bleed workspace - it brings its own
  // header and does not sit inside the portal shell.
  if (pathname.endsWith('/edit')) {
    return <div style={{ background: C.appBg, minHeight: '100vh' }}>{children}</div>;
  }

  return (
    <div style={{ background: C.appBg, minHeight: '100vh' }}>
      <PortalHeader />
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '252px 1fr', alignItems: 'start' }}>
        <PortalSidebar />
        <main id="main" style={{ minWidth: 0, animation: 'fadeUp .35s ease-out' }}>
          {children}
        </main>
      </div>
    </div>
  );
}
