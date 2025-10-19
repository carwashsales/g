'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useState, useTransition } from 'react';
import { Loader2, Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { generateTailoredQuote, GenerateTailoredQuoteInput } from '@/ai/flows/generate-tailored-quote';
import { useToast } from '@/hooks/use-toast';

const FormSchema = z.object({
  serviceCategory: z.string({
    required_error: 'Please select a service category.',
  }),
  spaceSize: z.enum(['small', 'medium', 'large']),
  serviceLevel: z.enum(['quick', 'standard', 'deep']),
});

export function QuoteForm() {
  const [isPending, startTransition] = useTransition();
  const [generatedQuote, setGeneratedQuote] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      serviceCategory: 'house cleaning',
      spaceSize: 'medium',
      serviceLevel: 'standard',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setGeneratedQuote(null);
    startTransition(async () => {
      try {
        const result = await generateTailoredQuote(data as GenerateTailoredQuoteInput);
        setGeneratedQuote(result.quote);
      } catch (error) {
        console.error('Failed to generate quote:', error);
        toast({
          variant: 'destructive',
          title: 'Error',
          description: 'Failed to generate a quote. Please try again later.',
        });
      }
    });
  }

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl md:text-3xl font-headline">AI-Powered Quote Generator</CardTitle>
        <CardDescription>Get an instant quote for your cleaning needs. Our AI will tailor a price just for you.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="serviceCategory"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Category</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="house cleaning">House Cleaning</SelectItem>
                      <SelectItem value="office cleaning">Office Cleaning</SelectItem>
                      <SelectItem value="industrial cleaning">Industrial Cleaning</SelectItem>
                      <SelectItem value="post-construction cleaning">Post-Construction</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="spaceSize"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Approximate Space Size</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select the size of your space" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="small">Small (e.g., 1-2 rooms, studio)</SelectItem>
                      <SelectItem value="medium">Medium (e.g., 3-4 rooms, small house)</SelectItem>
                      <SelectItem value="large">Large (e.g., 5+ rooms, large house/office)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="serviceLevel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Desired Service Level</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select the level of cleaning" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="quick">Quick Clean</SelectItem>
                      <SelectItem value="standard">Standard Clean</SelectItem>
                      <SelectItem value="deep">Deep Clean</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating Quote...
                </>
              ) : (
                'Generate Quote'
              )}
            </Button>
          </form>
        </Form>
        {generatedQuote && (
          <div className="mt-8 p-6 bg-accent/30 border border-primary/20 rounded-lg animate-in fade-in-50 duration-500">
            <h3 className="text-lg font-semibold flex items-center gap-2 font-headline">
              <Sparkles className="h-5 w-5 text-primary" />
              Your Tailored Quote
            </h3>
            <p className="mt-2 text-foreground/80">{generatedQuote}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
