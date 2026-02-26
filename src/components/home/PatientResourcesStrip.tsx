"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, ClipboardList, HelpCircle, CreditCard } from "lucide-react";

const RESOURCES = [
  {
    icon: FileText,
    title: "New Patient Forms",
    description: "Download and complete forms before your visit to save time.",
    href: "/patient-resources#forms",
  },
  {
    icon: ClipboardList,
    title: "Pre & Post-Op Instructions",
    description: "Important preparation and recovery information by procedure.",
    href: "/patient-resources#instructions",
  },
  {
    icon: HelpCircle,
    title: "Patient FAQs",
    description: "Answers to common questions about procedures, sedation, and recovery.",
    href: "/patient-resources#faq",
  },
  {
    icon: CreditCard,
    title: "Insurance & Financing",
    description: "Accepted insurance plans, CareCredit, and flexible payment options.",
    href: "/patient-resources#insurance",
  },
];

export default function PatientResourcesStrip() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-sm font-semibold text-[#2A9D8F] uppercase tracking-wider">
            For Our Patients
          </span>
          <h2 className="text-3xl font-bold text-[#1B3A5C] mt-2">
            Patient Resources
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESOURCES.map((r, i) => (
            <motion.div
              key={r.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link
                href={r.href}
                className="group flex flex-col items-start gap-3 p-6 rounded-xl border border-gray-100 hover:border-[#2A9D8F]/30 hover:shadow-md bg-[#F8FAFC] transition-all h-full"
              >
                <div className="w-11 h-11 rounded-lg bg-[#2A9D8F]/10 flex items-center justify-center">
                  <r.icon className="w-5 h-5 text-[#2A9D8F]" />
                </div>
                <h3 className="font-bold text-[#1B3A5C] group-hover:text-[#2A9D8F] transition-colors text-sm">
                  {r.title}
                </h3>
                <p className="text-xs text-[#334155]/65 leading-relaxed">{r.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
