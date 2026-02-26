import type { Metadata } from "next";
import { getServiceBySlug, getRelatedServices } from "@/lib/services";
import ServicePageTemplate from "@/components/shared/ServicePageTemplate";
import { notFound } from "next/navigation";

const service = getServiceBySlug("facial-injury")!;

export const metadata: Metadata = {
  title: service.title,
  description: service.metaDescription,
};

export default function FacialInjuryPage() {
  if (!service) notFound();
  return (
    <ServicePageTemplate
      service={service}
      relatedServices={getRelatedServices(service)}
    />
  );
}
