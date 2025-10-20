
import Link from 'next/link';
import { Button } from './ui/button';
import { Menu, Search, MapPin, Mail, Phone, Globe, Facebook, Linkedin, Twitter, Rss } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from './ui/sheet';
import Logo from './logo';
import { Input } from './ui/input';

const navLinks = [
  { href: '#', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Service' },
  { href: '#faq', label: 'Pages' },
  { href: '#testimonials', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top bar */}
      <div className="bg-secondary/30 text-sm text-muted-foreground">
        <div className="container px-4 md:px-6 h-10 flex items-center overflow-hidden">
          <div className="w-full flex items-center justify-center md:justify-between">
            {/* Desktop View */}
            <div className="hidden md:flex items-center gap-6 w-full">
              <div className="flex items-center gap-2">
                <span>Follow Us:</span>
                <Link href="#" className="hover:text-primary"><Facebook size={16} /></Link>
                <Link href="#" className="hover:text-primary"><Linkedin size={16} /></Link>
                <Link href="#" className="hover:text-primary"><Twitter size={16} /></Link>
                <Link href="#" className="hover:text-primary"><Rss size={16} /></Link>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <span>+256 705 027 536</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <span>+256 776 126 334</span>
              </div>
            </div>
             <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                <span>P.O.BOX 190832, KAMPALA, (U)</span>
              </div>
               <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <span>egcleannestfacilities@gmail.com</span>
              </div>
              <div className="flex items-center gap-1">
                <Globe size={16} />
                <span>English</span>
              </div>
            </div>

            {/* Mobile Marquee */}
            <div className="md:hidden flex-shrink-0 whitespace-nowrap">
              <div className="inline-block animate-marquee">
                <span className="inline-flex items-center gap-6 px-6">
                  <span className="flex items-center gap-2">
                    <span>Follow Us:</span>
                    <Link href="#" className="hover:text-primary"><Facebook size={16} /></Link>
                    <Link href="#" className="hover:text-primary"><Linkedin size={16} /></Link>
                    <Link href="#" className="hover:text-primary"><Twitter size={16} /></Link>
                    <Link href="#" className="hover:text-primary"><Rss size={16} /></Link>
                  </span>
                  <span className="flex items-center gap-2">
                    <Phone size={16} className="text-primary" />
                    <span>+256 705 027 536</span>
                  </span>
                   <span className="flex items-center gap-2">
                    <Phone size={16} className="text-primary" />
                    <span>+256 776 126 334</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={16} className="text-primary" />
                    <span>P.O.BOX 190832, KAMPALA, (U)</span>
                  </span>
                   <span className="flex items-center gap-2">
                    <Mail size={16} className="text-primary" />
                    <span>egcleannestfacilities@gmail.com</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Globe size={16} />
                    <span>English</span>
                  </span>
                </span>
              </div>
              {/* Duplicate for seamless loop */}
              <div className="inline-block animate-marquee">
                <span className="inline-flex items-center gap-6 px-6">
                  <span className="flex items-center gap-2">
                    <span>Follow Us:</span>
                    <Link href="#" className="hover:text-primary"><Facebook size={16} /></Link>
                    <Link href="#" className="hover:text-primary"><Linkedin size={16} /></Link>
                    <Link href="#" className="hover:text-primary"><Twitter size={16} /></Link>
                    <Link href="#" className="hover:text-primary"><Rss size={16} /></Link>
                  </span>
                  <span className="flex items-center gap-2">
                    <Phone size={16} className="text-primary" />
                    <span>+256 705 027 536</span>
                  </span>
                   <span className="flex items-center gap-2">
                    <Phone size={16} className="text-primary" />
                    <span>+256 776 126 334</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={16} className="text-primary" />
                    <span>P.O.BOX 190832, KAMPALA, (U)</span>
                  </span>
                   <span className="flex items-center gap-2">
                    <Mail size={16} className="text-primary" />
                    <span>egcleannestfacilities@gmail.com</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Globe size={16} />
                    <span>English</span>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <div className="container px-4 md:px-6 flex h-20 items-center">
        <Link href="#" className="mr-6 flex items-center space-x-2">
          <Logo className="h-8 w-auto" />
          <span className="font-bold text-lg">E & G Cleannest Facilities</span>
        </Link>
        
        <nav className="hidden items-center gap-6 text-sm lg:flex flex-1 justify-center">
          {navLinks.map((link, index) => (
            <Link
              key={`${link.label}-${index}`}
              href={link.href}
              className="transition-colors hover:text-primary font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-2 sm:space-x-4">
           <div className="flex items-center relative">
             <Search className="h-5 w-5 text-muted-foreground" />
             <Input placeholder="Search Products..." className="hidden md:block pl-9 bg-secondary/30 border-0" />
           </div>

          {/* Mobile Nav */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex items-center space-x-2 mb-6">
                <Logo className="h-8 w-auto" />
                <span className="font-bold text-xl">E & G Cleannest Facilities</span>
              </div>
              <div className="flex flex-col space-y-2">
                {navLinks.map((link, index) => (
                  <SheetClose asChild key={`${link.label}-${index}-mobile`}>
                    <Link
                      href={link.href}
                      className="text-foreground/80 hover:text-primary rounded-md p-2 text-lg"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

    
