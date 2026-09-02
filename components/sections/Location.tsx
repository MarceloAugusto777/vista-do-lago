'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Reveal } from '../ui/Reveal';
import { MapPin, Navigation, Compass, ExternalLink } from 'lucide-react';

export const Location: React.FC = () => {
  const googleMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=Pousada+Vista+do+Lago+Rua+Mirante+743+Araruama+RJ';

  // Lazy mount do iframe: só insere no DOM quando a seção está próxima da viewport
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mapVisible, setMapVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMapVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } // começa a carregar 200px antes de entrar na tela
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="localizacao" className="bg-offwhite py-24 md:py-36 px-6 md:px-12 lg:px-20 border-t border-forest-deep/10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-forest-deep/10 pb-8">
          <div className="space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-forest">
              Localização Privilegiada
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-light text-forest-deep">
              Seu refúgio na <br />
              <span className="italic font-normal text-forest">Região dos Lagos.</span>
            </h2>
          </div>
          <div className="max-w-md space-y-2">
            <p className="text-sm font-light text-charcoal/75 leading-relaxed">
              Araruama é o coração sereno da Região dos Lagos. A pousada situa-se no bairro Lake View, debruçada diretamente sobre a maior lagoa hipersalina em estado natural do mundo.
            </p>
          </div>
        </div>

        {/* Map & Card Container */}
        <div className="relative rounded-3xl overflow-hidden border border-forest-deep/15 shadow-2xl bg-forest-deep min-h-[480px]">
          {/* Lazy-mounted Google Maps iframe */}
          {mapVisible ? (
            <iframe
              title="Mapa da Pousada Vista do Lago Araruama"
              src="https://maps.google.com/maps?q=Rua%20Mirante%20743%20Araruama%20RJ&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[520px] border-0 filter saturate-90 contrast-105 opacity-90"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            /* Placeholder shimmer enquanto o mapa não é montado */
            <div className="w-full h-[520px] bg-gradient-to-br from-forest-deep via-forest to-forest-deep flex items-center justify-center">
              <div className="flex flex-col items-center gap-3 text-sand/60">
                <svg className="h-10 w-10 animate-pulse text-champagne" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <span className="text-xs uppercase tracking-wider font-light">Carregando mapa...</span>
              </div>
            </div>
          )}

          {/* Floating Address Card */}
          <div className="absolute bottom-6 left-6 right-6 md:right-auto md:max-w-md z-10 glass-dark p-6 md:p-8 rounded-2xl border border-champagne/30 text-sand shadow-2xl space-y-4">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-champagne text-forest-deep">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-serif-editorial text-xl text-white font-light">
                  Pousada Vista do Lago
                </h3>
                <span className="text-[10px] uppercase font-bold tracking-widest text-champagne">
                  Araruama — RJ
                </span>
              </div>
            </div>

            <div className="space-y-1.5 text-xs text-sand/85 font-light">
              <p className="font-medium text-white">Rua Mirante, 743 — Bairro Lake View</p>
              <p>Araruama, Rio de Janeiro — CEP 28970-000</p>
              <p className="text-[11px] text-sand/60">Fácil acesso pelas principais rodovias da Região dos Lagos.</p>
            </div>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-full bg-champagne text-forest-deep text-xs font-semibold uppercase tracking-wider hover:bg-white transition-colors shadow-md"
            >
              <Navigation className="h-4 w-4" />
              Traçar Rota no Google Maps
              <ExternalLink className="h-3 w-3 ml-1 opacity-70" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
