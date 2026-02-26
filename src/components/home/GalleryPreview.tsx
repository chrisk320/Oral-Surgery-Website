"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CASES = [
  {
    id: 1,
    title: "Full-Arch Dental Implants",
    description: "Complete smile restoration using implant-supported prosthetics.",
    category: "Implants",
  },
  {
    id: 2,
    title: "Wisdom Teeth Extraction",
    description: "Successful removal of all four impacted wisdom teeth.",
    category: "Extractions",
  },
  {
    id: 3,
    title: "Single Tooth Implant",
    description: "Seamless replacement of a missing molar with a natural-looking implant.",
    category: "Implants",
  },
];

export default function GalleryPreview() {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-[#2A9D8F] uppercase tracking-wider">
            Real Results
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1B3A5C] mt-2 mb-4">
            Before & After Gallery
          </h2>
          <p className="text-[#334155]/70 max-w-xl mx-auto">
            See the transformations we&apos;ve achieved for our patients.
            All photos shared with patient consent.
          </p>
        </motion.div>

        {/* Case cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {CASES.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow"
            >
              {/* Before/After image placeholder */}
              <div className="relative aspect-video bg-gradient-to-r from-[#1B3A5C]/10 to-[#2A9D8F]/10 flex items-center justify-center">
                <div className="absolute inset-0 flex">
                  <div className="flex-1 bg-[#1B3A5C]/5 flex items-center justify-center border-r border-dashed border-[#1B3A5C]/20">
                    <span className="text-xs font-medium text-[#1B3A5C]/40 uppercase tracking-wider">Before</span>
                  </div>
                  <div className="flex-1 bg-[#2A9D8F]/5 flex items-center justify-center">
                    <span className="text-xs font-medium text-[#2A9D8F]/50 uppercase tracking-wider">After</span>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold text-[#2A9D8F] uppercase tracking-wide">
                  {c.category}
                </span>
                <h3 className="text-base font-bold text-[#1B3A5C] mt-1 mb-2">
                  {c.title}
                </h3>
                <p className="text-sm text-[#334155]/70">{c.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            variant="outline"
            className="border-[#2A9D8F] text-[#2A9D8F] hover:bg-[#2A9D8F] hover:text-white transition-colors"
          >
            <Link href="/gallery">
              View Full Gallery <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
