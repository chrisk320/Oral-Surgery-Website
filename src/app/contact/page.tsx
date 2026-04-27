import type { Metadata } from "next";
import { Phone, MapPin, Clock, Mail, Calendar } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Book Appointment",
  description:
    "Contact OC Implant Oral Surgery in Brea, CA. Schedule a consultation with Dr. Jone Kim — call (714) 529-0043 or use our online appointment form.",
};

const HOURS = [
  { day: "Monday – Thursday", time: "8:00 AM – 5:00 PM" },
  { day: "Friday", time: "8:00 AM – 3:00 PM" },
  { day: "Saturday – Sunday", time: "Closed" },
];

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-14 bg-gradient-to-br from-[#1B3A5C] to-[#0f2640] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-sm font-semibold text-[#2A9D8F] uppercase tracking-wider">
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-3 mb-4 text-white">
            Contact & Book Appointment
          </h1>
          <p className="text-white/75 max-w-2xl mx-auto text-lg">
            Ready to take the next step? Fill out the form below or call us
            directly to schedule your consultation with Dr. Kim.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left: Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#1B3A5C] mb-2">
                Send Us a Message
              </h2>
              <p className="text-[#334155]/70 text-sm mb-7">
                We typically respond within one business day. For faster
                assistance, call us directly.
              </p>
              <ContactForm />
            </div>

            {/* Right: Contact info + map */}
            <div className="space-y-6">
              {/* Book by phone CTA */}
              <div className="bg-[#2A9D8F] rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-6 h-6 flex-shrink-0" />
                  <h3 className="font-bold text-lg">Book by Phone</h3>
                </div>
                <p className="text-white/85 text-sm mb-4">
                  Call us to speak with our scheduling team and book your
                  appointment right away.
                </p>
                <a
                  href="tel:7145290043"
                  className="flex items-center gap-2 text-lg font-bold hover:text-white/80 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  (714) 529-0043
                </a>
              </div>

              {/* Address */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 space-y-4">
                <h3 className="font-bold text-[#1B3A5C] text-lg">
                  Office Information
                </h3>

                <div className="flex items-start gap-3 text-sm text-[#334155]">
                  <MapPin className="w-4 h-4 text-[#2A9D8F] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">OC Implant Oral Surgery</p>
                    <p className="text-[#334155]/70">1770 E. Lambert Rd., Suite 115</p>
                    <p className="text-[#334155]/70">Brea, CA 92821</p>
                    <div className="flex gap-3 mt-2 text-xs">
                      <a
                        href="https://maps.google.com/?q=1770+E+Lambert+Rd+Suite+115,+Brea,+CA+92821"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#2A9D8F] hover:underline"
                      >
                        Google Maps ↗
                      </a>
                      <a
                        href="https://maps.apple.com/?address=1770+E+Lambert+Rd+Suite+115,Brea,CA,92821"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#2A9D8F] hover:underline"
                      >
                        Apple Maps ↗
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-[#334155]">
                  <Phone className="w-4 h-4 text-[#2A9D8F] flex-shrink-0" />
                  <div>
                    <a href="tel:7145290043" className="hover:text-[#2A9D8F] transition-colors block">
                      (714) 529-0043
                    </a>
                    <span className="text-[#334155]/60 text-xs">Fax: (714) 529-1019</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-[#334155]">
                  <Mail className="w-4 h-4 text-[#2A9D8F] flex-shrink-0" />
                  <a href="mailto:info@ocimplantoralsurgery.com" className="hover:text-[#2A9D8F] transition-colors text-[#334155]/80">
                    info@ocimplantoralsurgery.com
                  </a>
                </div>

                <div className="pt-2 border-t border-gray-100">
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#2A9D8F] flex-shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      {HOURS.map((h) => (
                        <div key={h.day} className="text-sm">
                          <span className="text-[#334155]/60 text-xs">{h.day}</span>
                          <br />
                          <span className="font-medium text-[#334155]">{h.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Map embed */}
              <div className="rounded-2xl overflow-hidden border border-gray-100 h-48">
                <iframe
                  src="https://maps.google.com/maps?q=1770+E+Lambert+Rd+Suite+115,+Brea,+CA+92821&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="OC Implant Oral Surgery — 1770 E. Lambert Rd., Suite 115, Brea, CA"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
