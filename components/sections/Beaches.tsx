'use client';

import React from 'react';
import { Reveal } from '../ui/Reveal';
import { EditorialPlaceholder } from '../ui/EditorialPlaceholder';
import { Sun, Waves } from 'lucide-react';

export const Beaches: React.FC = () => {
  return (
    <section className="bg-offwhite py-24 md:py-36 px-6 md:px-12 lg:px-20 border-t border-forest-deep/10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Reveal direction="up">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-forest">
              Acesso Exclusivo à Água
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-light text-forest-deep">
              Duas praias. <br />
              <span className="italic font-normal text-forest">Um mesmo horizonte.</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text-sm md:text-base text-charcoal/70 font-light leading-relaxed">
              A Pousada Vista do Lago desfruta da rara posição geográfica de ter acesso direto a dois trechos distintos da Lagoa de Araruama.
            </p>
          </Reveal>
        </div>

        {/* Side-by-Side Photographic Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Panel 1: Praia do Lake View (Por do Sol) */}
          <Reveal direction="up" delay={0.1}>
            <div className="group relative overflow-hidden rounded-3xl border border-forest-deep/15 bg-forest-deep text-sand p-8 md:p-12 min-h-[460px] flex flex-col justify-between transition-all duration-500 hover:shadow-2xl">
              <EditorialPlaceholder
                src="/images/praia-lake-view-por-do-sol.png"
                alt="Praia do Lake View no Pôr do Sol na Pousada Vista do Lago Araruama"
                aspectRatio="aspect-square"
                className="absolute inset-0 z-0 h-full w-full rounded-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/50 to-transparent z-0 opacity-90 transition-opacity duration-300 group-hover:opacity-75" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-3.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-champagne border border-white/15">
                  <Sun className="h-3.5 w-3.5" />
                  Praia do Lake View • Pôr do Sol
                </span>
                <span className="text-xs font-mono text-sand/70">Araruama — RJ</span>
              </div>

              <div className="relative z-10 space-y-3 pt-24">
                <h3 className="font-serif-editorial text-3xl md:text-4xl font-light text-white">
                  Praia do Lake View
                </h3>
                <p className="text-xs md:text-sm text-sand/90 font-light leading-relaxed max-w-md">
                  Faixa de areia com vista desimpedida para o horizonte durante o espetáculo dourado do entardecer nas águas calmas de Araruama.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Panel 2: Praia das Espumas (Dia) */}
          <Reveal direction="up" delay={0.2}>
            <div className="group relative overflow-hidden rounded-3xl border border-forest-deep/15 bg-forest-deep text-sand p-8 md:p-12 min-h-[460px] flex flex-col justify-between transition-all duration-500 hover:shadow-2xl">
              <EditorialPlaceholder
                src="/images/praia-das-espumas-dia.png"
                alt="Praia das Espumas de dia na Pousada Vista do Lago Araruama"
                aspectRatio="aspect-square"
                className="absolute inset-0 z-0 h-full w-full rounded-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/50 to-transparent z-0 opacity-90 transition-opacity duration-300 group-hover:opacity-75" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-3.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-champagne border border-white/15">
                  <Waves className="h-3.5 w-3.5" />
                  Praia das Espumas • Dia
                </span>
                <span className="text-xs font-mono text-sand/70">Araruama — RJ</span>
              </div>

              <div className="relative z-10 space-y-3 pt-24">
                <h3 className="font-serif-editorial text-3xl md:text-4xl font-light text-white">
                  Praia das Espumas
                </h3>
                <p className="text-xs md:text-sm text-sand/90 font-light leading-relaxed max-w-md">
                  Orla arborizada com coqueiros e gramados ensolarados à beira-lagoa, perfeita para banhos revigorantes de sol e água morna durante o dia.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
