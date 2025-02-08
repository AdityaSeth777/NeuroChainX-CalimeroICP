import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import { cn } from '@/lib/utils';
import { LayoutWrapper } from './LayoutWrapper';
import { Preloader } from '@/components/Preloader';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NeuroChainX',
  description: 'A decentralized marketplace for AI training datasets built with Next.js, Calimero SDK, and Internet Computer Protocol (ICP). The platform leverages ICPxs robust infrastructure for secure transactions, Calimero for encrypted data storage, and supports over 600 wallets via Coinbase and WalletConnect.',
  icons: {
    icon: './../assets/logo-ncai.jpeg', // Add your favicon file in the public directory
  },
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
          <Preloader />
          <LayoutWrapper>{children}</LayoutWrapper>
        </Providers>
      </body>
    </html>
  );
}