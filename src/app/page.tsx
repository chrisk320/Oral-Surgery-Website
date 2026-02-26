import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import ServicesGrid from "@/components/home/ServicesGrid";
import AboutTeaser from "@/components/home/AboutTeaser";
import GalleryPreview from "@/components/home/GalleryPreview";
import Testimonials from "@/components/home/Testimonials";
import PatientResourcesStrip from "@/components/home/PatientResourcesStrip";
import CTABanner from "@/components/home/CTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OC Implant Oral Surgery | Dr. Jone Kim | Brea, CA",
  description:
    "Board-certified oral surgeon Dr. Jone Kim provides dental implants, wisdom teeth extraction, sedation, TMJ care, and more in Brea, CA. Call (714) 529-0043.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <AboutTeaser />
      <GalleryPreview />
      <Testimonials />
      <PatientResourcesStrip />
      <CTABanner />
    </>
  );
}
