import Image from 'next/image';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => (
  <Image
    src="/logo.png"
    alt="E & G Cleanest Facilities Ltd Logo"
    width={200}
    height={200}
    className={cn(className)}
  />
);

export default Logo;
