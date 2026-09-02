'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Calendar, Compass } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';
import { GlassButton } from '../ui/GlassButton';

interface HeroProps {
  onOpenBooking: (type?: 'hospedagem' | 'dayuse') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.35, 0.75]);

  const words = ['Entre', 'a', 'lagoa', 'e', 'o', 'céu.'];

  return (
    <section
      ref={containerRef}
      className="relative h-[90svh] min-h-[640px] md:h-[100svh] md:min-h-[760px] w-full overflow-hidden bg-forest-deep text-sand flex flex-col justify-between p-6 md:p-12 lg:p-16"
    >
      {/* Background Image with Parallax & Scale */}
      <motion.div style={{ scale: imageScale }} className="absolute inset-0 z-0">
        <Image
          src="/images/hero-sunset-pool.png"
          alt="Pousada Vista do Lago Araruama - Piscina e Pôr do Sol na Lagoa"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Cinematic Overlays */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-black/40"
        />
        {/* Bottom Vignette & Gradient for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/40 to-transparent opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/60 via-transparent to-transparent opacity-70" />
      </motion.div>

      {/* Spacer for Navbar */}
      <div className="relative z-10 h-20" />

      {/* Main Editorial Content Container */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-end pb-8 md:pb-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Main Asymmetric Left Headline */}
          <div className="lg:col-span-8 space-y-6">
            {/* Small Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-md px-4 py-1.5 border border-white/15"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-champagne animate-pulse" />
              <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-sand/90">
                POUSADA VISTA DO LAGO • ARARUAMA • RIO DE JANEIRO
              </span>
            </motion.div>

            {/* Split Text Headline */}
            <h1 className="font-serif-editorial text-[42px] sm:text-[64px] md:text-[84px] lg:text-[102px] leading-[0.92] font-light text-white tracking-tight">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{
                    duration: 0.9,
                    delay: 0.3 + i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block mr-[0.22em] text-glow"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="max-w-[500px] text-sm md:text-base font-light leading-relaxed text-sand/85"
            >
              Um refúgio às margens da Lagoa de Araruama para desacelerar, aproveitar a natureza e assistir ao dia terminar diante da água.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap items-center gap-4 pt-3"
            >
              <MagneticButton
                variant="gold"
                onClick={() => onOpenBooking('hospedagem')}
                icon={<Calendar className="h-4 w-4" />}
              >
                Reservar Estadia
              </MagneticButton>

              <a href="#manifesto">
                <GlassButton icon={<ArrowDown className="h-4 w-4" />}>
                  Explorar a Pousada
                </GlassButton>
              </a>
            </motion.div>
          </div>

          {/* Right Bottom Scroll Indicator / Badge */}
          <div className="lg:col-span-4 flex lg:justify-end items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="flex items-center gap-4 text-xs font-light tracking-widest text-sand/70 uppercase"
            >
              <div className="flex flex-col items-end">
                <span className="text-champagne font-mono text-sm">01 / 07</span>
                <span className="text-[10px] tracking-[0.2em]">Scroll to Explore</span>
              </div>
              <div className="h-12 w-[1px] bg-gradient-to-b from-champagne via-sand/40 to-transparent animate-pulse" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
