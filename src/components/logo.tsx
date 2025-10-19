import * as React from 'react';

const Logo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={80}
    height={80}
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <style>
        {
          '.logo-text { font-family: "Impact", "Arial Black", sans-serif; font-weight: bold; fill: #00529b; }'
        }
      </style>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="1" dy="1" stdDeviation="1" floodColor="#000000" floodOpacity="0.2" />
      </filter>
    </defs>

    <g filter="url(#shadow)">
      {/* Outer Circle */}
      <circle cx="50" cy="50" r="48" fill="white" stroke="#00529b" strokeWidth="3" />

      {/* Inner Design */}
      <path
        d="M25,65 C35,60 65,60 75,65 L78,50 L60,40 L50,45 L40,40 L22,50 Z"
        fill="#00aef0"
      />
      
      {/* Houses */}
      <path d="M30 50 L45 40 L45 55 L30 60 Z" fill="#00529b" />
      <path d="M70 50 L55 40 L55 55 L70 60 Z" fill="#00529b" />
      
      {/* Windows */}
      <rect x="35" y="45" width="3" height="3" fill="white" />
      <rect x="40" y="45" width="3" height="3" fill="white" />
      <rect x="57" y="45" width="3" height="3" fill="white" />
      <rect x="62" y="45" width="3" height="3" fill="white" />

      {/* Stars */}
      <path d="M48 35 l2 4 4 -2 -2 4 2 4 -4 -2 -4 2 2 -4 -2-4 4 2z" fill="white" />
      <path d="M28 38 l1 2 2 -1 -1 2 1 2 -2 -1 -2 1 1 -2 -1 -2 2 1z" fill="white" />
      <path d="M68 38 l1 2 2 -1 -1 2 1 2 -2 -1 -2 1 1 -2 -1 -2 2 1z" fill="white" />

      {/* Text E & G CLEANNEST */}
      <path
        d="M15,70 h70 v-8 h-70 v8"
        fill="#00529b"
        stroke="#00529b"
        strokeWidth="1"
      />
       <text
        x="50"
        y="67"
        textAnchor="middle"
        className="logo-text"
        fontSize="8"
        fill="white"
        letterSpacing="0.5"
      >
        E & G CLEANNEST
      </text>

      {/* Text FACILITIES LTD */}
      <path id="curve" d="M 25,80 A 25 25 0 0 1 75,80" fill="none" />
      <text
        dy="-2"
        textAnchor="middle"
        className="logo-text"
        fontSize="7"
      >
        <textPath href="#curve" startOffset="50%">
          FACILITIES LTD
        </textPath>
      </text>
    </g>
  </svg>
);

export default Logo;
