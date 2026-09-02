'use client';

import React from 'react';
import { Reveal } from '../ui/Reveal';
import { MagneticButton } from '../ui/MagneticButton';
import { Sun, Utensils, Waves, Ship, Trees, Check, ArrowRight, Info } from 'lucide-react';

interface DayUseProps {
  onOpenBooking: (type?: 'hospedagem' | 'dayuse') => void;
}

export const DayUse: React.FC<DayUseProps> = ({ onOpenBooking }) => {
  const inclusions = [
    { title: 'Piscina Panorâmica com Solário', icon: <Sun className="h-4 w-4" /> },
    { title: 'Acesso às Duas Praias da Lagoa', icon: <Waves className="h-4 w-4" /> },
    { title: 'Caiaques Disponíveis para Navegação', icon: <Ship className="h-4 w-4" /> },
    { title: 'Estrutura Completa de Restaurante & Bar', icon: <Utensils className="h-4 w-4" /> },
    { title: '11 Mil m² de Área Arborizada e Descanso', icon: <Trees className="h-4 w-4" /> },
  ];

  return (
    <section
      id="day-use"
      className="relative bg-forest-deep text-sand py-24 md:py-36 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-champagne/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-forest/40 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <Reveal direction="up">
            <span className="inline-flex items-center gap-2 rounded-full bg-champagne/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-champagne border border-champagne/20">
              <Sun className="h-3.5 w-3.5" />
              Day Use Vista do Lago
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight">
              Você não precisa se hospedar <br />
              <span className="italic font-normal text-champagne">para viver a Vista do Lago.</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text-base md:text-lg text-sand/85 font-light leading-relaxed">
              Passe o dia aproveitando nossa piscina panorâmica, praias privativas na lagoa, gastronomia regional, passeios de caiaque e toda a atmosfera serena da pousada.
            </p>
          </Reveal>
        </div>

        {/* Pricing Cards & Package Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Day Use Highlight Panel */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl glass-dark p-8 md:p-12 border border-champagne/25 shadow-2xl space-y-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-champagne">
                    Passaporte Experiência
                  </span>
                  <h3 className="font-serif-editorial text-3xl md:text-4xl text-white font-light">
                    Day Use Completo com Almoço
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-xs text-sand/60 block uppercase tracking-wider">A partir de</span>
                  <span className="font-serif-editorial text-3xl md:text-4xl font-semibold text-champagne">
                    R$ 85
                  </span>
                  <span className="text-[10px] text-sand/70 block">/ pessoa</span>
                </div>
              </div>

              <div className="space-y-3">
                <span className="text-xs uppercase tracking-wider text-sand/80 font-medium">
                  O que está incluso no seu dia:
                </span>
                <ul className="space-y-3">
                  {inclusions.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-sand/90 font-light">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-champagne/20 text-champagne border border-champagne/30">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <span>{item.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-sand/70">
                <Info className="h-4 w-4 text-champagne shrink-0" />
                <span>Valores sujeitos a alteração. Consulte disponibilidade antecipada.</span>
              </div>
              <MagneticButton
                variant="gold"
                onClick={() => onOpenBooking('dayuse')}
                icon={<ArrowRight className="h-4 w-4" />}
                className="w-full sm:w-auto text-xs"
              >
                Quero Passar o Dia
              </MagneticButton>
            </div>
          </div>

          {/* Secondary Flexible Option Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl bg-white/5 backdrop-blur-xl p-8 md:p-10 border border-white/15 space-y-6">
            <div className="space-y-4">
              <span className="text-[10px] uppercase font-bold tracking-widest text-sand/70">
                Opção Acesso Simples
              </span>
              <h3 className="font-serif-editorial text-2xl md:text-3xl text-white font-light">
                Day Use Flexível
              </h3>
              <p className="text-xs md:text-sm text-sand/80 font-light leading-relaxed">
                Para quem deseja apenas desfrutar das praias e da área externa da pousada durante a tarde com opção de consumo à parte no restaurante.
              </p>
              <div className="py-4 border-y border-white/10">
                <span className="text-xs text-sand/60 block uppercase tracking-wider">A partir de</span>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif-editorial text-4xl font-light text-white">R$ 35</span>
                  <span className="text-xs text-sand/70">/ pessoa (consumo à parte)</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenBooking('dayuse')}
              className="w-full py-4 rounded-full border border-champagne/40 bg-champagne/10 text-champagne hover:bg-champagne hover:text-forest-deep text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-md"
            >
              Consultar Vagas Day Use
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
