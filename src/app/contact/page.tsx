"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import PageHero from "@/components/ui/PageHero";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 70940 55110",
    href: "tel:+917094055110",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Chennai",
    href: "#",
  },
  {
    icon: Mail,
    label: "Email",
    value: "developerfinzolo@gmail.com",
    href: "mailto:developerfinzolo@gmail.com",
  },
  {
    icon: Clock,
    label: "Open Hour",
    value: "Mon - Sat, 10:00 - 07:00",
    href: "#",
  },
];

const journeyStages = [
  "Business Owner",
  "Individuals",
  "Families",
  "Entrepreneurs",
  "Retired",
];

const interests = [
  "Investment Planning",
  "Wealth Management",
  "Asset Management",
  "Financial Solutions",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    journey: "",
    hearAbout: "",
    interests: [] as string[],
    optIn: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
        imageSrc="/Contactpage.jpg"
        imageAlt="Contact Us"
      />

      {/* ── GET IN TOUCH ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left Info */}
            <div className="lg:col-span-2">
              <span className="section-label">REACH OUT</span>
              <h2 className="section-title mt-2 mb-4">
                <span className="text-primary">Get</span> in touch
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                Whether you have a question about our services, need financial advice, or want to schedule a consultation — our team is ready to assist..
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-9 h-9 bg-primary rounded flex items-center justify-center shrink-0 group-hover:bg-primary-dark transition-colors">
                      <info.icon size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="text-primary text-sm font-semibold">
                        {info.label}
                      </p>
                      <p className="text-gray-600 text-xs mt-0.5">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 border border-gray-100 shadow-sm p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Mail size={28} className="text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-dark mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-500 text-sm">
                    We&apos;ve received your message. Our team will get back to you
                    within 1 business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name row */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Your first name"
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({ ...formData, firstName: e.target.value })
                        }
                        className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Your last name"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="Your email address"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                        Whatsapp
                      </label>
                      <input
                        type="tel"
                        placeholder="Your phone numbers"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  {/* Journey + Hear About */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                        Which of the following best describes your current work status?{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <div className="space-y-2">
                        {journeyStages.map((stage) => (
                          <label key={stage} className="flex items-center gap-2.5 cursor-pointer">
                            <input
                              type="radio"
                              name="journey"
                              value={stage}
                              checked={formData.journey === stage}
                              onChange={(e) =>
                                setFormData({ ...formData, journey: e.target.value })
                              }
                              className="accent-primary"
                            />
                            <span className="text-sm text-gray-700">{stage}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                        How did you hear about Financ?
                      </label>
                      <select
                        value={formData.hearAbout}
                        onChange={(e) =>
                          setFormData({ ...formData, hearAbout: e.target.value })
                        }
                        className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-500 focus:outline-none focus:border-primary transition-colors bg-white"
                      >
                        <option value="">How did you hear about Financ?</option>
                        <option>Google Search</option>
                        <option>Social Media</option>
                        <option>Friend / Referral</option>
                        <option>Advertisement</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Interests */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                      What services do you need?
                    </label>
                    <div className="space-y-2">
                      {interests.map((interest) => (
                        <label
                          key={interest}
                          className="flex items-center gap-2.5 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={formData.interests.includes(interest)}
                            onChange={() => handleInterestToggle(interest)}
                            className="accent-primary w-4 h-4"
                          />
                          <span className="text-sm text-gray-700">{interest}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Opt-in */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                      Opt-In Confirmation <span className="text-red-500">*</span>
                    </label>
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        required
                        type="checkbox"
                        checked={formData.optIn}
                        onChange={(e) =>
                          setFormData({ ...formData, optIn: e.target.checked })
                        }
                        className="accent-primary w-4 h-4 mt-0.5 shrink-0"
                      />
                      <span className="text-sm text-gray-600">
                        I agree to receive communications from financial solutions provider. I understand that my information will be used in accordance with the privacy policy and I can opt out at any time.
                      </span>
                    </label>
                  </div>

                  <button type="submit" className="btn-primary px-10">
                    SUBMIT
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP placeholder ── */}
      {/* <section className="h-64 bg-gray-200 relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&h=400&fit=crop"
          alt="Map"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white px-6 py-4 shadow-lg text-center">
            <MapPin size={24} className="text-primary mx-auto mb-2" />
            <p className="font-semibold text-dark text-sm">Jl. Soekamo-hatta KM 03</p>
          </div>
        </div>
      </section> */}
    </>
  );
}
