import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/services";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "OC Implant Oral Surgery in Brea, CA offers dental implants, wisdom teeth extraction, IV sedation, TMJ treatment, oral cancer screening, and facial injury care. Board-certified surgeon Dr. Jone Kim.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#1B3A5C] to-[#0f2640] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-sm font-semibold text-[#2A9D8F] uppercase tracking-wider">
            What We Offer
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-3 mb-4 text-white">
            Our Services
          </h1>
          <p className="text-white/75 max-w-2xl mx-auto text-lg">
            Dr. Kim provides the full spectrum of oral and maxillofacial surgery
            services — from routine extractions to complex reconstructions.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white rounded-2xl p-7 border border-gray-100 hover:border-[#2A9D8F]/40 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h2 className="text-lg font-bold text-[#1B3A5C] mb-2 group-hover:text-[#2A9D8F] transition-colors">
                  {service.title}
                </h2>
                <p className="text-sm text-[#334155]/70 leading-relaxed flex-1 mb-5">
                  {service.shortDescription}
                </p>
                <span className="flex items-center gap-1.5 text-sm font-semibold text-[#2A9D8F] group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
