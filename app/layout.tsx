import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import { cn } from '@/lib/utils';
import dynamic from 'next/dynamic';

const inter = Inter({ subsets: ['latin'] });

// Dynamically import the DynamicWidget with no SSR
const DynamicWidget = dynamic(
  () => import('@/components/DynamicWidget').then(mod => mod.DynamicWidget),
  { ssr: false }
);

export const metadata: Metadata = {
  title: 'AI Model Training Marketplace',
  description: 'Decentralized marketplace for AI training datasets',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "min-h-screen bg-background")}>
        <Providers>
          <div className="fixed top-4 right-4 z-50">
            <DynamicWidget />
          </div>
          {children}
        </Providers>
      </body>
    </html>
  );
}