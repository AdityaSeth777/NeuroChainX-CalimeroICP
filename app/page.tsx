'use client';

import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Database, FileJson, ShieldCheck, Wallet, Brain, Code, Network, Lock, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const sections = parallaxRef.current.querySelectorAll('.parallax-section');
      
      sections.forEach((section) => {
        const distance = window.scrollY - section.getBoundingClientRect().top;
        const content = section.querySelector('.parallax-content');
        if (content) {
          (content as HTMLElement).style.transform = `translateY(${distance * 0.3}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary" ref={parallaxRef}>
      {/* Hero Section */}
      <section className="parallax-section min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 py-20 parallax-content">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8 relative">
              <Brain className="w-24 h-24 mx-auto text-primary animate-pulse" />
              <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent blur-2xl" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              AI Model Training Marketplace
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A secure, decentralized platform for trading AI training datasets using ICP smart contracts
              and advanced encryption
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link href="/marketplace">Browse Datasets</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <Link href="/upload">Upload Dataset</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="parallax-section py-20 bg-secondary/50">
        <div className="container mx-auto px-4 parallax-content">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Powered by Advanced Technology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all">
              <Database className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Secure Storage</h3>
              <p className="text-muted-foreground">
                End-to-end encrypted dataset storage using Calimero SDK
              </p>
            </Card>
            <Card className="p-6 bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all">
              <ShieldCheck className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Smart Contracts</h3>
              <p className="text-muted-foreground">
                Secure transactions powered by ICP smart contracts
              </p>
            </Card>
            <Card className="p-6 bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all">
              <FileJson className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">AI Integration</h3>
              <p className="text-muted-foreground">
                Seamless integration with PyTorch for model training
              </p>
            </Card>
            <Card className="p-6 bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all">
              <Wallet className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">ICP Payments</h3>
              <p className="text-muted-foreground">
                Native payments using Plug wallet integration
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="parallax-section py-20">
        <div className="container mx-auto px-4 parallax-content">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect Wallet</h3>
              <p className="text-muted-foreground">
                Connect your Plug wallet to start buying or selling datasets
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Upload Dataset</h3>
              <p className="text-muted-foreground">
                Upload your AI training data with secure encryption
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Train Models</h3>
              <p className="text-muted-foreground">
                Use purchased datasets to train your AI models
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Network Effect */}
      <section className="parallax-section py-20 bg-secondary/50">
        <div className="container mx-auto px-4 parallax-content">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join the AI Data Revolution
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Be part of a growing network of AI researchers and data scientists sharing
                and monetizing valuable training datasets in a secure, decentralized environment.
              </p>
              <Button size="lg" className="text-lg" asChild>
                <Link href="/marketplace">
                  <Network className="w-5 h-5 mr-2" />
                  Explore Marketplace
                </Link>
              </Button>
            </div>
            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent blur-3xl" />
                <Card className="relative bg-background/80 backdrop-blur-sm p-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <h4 className="text-3xl font-bold text-primary">100+</h4>
                      <p className="text-sm text-muted-foreground">Datasets</p>
                    </div>
                    <div className="text-center">
                      <h4 className="text-3xl font-bold text-primary">50+</h4>
                      <p className="text-sm text-muted-foreground">Contributors</p>
                    </div>
                    <div className="text-center">
                      <h4 className="text-3xl font-bold text-primary">1000+</h4>
                      <p className="text-sm text-muted-foreground">Downloads</p>
                    </div>
                    <div className="text-center">
                      <h4 className="text-3xl font-bold text-primary">24/7</h4>
                      <p className="text-sm text-muted-foreground">Support</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}