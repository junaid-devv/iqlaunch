'use client';

import React from 'react';
import { useScrollAnimations } from '@/lib/animations';

export default function AnimationProvider({ children }: { children: React.ReactNode }) {
  useScrollAnimations();
  return <>{children}</>;
}
