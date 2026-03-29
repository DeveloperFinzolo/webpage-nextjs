import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  TrendingUp,
  Shield,
  BarChart3,
  PiggyBank,
  Star,
  ChevronRight,
  BookOpen,
  AlignEndHorizontalIcon
} from "lucide-react";

const stats = [
  { value: "$18B", label: "Assets Under Management" },
  { value: "7", label: "Offices Nationwide" },
  { value: "1,129", label: "Year Founded Company" },
  { value: "324", label: "Clients Represented" },
];

const services = [
  {
    icon: TrendingUp,
    title: "Quantitative Trading",
    desc: "Utilizing advanced mathematical models and high-frequency, technology-driven strategies to identify and profit from arbitrage opportunities.",
  },
  {
    icon: AlignEndHorizontalIcon,
    title: "Analytics & Management Solutions",
    desc: "Integrated, innovative and data-driven investment analytics powering smarter decisions for institutional investors globally.",
  },
  {
    icon: Shield,
    title: "Risk Management",
    desc: "Employing sophisticated, data-driven approaches to manage risk while maintaining a high volume of daily transactions.",
  },
  {
    icon: BarChart3,
    title: "Market Making",
    desc: "Continuously offering buy and sell quotes to ensure liquidity in equities, bonds, and options — facilitating seamless trades for institutions.",
  },
];

const testimonials = [
  {
    rating: 5,
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit imperdiet tincidunt venenatis facilisis lorem tristique.",
    name: "Testimonial #1",
    role: "Client",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",
  },
  {
    rating: 5,
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit imperdiet tincidunt venenatis facilisis lorem tristique.",
    name: "Testimonial #2",
    role: "Client",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop",
  },
  {
    rating: 5,
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit imperdiet tincidunt venenatis facilisis lorem tristique.",
    name: "Testimonial #3",
    role: "Client",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop",
  },
];

const awards = ["QUESTA", "EXEO", "KAYANA", "TAXFORT", "ONE FOUND"];

