'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  onClick: () => void;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ onClick }) => {
  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      onClick={onClick}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-2xl hover:bg-[#20ba5a] transition-colors"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-6 w-6 fill-white text-[#25D366]" />
      <span className="hidden sm:inline text-xs font-semibold uppercase tracking-wider pr-1">
        WhatsApp
      </span>
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
      </span>
    </motion.button>
  );
};
