'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Users, Send, CheckCircle2, Sun, BedDouble, Info } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface BookingDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  defaultType?: 'hospedagem' | 'dayuse';
}

export const BookingDrawer: React.FC<BookingDrawerProps> = ({
  isOpen,
  onClose,
  defaultType = 'hospedagem',
}) => {
  const [bookingType, setBookingType] = useState<'hospedagem' | 'dayuse'>(defaultType);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState('2');
  const [childrenCount, setChildrenCount] = useState('0');
  const [notes, setNotes] = useState('');

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();

    const typeLabel = bookingType === 'hospedagem' ? 'Hospedagem' : 'Day Use completo';
    let message = `Olá! Gostaria de consultar disponibilidade para ${typeLabel} na Pousada Vista do Lago.\n\n`;

    if (bookingType === 'hospedagem') {
      message += `📅 Check-in: ${checkIn || 'A definir'}\n`;
      message += `📅 Check-out: ${checkOut || 'A definir'}\n`;
    } else {
      message += `📅 Data desejada para Day Use: ${checkIn || 'A definir'}\n`;
    }

    message += `👥 Adultos: ${adults}\n`;
    message += `👶 Crianças: ${childrenCount}\n`;

    if (notes.trim()) {
      message += `📝 Observações: ${notes}\n`;
    }

    message += `\nAguardo informações de valores e disponibilidade. Obrigado!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5522999999999?text=${encodedMessage}`; // Default official number placeholder

    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md"
          />

          {/* Drawer Slide Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-lg flex-col bg-forest-deep text-sand shadow-2xl border-l border-champagne/20"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 p-6 md:p-8">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-champagne">
                  Reserva Direta & Sem Taxas
                </span>
                <h3 className="font-serif-editorial text-2xl md:text-3xl font-light text-white">
                  Consultar Disponibilidade
                </h3>
              </div>
              <button
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/15 transition-colors"
                aria-label="Fechar"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Form Body */}
            <form onSubmit={handleWhatsAppSend} className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
              {/* Type Switcher */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-sand/80 font-medium">
                  Tipo de Experiência
                </label>
                <div className="grid grid-cols-2 gap-3 p-1.5 rounded-2xl bg-black/30 border border-white/10">
                  <button
                    type="button"
                    onClick={() => setBookingType('hospedagem')}
                    className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-medium transition-all ${
                      bookingType === 'hospedagem'
                        ? 'bg-champagne text-forest-deep shadow-md font-semibold'
                        : 'text-sand/70 hover:text-white'
                    }`}
                  >
                    <BedDouble className="h-4 w-4" />
                    Hospedagem
                  </button>
                  <button
                    type="button"
                    onClick={() => setBookingType('dayuse')}
                    className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-medium transition-all ${
                      bookingType === 'dayuse'
                        ? 'bg-champagne text-forest-deep shadow-md font-semibold'
                        : 'text-sand/70 hover:text-white'
                    }`}
                  >
                    <Sun className="h-4 w-4" />
                    Day Use
                  </button>
                </div>
              </div>

              {/* Dates */}
              <div className="space-y-4">
                {bookingType === 'hospedagem' ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider text-sand/80 flex items-center gap-2">
                        <Calendar className="h-3.5 w-3.5 text-champagne" />
                        Check-in
                      </label>
                      <input
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full rounded-xl bg-white/5 border border-white/15 p-3.5 text-sm text-white focus:outline-none focus:border-champagne"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider text-sand/80 flex items-center gap-2">
                        <Calendar className="h-3.5 w-3.5 text-champagne" />
                        Check-out
                      </label>
                      <input
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full rounded-xl bg-white/5 border border-white/15 p-3.5 text-sm text-white focus:outline-none focus:border-champagne"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-sand/80 flex items-center gap-2">
                      <Calendar className="h-3.5 w-3.5 text-champagne" />
                      Data Desejada (Day Use)
                    </label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full rounded-xl bg-white/5 border border-white/15 p-3.5 text-sm text-white focus:outline-none focus:border-champagne"
                    />
                  </div>
                )}
              </div>

              {/* Guests */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-sand/80 flex items-center gap-2">
                    <Users className="h-3.5 w-3.5 text-champagne" />
                    Adultos
                  </label>
                  <select
                    value={adults}
                    onChange={(e) => setAdults(e.target.value)}
                    className="w-full rounded-xl bg-forest border border-white/15 p-3.5 text-sm text-white focus:outline-none focus:border-champagne"
                  >
                    {[1, 2, 3, 4, 5, 6, '7+'].map((num) => (
                      <option key={num} value={num} className="bg-forest-deep text-white">
                        {num} {num === 1 ? 'Adulto' : 'Adultos'}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-sand/80">
                    Crianças
                  </label>
                  <select
                    value={childrenCount}
                    onChange={(e) => setChildrenCount(e.target.value)}
                    className="w-full rounded-xl bg-forest border border-white/15 p-3.5 text-sm text-white focus:outline-none focus:border-champagne"
                  >
                    {[0, 1, 2, 3, 4, '5+'].map((num) => (
                      <option key={num} value={num} className="bg-forest-deep text-white">
                        {num} {num === 1 ? 'Criança' : 'Crianças'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-sand/80">
                  Observações ou Pedidos Especiais
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ex: comemoração especial, pet amigável, preferências de refeição..."
                  className="w-full rounded-xl bg-white/5 border border-white/15 p-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-champagne resize-none"
                />
              </div>

              {/* Info banner */}
              <div className="flex gap-3 rounded-2xl bg-white/5 border border-white/10 p-4 text-xs text-sand/80">
                <Info className="h-4 w-4 text-champagne shrink-0 mt-0.5" />
                <p>
                  Sua solicitação será enviada diretamente à nossa equipe de reservas no WhatsApp para confirmação rápida e sem intermediários.
                </p>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <MagneticButton
                  type="submit"
                  variant="gold"
                  className="w-full py-4 text-xs tracking-widest"
                  icon={<Send className="h-4 w-4" />}
                >
                  Consultar Disponibilidade
                </MagneticButton>
              </div>
            </form>

            {/* Footer */}
            <div className="border-t border-white/10 p-6 text-center text-xs text-sand/60">
              <div className="flex items-center justify-center gap-2 mb-1 text-champagne">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>Atendimento Personalizado Pousada Vista do Lago</span>
              </div>
              <p>Araruama — Rio de Janeiro</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
