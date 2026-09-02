'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Reveal } from '../ui/Reveal';
import { Sparkles, Compass } from 'lucide-react';

export const Manifesto: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center center'],
  });

  // Text color transition from light silver/gray to deep forest green
  const textColorOpacity = useTransform(scrollYProgress, [0.2, 0.8], [0.3, 1]);

  return (
    <section
      id="manifesto"
      ref={sectionRef}
      className="relative z-20 -mt-10 md:-mt-16 rounded-t-[28px] md:rounded-t-[56px] bg-offwhite text-charcoal py-24 md:py-36 px-6 md:px-12 lg:px-20 shadow-2xl border-t border-white/60"
    >
      <div className="max-w-5xl mx-auto space-y-12 text-center md:text-left">
        {/* Eyebrow */}
        <Reveal direction="up">
          <div className="inline-flex items-center gap-2 rounded-full bg-forest-deep/5 px-4 py-1.5 border border-forest-deep/10">
            <Compass className="h-3.5 w-3.5 text-forest" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-forest">
              Um Refúgio em Araruama
            </span>
          </div>
        </Reveal>

        {/* Main Manifesto Headline with Scroll Fade */}
        <div className="space-y-6">
          <motion.h2
            style={{ opacity: textColorOpacity }}
            className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-forest-deep leading-[1.05] tracking-tight"
          >
            Há lugares para visitar.{' '}
            <span className="italic font-normal text-forest">E lugares para sentir.</span>
          </motion.h2>
        </div>

        {/* Editorial Text Paragraphs */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6 border-t border-forest-deep/10">
          <div className="md:col-span-7 space-y-6">
            <Reveal delay={0.2}>
              <p className="text-lg md:text-xl font-light leading-relaxed text-charcoal/85">
                Às margens da serenidade da Lagoa de Araruama, a Pousada Vista do Lago foi concebida como um santuário para quem busca reconectar-se com o ritmo suave da natureza.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-base font-light leading-relaxed text-charcoal/70">
                Aqui, o tempo desacelera entre a brisa constante, as águas plácidas da lagoa e um pôr do sol que transforma cada final de tarde em um espetáculo particular de luzes e cores.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-5 flex flex-col justify-between space-y-6 bg-forest-deep/5 p-8 rounded-3xl border border-forest-deep/10">
            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-forest">
                A Experiência Vista do Lago
              </span>
              <p className="font-serif-editorial text-2xl font-light text-forest-deep italic leading-snug">
                "Mais do que uma hospedagem, um convite para contemplar o horizonte e renovar as energias."
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-forest pt-4 border-t border-forest-deep/10">
              <span className="h-2 w-2 rounded-full bg-champagne-dark" />
              <span>Araruama — Região dos Lagos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
