'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EditorialPlaceholder } from '../ui/EditorialPlaceholder';
import { Waves, Sparkles, Trees, Home, Sun } from 'lucide-react';

export const Experiences: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      id: '01',
      title: 'A Lagoa de Araruama',
      icon: <Waves className="h-4 w-4" />,
      desc: 'Um espelho d’água calmo e hipnotizante que contorna a propriedade, ideal para relaxar, caminhar na orla ou contemplar o horizonte ao pôr do sol.',
      image: '/images/praia-lake-view-por-do-sol.png',
      category: 'Praia do Lake View • Pôr do Sol',
    },
    {
      id: '02',
      title: 'Piscina Panorâmica',
      icon: <Sun className="h-4 w-4" />,
      desc: 'Debruçada diretamente sobre a lagoa, a piscina oferece uma vista desimpedida com espreguiçadeiras, iluminação e solário para momentos inesquecíveis.',
      image: '/images/piscina-panoramica.png',
      category: 'Piscina Panorâmica',
    },
    {
      id: '03',
      title: 'Duas Praias Exclusivas',
      icon: <Sparkles className="h-4 w-4" />,
      desc: 'Praia do Lake View e Praia das Espumas: dois acessos diretos à lagoa dentro do perímetro da pousada para banho de sol e descanso.',
      image: '/images/praia-das-espumas-dia.png',
      category: 'Praia das Espumas • Dia',
    },
    {
      id: '04',
      title: 'Estrutura Completa da Pousada',
      icon: <Home className="h-4 w-4" />,
      desc: 'Sede com arquitetura integrada à natureza, deck de contemplação, suítes acolhedoras e restaurante exclusivo.',
      image: '/images/pousada-vista-aerea-oficial.png',
      category: 'Vista Aérea Oficial',
    },
    {
      id: '05',
      title: '11 Mil m² de Natureza',
      icon: <Trees className="h-4 w-4" />,
      desc: 'Ampla área verde arborizada com sombras generosas, coqueirais nativos e ar puro renovador à beira da lagoa.',
      image: '/images/deck-lagoon.png',
      category: 'Deck & Arvoredo',
    },
  ];

  return (
    <section className="bg-sand/30 py-24 md:py-36 px-6 md:px-12 lg:px-20 border-t border-forest-deep/10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="max-w-2xl space-y-3">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-forest">
            Experiências Selecionadas
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-light text-forest-deep">
            O que torna este refúgio <br />
            <span className="italic font-normal text-forest">único na região.</span>
          </h2>
        </div>

        {/* Desktop Interactive Sticky Selector Layout */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-start">
          {/* Left Category Selector List */}
          <div className="col-span-5 space-y-4">
            {items.map((item, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border flex flex-col gap-2 ${
                    isActive
                      ? 'bg-forest-deep text-sand border-forest-deep shadow-xl scale-[1.02]'
                      : 'bg-white/60 text-charcoal border-white/80 hover:bg-white hover:border-forest-deep/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-mono tracking-widest ${
                        isActive ? 'text-champagne font-bold' : 'text-forest'
                      }`}
                    >
                      {item.id}
                    </span>
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full transition-colors ${
                        isActive ? 'bg-champagne/20 text-champagne' : 'bg-forest-deep/5 text-forest'
                      }`}
                    >
                      {item.icon}
                    </span>
                  </div>
                  <h3
                    className={`font-serif-editorial text-2xl font-light ${
                      isActive ? 'text-white' : 'text-forest-deep'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-xs font-light leading-relaxed ${
                      isActive ? 'text-sand/80' : 'text-charcoal/70'
                    }`}
                  >
                    {item.desc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Large Image Preview Display */}
          <div className="col-span-7 sticky top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <EditorialPlaceholder
                  src={items[activeIndex].image}
                  alt={items[activeIndex].title}
                  category={items[activeIndex].category}
                  caption={items[activeIndex].title}
                  aspectRatio="aspect-[16/11]"
                  className="shadow-2xl border border-forest-deep/15"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Swipeable Carousel View */}
        <div className="flex lg:hidden overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-none">
          {items.map((item) => (
            <div
              key={item.id}
              className="snap-center shrink-0 w-[85vw] max-w-[360px] bg-white rounded-3xl p-6 border border-forest-deep/10 shadow-lg space-y-4"
            >
              <EditorialPlaceholder
                src={item.image}
                alt={item.title}
                category={item.category}
                aspectRatio="aspect-[4/3]"
              />
              <div className="space-y-2">
                <span className="text-xs font-mono text-champagne-dark font-bold">{item.id}</span>
                <h3 className="font-serif-editorial text-2xl font-light text-forest-deep">
                  {item.title}
                </h3>
                <p className="text-xs font-light text-charcoal/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
