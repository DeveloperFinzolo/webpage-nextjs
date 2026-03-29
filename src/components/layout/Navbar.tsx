"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "Wealth management", href: "/services/wealth-management" },
      { label: "Asset Management", href: "/services/asset-management" },
      { label: "Long term financial investment Solutions", href: "/services/financial-solutions" },
    ],
  },
  // {
  //   label: "Page",
  //   href: "#",
  //   dropdown: [
  //     { label: "FAQs", href: "/faqs" },
  //     { label: "Careers", href: "/careers" },
  //     { label: "Partner", href: "/partner" },
  //   ],
  // },
  // {
  //   label: "News",
  //   href: "#",
  //   dropdown: [
  //     { label: "Blog", href: "/blog" },
  //     { label: "Press", href: "/press" },
  //   ],
  // },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Finzolo InvestTech" width={32} height={32} />
            {/* <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-lg font-display">F</span>
            </div> */}
            <span className="font-display text-xl font-semibold text-primary">
              Finzolo InvestTech
              {/* <span className="text-primary">™</span> */}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="nav-link flex items-center gap-1">
                    {link.label}
                    <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                  </button>
                  {openDropdown === link.label && (
                    <div className="absolute top-full left-0 w-52 bg-white shadow-xl border border-gray-100 py-2 z-50">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.label} href={link.href} className="nav-link">
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex">
            <Link
              href="/contact"
              className="btn-primary flex items-center gap-2 text-xs"
            >
              LET&apos;S TALK <ArrowRight size={14} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-dark"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-6 pt-2">
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                className="block py-3 text-sm font-medium text-dark border-b border-gray-50 hover:text-primary"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
              {link.dropdown && (
                <div className="pl-4">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block py-2 text-sm text-gray-600 hover:text-primary"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/contact" className="btn-primary inline-flex mt-4 text-xs">
            LET&apos;S TALK
          </Link>
        </div>
      )}
    </header>
  );
}
