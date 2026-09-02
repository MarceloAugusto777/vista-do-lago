'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { EditorialPlaceholder } from '../ui/EditorialPlaceholder';

export const HorizontalGallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '-50%']);

  const galleryItems = [
    {
      src: '/images/hero-sunset-pool.png',
      alt: 'Piscina e Pôr do sol na Lagoa',
      title: 'Solário & Piscina Panorâmica',
      desc: 'Vista desimpedida do pôr do sol sobre as águas da lagoa',
    },
    {
      src: '/images/cafe-da-manha-pousada.jpg',
      alt: 'Café da manhã buffet da Pousada Vista do Lago',
      title: 'Café da Manhã Regional',
      desc: 'Buffet farto com tortas, pães artesanais e iguarias da casa',
      category: 'Gastronomia',
    },
    {
      src: '/images/deck-lagoon.png',
      alt: 'Deck de madeira e lagoa',
      title: 'Deck de Contemplação',
      desc: 'Mesas à beira da lagoa para ler, conversar e relaxar',
    },
    {
      src: '/images/bedroom-suite.jpg',
      alt: 'Suíte aconchegante',
      title: 'Acomodação Restauro',
      desc: 'Quartos tranquilos para renovação completa',
    },
    {
      src: '/images/pousada-vista-aerea-oficial.png',
      alt: 'Vista aérea oficial da pousada',
      title: '11 Mil m² de Jardins',
      desc: 'Vegetação nativa, sombras frescas e ar puro',
      category: 'Estrutura Oficial',
    },
  ];

  return (
    <section
      ref={containerRef}
      className="bg-offwhite py-24 md:py-36 overflow-hidden border-t border-forest-deep/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-forest">
            Visual Showcase
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl font-light text-forest-deep">
            A essência da Pousada <br />
            <span className="italic font-normal text-forest">em detalhes.</span>
          </h2>
        </div>
        <span className="text-xs text-charcoal/60 uppercase tracking-widest font-mono hidden md:block">
          [ Drag / Scroll to view ]
        </span>
      </div>

      {/* Desktop Scroll Progress Slider */}
      <div className="hidden lg:block w-full">
        <motion.div style={{ x }} className="flex gap-8 pl-20 w-max">
          {galleryItems.map((item, idx) => (
            <div key={idx} className="w-[480px] shrink-0 space-y-4">
              <EditorialPlaceholder
                src={item.src}
                alt={item.alt || item.title}
                category={item.category || 'Galeria'}
                aspectRatio="aspect-[16/10]"
                className="shadow-xl border border-forest-deep/10"
              />
              <div className="space-y-1">
                <h3 className="font-serif-editorial text-2xl font-light text-forest-deep">
                  {item.title}
                </h3>
                <p className="text-xs text-charcoal/70 font-light">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Mobile Horizontal Swipe Carousel */}
      <div className="flex lg:hidden overflow-x-auto gap-4 px-6 snap-x snap-mandatory scrollbar-none">
        {galleryItems.map((item, idx) => (
          <div key={idx} className="snap-center shrink-0 w-[82vw] max-w-[340px] space-y-3">
            <EditorialPlaceholder
              src={item.src}
              alt={item.alt || item.title}
              category={item.category || 'Galeria'}
              aspectRatio="aspect-[4/3]"
              className="shadow-md"
            />
            <div className="space-y-1">
              <h3 className="font-serif-editorial text-xl font-light text-forest-deep">
                {item.title}
              </h3>
              <p className="text-xs text-charcoal/70 font-light">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
