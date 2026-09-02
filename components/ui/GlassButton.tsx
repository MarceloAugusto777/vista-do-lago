'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface GlassButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
}

export const GlassButton: React.FC<GlassButtonProps> = ({
  children,
  onClick,
  className = '',
  icon,
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-xs font-medium tracking-widest text-white uppercase backdrop-blur-xl transition-all duration-300 hover:border-white/40 hover:bg-white/20 shadow-lg ${className}`}
    >
      <div className="relative z-10 flex items-center justify-center gap-2">
        <span>{children}</span>
        {icon && (
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            {icon}
          </span>
        )}
      </div>
      <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:animate-[shine_1s_ease-in-out]" />
    </motion.button>
  );
};
