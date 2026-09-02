'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sun } from 'lucide-react';

export const Sunset: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0.2, 0.8], [0.95, 1.05]);
  const textScale = useTransform(scrollYProgress, [0.2, 0.8], [0.9, 1.1]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.4, 1, 0.4]);

  return (
    <section
      ref={containerRef}
      className="relative h-[85vh] min-h-[600px] w-full overflow-hidden bg-forest-deep text-sand flex items-center justify-center p-6 md:p-12"
    >
      {/* Background Sunset Real Photo */}
      <motion.div style={{ scale }} className="absolute inset-0 z-0">
        <Image
          src="/images/hero-sunset-pool.png"
          alt="Pôr do Sol Mágico na Pousada Vista do Lago Araruama"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-black/40 to-forest-deep opacity-80" />
        <div className="absolute inset-0 bg-noise opacity-20" />
      </motion.div>

      {/* Center Growing Editorial Headline */}
      <motion.div
        style={{ scale: textScale, opacity }}
        className="relative z-10 max-w-4xl text-center space-y-6"
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-4 py-1.5 border border-white/20">
          <Sun className="h-4 w-4 text-champagne animate-spin-slow" />
          <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-sand">
            Golden Hour em Araruama
          </span>
        </div>

        <h2 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white leading-[1.05] tracking-tight">
          "O melhor horário <br />
          <span className="italic font-normal text-champagne text-glow-gold">não está no relógio.</span>
          <br />
          Está no horizonte."
        </h2>

        <p className="text-xs md:text-sm font-light text-sand/80 uppercase tracking-widest max-w-md mx-auto">
          Todos os dias, a natureza oferece seu espetáculo mais bonito em frente à pousada.
        </p>
      </motion.div>
    </section>
  );
};
