import Link from "next/link";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

const SERVICES_LINKS = [
  { label: "Dental Implants", href: "/services/dental-implants" },
  { label: "Wisdom Teeth Extraction", href: "/services/wisdom-teeth" },
  { label: "Anesthesia & Sedation", href: "/services/anesthesia" },
  { label: "TMJ Treatment", href: "/services/tmj" },
  { label: "Oral Cancer", href: "/services/oral-cancer" },
  { label: "Facial Injury", href: "/services/facial-injury" },
];

const QUICK_LINKS = [
  { label: "About Dr. Kim", href: "/about" },
  { label: "Before & After Gallery", href: "/gallery" },
  { label: "Patient Resources", href: "/patient-resources" },
  { label: "Contact Us", href: "/contact" },
  { label: "Book Appointment", href: "/contact" },
];

const HOURS = [
  { day: "Monday – Thursday", time: "8:00 AM – 5:00 PM" },
  { day: "Friday", time: "8:00 AM – 3:00 PM" },
  { day: "Saturday – Sunday", time: "Closed" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1B3A5C] text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1 — Practice info */}
        <div>
          <div className="mb-4">
            <p className="text-xl font-bold">OC Implant</p>
            <p className="text-[#2A9D8F] text-sm font-medium tracking-wide uppercase">
              Oral Surgery
            </p>
          </div>
          <p className="text-white/70 text-sm mb-5 leading-relaxed">
            Dr. Jone Kim provides expert oral surgery care for patients throughout
            Brea and Orange County, CA.
          </p>
          <div className="space-y-2.5">
            <a
              href="tel:7145290043"
              className="flex items-center gap-2.5 text-sm text-white/80 hover:text-[#2A9D8F] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#2A9D8F] flex-shrink-0" />
              (714) 529-0043
            </a>
            <div className="flex items-start gap-2.5 text-sm text-white/80">
              <MapPin className="w-4 h-4 text-[#2A9D8F] flex-shrink-0 mt-0.5" />
              <span>
                Brea, CA
                <br />
                Orange County
              </span>
            </div>
            <a
              href="mailto:info@ocimplantoralsurgery.com"
              className="flex items-center gap-2.5 text-sm text-white/80 hover:text-[#2A9D8F] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#2A9D8F] flex-shrink-0" />
              Contact Us
            </a>
          </div>
        </div>

        {/* Column 2 — Services */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[#2A9D8F] mb-4">
            Our Services
          </h3>
          <ul className="space-y-2">
            {SERVICES_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/75 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Quick Links */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[#2A9D8F] mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {QUICK_LINKS.map((link) => (
              <li key={link.href + link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-white/75 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 — Hours */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[#2A9D8F] mb-4">
            Office Hours
          </h3>
          <ul className="space-y-2.5">
            {HOURS.map((h) => (
              <li key={h.day} className="text-sm">
                <span className="text-white/50 block">{h.day}</span>
                <span className="text-white/90">{h.time}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex items-center gap-1.5 text-sm text-white/60">
            <Clock className="w-3.5 h-3.5" />
            <span>Emergency appointments available</span>
          </div>
        </div>
      </div>

      {/* Map embed */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="w-full h-48 rounded-lg overflow-hidden opacity-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105843.97788823438!2d-117.97755!3d33.91668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd65dd3e78b9f%3A0xb0f1bad49c1f0a6a!2sBrea%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="OC Implant Oral Surgery location"
            />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} OC Implant Oral Surgery. All rights
            reserved.
          </p>
          <p>Dr. Jone Kim, DDS | Brea, CA (714) 529-0043</p>
        </div>
      </div>
    </footer>
  );
}
