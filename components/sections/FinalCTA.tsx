'use client';

import React from 'react';
import Image from 'next/image';
import { Reveal } from '../ui/Reveal';
import { MagneticButton } from '../ui/MagneticButton';
import { Calendar, Sun, MessageCircle, ArrowRight } from 'lucide-react';

interface FinalCTAProps {
  onOpenBooking: (type?: 'hospedagem' | 'dayuse') => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative bg-forest-deep text-sand py-28 md:py-40 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-sunset-pool.png"
          alt="Golden Hour na Pousada Vista do Lago Araruama"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-forest-deep/85 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/60 to-forest-deep" />
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
        <Reveal direction="up">
          <span className="inline-flex items-center gap-2 rounded-full bg-champagne/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-champagne border border-champagne/30">
            Reserva Direta & Atendimento Personalizado
          </span>
        </Reveal>

        <Reveal direction="up" delay={0.1}>
          <h2 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white leading-tight">
            Seu próximo pôr do sol <br />
            <span className="italic font-normal text-champagne text-glow-gold">pode ser aqui.</span>
          </h2>
        </Reveal>

        <Reveal direction="up" delay={0.2}>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-sand/85 font-light leading-relaxed">
            Escolha suas datas e venha viver a Lagoa de Araruama de um jeito diferente — com tranquilidade, acolhimento e horizontes inesquecíveis.
          </p>
        </Reveal>

        <Reveal direction="up" delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <MagneticButton
              variant="gold"
              onClick={() => onOpenBooking('hospedagem')}
              icon={<Calendar className="h-4 w-4" />}
            >
              Reservar Hospedagem
            </MagneticButton>

            <button
              onClick={() => onOpenBooking('dayuse')}
              className="px-7 py-4 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 text-xs uppercase tracking-wider font-semibold transition-all duration-300 backdrop-blur-md shadow-lg"
            >
              Consultar Day Use
            </button>
          </div>
        </Reveal>

        {/* WhatsApp Direct */}
        <Reveal direction="up" delay={0.4}>
          <div className="pt-6 border-t border-white/10 max-w-md mx-auto">
            <p className="text-xs text-sand/60 mb-2">Prefere atendimento imediato?</p>
            <a
              href="https://wa.me/5522999999999?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20hospedagem%20e%20day%20use."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-champagne hover:text-white transition-colors"
            >
              <MessageCircle className="h-4 w-4 text-[#25D366]" />
              <span>Falar diretamente pelo WhatsApp</span>
              <ArrowRight className="h-3 w-3" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
