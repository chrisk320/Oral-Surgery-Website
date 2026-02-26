"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Dental Implants", href: "/services/dental-implants" },
      { label: "Wisdom Teeth", href: "/services/wisdom-teeth" },
      { label: "Anesthesia & Sedation", href: "/services/anesthesia" },
      { label: "TMJ Treatment", href: "/services/tmj" },
      { label: "Oral Cancer", href: "/services/oral-cancer" },
      { label: "Facial Injury", href: "/services/facial-injury" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Patient Resources", href: "/patient-resources" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-white/95 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 flex flex-col leading-tight">
          <span className="text-xl font-bold text-[#1B3A5C]">OC Implant</span>
          <span className="text-xs text-[#2A9D8F] font-medium tracking-wide uppercase">
            Oral Surgery
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div key={link.href} className="relative group">
                <button
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#334155] hover:text-[#2A9D8F] transition-colors rounded-md"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  {link.label}
                  <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                </button>
                <div
                  className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2.5 text-sm text-[#334155] hover:bg-[#F8FAFC] hover:text-[#2A9D8F] transition-colors first:rounded-t-lg last:rounded-b-lg"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-[#334155] hover:text-[#2A9D8F] transition-colors rounded-md"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:7145290043"
            className="flex items-center gap-2 text-sm font-medium text-[#334155] hover:text-[#2A9D8F] transition-colors"
          >
            <Phone className="w-4 h-4" />
            (714) 529-0043
          </a>
          <Button
            asChild
            className="bg-[#2A9D8F] hover:bg-[#1B3A5C] text-white transition-colors"
          >
            <Link href="/contact">Book Appointment</Link>
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 text-[#334155] hover:text-[#2A9D8F] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-1">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div key={link.href}>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-[#334155] hover:text-[#2A9D8F] transition-colors rounded-md"
                >
                  {link.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {servicesOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-3 py-2 text-sm text-[#334155] hover:text-[#2A9D8F] transition-colors rounded-md"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-[#334155] hover:text-[#2A9D8F] transition-colors rounded-md"
              >
                {link.label}
              </Link>
            )
          )}
          <div className="pt-3 border-t border-gray-100 space-y-2">
            <a
              href="tel:7145290043"
              className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-[#334155] hover:text-[#2A9D8F] transition-colors"
            >
              <Phone className="w-4 h-4" />
              (714) 529-0043
            </a>
            <Button
              asChild
              className="w-full bg-[#2A9D8F] hover:bg-[#1B3A5C] text-white"
            >
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                Book Appointment
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
