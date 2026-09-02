'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Manifesto } from '@/components/sections/Manifesto';
import { Stats } from '@/components/sections/Stats';
import { Gallery } from '@/components/sections/Gallery';
import { Experiences } from '@/components/sections/Experiences';
import { Beaches } from '@/components/sections/Beaches';
import { DayUse } from '@/components/sections/DayUse';
import { Accommodation } from '@/components/sections/Accommodation';
import { Gastronomy } from '@/components/sections/Gastronomy';
import { Sunset } from '@/components/sections/Sunset';
import { HorizontalGallery } from '@/components/sections/HorizontalGallery';
import { Testimonials } from '@/components/sections/Testimonials';
import { PetFriendly } from '@/components/sections/PetFriendly';
import { Location } from '@/components/sections/Location';
import { FinalCTA } from '@/components/sections/FinalCTA';

import { BookingDrawer } from '@/components/ui/BookingDrawer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { MobileBottomBar } from '@/components/ui/MobileBottomBar';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingType, setBookingType] = useState<'hospedagem' | 'dayuse'>('hospedagem');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 750);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenBooking = (type: 'hospedagem' | 'dayuse' = 'hospedagem') => {
    setBookingType(type);
    setBookingOpen(true);
  };

  return (
    <main className="relative min-h-screen bg-offwhite text-charcoal selection:bg-forest-deep selection:text-sand overflow-x-hidden">
      {/* Intro Mask Animation (750ms) */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-forest-deep text-sand"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center gap-3 text-center"
            >
              <span className="font-serif-editorial text-3xl sm:text-4xl tracking-wider text-white font-light">
                POUSADA VISTA DO LAGO
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-champagne">
                Araruama • Rio de Janeiro
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* 15 Editorial Sections */}
      <Hero onOpenBooking={handleOpenBooking} />
      <Manifesto />
      <Stats />
      <Gallery />
      <Experiences />
      <Beaches />
      <DayUse onOpenBooking={handleOpenBooking} />
      <Accommodation onOpenBooking={handleOpenBooking} />
      <Gastronomy />
      <Sunset />
      <HorizontalGallery />
      <Testimonials />
      <PetFriendly />
      <Location />
      <FinalCTA onOpenBooking={handleOpenBooking} />

      {/* Footer */}
      <Footer />

      {/* Independent Booking Drawer */}
      <BookingDrawer
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultType={bookingType}
      />

      {/* Quick Action Floating Widgets */}
      <WhatsAppButton onClick={() => handleOpenBooking('hospedagem')} />
      <MobileBottomBar onOpenBooking={handleOpenBooking} />
    </main>
  );
}
