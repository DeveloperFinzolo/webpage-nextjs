import Link from "next/link";
import Image from "next/image";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  breadcrumbs: Breadcrumb[];
  imageSrc: string;
  imageAlt: string;
}

export default function PageHero({ title, breadcrumbs, imageSrc, imageAlt }: PageHeroProps) {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[280px]">
          {/* Left */}
          <div className="py-12">
            <nav className="flex items-center gap-2 text-xs text-gray-500 mb-4">
              {breadcrumbs.map((crumb, i) => (
                <span key={crumb.label} className="flex items-center gap-2">
                  {i > 0 && <span className="text-gray-300">|</span>}
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-primary transition-colors uppercase tracking-wide">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-gray-400 uppercase tracking-wide">{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
            <h1 className="section-title text-dark">{title}</h1>
            <div className="w-12 h-0.5 bg-primary mt-4" />
          </div>

          {/* Right image */}
          <div className="hidden lg:block relative h-72">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
