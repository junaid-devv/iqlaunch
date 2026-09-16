'use client';

import React from 'react';
import { ParallaxComponent } from '@/components/ui/parallax-scrolling';

export default function Hero() {
  return (
    <ParallaxComponent
      head="iQLaunch"
      text="BUILD LESS. AUTOMATE MORE."
      standalone={false}
    />
  );
}

export { Hero as DemoOne };
