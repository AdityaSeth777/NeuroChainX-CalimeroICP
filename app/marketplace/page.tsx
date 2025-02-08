'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Download, FileJson, Home } from 'lucide-react';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabase';
import { processPayment } from '@/lib/payment';

interface Dataset {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  owner_id: string;
  created_at: string;
}

export default function Marketplace() {
  const [datasets, setDatasets] = useState<Dataset[]>([]);
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [processing, setProcessing] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchDatasets();
  }, [category, sortBy]);

  const fetchDatasets = async () => {
    try {
      let query = supabase.from('datasets').select('*');

      if (category !== 'all') {
        query = query.eq('category', category);
      }

      switch (sortBy) {
        case 'newest':
          query = query.order('created_at', { ascending: false });
          break;
        case 'oldest':
          query = query.order('created_at', { ascending: true });
          break;
        case 'price-asc':
          query = query.order('price', { ascending: true });
          break;
        case 'price-desc':
          query = query.order('price', { ascending: false });
          break;
      }

      const { data, error } = await query;
      
      if (error) throw error;
      setDatasets(data || []);
    } catch (error) {
      console.error('Error fetching datasets:', error);
      toast({
        title: "Error",
        description: "Failed to fetch datasets. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handlePurchase = async (datasetId: string, price: number) => {
    try {
      setProcessing(datasetId);
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast({
          title: "Error",
          description: "Please connect your wallet first.",
          variant: "destructive",
        });
        return;
      }

      const result = await processPayment(datasetId, price, user.id);

      if (result.success) {
        toast({
          title: "Success!",
          description: "Dataset purchased successfully. You can now access the data.",
        });
      } else {
        throw new Error(result.error || 'Payment failed');
      }
    } catch (error) {
      console.error('Error purchasing dataset:', error);
      toast({
        title: "Error",
        description: "Failed to purchase dataset. Please try again.",
        variant: "destructive",
      });
    } finally {
      setProcessing(null);
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <Button variant="outline" asChild>
          <Link href="/">
            <Home className="w-4 h-4 mr-2" />
            Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Dataset Marketplace</h1>
      </div>

      <div className="flex gap-4 mb-8">
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="image">Image Data</SelectItem>
            <SelectItem value="text">Text Data</SelectItem>
            <SelectItem value="tabular">Tabular Data</SelectItem>
          </SelectContent>
        </Select>

        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="oldest">Oldest First</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {datasets.length > 0 ? (
          datasets.map((dataset) => (
            <Card key={dataset.id} className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <FileJson className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="font-semibold">{dataset.title}</h3>
                  <p className="text-sm text-muted-foreground">{dataset.category}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {dataset.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="font-semibold">
                  {dataset.price} ICP
                </span>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handlePurchase(dataset.id, dataset.price)}
                  disabled={processing === dataset.id}
                >
                  <Download className="w-4 h-4 mr-2" />
                  {processing === dataset.id ? 'Processing...' : 'Purchase'}
                </Button>
              </div>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center py-8 text-muted-foreground">
            No datasets available
          </div>
        )}
      </div>
    </main>
  );
}