'use client';

import React from 'react';
import Image from 'next/image';
import { Camera, Sparkles } from 'lucide-react';

interface EditorialPlaceholderProps {
  src?: string;
  alt?: string;
  category?: string;
  caption?: string;
  aspectRatio?: string;
  className?: string;
  priority?: boolean;
}

export const EditorialPlaceholder: React.FC<EditorialPlaceholderProps> = ({
  src,
  alt = 'Pousada Vista do Lago Araruama',
  category,
  caption,
  aspectRatio = 'aspect-[4/3]',
  className = '',
  priority = false,
}) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl bg-forest-deep/90 ${aspectRatio} ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ) : (
        /* Editorial Luxury Ambient Placeholder when no confirmed real photo is available */
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-forest-deep via-forest to-forest-deep p-6 text-center text-sand">
          <div className="absolute inset-0 bg-noise opacity-20" />
          <div className="relative z-10 flex flex-col items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-champagne">
              <Camera className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <span className="font-serif-editorial text-xl italic text-sand/90">
                Imagem oficial da pousada
              </span>
              {category && (
                <p className="text-[10px] uppercase tracking-widest text-champagne/80 font-medium">
                  {category}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Editorial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 opacity-70 transition-opacity duration-300 group-hover:opacity-50 pointer-events-none" />

      {/* Caption Tag */}
      {(caption || category) && (
        <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
          {caption && (
            <span className="rounded-full bg-black/40 backdrop-blur-md border border-white/15 px-3.5 py-1.5 text-xs font-light text-offwhite">
              {caption}
            </span>
          )}
          {category && (
            <span className="flex items-center gap-1 rounded-full bg-champagne/20 backdrop-blur-md border border-champagne/30 px-3 py-1 text-[10px] uppercase tracking-wider text-champagne">
              <Sparkles className="h-3 w-3" />
              {category}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
