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
import { Download, FileJson } from 'lucide-react';
import { supabase } from '@/lib/supabase';

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

  useEffect(() => {
    fetchDatasets();
  }, [category, sortBy]);

  const fetchDatasets = async () => {
    let query = supabase.from('datasets').select('*');

    if (category !== 'all') {
      query = query.eq('category', category);
    }

    switch (sortBy) {
      case 'oldest':
        query = query.order('created_at', { ascending: true });
        break;
      case 'price-asc':
        query = query.order('price', { ascending: true });
        break;
      case 'price-desc':
        query = query.order('price', { ascending: false });
        break;
      default: // newest
        query = query.order('created_at', { ascending: false });
    }

    const { data, error } = await query;
    if (error) {
      console.error('Error fetching datasets:', error);
      return;
    }
    setDatasets(data || []);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dataset Marketplace</h1>

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
                <span className="font-semibold">{dataset.price} ICP</span>
                <Button variant="outline" size="sm">
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