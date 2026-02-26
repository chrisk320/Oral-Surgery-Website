"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import BeforeAfterSlider from "@/components/shared/BeforeAfterSlider";
import CTABanner from "@/components/home/CTABanner";
import Link from "next/link";
import { AlertTriangle, Calendar } from "lucide-react";

type GalleryCategory = "all" | "implants" | "wisdom-teeth" | "facial" | "other";

type GalleryCase = {
  id: number;
  title: string;
  category: Exclude<GalleryCategory, "all">;
  description: string;
  procedure: string;
};

const GALLERY_CASES: GalleryCase[] = [
  {
    id: 1,
    title: "Full-Arch Implant Restoration",
    category: "implants",
    procedure: "Dental Implants",
    description:
      "Complete upper and lower arch restoration using implant-supported fixed prosthetics. Patient had been wearing full dentures for over 10 years.",
  },
  {
    id: 2,
    title: "Single Molar Implant",
    category: "implants",
    procedure: "Dental Implants",
    description:
      "Replacement of a missing lower molar with a single titanium implant and porcelain crown, seamlessly matched to natural adjacent teeth.",
  },
  {
    id: 3,
    title: "All Four Wisdom Teeth Removal",
    category: "wisdom-teeth",
    procedure: "Wisdom Teeth Extraction",
    description:
      "Successful removal of four fully impacted wisdom teeth under IV sedation. Patient healed without complication within 5 days.",
  },
  {
    id: 4,
    title: "Partially Erupted Wisdom Tooth",
    category: "wisdom-teeth",
    procedure: "Wisdom Teeth Extraction",
    description:
      "Extraction of a partially erupted lower wisdom tooth that was causing recurring pericoronitis and crowding of the adjacent molar.",
  },
  {
    id: 5,
    title: "Mandible Fracture Repair",
    category: "facial",
    procedure: "Facial Injury Treatment",
    description:
      "Surgical repair of a displaced mandible fracture following a sports injury. Titanium plates placed via intraoral incisions — no visible external scarring.",
  },
  {
    id: 6,
    title: "TMJ Splint Therapy Outcome",
    category: "other",
    procedure: "TMJ Treatment",
    description:
      "Six-month outcome of custom occlusal splint therapy for bilateral TMJ disc displacement. Significant reduction in pain and jaw clicking.",
  },
];

const CATEGORIES: { value: GalleryCategory; label: string }[] = [
  { value: "all", label: "All Cases" },
  { value: "implants", label: "Implants" },
  { value: "wisdom-teeth", label: "Wisdom Teeth" },
  { value: "facial", label: "Facial Trauma" },
  { value: "other", label: "Other" },
];

function GalleryCard({
  galleryCase,
  onClick,
}: {
  galleryCase: GalleryCase;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.4 }}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#2A9D8F]/30 hover:shadow-md transition-all cursor-pointer"
      onClick={onClick}
    >
      <BeforeAfterSlider aspectRatio="aspect-[4/3]" />
      <div className="p-5">
        <Badge className="bg-[#2A9D8F]/10 text-[#2A9D8F] hover:bg-[#2A9D8F]/20 text-xs mb-2 border-0">
          {galleryCase.procedure}
        </Badge>
        <h3 className="font-bold text-[#1B3A5C] mb-1 group-hover:text-[#2A9D8F] transition-colors">
          {galleryCase.title}
        </h3>
        <p className="text-xs text-[#334155]/65 leading-relaxed line-clamp-2">
          {galleryCase.description}
        </p>
        <p className="text-xs text-[#2A9D8F] font-medium mt-3">
          Click to view full case →
        </p>
      </div>
    </motion.div>
  );
}

export default function GalleryPage() {
  const [selectedCase, setSelectedCase] = useState<GalleryCase | null>(null);

  const filteredCases = (category: GalleryCategory) =>
    category === "all"
      ? GALLERY_CASES
      : GALLERY_CASES.filter((c) => c.category === category);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-14 bg-gradient-to-br from-[#1B3A5C] to-[#0f2640] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-sm font-semibold text-[#2A9D8F] uppercase tracking-wider">
            Real Patient Results
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-3 mb-4 text-white">
            Before & After Gallery
          </h1>
          <p className="text-white/75 max-w-2xl mx-auto text-lg">
            Explore outcomes from actual procedures performed by Dr. Kim.
            Drag the slider on any case to compare before and after.
          </p>
        </div>
      </section>

      {/* HIPAA notice */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800 leading-relaxed">
            <strong>Patient Privacy Notice:</strong> All photographs are shared
            with explicit written consent from each patient. No personally
            identifying information is displayed. Images are intended for
            educational purposes only. For questions, call{" "}
            <a href="tel:7145290043" className="underline hover:text-amber-900">
              (714) 529-0043
            </a>
            .
          </p>
        </div>
      </div>

      {/* Gallery with filter tabs */}
      <section className="py-14 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Tabs defaultValue="all">
            <TabsList className="mb-10 flex flex-wrap gap-1 h-auto bg-white border border-gray-100 p-1 rounded-xl w-fit">
              {CATEGORIES.map((cat) => (
                <TabsTrigger
                  key={cat.value}
                  value={cat.value}
                  className="rounded-lg data-[state=active]:bg-[#1B3A5C] data-[state=active]:text-white text-sm"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {CATEGORIES.map((cat) => (
              <TabsContent key={cat.value} value={cat.value}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={cat.value}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {filteredCases(cat.value).map((galleryCase) => (
                      <GalleryCard
                        key={galleryCase.id}
                        galleryCase={galleryCase}
                        onClick={() => setSelectedCase(galleryCase)}
                      />
                    ))}
                    {filteredCases(cat.value).length === 0 && (
                      <p className="col-span-3 text-center text-[#334155]/50 py-16">
                        No cases in this category yet. Check back soon.
                      </p>
                    )}
                  </motion.div>
                </AnimatePresence>
              </TabsContent>
            ))}
          </Tabs>

          {/* Bottom CTA */}
          <div className="mt-14 text-center">
            <p className="text-[#334155]/70 mb-5 text-lg">
              Ready to see what we can do for you?
            </p>
            <Button
              asChild
              className="bg-[#2A9D8F] hover:bg-[#1B3A5C] text-white transition-colors px-8 py-6 text-base font-semibold"
            >
              <Link href="/contact">
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog
        open={!!selectedCase}
        onOpenChange={(open) => !open && setSelectedCase(null)}
      >
        <DialogContent className="max-w-2xl w-full">
          {selectedCase && (
            <>
              <DialogHeader>
                <DialogTitle className="text-[#1B3A5C] text-xl">
                  {selectedCase.title}
                </DialogTitle>
              </DialogHeader>
              <div className="mt-2">
                <BeforeAfterSlider aspectRatio="aspect-[4/3]" />
                <div className="mt-4">
                  <Badge className="bg-[#2A9D8F]/10 text-[#2A9D8F] border-0 mb-2">
                    {selectedCase.procedure}
                  </Badge>
                  <p className="text-sm text-[#334155]/80 leading-relaxed">
                    {selectedCase.description}
                  </p>
                </div>
                <div className="mt-6 pt-5 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    className="flex-1 bg-[#2A9D8F] hover:bg-[#1B3A5C] text-white"
                  >
                    <Link href="/contact">Book a Consultation</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 border-gray-200"
                  >
                    <a href="tel:7145290043">(714) 529-0043</a>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <CTABanner />
    </>
  );
}
