'use client';

import React from 'react';
import { Reveal } from '../ui/Reveal';
import { EditorialPlaceholder } from '../ui/EditorialPlaceholder';

export const Gallery: React.FC = () => {
  return (
    <section id="galeria" className="bg-offwhite py-24 md:py-36 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-forest-deep/10 pb-8">
          <div className="space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-forest">
              Galeria de Fotografias Reais
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-light text-forest-deep">
              Um cenário que muda <br />
              <span className="italic font-normal text-forest">a cada hora.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-charcoal/70 leading-relaxed font-light">
            Entre os tons avermelhados do entardecer e o azul cristalino da lagoa sob o sol do meio-dia, descubra a estrutura real da Pousada Vista do Lago.
          </p>
        </div>

        {/* Asymmetric Editorial Gallery Grid 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Large Real Photo (Piscina Sunset) */}
          <div className="lg:col-span-7">
            <Reveal direction="up" delay={0.1}>
              <EditorialPlaceholder
                src="/images/hero-sunset-pool.png"
                alt="Piscina com vista panorâmica no Pôr do Sol na Pousada Vista do Lago Araruama"
                category="Piscina & Pôr do Sol"
                caption="Piscina Panorâmica debruçada sobre a Lagoa de Araruama"
                aspectRatio="aspect-[16/10]"
                priority
              />
            </Reveal>
          </div>

          {/* Right Side Stack */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            <Reveal direction="up" delay={0.2}>
              <EditorialPlaceholder
                src="/images/praia-lake-view-por-do-sol.png"
                alt="Praia do Lake View no Pôr do Sol"
                category="Praia do Lake View"
                caption="Pôr do sol dourado na orla da lagoa"
                aspectRatio="aspect-[4/3]"
              />
            </Reveal>
            <Reveal direction="up" delay={0.3}>
              <EditorialPlaceholder
                src="/images/bedroom-suite.jpg"
                alt="Acomodação aconchegante da Pousada Vista do Lago"
                category="Suíte Acomodação"
                caption="Suítes confortáveis com toque artesanal e sereno"
                aspectRatio="aspect-[4/3]"
              />
            </Reveal>
          </div>
        </div>

        {/* Asymmetric Editorial Gallery Grid 2 (Inverted layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4">
          <div className="lg:col-span-5">
            <Reveal direction="up" delay={0.2}>
              <EditorialPlaceholder
                src="/images/pousada-vista-aerea-oficial.png"
                alt="Vista aérea oficial da Pousada Vista do Lago Araruama"
                category="Vista Aérea Oficial"
                caption="11 mil m² de área arborizada e estrutura à beira-lagoa"
                aspectRatio="aspect-[4/3]"
              />
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal direction="up" delay={0.3}>
              <EditorialPlaceholder
                src="/images/piscina-panoramica.png"
                alt="Piscina panorâmica iluminada com coqueiros"
                category="Piscina Panorâmica"
                caption="Piscina panorâmica iluminada e coqueiral à beira da água"
                aspectRatio="aspect-[16/10]"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
