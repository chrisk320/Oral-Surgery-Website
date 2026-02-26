"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Maria S.",
    procedure: "Dental Implants",
    rating: 5,
    quote:
      "Dr. Kim completely transformed my smile. I was terrified of the procedure but he explained every step and made me feel at ease. The implants look and feel completely natural — I couldn't be happier with the result!",
  },
  {
    id: 2,
    name: "James T.",
    procedure: "Wisdom Teeth Extraction",
    rating: 5,
    quote:
      "I had all four wisdom teeth removed with IV sedation. I woke up and it was done — I barely felt anything during recovery either. The office staff are incredibly kind and professional. Highly recommend.",
  },
  {
    id: 3,
    name: "Linda K.",
    procedure: "TMJ Treatment",
    rating: 5,
    quote:
      "After years of jaw pain and headaches, Dr. Kim finally gave me relief. His thorough diagnosis and treatment plan worked better than anything I'd tried before. My quality of life has improved dramatically.",
  },
  {
    id: 4,
    name: "Robert M.",
    procedure: "Facial Injury",
    rating: 5,
    quote:
      "Dr. Kim treated my facial fracture after an accident. His expertise and care throughout the whole process was outstanding. You'd never know anything had happened — the reconstruction was flawless.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));

  return (
    <section className="py-20 bg-[#1B3A5C]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-[#2A9D8F] uppercase tracking-wider">
            Patient Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            What Our Patients Say
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border border-white/10"
            >
              <StarRating rating={TESTIMONIALS[current].rating} />
              <blockquote className="text-white/90 text-lg leading-relaxed mt-5 mb-6 italic">
                &ldquo;{TESTIMONIALS[current].quote}&rdquo;
              </blockquote>
              <div>
                <p className="font-semibold text-white">{TESTIMONIALS[current].name}</p>
                <p className="text-sm text-[#2A9D8F]">
                  {TESTIMONIALS[current].procedure}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? "w-8 bg-[#2A9D8F]" : "w-2 bg-white/30"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
