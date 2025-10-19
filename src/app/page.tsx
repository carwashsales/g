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
import { faqs, services, testimonials } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { QuoteForm } from '@/components/quote-form';
import ServiceMap from '@/components/service-map';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');
  const contactImage = PlaceHolderImages.find((img) => img.id === 'contact');
  
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
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
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 container px-4 md:px-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 font-headline">
              Impeccable Cleaning, Every Time.
            </h1>
            <p className="max-w-[700px] mx-auto text-lg md:text-xl text-gray-200 mb-8">
              E & G Cleannest Facilities Ltd offers premium cleaning solutions for homes and businesses. Experience a new level of clean.
            </p>
            <Button size="lg" asChild>
              <Link href="#quote">
                Get Your Instant Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
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
                  <div className="p-4 bg-accent rounded-full mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 font-headline">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* AI Quote Generator Section */}
        <section id="quote" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <QuoteForm />
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-12 md:py-24 bg-secondary/50">
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
                {testimonials.map((testimonial: any, index) => {
                  const avatarImage = PlaceHolderImages.find(img => img.id === testimonial.avatarId);
                  return (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1 h-full">
                        <Card className="h-full flex flex-col bg-card">
                          <CardContent className="p-6 flex-1 flex flex-col justify-between">
                            <blockquote className="italic text-muted-foreground mb-6">"{testimonial.quote}"</blockquote>
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
        <section id="faq" className="py-12 md:py-24">
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
        <section id="contact" className="py-12 md:py-24 bg-secondary/50">
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
