"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const CREDENTIALS = [
  "DDS & MS — UCLA School of Dentistry / UCLA Graduate School",
  "Residency — Oral & Maxillofacial Surgery, UCLA Affiliate (1998)",
  "Fellowship — Orthognathic & Facial Reconstructive Surgery",
  "Board-Certified, American Board of Oral & Maxillofacial Surgery",
  "Member, AAOMS · CALAOMS · ADSA · ADA",
];

export default function AboutTeaser() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-[#1B3A5C]/10 to-[#2A9D8F]/10 flex items-center justify-center border-2 border-dashed border-[#2A9D8F]/30">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">👨‍⚕️</div>
                <p className="text-[#1B3A5C]/60 text-sm">
                  Dr. Jone Kim photo
                </p>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-[#2A9D8F] text-white rounded-xl px-5 py-4 shadow-xl text-center">
              <p className="text-2xl font-bold leading-none">20+</p>
              <p className="text-xs mt-1 text-white/85">Years in Brea since 2005</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-[#2A9D8F] uppercase tracking-wider">
              Meet Your Surgeon
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B3A5C] mt-2 mb-5">
              Dr. Jone Kim, DDS, MS
            </h2>
            <p className="text-[#334155]/80 text-lg leading-relaxed mb-6">
              Raised in Anaheim, CA, Dr. Kim earned his DDS from UCLA School of
              Dentistry and his MS in oral biology from UCLA Graduate School —
              where his thesis research earned national awards from the AAOMS
              and the American College of Oral &amp; Maxillofacial Surgeons.
            </p>
            <p className="text-[#334155]/70 leading-relaxed mb-8">
              After completing his residency and a prestigious fellowship in
              orthognathic and facial reconstructive surgery, Dr. Kim returned
              to Orange County and has been serving patients in Brea since 2005.
              He is board-certified by the American Board of Oral &amp;
              Maxillofacial Surgery.
            </p>

            {/* Credentials */}
            <ul className="space-y-2.5 mb-8">
              {CREDENTIALS.map((cred) => (
                <li key={cred} className="flex items-center gap-3 text-sm text-[#334155]">
                  <CheckCircle2 className="w-5 h-5 text-[#2A9D8F] flex-shrink-0" />
                  {cred}
                </li>
              ))}
            </ul>

            <Button
              asChild
              variant="outline"
              className="border-[#1B3A5C] text-[#1B3A5C] hover:bg-[#1B3A5C] hover:text-white transition-colors"
            >
              <Link href="/about">Learn More About Dr. Kim</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
