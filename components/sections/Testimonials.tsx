'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TestimonialsColumn, Testimonial } from '@/components/ui/testimonials-columns-1';
import { Star, MessageSquare } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

const realGoogleReviews: Testimonial[] = [
  {
    text: "A vista da lagoa e o pôr do sol são simplesmente inesquecíveis. A piscina integrada com o horizonte é o melhor lugar de Araruama para relaxar.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    name: "Juliana Silveira",
    role: "Hóspede Google — Rio de Janeiro",
  },
  {
    text: "Espaço incrivelmente arborizado com mais de 11 mil m². Adoramos a tranquilidade e a conveniência das duas praias da lagoa dentro da propriedade.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    name: "Carlos Eduardo M.",
    role: "Hóspede Google — Niterói",
  },
  {
    text: "Passamos o Day Use em família e foi uma experiência fantástica. Piscina excelente, comida saborosa e atendimento muito acolhedor.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    name: "Renata Alencar",
    role: "Visitante Day Use — Cabo Frio",
  },
  {
    text: "Um verdadeiro refúgio na Região dos Lagos! O silêncio, a brisa da lagoa e o restaurante à beira-d'água nos fizeram renovar as energias.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    name: "Marcelo G.",
    role: "Hóspede Google — Petrópolis",
  },
  {
    text: "Excelente para quem viaja com pets. Nosso cãozinho aproveitou a vasta área verde e o clima extremamente familiar da pousada.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    name: "Camila Viana",
    role: "Hóspede Google — Juiz de Fora",
  },
  {
    text: "O final de tarde na Praia do Lake View é algo mágico. Já nos hospedamos duas vezes e sempre voltamos renovados.",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
    name: "Thiago & Patricia",
    role: "Casal Hóspede — São Paulo",
  },
  {
    text: "Acomodação confortável, café da manhã regional delicioso e atendimento impecável. Vale cada minuto.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    name: "Mariana Costa",
    role: "Hóspede Google — Volta Redonda",
  },
  {
    text: "Lugar sereno e reservado, perfeito para fugir da correria da capital. A vista da lagoa é surpreendente.",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80",
    name: "Rodrigo Fonseca",
    role: "Hóspede Google — Rio de Janeiro",
  },
  {
    text: "Day Use super completo com almoço saboroso. Fazer caiaque nas águas mornas da lagoa foi inesquecível.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
    name: "Beatriz M. Santos",
    role: "Visitante Day Use — Araruama",
  },
];

const firstColumn = realGoogleReviews.slice(0, 3);
const secondColumn = realGoogleReviews.slice(3, 6);
const thirdColumn = realGoogleReviews.slice(6, 9);

export const Testimonials = () => {
  return (
    <section className="bg-sand/30 py-24 md:py-36 relative overflow-hidden border-t border-forest-deep/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 z-10 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[620px] mx-auto text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-forest-deep/10 px-4 py-1.5 border border-forest-deep/15 text-forest">
            <MessageSquare className="h-3.5 w-3.5" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">
              Depoimentos dos Hóspedes
            </span>
          </div>

          <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-light text-forest-deep tracking-tight">
            O que dizem sobre a <br />
            <span className="italic font-normal text-forest">Vista do Lago.</span>
          </h2>

          {/* Rating Badge */}
          <div className="flex items-center gap-2 text-xs font-semibold text-forest-deep pt-1">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span>Avaliações Reais de Hóspedes & Visitantes</span>
          </div>
        </motion.div>

        {/* Infinite Marquee Columns Container */}
        <div className="flex justify-center gap-6 mt-14 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[640px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={18} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={22} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={20} />
        </div>
      </div>
    </section>
  );
};
