'use client';

import { ICPConnectButton } from '@/components/ICPConnectButton';

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed top-4 right-4 z-50">
        <ICPConnectButton />
      </div>
      {children}
    </>
  );
}