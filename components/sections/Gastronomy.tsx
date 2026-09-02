'use client';

import React from 'react';
import { Reveal } from '../ui/Reveal';
import { EditorialPlaceholder } from '../ui/EditorialPlaceholder';
import { Utensils, Clock, Coffee, Wine, Sparkles } from 'lucide-react';

export const Gastronomy: React.FC = () => {
  const experiences = [
    {
      title: 'Café da Manhã Regional Completo',
      desc: 'Frutas frescas, pães artesanais, bolos caseiros, tortas doces e salgadas e café passado na hora para iniciar o dia com leveza.',
      icon: <Coffee className="h-4 w-4" />,
    },
    {
      title: 'Almoço à Beira-Lagoa',
      desc: 'Pratos saborosos com peixes e ingredientes selecionados servidos no espaço gastronômico com vista panorâmica.',
      icon: <Utensils className="h-4 w-4" />,
    },
    {
      title: 'Petiscos & Drinks Sunset',
      desc: 'Bebidas refrescantes, petiscos e porções para degustar enquanto assiste ao pôr do sol na lagoa.',
      icon: <Wine className="h-4 w-4" />,
    },
  ];

  return (
    <section id="gastronomia" className="bg-sand py-24 md:py-36 px-6 md:px-12 lg:px-20 border-t border-forest-deep/10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-forest-deep/15 pb-8">
          <div className="lg:col-span-7 space-y-4">
            <Reveal direction="up">
              <span className="inline-flex items-center gap-2 rounded-full bg-forest-deep/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                <Utensils className="h-3.5 w-3.5" />
                Gastronomia & Café da Manhã
              </span>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-light text-forest-deep">
                Sabores para acompanhar <br />
                <span className="italic font-normal text-forest">a vista da água.</span>
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-5 bg-white/50 p-6 rounded-2xl border border-white/80 space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-forest">
              <Clock className="h-4 w-4 text-champagne-dark" />
              <span>Funcionamento do Restaurante</span>
            </div>
            <p className="text-xs text-charcoal/80 leading-relaxed font-light">
              Aberto de <strong className="font-semibold text-forest-deep">quarta-feira a domingo</strong>, a partir das <strong className="font-semibold text-forest-deep">08h00</strong>. Café da manhã especial e almoço servido até às <strong className="font-semibold text-forest-deep">16h00</strong> (aberto ao público e hóspedes).
            </p>
            <span className="text-[10px] text-charcoal/50 block pt-1">
              * Horários sujeitos a confirmação em feriados e alta temporada.
            </span>
          </div>
        </div>

        {/* Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <Reveal direction="up" delay={0.1}>
              <EditorialPlaceholder
                src="/images/cafe-da-manha-pousada.jpg"
                alt="Café da Manhã Completo da Pousada Vista do Lago Araruama"
                category="Café da Manhã Oficial"
                caption="Buffet completo de café da manhã com pães, tortas e quitutes da pousada"
                aspectRatio="aspect-[4/3]"
                className="shadow-2xl border border-forest-deep/15"
              />
            </Reveal>
          </div>

          <div className="lg:col-span-6 space-y-6">
            {experiences.map((item, idx) => (
              <Reveal key={idx} direction="up" delay={0.1 * idx}>
                <div className="flex gap-5 p-6 rounded-2xl bg-white/60 border border-white/80 transition-all hover:bg-white hover:shadow-md">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-forest-deep text-champagne">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-serif-editorial text-2xl text-forest-deep font-light">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm font-light text-charcoal/75 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
