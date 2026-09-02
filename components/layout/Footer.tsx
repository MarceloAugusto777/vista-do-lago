'use client';

import React from 'react';
import Image from 'next/image';
import { Instagram, MessageCircle, MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const links = [
    { label: 'Experiência', href: '#manifesto' },
    { label: 'Hospedagem', href: '#hospedagem' },
    { label: 'Day Use', href: '#day-use' },
    { label: 'Gastronomia', href: '#gastronomia' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Localização', href: '#localizacao' },
  ];

  return (
    <footer className="bg-forest-deep text-sand py-16 px-6 md:px-12 lg:px-20 border-t border-champagne/15">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Main Footer Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 border-b border-white/10 pb-12">
          {/* Logo & Info */}
          <div className="flex items-center gap-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border border-champagne/40 bg-white/10 p-1">
              <Image
                src="/images/logo-vista-do-lago.png"
                alt="Pousada Vista do Lago Logo"
                fill
                className="object-contain p-0.5"
              />
            </div>
            <div>
              <h3 className="font-serif-editorial text-2xl font-light text-white leading-none">
                Pousada Vista do Lago
              </h3>
              <p className="text-xs text-champagne uppercase tracking-widest pt-1 font-medium">
                Araruama — Rio de Janeiro
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap gap-6 text-xs uppercase tracking-wider font-medium text-sand/80">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-champagne transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com/vistadolago_pousada"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/15 text-sand hover:bg-champagne hover:text-forest-deep transition-all"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/5522999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/15 text-sand hover:bg-[#25D366] hover:text-white transition-all"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Bottom Copyright & Address */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-sand/60 font-light">
          <p>© {new Date().getFullYear()} Pousada Vista do Lago. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-champagne" />
            <span>Rua Mirante, 743 — Bairro Lake View, Araruama — RJ</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
