'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Database, FileJson, ShieldCheck, Wallet } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Decentralized AI Model Training Marketplace
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A secure platform for trading AI training datasets using ICP smart contracts
            and advanced encryption
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/marketplace">Browse Datasets</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/upload">Upload Dataset</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="p-6">
            <Database className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Secure Data Storage</h3>
            <p className="text-muted-foreground">
              Encrypted dataset storage using Calimero SDK ensuring data privacy and
              security
            </p>
          </Card>
          <Card className="p-6">
            <ShieldCheck className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Smart Contracts</h3>
            <p className="text-muted-foreground">
              Secure and transparent transactions powered by ICP smart contracts
            </p>
          </Card>
          <Card className="p-6">
            <FileJson className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">AI Model Training</h3>
            <p className="text-muted-foreground">
              Seamless integration with PyTorch for efficient model training
            </p>
          </Card>
          <Card className="p-6">
            <Wallet className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">ICP Payments</h3>
            <p className="text-muted-foreground">
              Simple and secure payments using Internet Computer Protocol
            </p>
          </Card>
        </div>
      </section>
    </main>
  );
}