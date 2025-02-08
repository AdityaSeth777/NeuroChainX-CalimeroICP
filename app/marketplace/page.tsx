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
import { useIC } from '@/lib/hooks/use-ic';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';

interface Dataset {
  id: string;
  title: string;
  description: string;
  price: bigint;
  category: string;
  owner_id: string;
  created_at: string;
}

export default function Marketplace() {
  const [datasets, setDatasets] = useState<Dataset[]>([]);
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const { actor, purchaseDataset } = useIC();
  const { toast } = useToast();

  useEffect(() => {
    fetchDatasets();
  }, [category, sortBy, actor]);

  const fetchDatasets = async () => {
    if (!actor) return;
    try {
      const data = await actor.list_datasets();
      setDatasets(data);
    } catch (error) {
      console.error('Error fetching datasets:', error);
    }
  };

  const handlePurchase = async (datasetId: string, price: bigint) => {
    try {
      await purchaseDataset(datasetId);
      toast({
        title: "Success!",
        description: "Dataset purchased successfully.",
      });
    } catch (error) {
      console.error('Error purchasing dataset:', error);
      toast({
        title: "Error",
        description: "Failed to purchase dataset. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dataset Marketplace</h1>
        <Button variant="outline" asChild>
          <Link href="/">
            <Home className="w-4 h-4 mr-2" />
            Home
          </Link>
        </Button>
      </div>

      {/* Filters */}
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

      {/* Dataset Grid */}
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
                  {Number(dataset.price) / 100000000} ICP
                </span>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handlePurchase(dataset.id, dataset.price)}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Purchase
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