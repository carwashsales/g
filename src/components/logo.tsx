import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 200 200" 
      className={cn('fill-current', className)}
    >
      <g>
        <path fill="#8bc34a" d="M100 20 L30 80 L100 130 L170 80 z"></path>
        <path fill="#4caf50" d="M30 80 L100 130 L100 180 L30 130 z"></path>
        <path fill="#7cb342" d="M100 130 L170 80 L170 130 L100 180 z"></path>
      </g>
    </svg>
);

export default Logo;
