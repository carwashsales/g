
import Image from 'next/image';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { faqs, services } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { QuoteForm } from '@/components/quote-form';
import ServiceMap from '@/components/service-map';
import type { Testimonial } from '@/lib/types';
import VideoModal from '@/components/video-modal';
import { PlayCircle } from 'lucide-react';
import { testimonials } from '@/lib/data';


export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-cleaner');
  const contactImage = PlaceHolderImages.find((img) => img.id === 'contact');
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-video');
  
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="container relative z-20 grid lg:grid-cols-5 gap-8 items-center min-h-[80vh] py-20 px-4 md:px-6">
            <div className="lg:col-span-3 space-y-6">
              <p className="font-semibold text-sm tracking-widest text-primary uppercase">■ CLEANER COMPANY</p>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                "Your Hygiene is Our Priority"
              </h1>
              <p className="max-w-[600px] text-gray-300 text-lg">
              We offer professional, high-quality cleaning services for your home and office. Our team is dedicated to providing you with a clean and healthy environment.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Our Best Offers
              </Button>
            </div>
            
            <div className="lg:col-span-2 w-full">
              <QuoteForm />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 md:py-16 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative">
                {aboutImage && (
                  <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    width={550}
                    height={550}
                    className="rounded-lg object-cover w-full aspect-square"
                    data-ai-hint={aboutImage.imageHint}
                  />
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                  <VideoModal videoUrl="https://www.youtube.com/embed/XMWYZ-uZjnQ">
                    <button className="group">
                      <PlayCircle className="h-20 w-20 text-white/70 backdrop-blur-sm rounded-full group-hover:text-white transition-colors group-hover:scale-110" />
                    </button>
                  </VideoModal>
                </div>
              </div>
              <div className="space-y-4">
                <p className="font-semibold text-sm tracking-widest text-primary uppercase">■ CLEANER FACTORY</p>
                <h2 className="text-3xl md:text-4xl font-bold font-headline">
                  Cleaning <span className="relative inline-block">Mixture<svg className="absolute bottom-0 left-0 w-full h-2 text-green-400" viewBox="0 0 100 8" preserveAspectRatio="none"><path d="M0,4 C25,8 75,0 100,4" stroke="currentColor" strokeWidth="2" fill="none"/></svg></span> From System Cleaner Delivers.
                </h2>
                <p className="text-muted-foreground">
                  Fusce egestas viverra libero eu elementum. Maecenas sit amet lorem nec eros ullamcorper Vivamus finibus lacinia erat, tristique ligula odio maximus ultricies fermentum egestas.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center pt-4">
                  <div>
                    <p className="text-4xl font-bold">200+</p>
                    <p className="text-muted-foreground text-sm">Satisfied Customers</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold">87+</p>
                    <p className="text-muted-foreground text-sm">Building Cleaned</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold">69+</p>
                    <p className="text-muted-foreground text-sm">Clever Employees</p>
                  </div>
                </div>
                <Button>Learn More About Us</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-12 md:py-24 bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Services</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                We provide a wide range of professional cleaning services to meet your specific needs.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="flex flex-col items-center text-center p-6 bg-card hover:shadow-xl transition-shadow duration-300">
                  <div className="p-4 bg-primary/10 rounded-full mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 font-headline">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">What Our Clients Say</h2>
              <p className="text-muted-foreground mt-2">
                We are proud of the feedback from our happy customers.
              </p>
            </div>
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full max-w-4xl mx-auto"
            >
              <CarouselContent>
                {testimonials.map((testimonial: Testimonial, index) => {
                  const avatarImage = PlaceHolderImages.find(img => img.id === testimonial.avatarId);
                  return (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1 h-full">
                        <Card className="h-full bg-card">
                          <CardContent className="p-6 flex flex-col justify-between h-full">
                            <blockquote className="italic text-muted-foreground mb-6 flex-grow">"{testimonial.quote}"</blockquote>
                            <div className="flex items-center">
                              <Avatar className="h-12 w-12 mr-4">
                                {avatarImage && <AvatarImage src={avatarImage.imageUrl} alt={testimonial.name} data-ai-hint={avatarImage.imageHint} />}
                                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-semibold">{testimonial.name}</p>
                                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:inline-flex" />
              <CarouselNext className="hidden sm:inline-flex" />
            </Carousel>
          </div>
        </section>

        {/* Map and FAQ Section */}
        <section id="faq" className="py-12 md:py-24 bg-secondary/50">
          <div className="container grid lg:grid-cols-2 gap-12 items-start px-4 md:px-6">
            <div>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Service Area</h2>
                <p className="text-muted-foreground mt-2">We proudly serve Kampala, Uganda and surrounding areas.</p>
              </div>
              <ServiceMap />
            </div>
            <div>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Frequently Asked Questions</h2>
                <p className="text-muted-foreground mt-2">Find answers to common questions about our services.</p>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="font-semibold">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <Card>
              <div className="grid lg:grid-cols-2">
                <div className="p-8">
                  <h2 className="text-3xl md:text-4xl font-bold font-headline">Get In Touch</h2>
                  <p className="text-muted-foreground mt-2 mb-8">
                    Have questions or need a custom solution? Send us a message and we'll get back to you shortly.
                  </p>
                  <form action="mailto:egcleannestfacilities@gmail.com" method="post" encType="text/plain" className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input name="name" placeholder="Your Name" required />
                      <Input name="email" type="email" placeholder="Your Email" required />
                    </div>
                    <Input name="subject" placeholder="Subject" required />
                    <Textarea name="body" placeholder="Your Message" rows={5} required />
                    <Button type="submit" className="w-full sm:w-auto">Send Message</Button>
                  </form>
                </div>
                <div className="hidden lg:block relative">
                   {contactImage && (
                    <Image 
                      src={contactImage.imageUrl} 
                      alt={contactImage.description} 
                      fill 
                      className="object-cover rounded-r-lg" 
                      data-ai-hint={contactImage.imageHint}
                    />
                   )}
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
