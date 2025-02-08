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
import { Home, Upload, FileUp } from 'lucide-react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  title: z.string().min(2).max(100),
  description: z.string().min(10).max(1000),
  category: z.string(),
  price: z.string().regex(/^\d+(\.\d{1,2})?$/),
  file: z.instanceof(File),
});

export default function UploadPage() {
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast({
          title: "Error",
          description: "Please connect your wallet first.",
          variant: "destructive",
        });
        return;
      }

      const fileExt = values.file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
      const { data: fileData, error: fileError } = await supabase.storage
        .from('datasets')
        .upload(fileName, values.file);

      if (fileError) throw fileError;

      const { error: datasetError } = await supabase
        .from('datasets')
        .insert({
          title: values.title,
          description: values.description,
          category: values.category,
          price: parseFloat(values.price),
          owner_id: user.id,
          file_url: fileData?.path || '',
        });

      if (datasetError) throw datasetError;

      toast({
        title: "Success!",
        description: "Dataset uploaded successfully.",
      });

      form.reset();
      router.push('/marketplace');
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
        <Button variant="outline" asChild>
          <Link href="/">
            <Home className="w-4 h-4 mr-2" />
            Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Upload Dataset</h1>
      </div>

      <Card className="max-w-2xl mx-auto p-8 hover:shadow-lg transition-all duration-300">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dataset Title</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Enter dataset title" 
                      {...field}
                      className="hover:border-primary/50 focus:border-primary transition-colors"
                    />
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
                      className="resize-none hover:border-primary/50 focus:border-primary transition-colors"
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
                      <SelectTrigger className="hover:border-primary/50 focus:border-primary transition-colors">
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
                      className="hover:border-primary/50 focus:border-primary transition-colors"
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
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                      <FileUp className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                      <Input
                        type="file"
                        onChange={(e) =>
                          field.onChange(e.target.files ? e.target.files[0] : null)
                        }
                        className="hidden"
                        id="file-upload"
                      />
                      <label 
                        htmlFor="file-upload"
                        className="cursor-pointer text-muted-foreground hover:text-primary transition-colors"
                      >
                        Click to upload or drag and drop
                      </label>
                    </div>
                  </FormControl>
                  <FormDescription>
                    Upload your dataset file (max size: 1GB)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full hover:scale-105 transition-transform"
            >
              <Upload className="w-4 h-4 mr-2" />
              Upload Dataset
            </Button>
          </form>
        </Form>
      </Card>
    </main>
  );
}