"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className="p-8 rounded-3xl border border-forest-deep/15 bg-white/90 backdrop-blur-md shadow-lg max-w-xs w-full transition-all hover:border-champagne/40"
                  key={i}
                >
                  <div className="text-xs md:text-sm font-light text-charcoal/85 leading-relaxed font-sans">
                    &ldquo;{text}&rdquo;
                  </div>
                  <div className="flex items-center gap-3 mt-5 pt-4 border-t border-forest-deep/10">
                    <Image
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover border border-champagne/40 shadow-sm"
                      loading="lazy"
                      unoptimized={image.startsWith('http')}
                    />
                    <div className="flex flex-col">
                      <div className="font-semibold text-xs text-forest-deep tracking-tight">
                        {name}
                      </div>
                      <div className="text-[10px] uppercase font-medium text-forest opacity-70 tracking-wider">
                        {role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
