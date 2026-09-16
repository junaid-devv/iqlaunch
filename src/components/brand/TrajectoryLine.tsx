'use client';

import React from 'react';
import styles from './TrajectoryLine.module.css';

interface TrajectoryLineProps {
  direction?: 'diagonal' | 'horizontal' | 'vertical';
  className?: string;
  accent?: boolean;
}

export default function TrajectoryLine({ 
  direction = 'horizontal', 
  className = '',
  accent = false 
}: TrajectoryLineProps) {
  return (
    <div className={`${styles.line} ${styles[direction]} ${accent ? styles.accent : ''} ${className}`}>
      <svg
        className={styles.svg}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {direction === 'diagonal' && (
          <line x1="0" y1="100%" x2="100%" y2="0" />
        )}
        {direction === 'horizontal' && (
          <line x1="0" y1="50%" x2="100%" y2="50%" />
        )}
        {direction === 'vertical' && (
          <line x1="50%" y1="0" x2="50%" y2="100%" />
        )}
      </svg>
    </div>
  );
}
