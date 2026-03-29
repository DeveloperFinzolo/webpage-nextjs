import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center">
        <p className="section-label mb-2">404 ERROR</p>
        <h1 className="font-display text-7xl font-bold text-dark mb-4">
          Oops!
        </h1>
        <p className="text-gray-500 text-base mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href="/" className="btn-primary inline-flex items-center gap-2">
          BACK TO HOME <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
