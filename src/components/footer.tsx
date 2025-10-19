import { Zap, Twitter, Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondary/70 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Zap className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg font-headline">CleanNest Hub</span>
            </Link>
            <p className="text-muted-foreground">Professional cleaning services for a sparkling clean space.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram /></Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold font-headline mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="#quote" className="text-muted-foreground hover:text-primary transition-colors">Get a Quote</Link></li>
              <li><Link href="#faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold font-headline mb-4">Contact Us</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>egcleannestfacilities@gmail.com</li>
              <li>Kampala, Uganda</li>
            </ul>
          </div>
           <div>
            <h3 className="font-semibold font-headline mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} CleanNest Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
