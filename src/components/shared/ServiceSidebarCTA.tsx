import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, Phone, Clock } from "lucide-react";

export default function ServiceSidebarCTA() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 sticky top-28">
      <h3 className="text-lg font-bold text-[#1B3A5C] mb-2">
        Ready to Get Started?
      </h3>
      <p className="text-sm text-[#334155]/70 leading-relaxed mb-6">
        Schedule a consultation with Dr. Kim to discuss your options and create
        a personalized treatment plan.
      </p>

      <Button
        asChild
        className="w-full bg-[#2A9D8F] hover:bg-[#1B3A5C] text-white transition-colors mb-3"
      >
        <Link href="/contact">
          <Calendar className="w-4 h-4 mr-2" />
          Book a Consultation
        </Link>
      </Button>

      <a
        href="tel:7145290043"
        className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-[#1B3A5C] hover:text-[#2A9D8F] transition-colors border border-gray-200 rounded-lg"
      >
        <Phone className="w-4 h-4" />
        (714) 529-0043
      </a>

      <div className="mt-6 pt-5 border-t border-gray-100">
        <div className="flex items-start gap-2.5 text-xs text-[#334155]/60">
          <Clock className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
          <div>
            <p>Mon – Thu: 8:00 AM – 5:00 PM</p>
            <p>Friday: 8:00 AM – 3:00 PM</p>
            <p>Sat – Sun: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
