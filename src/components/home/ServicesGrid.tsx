"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const SERVICES = [
  {
    title: "Dental Implants",
    description:
      "Permanent, natural-looking tooth replacements anchored directly to your jawbone for a lifetime of confident smiles.",
    href: "/services/dental-implants",
    icon: "🦷",
  },
  {
    title: "Wisdom Teeth Extraction",
    description:
      "Safe, gentle removal of impacted or problematic wisdom teeth with sedation options to keep you comfortable.",
    href: "/services/wisdom-teeth",
    icon: "✦",
  },
  {
    title: "Anesthesia & Sedation",
    description:
      "Full anesthesia and IV sedation services so even the most anxious patients can receive care comfortably.",
    href: "/services/anesthesia",
    icon: "💉",
  },
  {
    title: "TMJ Treatment",
    description:
      "Diagnosis and treatment of temporomandibular joint disorders to relieve jaw pain, headaches, and clicking.",
    href: "/services/tmj",
    icon: "🫦",
  },
  {
    title: "Oral Cancer Screening",
    description:
      "Early detection and evaluation of oral lesions and abnormalities — critical for the best treatment outcomes.",
    href: "/services/oral-cancer",
    icon: "🔬",
  },
  {
    title: "Facial Injury Treatment",
    description:
      "Expert care for facial trauma, jaw fractures, and lacerations — from emergency treatment to full reconstruction.",
    href: "/services/facial-injury",
    icon: "🛡️",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-[#2A9D8F] uppercase tracking-wider">
            What We Treat
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1B3A5C] mt-2 mb-4">
            Comprehensive Oral Surgery Services
          </h2>
          <p className="text-[#334155]/70 max-w-2xl mx-auto text-lg">
            From routine extractions to complex implant procedures, Dr. Kim
            brings board-certified expertise to every patient.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service) => (
            <motion.div key={service.href} variants={item}>
              <Link
                href={service.href}
                className="group block bg-white rounded-2xl p-7 border border-gray-100 hover:border-[#2A9D8F]/30 hover:shadow-lg transition-all duration-300 h-full"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-[#1B3A5C] mb-2 group-hover:text-[#2A9D8F] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-[#334155]/70 leading-relaxed mb-5">
                  {service.description}
                </p>
                <span className="flex items-center gap-1.5 text-sm font-semibold text-[#2A9D8F] group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* All Services CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-10"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B3A5C] hover:text-[#2A9D8F] transition-colors"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
