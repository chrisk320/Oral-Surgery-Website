import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CTABanner from "@/components/home/CTABanner";
import ServiceSidebarCTA from "@/components/shared/ServiceSidebarCTA";
import type { Service } from "@/lib/services";

interface ServicePageTemplateProps {
  service: Service;
  relatedServices: Service[];
}

export default function ServicePageTemplate({
  service,
  relatedServices,
}: ServicePageTemplateProps) {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#1B3A5C] to-[#0f2640] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-4xl mb-4">{service.icon}</div>
          <span className="text-sm font-semibold text-[#2A9D8F] uppercase tracking-wider">
            OC Implant Oral Surgery
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-3 mb-4 text-white">
            {service.title}
          </h1>
          <p className="text-white/75 max-w-2xl mx-auto text-lg">
            {service.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Body: two-column on desktop */}
      <div className="bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left — main content */}
            <div className="flex-1 min-w-0 space-y-10">

              {/* Intro */}
              <section className="bg-white rounded-2xl p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-[#1B3A5C] mb-4">
                  Overview
                </h2>
                <p className="text-[#334155]/80 leading-relaxed">{service.intro}</p>
              </section>

              {/* Who is a candidate */}
              <section className="bg-white rounded-2xl p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-[#1B3A5C] mb-5">
                  Who Is a Candidate?
                </h2>
                <ul className="space-y-3">
                  {service.candidates.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-[#334155]/80">
                      <CheckCircle2 className="w-5 h-5 text-[#2A9D8F] flex-shrink-0 mt-0.5" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* What to Expect */}
              <section className="bg-white rounded-2xl p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-[#1B3A5C] mb-5">
                  What to Expect
                </h2>
                <Accordion type="single" collapsible className="space-y-0">
                  {service.steps.map((step, i) => (
                    <AccordionItem key={i} value={`step-${i}`}>
                      <AccordionTrigger className="text-left font-semibold text-[#1B3A5C] hover:text-[#2A9D8F] hover:no-underline">
                        <span className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full bg-[#2A9D8F] text-white text-xs flex items-center justify-center font-bold flex-shrink-0">
                            {i + 1}
                          </span>
                          {step.title}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-[#334155]/75 leading-relaxed pl-9">
                        {step.description}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>

              {/* Mobile sidebar CTA (between sections) */}
              <div className="lg:hidden">
                <ServiceSidebarCTA />
              </div>

              {/* Recovery & Aftercare */}
              <section className="bg-white rounded-2xl p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-[#1B3A5C] mb-4">
                  Recovery & Aftercare
                </h2>
                <p className="text-[#334155]/80 leading-relaxed mb-5">
                  {service.recovery}
                </p>
                <h3 className="font-semibold text-[#1B3A5C] mb-3">
                  Recovery Tips
                </h3>
                <ul className="space-y-2.5">
                  {service.recoverytips.map((tip) => (
                    <li key={tip} className="flex items-start gap-3 text-sm text-[#334155]/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2A9D8F] flex-shrink-0 mt-2" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </section>

              {/* FAQ */}
              <section className="bg-white rounded-2xl p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-[#1B3A5C] mb-5">
                  Frequently Asked Questions
                </h2>
                <Accordion type="multiple">
                  {service.faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`faq-${i}`}>
                      <AccordionTrigger className="text-left font-semibold text-[#1B3A5C] hover:text-[#2A9D8F] hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-[#334155]/80 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>

              {/* Related Services */}
              {relatedServices.length > 0 && (
                <section className="bg-white rounded-2xl p-8 border border-gray-100">
                  <h2 className="text-xl font-bold text-[#1B3A5C] mb-5">
                    Related Services
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {relatedServices.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/services/${related.slug}`}
                        className="group flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-[#2A9D8F]/40 hover:shadow-sm transition-all"
                      >
                        <span className="text-2xl">{related.icon}</span>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-sm text-[#1B3A5C] group-hover:text-[#2A9D8F] transition-colors">
                            {related.title}
                          </p>
                          <p className="text-xs text-[#334155]/60 mt-0.5 line-clamp-1">
                            {related.shortDescription}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#2A9D8F] flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Right — sticky sidebar (desktop only) */}
            <div className="hidden lg:block w-72 xl:w-80 flex-shrink-0">
              <ServiceSidebarCTA />
            </div>
          </div>
        </div>
      </div>

      <CTABanner />
    </>
  );
}
