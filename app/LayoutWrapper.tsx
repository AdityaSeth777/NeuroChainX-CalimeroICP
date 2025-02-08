'use client';

import { DynamicWidget } from '@/components/DynamicWidget';

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed top-4 right-4 z-50">
        <DynamicWidget />
      </div>
      {children}
    </>
  );
}