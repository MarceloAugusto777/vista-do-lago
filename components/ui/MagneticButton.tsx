'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'glass' | 'sand' | 'gold';
  icon?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  icon,
  type = 'button',
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (e.clientX - (left + width / 2)) * 0.2; // subtle shift 5-8px
    const y = (e.clientY - (top + height / 2)) * 0.2;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-forest-deep text-sand hover:bg-forest hover:text-white border border-forest-deep/20 shadow-lg shadow-forest-deep/10';
      case 'secondary':
        return 'bg-offwhite text-forest-deep hover:bg-white hover:text-forest border border-forest-deep/15 shadow-sm';
      case 'sand':
        return 'bg-sand text-forest-deep hover:bg-white hover:text-forest-deep border border-sand/40';
      case 'gold':
        return 'bg-champagne text-forest-deep hover:bg-champagne-light hover:shadow-gold font-medium border border-champagne/30';
      case 'glass':
      default:
        return 'glass-nav text-white hover:bg-white/20 border border-white/25 shadow-md';
    }
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 25, mass: 0.5 }}
      onClick={onClick}
      type={type}
      className={`group relative inline-flex items-center justify-center gap-3 px-7 py-4 text-sm tracking-wider uppercase rounded-full transition-all duration-300 ${getVariantStyles()} ${className}`}
    >
      <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-[1px]">
        {children}
      </span>
      {icon && (
        <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 pointer-events-none" />
    </motion.button>
  );
};
