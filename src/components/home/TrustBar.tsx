"use client";

import { motion } from "framer-motion";
import { Shield, Users, Star, Award } from "lucide-react";

const TRUST_ITEMS = [
  {
    icon: Shield,
    value: "Board-Certified",
    label: "Oral & Maxillofacial Surgeon",
  },
  {
    icon: Award,
    value: "20+ Years",
    label: "In Practice Since 2005",
  },
  {
    icon: Users,
    value: "5,000+",
    label: "Patients Treated",
  },
  {
    icon: Star,
    value: "5-Star",
    label: "Average Patient Rating",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {TRUST_ITEMS.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center gap-2"
            >
              <div className="w-12 h-12 rounded-full bg-[#F8FAFC] flex items-center justify-center mb-1">
                <item.icon className="w-6 h-6 text-[#2A9D8F]" />
              </div>
              <p className="text-xl font-bold text-[#1B3A5C]">{item.value}</p>
              <p className="text-sm text-[#334155]/70 leading-tight">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
