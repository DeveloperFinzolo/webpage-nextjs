import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const services = [
  { label: "Financial Planning", href: "/services/financial-planning" },
  { label: "Investment Management", href: "/services/investment-management" },
  { label: "Retirement Planning", href: "/services/retirement-planning" },
  { label: "Investment Analysis", href: "/services/investment-analysis" },
  { label: "Insurance", href: "/services/insurance" },
];

const explore = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Careers", href: "/careers" },
  { label: "FAQs", href: "/faqs" },
  { label: "Partner", href: "/partner" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-lg font-display">F</span>
              </div>
              <span className="font-display text-xl font-semibold">
                Financ<span className="text-primary">™</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit hac porta tempus eros mollis facilisis vestibulum.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-accent font-semibold text-sm tracking-widest uppercase mb-5">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-accent font-semibold text-sm tracking-widest uppercase mb-5">
              Explore
            </h4>
            <ul className="space-y-3">
              {explore.map((e) => (
                <li key={e.label}>
                  <Link href={e.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {e.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Let's Talk */}
          <div>
            <h4 className="text-accent font-semibold text-sm tracking-widest uppercase mb-5">
              Let&apos;s Talk!
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Lorem ipsum dolor sit amet consectetur adipiscing elit hac facilisis vestibulum.
            </p>
            <Link href="/contact" className="btn-accent inline-block text-xs">
              CONTACT US
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Contact info */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-8 h-8 bg-primary/20 rounded flex items-center justify-center">
                  <MapPin size={14} className="text-primary" />
                </div>
                <div>
                  <p className="text-white text-xs font-semibold">Location</p>
                  <p className="text-xs">Jl. Soekamo-hatta KM 03</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-8 h-8 bg-primary/20 rounded flex items-center justify-center">
                  <Phone size={14} className="text-primary" />
                </div>
                <div>
                  <p className="text-white text-xs font-semibold">Phone</p>
                  <p className="text-xs">+187-5840-8547</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-8 h-8 bg-primary/20 rounded flex items-center justify-center">
                  <Mail size={14} className="text-primary" />
                </div>
                <div>
                  <p className="text-white text-xs font-semibold">Email</p>
                  <p className="text-xs">finance@mail.com</p>
                </div>
              </div>
            </div>

            {/* Social + copyright */}
            <div className="flex flex-col md:items-end gap-3">
              <div>
                <p className="text-xs text-gray-500 mb-2 md:text-right">Social Media</p>
                <div className="flex gap-2">
                  {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-primary transition-colors"
                    >
                      <Icon size={14} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-3">
            <p className="text-gray-500 text-xs">
              2024, All Rights Designed by Financ
            </p>
            <div className="flex gap-4">
              <Link href="/privacy" className="text-gray-500 text-xs hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 text-xs hover:text-white transition-colors">
                Terms & Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
