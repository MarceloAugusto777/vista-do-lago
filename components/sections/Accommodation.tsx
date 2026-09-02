'use client';

import React from 'react';
import { Reveal } from '../ui/Reveal';
import { EditorialPlaceholder } from '../ui/EditorialPlaceholder';
import { MagneticButton } from '../ui/MagneticButton';
import { BedDouble, Coffee, Wifi, Car, Dog, Sparkles, Check } from 'lucide-react';

interface AccommodationProps {
  onOpenBooking: (type?: 'hospedagem' | 'dayuse') => void;
}

export const Accommodation: React.FC<AccommodationProps> = ({ onOpenBooking }) => {
  const amenities = [
    { title: 'Acomodações aconchegantes com vista', icon: <BedDouble className="h-4 w-4" /> },
    { title: 'Café da manhã completo incluído', icon: <Coffee className="h-4 w-4" /> },
    { title: 'Wi-Fi cortesia nas áreas sociais', icon: <Wifi className="h-4 w-4" /> },
    { title: 'Estacionamento interno gratuito', icon: <Car className="h-4 w-4" /> },
    { title: 'Ambiente Pet Friendly (sob consulta)', icon: <Dog className="h-4 w-4" /> },
  ];

  return (
    <section id="hospedagem" className="bg-offwhite py-24 md:py-36 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-forest-deep/10 pb-8">
          <div className="space-y-4 max-w-2xl">
            <Reveal direction="up">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-forest">
                Estadias Boutique
              </span>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-light text-forest-deep">
                Durma perto da água. <br />
                <span className="italic font-normal text-forest">Acorde perto da natureza.</span>
              </h2>
            </Reveal>
          </div>

          <Reveal direction="up" delay={0.2}>
            <div className="bg-sand/40 p-6 rounded-2xl border border-sand-dark/40 space-y-2 lg:max-w-xs">
              <span className="text-[10px] uppercase font-bold tracking-widest text-forest">
                Diárias Especiais
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-xs text-charcoal/70">A partir de</span>
                <span className="font-serif-editorial text-3xl font-semibold text-forest-deep">
                  R$ 250
                </span>
                <span className="text-xs text-charcoal/70">/ casal</span>
              </div>
              <p className="text-[11px] text-charcoal/60 leading-tight">
                Inclui café da manhã completo. Consulte valores atualizados para sua data desejada.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Boutique Room Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Room Real Photo */}
          <div className="lg:col-span-7">
            <Reveal direction="up" delay={0.1}>
              <EditorialPlaceholder
                src="/images/bedroom-suite.jpg"
                alt="Suíte confortável da Pousada Vista do Lago Araruama"
                category="Suítes & Acomodações"
                caption="Aconchego com cabeceira artesanal e vista para os jardins"
                aspectRatio="aspect-[16/11]"
                className="shadow-2xl border border-forest-deep/10"
              />
            </Reveal>
          </div>

          {/* Details & Amenities List */}
          <div className="lg:col-span-5 space-y-8">
            <Reveal direction="up" delay={0.2}>
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-forest-deep/5 px-3.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-forest border border-forest-deep/10">
                  <Sparkles className="h-3.5 w-3.5 text-champagne-dark" />
                  Conforto & Tranquilidade
                </span>
                <h3 className="font-serif-editorial text-3xl md:text-4xl font-light text-forest-deep">
                  Refúgio pensado para descansar e renovar.
                </h3>
                <p className="text-sm font-light text-charcoal/75 leading-relaxed">
                  Quartos preparados para proporcionar noites de sono restauradoras ao som suave da brisa da lagoa, com roupa de cama de qualidade e atmosfera serena.
                </p>
              </div>
            </Reveal>

            {/* Amenities with Lucide Icons */}
            <Reveal direction="up" delay={0.3}>
              <div className="space-y-3 pt-2 border-t border-forest-deep/10">
                <span className="text-xs uppercase tracking-wider text-forest font-semibold block mb-4">
                  Inclusos na sua hospedagem:
                </span>
                {amenities.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs md:text-sm text-charcoal/85">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-forest-deep text-sand shrink-0">
                      {item.icon}
                    </div>
                    <span className="font-medium">{item.title}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Action CTA */}
            <Reveal direction="up" delay={0.4}>
              <div className="pt-4">
                <MagneticButton
                  variant="primary"
                  onClick={() => onOpenBooking('hospedagem')}
                  className="w-full sm:w-auto"
                >
                  Consultar Hospedagem
                </MagneticButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
