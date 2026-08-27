import React, { ElementType, ReactNode } from 'react';
import { useReveal } from '../hooks/useReveal';

export type RevealVariant =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'fade'
  | 'scale-up'
  | 'micro-zoom';


export interface RevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  duration?: number; // duration in ms (e.g. 800 - 1200ms for luxury motion)
  delay?: number; // stagger delay in ms
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  className?: string;
  as?: ElementType;
  style?: React.CSSProperties;
}

/**
 * Universal luxury scroll reveal component.
 * Applies GPU-accelerated CSS transforms, opacity, and motion blur dissipation
 * when element scrolls into view via IntersectionObserver.
 */
export default function Reveal({
  children,
  variant = 'fade-up',
  duration = 1000,
  delay = 0,
  threshold = 0.1,
  rootMargin = '0px 0px -40px 0px',
  triggerOnce = true,
  className = '',
  as: Component = 'div',
  style = {},
}: RevealProps) {
  const { ref, isRevealed } = useReveal<HTMLDivElement>({
    threshold,
    rootMargin,
    triggerOnce,
  });

  const combinedStyle: React.CSSProperties = {
    ...style,
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
  };

  const variantClass = `reveal-${variant}`;
  const revealedClass = isRevealed ? 'is-revealed' : '';

  return (
    <Component
      ref={ref}
      className={`reveal-element ${variantClass} ${revealedClass} ${className}`.trim()}
      style={combinedStyle}
    >
      {children}
    </Component>
  );
}
