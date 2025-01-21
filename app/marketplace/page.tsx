'use client';

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

export default function Marketplace() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dataset Marketplace</h1>

      {/* Filters */}
      <div className="flex gap-4 mb-8">
        <Select defaultValue="all">
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

        <Select defaultValue="newest">
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
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Card key={item} className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <FileJson className="w-8 h-8 text-primary" />
              <div>
                <h3 className="font-semibold">Sample Dataset {item}</h3>
                <p className="text-sm text-muted-foreground">Image Classification</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              High-quality labeled dataset for training computer vision models.
              Contains 10,000 images across 100 categories.
            </p>
            <div className="flex justify-between items-center">
              <span className="font-semibold">5.0 ICP</span>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Purchase
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}