/* ============================================================
   Logo Component — SVG recreation of the iQLaunch wordmark
   ============================================================ */
import React from 'react';

interface LogoProps {
  color?: string;
  height?: number;
  className?: string;
}

export default function Logo({ color = 'currentColor', height = 32, className }: LogoProps) {
  const aspectRatio = 5.2;
  const width = height * aspectRatio;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 260 50"
      width={width}
      height={height}
      fill={color}
      className={className}
      aria-label="iQLaunch"
      role="img"
    >
      {/* "i" */}
      <circle cx="8" cy="12" r="3" />
      <rect x="5.5" y="18" width="5" height="20" rx="0.5" />

      {/* "Q" — orbital circle */}
      <circle cx="32" cy="28" r="14" fill="none" stroke={color} strokeWidth="4.5" />
      
      {/* Rocket launching from Q at ~45° */}
      <g transform="translate(42, 18) rotate(-45)">
        <path d="M0,0 L-3,8 L0,6.5 L3,8 Z" />
        <rect x="-1" y="6" width="2" height="3" opacity="0.6" />
      </g>

      {/* "L" */}
      <path d="M60,10 L60,38 L78,38 L78,33.5 L65,33.5 L65,10 Z" />

      {/* "a" */}
      <path d="M88,22 C84,22 81,25.5 81,29.5 C81,33.5 84,37 88,37 L88,37 C90,37 92,36 93,34.5 L93,38 L98,38 L98,29 C98,25 95,22 91,22 L88,22 Z M89,26.5 C92,26.5 93.5,28.5 93.5,30.5 C93.5,32.5 92,34 89.5,34 C87,34 85.5,32 85.5,30 C85.5,28 87,26.5 89,26.5 Z" />

      {/* "u" */}
      <path d="M103,22 L103,32 C103,34 104.5,35.5 107,35.5 C109.5,35.5 111,34 111,32 L111,22 L116,22 L116,33 C116,36.5 112.5,39 107,39 C101.5,39 103,36.5 98,33 L98,22 Z"
        transform="translate(0,0)"
      />
      <rect x="103" y="22" width="5" height="12" rx="0.5" />
      <rect x="111" y="22" width="5" height="16" rx="0.5" />
      <path d="M103,34 Q103,38.5 108,38.5 Q113,38.5 113,34" fill="none" stroke={color} strokeWidth="4.5" strokeLinecap="round" />

      {/* "n" */}
      <rect x="120" y="22" width="5" height="16" rx="0.5" />
      <path d="M122.5,22 Q122.5,22 127,22 Q132,22 132,28" fill="none" stroke={color} strokeWidth="4.5" strokeLinecap="round" />
      <rect x="129.5" y="27" width="5" height="11" rx="0.5" />

      {/* "c" */}
      <path d="M147,26 C145,24 142.5,23 140,23 C136,23 133,26.5 133,30.5 C133,34.5 136,38 140,38 C142.5,38 145,37 147,35" fill="none" stroke={color} strokeWidth="4.5" strokeLinecap="round" />

      {/* "h" */}
      <rect x="152" y="10" width="5" height="28" rx="0.5" />
      <path d="M154.5,26 Q154.5,22 159,22 Q164,22 164,28" fill="none" stroke={color} strokeWidth="4.5" strokeLinecap="round" />
      <rect x="161.5" y="27" width="5" height="11" rx="0.5" />
    </svg>
  );
}
