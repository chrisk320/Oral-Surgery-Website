"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-20 bg-[#2A9D8F]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/85 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Book your consultation with Dr. Kim today. We&apos;ll answer your
            questions, review your options, and create a personalized treatment
            plan — all with your comfort as our priority.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-[#2A9D8F] hover:bg-[#1B3A5C] hover:text-white px-8 py-6 text-base font-semibold shadow-lg transition-all"
            >
              <Link href="/contact">
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Consultation
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/50 bg-transparent text-white hover:bg-white/10 hover:border-white px-8 py-6 text-base font-semibold"
            >
              <a href="tel:7145290043">
                <Phone className="w-5 h-5 mr-2" />
                (714) 529-0043
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
