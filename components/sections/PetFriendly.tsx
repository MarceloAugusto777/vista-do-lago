'use client';

import React from 'react';
import { Reveal } from '../ui/Reveal';
import { Dog, Heart, Sparkles } from 'lucide-react';

export const PetFriendly: React.FC = () => {
  return (
    <section className="bg-sand/40 py-20 px-6 md:px-12 lg:px-20 border-t border-forest-deep/10">
      <div className="max-w-5xl mx-auto rounded-3xl bg-forest-deep text-sand p-8 md:p-14 shadow-2xl relative overflow-hidden border border-champagne/20 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-4 max-w-xl text-center md:text-left z-10">
          <Reveal direction="up">
            <div className="inline-flex items-center gap-2 rounded-full bg-champagne/15 px-3.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-champagne border border-champagne/30">
              <Dog className="h-3.5 w-3.5" />
              Pet Friendly
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl md:text-5xl font-light text-white leading-snug">
              Seu melhor amigo <br />
              <span className="italic font-normal text-champagne">também é bem-vindo.</span>
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <p className="text-xs md:text-sm font-light text-sand/85 leading-relaxed">
              Sabemos que a viagem só fica completa quando toda a família está junta. Aceitamos animais de estimação sob consulta prévia de regulamento para garantir o conforto de todos.
            </p>
          </Reveal>
        </div>

        {/* Paw Icon Minimalist Badge */}
        <div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-white/5 border border-white/10 shrink-0 z-10 space-y-2">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-champagne text-forest-deep shadow-lg">
            <Dog className="h-8 w-8" />
          </div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-champagne">
            Hospedagem Pet
          </span>
          <span className="text-[11px] text-sand/60">Sob consulta prévia</span>
        </div>

        {/* Ambient background glow */}
        <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-champagne/10 blur-[80px] pointer-events-none" />
      </div>
    </section>
  );
};
