'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { Home, Upload } from 'lucide-react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useIC } from '@/lib/hooks/use-ic';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  title: z.string().min(2).max(100),
  description: z.string().min(10).max(1000),
  category: z.string(),
  price: z.string().regex(/^\d+(\.\d{1,2})?$/),
  file: z.instanceof(File),
});

export default function UploadPage() {
  const { registerDataset } = useIC();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Convert price to BigInt (ICP uses e8s - 8 decimal places)
      const priceE8s = BigInt(Math.floor(parseFloat(values.price) * 100000000));
      
      // Upload file to IC asset canister (simplified for demo)
      const fileUrl = 'ic://' + Date.now();

      // Register dataset on IC
      const result = await registerDataset(
        values.title,
        values.description,
        priceE8s,
        fileUrl,
        values.category
      );

      toast({
        title: "Success!",
        description: "Dataset uploaded successfully.",
      });

      form.reset();
    } catch (error) {
      console.error('Error uploading dataset:', error);
      toast({
        title: "Error",
        description: "Failed to upload dataset. Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Upload Dataset</h1>
        <Button variant="outline" asChild>
          <Link href="/">
            <Home className="w-4 h-4 mr-2" />
            Home
          </Link>
        </Button>
      </div>

      <Card className="max-w-2xl mx-auto p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dataset Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter dataset title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your dataset..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="image">Image Data</SelectItem>
                      <SelectItem value="text">Text Data</SelectItem>
                      <SelectItem value="tabular">Tabular Data</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price (ICP)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      step="0.01"
                      placeholder="Enter price in ICP"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="file"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dataset File</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      onChange={(e) =>
                        field.onChange(e.target.files ? e.target.files[0] : null)
                      }
                    />
                  </FormControl>
                  <FormDescription>
                    Upload your dataset file (max size: 1GB)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              <Upload className="w-4 h-4 mr-2" />
              Upload Dataset
            </Button>
          </form>
        </Form>
      </Card>
    </main>
  );
}