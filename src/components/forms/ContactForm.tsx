"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(/^\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, "Please enter a valid phone number")
    .optional()
    .or(z.literal("")),
  service: z.string().optional(),
  message: z.string().min(10, "Please enter a brief message (at least 10 characters)"),
});

type FormValues = z.infer<typeof schema>;

const SERVICES = [
  "Dental Implants",
  "Wisdom Teeth Extraction",
  "Anesthesia & Sedation",
  "TMJ Treatment",
  "Oral Cancer Screening",
  "Facial Injury Treatment",
  "General Inquiry",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // TODO: wire to Resend / Formspree in production
    // For now, simulate a submit delay
    await new Promise((r) => setTimeout(r, 1000));
    console.log("Form submission:", data);
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <CheckCircle2 className="w-14 h-14 text-[#2A9D8F]" />
        <h3 className="text-xl font-bold text-[#1B3A5C]">Message Received!</h3>
        <p className="text-[#334155]/70 max-w-sm">
          Thank you for reaching out. Our team will contact you within one
          business day to discuss your needs.
        </p>
        <p className="text-sm text-[#334155]/50 mt-2">
          For urgent matters, call us at{" "}
          <a href="tel:7145290043" className="text-[#2A9D8F] hover:underline">
            (714) 529-0043
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {/* HIPAA notice */}
      <p className="text-xs text-[#334155]/60 bg-amber-50 border border-amber-200 rounded-lg p-3 leading-relaxed">
        <strong>Privacy Notice:</strong> Please do not include protected health
        information (PHI) in this form. To share medical details, call us
        directly at (714) 529-0043.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label className="text-sm font-medium text-[#334155] block mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <Input
            {...register("name")}
            placeholder="Jane Smith"
            className={errors.name ? "border-red-400" : ""}
          />
          {errors.name && (
            <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="text-sm font-medium text-[#334155] block mb-1.5">
            Email <span className="text-red-500">*</span>
          </label>
          <Input
            {...register("email")}
            type="email"
            placeholder="jane@email.com"
            className={errors.email ? "border-red-400" : ""}
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Phone */}
        <div>
          <label className="text-sm font-medium text-[#334155] block mb-1.5">
            Phone Number
          </label>
          <Input
            {...register("phone")}
            type="tel"
            placeholder="(714) 555-0000"
            className={errors.phone ? "border-red-400" : ""}
          />
          {errors.phone && (
            <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Service */}
        <div>
          <label className="text-sm font-medium text-[#334155] block mb-1.5">
            Service of Interest
          </label>
          <Select onValueChange={(val) => setValue("service", val)}>
            <SelectTrigger>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {SERVICES.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="text-sm font-medium text-[#334155] block mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <Textarea
          {...register("message")}
          placeholder="Tell us about your situation or what you'd like to discuss..."
          rows={5}
          className={errors.message ? "border-red-400" : ""}
        />
        {errors.message && (
          <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#2A9D8F] hover:bg-[#1B3A5C] text-white transition-colors py-6 text-base font-semibold"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
