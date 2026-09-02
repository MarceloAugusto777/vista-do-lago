'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  className?: string;
  blur?: boolean;
  once?: boolean;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  width = '100%',
  direction = 'up',
  delay = 0,
  duration = 0.8,
  className = '',
  blur = true,
  once = true,
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once, margin: '-60px' });

  const getVariant = () => {
    let initialY = 0;
    let initialX = 0;

    if (direction === 'up') initialY = 32;
    if (direction === 'down') initialY = -32;
    if (direction === 'left') initialX = 32;
    if (direction === 'right') initialX = -32;

    return {
      hidden: {
        opacity: 0,
        y: initialY,
        x: initialX,
        filter: blur ? 'blur(10px)' : 'blur(0px)',
      },
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        filter: 'blur(0px)',
        transition: {
          duration,
          delay,
          ease: [0.215, 0.61, 0.355, 1.0], // smooth editorial cubic-bezier
        },
      },
    };
  };

  return (
    <div ref={ref} style={{ width }} className={className}>
      <motion.div
        variants={getVariant()}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {children}
      </motion.div>
    </div>
  );
};
