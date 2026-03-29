import Image from "next/image";
import Link from "next/link";
import { ArrowRight, TrendingUp, PiggyBank, Shield, BarChart3 } from "lucide-react";
import PageHero from "@/components/ui/PageHero";

const stats = [
  { value: "$0B", label: "Assets Under Management" },
  { value: "1", label: "Office Locations" },
  { value: "119", label: "Year Founded Company" },
  { value: "51", label: "Clients Represented" },
];

const team = [
  {
    name: "Tom Markowitz, PhD",
    role: "Founder of Financ",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=faces",
  },
  {
    name: "John Gaines",
    role: "President and Chief Executive",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=faces",
  },
  {
    name: "Randy Wacek",
    role: "Investment Specialist",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=faces",
  },
  {
    name: "James Burton",
    role: "Chief Marketing",
    img: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=300&h=300&fit=crop&crop=faces",
  },
  {
    name: "Michelle Brownstein",
    role: "Chief Marketing",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=faces",
  },
  {
    name: "Brandon Erne",
    role: "Chief Marketing",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=faces",
  },
  {
    name: "Mark Gaines",
    role: "Chief Marketing",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=faces",
  },
  {
    name: "Luis Aguilar",
    role: "Chief Marketing",
    img: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=300&h=300&fit=crop&crop=faces",
  },
];

const services = [
  { icon: TrendingUp, title: "Financial Planning", desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit imperdiet tincidunt venenatis." },
  { icon: PiggyBank, title: "Retirement Planning", desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit imperdiet tincidunt venenatis." },
  { icon: Shield, title: "Insurance", desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit imperdiet tincidunt venenatis." },
  { icon: BarChart3, title: "Investment Management", desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit imperdiet tincidunt venenatis." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Guide Financial Planning"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
        imageSrc="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=400&fit=crop"
        imageAlt="About Us"
      />

      {/* ── WE HELP ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-3">
              <div className="relative h-44">
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop"
                  alt="Office"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-44 mt-8">
                <Image
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop"
                  alt="Meeting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-44 -mt-4">
                <Image
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop"
                  alt="Work"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-44">
                <Image
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop"
                  alt="Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <span className="section-label">ABOUT US</span>
              <h2 className="section-title mt-2 mb-6">
                We <span className="text-primary">Help</span> financial Advisors that exclusively serve
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Lorem ipsum dolor sit amet consectetur adipiscing elit imperdiet
                tincidunt venenatis facilisis lorem, tristique fusce elit nec
                vulputate dignissim.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipiscing elit vulputate
                dignissim nec fusce dapibus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HISTORY ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label">OUR JOURNEY</span>
              <h2 className="section-title mt-2 mb-6">Our History</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Lorem ipsum dolor sit amet consectetur adipiscing elit imperdiet
                tincidunt venenatis facilisis lorem, tristique fusce elit nec
                vulputate dignissim imperdiet magna vivamus.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipiscing elit imperdiet
                tincidunt venenatis facilisis lorem tristique.
              </p>
            </div>
            <div className="relative h-72">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=500&fit=crop"
                alt="Our History"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 border-t border-gray-200 pt-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center border-r border-gray-200 last:border-0">
                <p className="font-display text-4xl font-bold text-dark mb-1">{stat.value}</p>
                <p className="text-gray-500 text-xs uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADVISOR CTA ── */}
      <section className="relative py-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&h=500&fit=crop"
          alt="Advisor"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white">
              Meet Financial Professional Advisor
            </h2>
          </div>
          <Link href="/contact" className="btn-primary bg-dark hover:bg-black flex items-center gap-2 shrink-0">
            CONTACT US <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="bg-dark text-white p-10">
              <h2 className="font-display text-3xl font-semibold mb-4">
                What <span className="text-accent">We</span> Do
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Lorem ipsum dolor sit amet consectetur adipiscing elit imperdiet
                tincidunt venenatis facilisis lorem tristique vulputate.
              </p>
              <Link
                href="/services"
                className="text-accent font-semibold text-sm uppercase tracking-wider flex items-center gap-2 hover:gap-4 transition-all"
              >
                VIEW ALL <ArrowRight size={16} />
              </Link>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((svc, i) => (
                <div key={i} className="border border-gray-100 p-6 card-hover">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <svc.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-dark mb-2">{svc.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{svc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">OUR PEOPLE</span>
            <h2 className="section-title mt-2">
              Meet <span className="text-primary">our team</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={i} className="text-center group card-hover">
                <div className="relative h-56 overflow-hidden mb-3 bg-gray-200">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h4 className="font-semibold text-dark text-sm">{member.name}</h4>
                <p className="text-gray-500 text-xs mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPOINTMENT FORM ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label">BOOK NOW</span>
              <h2 className="section-title mt-2 mb-4">
                Request an <span className="text-primary">Appointment</span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipiscing elit imperdiet
                tincidunt venenatis facilisis lorem, tristique fusce vulputate.
              </p>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your first name"
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your last name"
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                    Telephone
                  </label>
                  <input
                    type="tel"
                    placeholder="Your phone number"
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    placeholder="Zip Code"
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                    Select Services
                  </label>
                  <select className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-500 focus:outline-none focus:border-primary transition-colors bg-white">
                    <option value="">Select Service</option>
                    <option>Wealth management</option>
                    <option>Asset Management</option>
                    <option>Financial investment solutions</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="btn-primary w-full text-center">
                SUBMIT APPOINTMENT
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
