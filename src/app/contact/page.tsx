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
          <h1 className="text-4xl sm:text-5xl font-bold mt-3 mb-4">
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
                    <p className="text-[#334155]/70">Brea, CA</p>
                    <div className="flex gap-3 mt-2 text-xs">
                      <a
                        href="https://maps.google.com/?q=Brea,CA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#2A9D8F] hover:underline"
                      >
                        Google Maps ↗
                      </a>
                      <a
                        href="https://maps.apple.com/?q=Brea,CA"
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
                  <a href="tel:7145290043" className="hover:text-[#2A9D8F] transition-colors">
                    (714) 529-0043
                  </a>
                </div>

                <div className="flex items-center gap-3 text-sm text-[#334155]">
                  <Mail className="w-4 h-4 text-[#2A9D8F] flex-shrink-0" />
                  <span className="text-[#334155]/70">Use the form to email us</span>
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105843.97788823438!2d-117.97755!3d33.91668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd65dd3e78b9f%3A0xb0f1bad49c1f0a6a!2sBrea%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="OC Implant Oral Surgery — Brea, CA"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
