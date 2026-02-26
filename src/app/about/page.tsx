import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Award, GraduationCap, Users } from "lucide-react";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "About Dr. Jone Kim",
  description:
    "Meet Dr. Jone Kim, DDS, MS — board-certified oral and maxillofacial surgeon at OC Implant Oral Surgery in Brea, CA. UCLA-trained with over 20 years of experience.",
};

const EDUCATION = [
  {
    degree: "Bachelor's Degree",
    school: "University of California, Los Angeles (UCLA)",
    year: "Undergraduate",
  },
  {
    degree: "Doctor of Dental Surgery (DDS)",
    school: "UCLA School of Dentistry",
    year: "1994",
  },
  {
    degree: "Master of Science (MS) — Oral Biology",
    school: "UCLA Graduate School",
    year: "1996",
  },
  {
    degree: "Oral & Maxillofacial Surgery Residency",
    school: "University Medical Center, Fresno (UCLA Affiliate)",
    year: "1998",
  },
  {
    degree: "Orthognathic & Facial Reconstructive Fellowship",
    school: "Private fellowship under a world-renowned surgeon, Santa Barbara, CA",
    year: "Post-Residency",
  },
  {
    degree: "Board Certified",
    school: "American Board of Oral & Maxillofacial Surgery",
    year: "Active",
  },
];

const AFFILIATIONS = [
  "American Association of Oral & Maxillofacial Surgeons (AAOMS)",
  "California Association of Oral & Maxillofacial Surgeons (CALAOMS)",
  "American Dental Society of Anesthesiology (ADSA)",
  "American Dental Association (ADA)",
  "Orange County Dental Society",
];

const AWARDS = [
  "Resident Research Award — American Association of Oral & Maxillofacial Surgeons",
  "Resident Research Award — American College of Oral & Maxillofacial Surgeons",
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#1B3A5C] to-[#0f2640] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-sm font-semibold text-[#2A9D8F] uppercase tracking-wider">
            OC Implant Oral Surgery
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-3 mb-4 text-white">
            About Dr. Jone Kim
          </h1>
          <p className="text-white/75 max-w-2xl mx-auto text-lg">
            DDS, MS — UCLA-trained, board-certified oral and maxillofacial
            surgeon serving Brea and Orange County since 2005.
          </p>
        </div>
      </section>

      {/* Bio section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Photo */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-[#1B3A5C]/10 to-[#2A9D8F]/10 flex items-center justify-center border-2 border-dashed border-[#2A9D8F]/30">
                <div className="text-center p-8">
                  <div className="text-8xl mb-4">👨‍⚕️</div>
                  <p className="text-[#1B3A5C]/60 text-sm">
                    Professional photo of Dr. Jone Kim
                  </p>
                </div>
              </div>
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  { icon: Award, value: "Board-Certified", label: "ABOMS Certified" },
                  { icon: Users, value: "20+ Years", label: "In Practice Since 2005" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-[#F8FAFC] rounded-xl p-4 flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#2A9D8F]/10 flex items-center justify-center flex-shrink-0">
                      <stat.icon className="w-5 h-5 text-[#2A9D8F]" />
                    </div>
                    <div>
                      <p className="font-bold text-[#1B3A5C] text-sm">{stat.value}</p>
                      <p className="text-xs text-[#334155]/60">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold text-[#1B3A5C] mb-5">
                Dr. Jone Kim, DDS, MS
              </h2>
              <div className="space-y-4 text-[#334155]/80 leading-relaxed">
                <p>
                  Dr. Jone Kim was raised in Anaheim, California. He began his
                  undergraduate studies at UCLA and graduated from UCLA School
                  of Dentistry with his DDS in 1994. He then went on to
                  residency in Oral &amp; Maxillofacial Surgery at the
                  University Medical Center in Fresno — affiliated with UCLA —
                  graduating in 1998.
                </p>
                <p>
                  During his residency, Dr. Kim also earned his Master of
                  Science (MS) degree in oral biology from the UCLA Graduate
                  School in 1996. His thesis research earned him prestigious
                  resident research awards from both the American Association
                  of Oral &amp; Maxillofacial Surgeons and the American College
                  of Oral &amp; Maxillofacial Surgeons.
                </p>
                <p>
                  After residency, Dr. Kim completed an Orthognathic &amp;
                  Facial Reconstructive Fellowship under a world-renowned
                  surgeon in Santa Barbara, California, where he remained to
                  work under his mentor for several years. He then returned to
                  Orange County and has been in practice in Brea, California
                  since 2005.
                </p>
              </div>

              <div className="mt-8">
                <Button
                  asChild
                  className="bg-[#2A9D8F] hover:bg-[#1B3A5C] text-white transition-colors"
                >
                  <Link href="/contact">Schedule a Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Credentials */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-[#2A9D8F]/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-[#2A9D8F]" />
                </div>
                <h2 className="text-2xl font-bold text-[#1B3A5C]">
                  Education & Training
                </h2>
              </div>
              <div className="space-y-5">
                {EDUCATION.map((item) => (
                  <div
                    key={item.degree}
                    className="bg-white rounded-xl p-5 border border-gray-100"
                  >
                    <p className="font-semibold text-[#1B3A5C]">{item.degree}</p>
                    <p className="text-sm text-[#334155]/70 mt-1">{item.school}</p>
                    <span className="inline-block mt-2 text-xs font-medium text-[#2A9D8F] bg-[#2A9D8F]/10 px-2.5 py-0.5 rounded-full">
                      {item.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Affiliations + Philosophy */}
            <div className="space-y-10">
              {/* Affiliations */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-lg bg-[#2A9D8F]/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-[#2A9D8F]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#1B3A5C]">
                    Professional Affiliations
                  </h2>
                </div>
                <ul className="space-y-3">
                  {AFFILIATIONS.map((aff) => (
                    <li key={aff} className="flex items-center gap-3 text-[#334155]">
                      <CheckCircle2 className="w-5 h-5 text-[#2A9D8F] flex-shrink-0" />
                      {aff}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Awards */}
              <div>
                <h2 className="text-2xl font-bold text-[#1B3A5C] mb-6">
                  Research Awards
                </h2>
                <ul className="space-y-4">
                  {AWARDS.map((award) => (
                    <li
                      key={award}
                      className="flex items-start gap-3 bg-amber-50 border border-amber-100 rounded-xl px-4 py-3"
                    >
                      <span className="text-amber-500 text-lg leading-none mt-0.5">★</span>
                      <span className="text-sm text-[#334155]/80 leading-relaxed">{award}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office section placeholder */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[#1B3A5C] mb-8 text-center">
            Our Office
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="aspect-video rounded-xl bg-[#F8FAFC] border-2 border-dashed border-gray-200 flex items-center justify-center"
              >
                <p className="text-sm text-gray-400">Office photo {n}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
