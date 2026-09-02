'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Calendar } from 'lucide-react';
import { GlassButton } from '../ui/GlassButton';

interface NavbarProps {
  onOpenBooking: (type?: 'hospedagem' | 'dayuse') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Experiência', href: '#manifesto' },
    { label: 'Hospedagem', href: '#hospedagem' },
    { label: 'Day Use', href: '#day-use' },
    { label: 'Gastronomia', href: '#gastronomia' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Localização', href: '#localizacao' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 pt-4 md:pt-6 pointer-events-none">
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center justify-between w-full max-w-[1180px] rounded-full transition-all duration-500 px-5 md:px-7 ${
            scrolled ? 'glass-nav-scrolled py-3' : 'glass-nav py-4'
          }`}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border border-champagne/30 bg-forest-deep/30 p-1 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo-vista-do-lago.png"
                alt="Pousada Vista do Lago Logo"
                fill
                className="object-contain p-0.5"
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif-editorial text-lg md:text-xl leading-none font-semibold tracking-wide transition-colors ${scrolled ? 'text-white' : 'text-forest-deep'}`}>
                Vista do Lago
              </span>
              <span className="text-[9px] uppercase tracking-widest text-champagne font-medium">
                Pousada • Araruama
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`relative text-xs uppercase tracking-widest font-medium transition-colors group ${
                  scrolled ? 'text-sand/90 hover:text-white' : 'text-forest-deep/80 hover:text-forest-deep'
                }`}
              >
                {link.label}
                <span className="absolute bottom-[-4px] left-0 w-0 h-[1.5px] bg-champagne transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop Reservation CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onOpenBooking('hospedagem')}
              className={`group flex items-center gap-2 rounded-full px-5 py-2.5 text-xs uppercase tracking-wider font-semibold transition-all duration-300 ${
                scrolled
                  ? 'bg-champagne text-forest-deep hover:bg-white shadow-lg'
                  : 'bg-forest-deep text-sand hover:bg-forest hover:text-white shadow-md'
              }`}
            >
              <span>Reservar</span>
              <Calendar className="h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-110" />
            </button>
          </div>

          {/* Mobile Hamburguer */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking('hospedagem')}
              className="px-3.5 py-2 rounded-full bg-champagne text-forest-deep text-[11px] font-bold uppercase tracking-wider shadow"
            >
              Reservar
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`p-2 rounded-full border transition-colors ${
                scrolled ? 'border-white/20 text-white bg-white/10' : 'border-forest-deep/20 text-forest-deep bg-white/40'
              }`}
              aria-label="Abrir Menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-forest-deep p-6 text-sand md:p-10"
          >
            {/* Top row */}
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full border border-champagne/40 bg-white/10 p-1">
                  <Image
                    src="/images/logo-vista-do-lago.png"
                    alt="Pousada Vista do Lago"
                    fill
                    className="object-contain p-0.5"
                  />
                </div>
                <span className="font-serif-editorial text-2xl text-white font-light">
                  Vista do Lago
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white border border-white/15"
                aria-label="Fechar Menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col gap-6 py-8">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.08 }}
                  className="group flex items-center justify-between border-b border-white/5 pb-4"
                >
                  <span className="font-serif-editorial text-3xl font-light text-sand transition-colors group-hover:text-champagne">
                    {link.label}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-champagne opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </nav>

            {/* Action CTAs */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking('hospedagem');
                }}
                className="w-full py-4 rounded-full bg-champagne text-forest-deep text-xs font-semibold uppercase tracking-widest shadow-xl"
              >
                Reservar Hospedagem
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking('dayuse');
                }}
                className="w-full py-3.5 rounded-full bg-white/10 text-sand border border-white/20 text-xs font-medium uppercase tracking-widest"
              >
                Consultar Day Use
              </button>
              <div className="text-center text-[10px] uppercase tracking-widest text-sand/60 pt-2">
                Araruama • Região dos Lagos • RJ
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
