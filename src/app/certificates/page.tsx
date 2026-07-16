import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, ArrowUpRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { certificateDocs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Certificates | Cynosure Recycling",
  description:
    "Cynosure Recycling's ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 certifications for quality, environmental, and occupational health & safety management.",
};

export default function CertificatesPage() {
  return (
    <>
      <PageHero
        eyebrow="Registration"
        title="Our certificates"
        description="Cynosure Recycling operates under certified management systems, verified by independent audit against international standards."
      />

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {certificateDocs.map((cert) => (
              <div key={cert.code} className="flex flex-col bg-white shadow-sm">
                <div className="relative aspect-[3/4] bg-ink-50">
                  <Image
                    src={cert.image}
                    alt={`${cert.code} certificate`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-contain p-4"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <BadgeCheck className="size-7 text-brand-500" />
                  <h3 className="mt-3 text-xl font-normal text-ink-600">{cert.code}</h3>
                  <p className="mt-1.5 flex-1 text-sm text-ink-500">{cert.label}</p>
                  <Link
                    href={cert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600"
                  >
                    View Full Certificate
                    <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-900">
        <div className="container-page flex flex-col items-start justify-between gap-8 py-16 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-4xl font-light text-white sm:text-5xl">
              Ready to get free consultation for any kind of waste management?
            </h2>
          </div>
          <Link href="/contact" className="btn-outline-light shrink-0">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
