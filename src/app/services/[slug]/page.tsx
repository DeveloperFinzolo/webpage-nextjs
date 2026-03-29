import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle, ArrowLeft } from "lucide-react";
import { services } from "@/lib/services";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default function ServiceDetailPage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const Icon = service.icon;
  const otherServices = services.filter((s) => s.slug !== params.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="flex items-center gap-2 text-gray-400 text-sm mb-6 hover:text-white transition-colors"
          >
            <ArrowLeft size={14} /> Back to Services
          </Link>
          <div className="flex items-center gap-5 mb-6">
            <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
              <Icon size={30} className="text-white" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-white">
              {service.title}
            </h1>
          </div>
          <p className="text-gray-400 max-w-2xl text-base leading-relaxed">
            {service.shortDesc}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main */}
            <div className="lg:col-span-2">
              <h2 className="section-title mb-6">
                About <span className="text-primary">{service.title}</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">{service.fullDesc}</p>

              <h3 className="font-semibold text-dark text-lg mb-4">
                What&apos;s Included
              </h3>
              <ul className="space-y-3 mb-10">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                GET STARTED <ArrowRight size={16} />
              </Link>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-gray-50 p-6 mb-6">
                <h4 className="font-semibold text-dark mb-4">Other Services</h4>
                <div className="space-y-3">
                  {otherServices.map((svc) => (
                    <Link
                      key={svc.slug}
                      href={`/services/${svc.slug}`}
                      className="flex items-center justify-between p-3 bg-white border border-gray-100 hover:border-primary group transition-colors"
                    >
                      <span className="text-sm text-gray-700 group-hover:text-primary transition-colors">
                        {svc.title}
                      </span>
                      <ArrowRight size={14} className="text-primary" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-primary p-6 text-white">
                <h4 className="font-display text-xl font-semibold mb-3">
                  Ready to get started?
                </h4>
                <p className="text-white/80 text-sm mb-4 leading-relaxed">
                  Speak with one of our expert advisors today and take control of
                  your financial future.
                </p>
                <Link
                  href="/contact"
                  className="bg-white text-primary px-5 py-2.5 text-sm font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors inline-block"
                >
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
