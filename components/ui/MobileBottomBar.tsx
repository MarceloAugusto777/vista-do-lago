'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Sun } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface MobileBottomBarProps {
  onOpenBooking: (type?: 'hospedagem' | 'dayuse') => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenBooking }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 block md:hidden p-3 bg-forest-deep/90 backdrop-blur-xl border-t border-champagne/20 shadow-2xl"
        >
          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenBooking('hospedagem')}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-full bg-champagne text-forest-deep text-xs font-semibold uppercase tracking-wider shadow-lg active:scale-98 transition-transform"
            >
              <Calendar className="h-4 w-4" />
              Reservar Estadias
            </button>
            <button
              onClick={() => onOpenBooking('dayuse')}
              className="flex items-center justify-center gap-1.5 py-3 px-4 rounded-full bg-white/10 text-sand border border-white/15 text-xs font-medium uppercase tracking-wider active:scale-98 transition-transform"
            >
              <Sun className="h-4 w-4 text-champagne" />
              Day Use
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