const blogs = [
  {
    tag: "Most Popular",
    title: "How To Start Your Investing Journey?",
    date: "March 12, 2024",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=280&fit=crop",
  },
  {
    tag: "Finance",
    title: "How To Achieve True Wealth",
    date: "March 18, 2024",
    img: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=400&h=280&fit=crop",
  },
  {
    tag: "Planning",
    title: "Step Focused Planning",
    date: "March 24, 2024",
    img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=280&fit=crop",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Heros01.jpg"
            alt="Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl text-white">
            <p className="section-label text-accent mb-3">Welcome to Finzolo</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
              Building Sustainable Wealth Through Strategic Long-Term Investing.
            </h1>
            <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
              Our Wealth Advising team can help you build lasting wealth and
              achieve financial independence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary flex items-center gap-2">
                GET STARTED <ArrowRight size={16} />
              </Link>
              <Link
                href="/about"
                className="border border-white/50 text-white px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-white hover:text-dark transition-all duration-300"
              >
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>

        {/* Floating card */}
        {/* <div className="absolute bottom-10 right-8 hidden lg:block bg-white p-5 shadow-2xl max-w-xs z-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center">
              <Shield size={20} className="text-primary" />
            </div>
            <div>
              <p className="text-xs font-semibold text-dark">Risk Management</p>
              <p className="text-xs text-gray-500">Protecting your assets</p>
            </div>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
          </p>
        </div> */}
      </section>

      {/* ── PLANNING OBJECTIVE BANNER ── */}
      <section className="bg-primary py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-white font-display text-2xl font-semibold">
              Clear financial planning for long-term stability
            </h2>
          </div>
          <Link
            href="/services"
            className="text-accent text-sm font-semibold uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all"
          >
            VIEW ALL <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ── WE HELP SECTION ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop"
                  alt="Office"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 mt-6">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
                  alt="Team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 -mt-6 col-span-2">
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=300&fit=crop"
                  alt="Meeting"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="section-label">ABOUT US</span>
              <h2 className="section-title mt-2 mb-6">
                We Help You Grow, Protect, and Manage Your <span className="text-primary"> Financial Future</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We focus on three core pillars: wealth management, financial solutions, and asset management.
                Founded in 2026, we help clients navigate complexity with clear strategies – from portfolio construction and risk management to customized financial planning.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                No noise. No shortcuts. Just disciplined, results-driven management of what matters most: your financial future.
              </p>
              <Link
                href="/about"
                className="text-primary font-semibold text-sm uppercase tracking-wider flex items-center gap-2 hover:gap-4 transition-all"
              >
                READ MORE <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title mb-4">Who We Serve</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-10 text-sm leading-relaxed">
            We provide structured wealth and asset management for those who want clarity, discipline, and long-term results — without unnecessary complexity or financial advice.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["Business Owners", "Individuals", "Families", "Retirees", "Entrepreneurs"].map((who) => (
              <div key={who} className="bg-white p-6 shadow-sm border border-gray-100 card-hover">
                <div className="w-10 h-10 bg-primary/10 rounded mx-auto mb-3 flex items-center justify-center">
                  <TrendingUp size={18} className="text-primary" />
                </div>
                <p className="font-semibold text-dark text-sm">{who}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      {/* <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center border-r border-gray-200 last:border-0">
                <p className="font-display text-4xl md:text-5xl font-bold text-dark mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-500 text-xs uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── LEGACY BANNER ── */}
      <section className="relative py-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&h=600&fit=crop"
          alt="Team"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-dark/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-white max-w-lg">
            <span className="text-accent">Preserve</span> and Grow Your
            Financial Legacy
          </h2>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Dark intro card */}
            <div className="bg-dark text-white p-10 h-full">
              <h2 className="font-display text-3xl font-semibold mb-4">
                What <span className="text-accent">We</span> Do
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                As demand for professional wealth and asset management continues to expand, Finzolo aims to make individuals financial expertise accessible to modern investors.
              </p>
              <Link
                href="/services"
                className="text-accent font-semibold text-sm uppercase tracking-wider flex items-center gap-2 hover:gap-4 transition-all"
              >
                VIEW ALL <ArrowRight size={16} />
              </Link>
            </div>

            {/* Service cards */}
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

      {/* ── TESTIMONIALS ── */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">WHAT ARE OUR CLIENTS SAYING</span>
            <h2 className="section-title mt-2">
              Our <span className="text-primary">Testimonials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 shadow-sm border border-gray-100 card-hover">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{t.text}</p>
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image src={t.img} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-dark text-sm font-semibold">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── AWARDS ── */}
      {/* <section className="py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-2xl font-semibold text-dark mb-10">
            Recognition & Awards
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-10">
            {awards.map((a) => (
              <span
                key={a}
                className="font-display text-xl font-bold text-gray-300 hover:text-primary transition-colors cursor-default tracking-widest"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── BLOG / GUIDES ── */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="section-label">PERSONAL FINANCE</span>
              <h2 className="section-title mt-1">
                Personal Finance <span className="text-primary">Guides</span>
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden md:flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider hover:gap-4 transition-all"
            >
              READ OUR BLOG <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogs.map((blog, i) => (
              <article key={i} className="card-hover group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={blog.img}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-primary text-white text-xs px-3 py-1 font-semibold uppercase tracking-wide">
                    {blog.tag}
                  </span>
                </div>
                <div className="p-5 border border-t-0 border-gray-100">
                  <p className="text-xs text-gray-400 mb-2 flex items-center gap-1">
                    <BookOpen size={12} /> {blog.date}
                  </p>
                  <h3 className="font-semibold text-dark group-hover:text-primary transition-colors leading-snug">
                    {blog.title}
                  </h3>
                  <Link
                    href="/blog"
                    className="mt-3 text-primary text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    READ MORE <ChevronRight size={12} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
}
