import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => (
  <Link href="/" className={cn('relative block', className)}>
    <Image
      src="/logo.png"
      alt="E & G Cleannest Facilities Ltd Logo"
      width={80}
      height={80}
      className="object-contain"
      priority
    />
  </Link>
);

export default Logo;
