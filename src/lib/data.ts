import { Home, Building, Factory, Wind, SprayCan, Sparkles } from 'lucide-react';
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
    icon: Home,
    title: 'Residential Cleaning',
    description: 'Complete home cleaning services, from apartments to large houses. We make your home sparkle.',
  },
  {
    icon: Building,
    title: 'Commercial Cleaning',
    description: 'Professional cleaning for offices, retail spaces, and other commercial establishments.',
  },
  {
    icon: Factory,
    title: 'Industrial Cleaning',
    description: 'Specialized cleaning solutions for factories, warehouses, and industrial facilities.',
  },
  {
    icon: Wind,
    title: 'Air Duct Cleaning',
    description: 'Improve your indoor air quality with our thorough air duct and ventilation cleaning.',
  },
  {
    icon: SprayCan,
    title: 'Deep Cleaning & Disinfection',
    description: 'Intensive cleaning and disinfection services for a healthier environment.',
  },
  {
    icon: Sparkles,
    title: 'Post-Construction Cleaning',
    description: 'We handle the dust and debris after your construction or renovation project is complete.',
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah L.',
    role: 'Homeowner',
    quote: 'Neatsp transformed my home! The team was professional, thorough, and incredibly efficient. I couldn\'t be happier with the results.',
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
    quote: 'We use Neatsp for all our move-in/move-out cleanings. They are reliable, consistent, and always do a fantastic job.',
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
    answer: 'We offer a wide range of services including residential, commercial, industrial, deep cleaning, and post-construction cleaning. Check out our services section for more details.',
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
    answer: 'We primarily serve the greater New York area. You can view our service area map on our website for more specific locations.',
  },
];
