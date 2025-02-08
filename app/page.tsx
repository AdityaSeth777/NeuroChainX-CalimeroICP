'use client';

import { Button } from '@/components/ui/button';
import { Database, FileJson, ShieldCheck, Wallet } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAccount } from 'wagmi';
import { WalletConnect } from '@/components/WalletConnect';
import { ICPConnectButton } from '@/components/ICPConnectButton';

export default function Home() {
  const router = useRouter();
  const { isConnected: isMetaMaskConnected } = useAccount();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Model Training Marketplace
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              A secure, decentralized platform for trading AI training datasets
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => handleNavigation('/marketplace')}
              >
                Browse Datasets
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => handleNavigation('/upload')}
              >
                Upload Dataset
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="feature-card p-6">
                <feature.icon className="feature-icon w-8 h-8 mb-4" />
                <h3 className="feature-title font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2025 AI Model Training Marketplace
            </p>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link href="/marketplace" className="text-sm text-muted-foreground hover:text-foreground">
                    Marketplace
                  </Link>
                </li>
                <li>
                  <Link href="/upload" className="text-sm text-muted-foreground hover:text-foreground">
                    Upload
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </main>
  );
}

const features = [
  {
    icon: Database,
    title: "Secure Storage",
    description: "End-to-end encrypted dataset storage"
  },
  {
    icon: ShieldCheck,
    title: "Smart Contracts",
    description: "Secure transactions with smart contracts"
  },
  {
    icon: FileJson,
    title: "AI Integration",
    description: "Seamless integration with AI models"
  },
  {
    icon: Wallet,
    title: "Multi-Wallet Support",
    description: "Support for multiple blockchain wallets"
  }
];