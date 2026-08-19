'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Reveal.module.css';

/**
 * Fades + lifts its children into view the first time they cross into the
 * viewport. Disconnects after firing once (no ongoing scroll cost), and
 * fully honors prefers-reduced-motion via CSS.
 */
export default function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${styles.reveal} ${visible ? styles.visible : ''}`}>
      {children}
    </div>
  );
}
