import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import { services } from "@/lib/services";

// export interface Service {
//   slug: string;
//   icon: LucideIcon;
//   title: string;
//   shortDesc: string;
//   fullDesc: string;
//   features: string[];
// }

// ─── DATA (swap with API/CMS call later) ───────────────────────────────────
// export const services: Service[] = [
//     {
//       slug: "financial-planning",
//       icon: TrendingUp,
//       title: "Financial Planning",
//       shortDesc: "Build a comprehensive financial roadmap tailored to your life goals and risk tolerance.",
//       fullDesc:
//         "Our financial planning service helps you navigate life's financial complexities with clarity and confidence. We analyze your income, expenses, assets, and liabilities to create a personalized plan that aligns with your short-term needs and long-term aspirations.",
//       features: [
//         "Comprehensive financial assessment",
//         "Goal-based planning strategies",
//         "Cash flow management",
//         "Tax-efficient strategies",
//         "Regular progress reviews",
//       ],
//     },
//     {
//       slug: "investment-management",
//       icon: BarChart3,
//       title: "Investment Management",
//       shortDesc: "Grow your wealth through disciplined, evidence-based investment strategies.",
//       fullDesc:
//         "We manage your investment portfolio with a focus on long-term growth, diversification, and risk management. Our evidence-based approach ensures your money works as hard as you do.",
//       features: [
//         "Portfolio construction & diversification",
//         "Risk-adjusted returns",
//         "Ongoing portfolio rebalancing",
//         "ESG investing options",
//         "Performance reporting",
//       ],
//     },
//     {
//       slug: "retirement-planning",
//       icon: PiggyBank,
//       title: "Retirement Planning",
//       shortDesc: "Secure your future with a retirement strategy designed for the life you envision.",
//       fullDesc:
//         "Our retirement planning specialists help you define what retirement means to you and create a structured savings and distribution plan to get there — without running out of money.",
//       features: [
//         "Retirement income projections",
//         "401(k) & IRA optimization",
//         "Social Security strategy",
//         "Healthcare cost planning",
//         "Legacy & estate planning",
//       ],
//     },
//     {
//       slug: "investment-analysis",
//       icon: TrendingUp,
//       title: "Investment Analysis",
//       shortDesc: "Data-driven insights to make smarter investment decisions with confidence.",
//       fullDesc:
//         "We provide in-depth research and analysis of investment opportunities, helping you understand market dynamics, evaluate risk, and make informed decisions backed by solid data.",
//       features: [
//         "Market research & analysis",
//         "Fundamental & technical review",
//         "Sector & industry insights",
//         "Risk assessment reports",
//         "Custom investment reports",
//       ],
//     },
//     {
//       slug: "insurance",
//       icon: Shield,
//       title: "Insurance",
//       shortDesc: "Protect everything you've built with comprehensive coverage tailored to your needs.",
//       fullDesc:
//         "We evaluate your existing coverage and recommend insurance strategies that protect your income, assets, and family — ensuring you're never underinsured when it matters most.",
//       features: [
//         "Life insurance analysis",
//         "Disability income protection",
//         "Long-term care planning",
//         "Business insurance review",
//         "Annuity solutions",
//       ],
//     },
//   ];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
        imageSrc="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop"
        imageAlt="Our Services"
      />

      {/* Intro */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label">WHAT WE OFFER</span>
          <h2 className="section-title mt-2 mb-4 max-w-2xl mx-auto">
            Comprehensive Financial <span className="text-primary">Solutions</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm leading-relaxed">
            From planning to execution, we offer a full suite of financial
            services designed to support every stage of your wealth journey.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc) => (
              <div
                key={svc.slug}
                className="border border-gray-100 p-8 card-hover group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                  <svc.icon
                    size={26}
                    className="text-primary group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="font-display text-xl font-semibold text-dark mb-3">
                  {svc.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {svc.shortDesc}
                </p>
                <ul className="space-y-2 mb-6">
                  {svc.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle size={14} className="text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${svc.slug}`}
                  className="text-primary text-sm font-semibold flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-wide"
                >
                  LEARN MORE <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-4">
            Ready to Start Your Financial Journey?
          </h2>
          <p className="text-white/80 text-sm mb-8 max-w-md mx-auto">
            Schedule a free consultation with one of our advisors and take the
            first step toward financial clarity.
          </p>
          <Link href="/contact" className="btn-accent inline-flex items-center gap-2">
            CONTACT US TODAY <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
