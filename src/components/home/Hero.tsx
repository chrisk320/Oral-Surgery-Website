"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #1B3A5C 0%, #0f2640 40%, #1a3a52 70%, #2A9D8F 100%)",
      }}
    >
      {/* Subtle mesh overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #2A9D8F 0%, transparent 50%), radial-gradient(circle at 75% 75%, #1B3A5C 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center py-32 pt-48">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-6 backdrop-blur-sm">
            Board-Certified Oral Surgeon · Brea, CA
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Restoring Smiles,
            <br />
            <span className="text-[#2A9D8F]">Rebuilding Confidence</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Dr. Jone Kim provides expert oral surgery in Brea and throughout
            Orange County — from dental implants and wisdom teeth to full
            sedation and TMJ care.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#2A9D8F] hover:bg-[#238579] text-white px-8 py-6 text-base font-semibold shadow-lg shadow-teal-900/30 transition-all hover:scale-[1.02]"
            >
              <Link href="/contact">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule a Consultation
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50 px-8 py-6 text-base font-semibold backdrop-blur-sm"
            >
              <a href="tel:7145290043">
                <Phone className="w-5 h-5 mr-2" />
                Call (714) 529-0043
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
          >
            <ChevronDown className="w-6 h-6 text-white/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
