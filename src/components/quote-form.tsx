'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useState, useTransition } from 'react';
import { CalendarIcon, Loader2 } from 'lucide-react';
import { format } from "date-fns"

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
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
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Calendar } from './ui/calendar';

const FormSchema = z.object({
  name: z.string().min(1, "Your Name is required."),
  phone: z.string().min(1, "Phone Number is required."),
  serviceType: z.string({
    required_error: 'Please select a service type.',
  }),
  date: z.date({
    required_error: "A date is required.",
  }),
  zipCode: z.string().min(1, "Zip Code is required."),
});

export function QuoteForm() {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      phone: '',
      zipCode: '',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    startTransition(() => {
      // Mock submission
      console.log(data);
      toast({
        title: 'Quote Requested!',
        description: 'Thank you. We will get back to you shortly.',
      });
      form.reset();
    });
  }

  return (
    <div className="w-full max-w-md bg-[#0a2752] p-8 rounded-lg shadow-2xl">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Request a Free Quote</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Your Name" {...field} className="bg-[#1e3a6b] border-slate-600 text-white placeholder:text-gray-400 focus:ring-accent" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Phone Number" {...field} className="bg-[#1e3a6b] border-slate-600 text-white placeholder:text-gray-400 focus:ring-accent" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="serviceType"
            render={({ field }) => (
              <FormItem>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-[#1e3a6b] border-slate-600 text-white">
                      <SelectValue placeholder="Select Service Type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="house cleaning">House Cleaning</SelectItem>
                    <SelectItem value="office cleaning">Office Cleaning</SelectItem>
                    <SelectItem value="industrial cleaning">Industrial Cleaning</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal bg-[#1e3a6b] border-slate-600 text-white hover:bg-[#1e3a6b] hover:text-white",
                          !field.value && "text-gray-400"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "MM/dd/yyyy")
                        ) : (
                          <span>mm/dd/yyyy</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date < new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="zipCode"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Zip Code" {...field} className="bg-[#1e3a6b] border-slate-600 text-white placeholder:text-gray-400 focus:ring-accent" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full bg-primary hover:bg-accent" disabled={isPending}>
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              'Get a Quote'
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
