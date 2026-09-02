'use client';

import React from 'react';
import { Reveal } from '../ui/Reveal';

export const Stats: React.FC = () => {
  const stats = [
    {
      value: '+11 mil',
      unit: 'm²',
      label: 'de área arborizada',
      desc: 'Extensa área verde com vegetação nativa e tranquilidade absoluta',
    },
    {
      value: '02',
      unit: 'praias',
      label: 'da lagoa na pousada',
      desc: 'Praia do Lake View & Praia da Espuma a poucos passos',
    },
    {
      value: '01',
      unit: 'pôr do sol',
      label: 'inesquecível',
      desc: 'Vista privilegiada da lagoa durante a golden hour',
    },
    {
      value: '100%',
      unit: '',
      label: 'conexão com a natureza',
      desc: 'Ambiente silencioso, ar puro e energia renovada',
    },
  ];

  return (
    <section className="bg-offwhite py-12 px-6 md:px-12 border-y border-forest-deep/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y sm:divide-y-0 lg:divide-x divide-forest-deep/15">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between p-4 lg:px-8 space-y-3 ${
                idx !== 0 ? 'pt-6 sm:pt-0' : ''
              }`}
            >
              <Reveal delay={idx * 0.1} direction="up">
                <div className="space-y-1">
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl font-light text-forest-deep">
                      {item.value}
                    </span>
                    {item.unit && (
                      <span className="font-serif-editorial text-2xl text-forest font-light">
                        {item.unit}
                      </span>
                    )}
                  </div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-forest">
                    {item.label}
                  </span>
                </div>
              </Reveal>
              <p className="text-xs font-light text-charcoal/65 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
