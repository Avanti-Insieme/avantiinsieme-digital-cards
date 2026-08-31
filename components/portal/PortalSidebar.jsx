'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { C } from '@/lib/theme';
import { SIDEBAR_ITEMS } from '@/lib/content';
import { useBreakpoint } from '@/lib/useBreakpoint';

export default function PortalSidebar() {
  const pathname = usePathname();
  const { isMobile } = useBreakpoint();

  const wrap = isMobile
    ? {
        background: C.white,
        borderBottom: '1px solid ' + C.line,
        padding: '12px 20px',
        display: 'flex',
        gap: '6px',
        overflowX: 'auto',
      }
    : {
        background: C.white,
        borderRight: '1px solid ' + C.line,
        padding: '20px 14px',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        position: 'sticky',
        top: '67px',
        height: 'calc(100vh - 67px)',
      };

  return (
    <nav aria-label="Portal" style={wrap}>
      {SIDEBAR_ITEMS.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? 'page' : undefined}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              width: isMobile ? 'auto' : '100%',
              whiteSpace: 'nowrap',
              fontSize: '14.5px',
              fontWeight: active ? 600 : 500,
              padding: '12px 14px',
              borderRadius: '10px',
              background: active ? C.tintBg : 'transparent',
              color: active ? C.navy : C.body,
            }}
          >
            <i className={item.icon} aria-hidden="true" style={{ width: '18px', fontSize: '14.5px' }} />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
