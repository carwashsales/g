import { Home, Building, Factory, Wind, SprayCan, Sparkles, Droplets, Trash2, Car, Shrub, Construction, Hand, Scissors } from 'lucide-react';
import type { Icon as LucideIcon } from 'lucide-react';
import type { Testimonial } from '@/lib/types';

export const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#quote', label: 'Get a Quote' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: Sparkles,
    title: 'Floor cleaning',
    description: 'Comprehensive floor cleaning for all types of surfaces.',
  },
  {
    icon: Building,
    title: 'Office cleaning',
    description: 'Keeping your workspace clean, professional, and productive.',
  },
  {
    icon: Home,
    title: 'Domestic cleaning',
    description: 'Reliable and thorough cleaning for your home.',
  },
  {
    icon: Wind,
    title: 'Fumigation & pest control',
    description: 'Effective solutions to eliminate pests and ensure a healthy environment.',
  },
  {
    icon: Shrub,
    title: 'Land scaping & Gardening',
    description: 'Maintaining beautiful and healthy outdoor spaces.',
  },
  {
    icon: Car,
    title: 'Move in and Move out Cleaning',
    description: 'Ensuring a clean transition for new and vacating tenants.',
  },
  {
    icon: Hand,
    title: 'Supply of Liquid Soap',
    description: 'Providing high-quality liquid soap for your facility.',
  },
  {
    icon: Construction,
    title: 'Post construction cleaning',
    description: 'Cleaning up dust and debris after construction projects.',
  },
  {
    icon: Droplets,
    title: 'Janitorial Hygiene solutions',
    description: 'Complete hygiene solutions for restrooms and common areas.',
  },
  {
    icon: SprayCan,
    title: 'Carpet & upholstery cleaning',
    description: 'Deep cleaning for carpets and furniture to restore their look.',
  },
  {
    icon: Scissors,
    title: 'Compound slashing',
    description: 'Clearing and maintaining overgrown compounds and large areas.',
  },
  {
    icon: Factory,
    title: 'Office support',
    description: 'Providing support services to keep your office running smoothly.',
  },
  {
    icon: Trash2,
    title: 'After Events Cleaning',
    description: 'Quick and efficient cleanup after your events.',
  },
  {
    icon: Sparkles,
    title: 'Deep cleaning',
    description: 'Intensive and detailed cleaning for a pristine finish.',
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah L.',
    role: 'Homeowner',
    quote: 'E & G Cleannest transformed my home! The team was professional, thorough, and incredibly efficient. I couldn\'t be happier with the results.',
    avatarId: 'avatar1',
  },
  {
    name: 'David C.',
    role: 'Office Manager',
    quote: 'Our office has never looked better. The attention to detail is amazing. Highly recommend their commercial cleaning services.',
    avatarId: 'avatar3',
  },
  {
    name: 'Maria G.',
    role: 'Property Manager',
    quote: 'We use E & G Cleannest for all our move-in/move-out cleanings. They are reliable, consistent, and always do a fantastic job.',
    avatarId: 'avatar2',
  },
];

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: 'What cleaning services do you offer?',
    answer: 'We offer a wide range of services including floor, office, domestic, fumigation, landscaping, post-construction cleaning, and more. Check our services section for a full list.',
  },
  {
    question: 'Are your cleaning products eco-friendly?',
    answer: 'Yes, we prioritize the use of eco-friendly and non-toxic cleaning products that are safe for your family, pets, and the environment.',
  },
  {
    question: 'How is the pricing determined?',
    answer: 'Our pricing is based on the type of service, the size of the space, and the level of cleaning required. You can use our free quote form to get an instant estimate.',
  },
  {
    question: 'Do I need to be home during the cleaning?',
    answer: 'No, you do not need to be home. Most of our clients provide us with a key or access code. All our staff are thoroughly vetted and trustworthy.',
  },
  {
    question: 'What is your service area?',
    answer: 'We primarily serve the Kampala, Uganda area. You can view our service area map on our website for more specific locations.',
  },
];
