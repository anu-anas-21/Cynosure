import type { Metadata } from "next";
import Link from "next/link";
import { Package, ArrowRight, BadgeCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import { wasteStreams, annualImpact, certifications } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Products | Cynosure Recycling",
  description:
    "Secondary raw materials supplied by Cynosure Recycling — recovered metals, recycled plastic granules, and processed outputs graded and ready for re-entry into manufacturing.",
};

const products = wasteStreams
  .filter((stream) => stream.slug !== "biomedical")
  .map((stream) => ({
    slug: stream.slug,
    name: stream.name,
    outputs: stream.outputs,
  }));

export default function OurProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Products"
        title="Secondary raw materials, graded and supply-ready"
        description="Every material Cynosure recovers is sorted, graded, and documented before it leaves our facilities — ready to re-enter manufacturing supply chains instead of a landfill."
      />

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {annualImpact.map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-2xl font-light text-brand-600 sm:text-3xl">
                  {item.metric}
                </p>
                <p className="mt-1.5 text-xs leading-snug text-ink-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-50 py-16 sm:py-20">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.slug}
                className="flex flex-col rounded-2xl border border-ink-100 bg-white p-7"
              >
                <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-500 text-white">
                  <Package className="size-7" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink-800">
                  {product.name}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-500">
                  {product.outputs}
                </p>
                <Link
                  href={`/services/${product.slug}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600"
                >
                  View service
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-4xl font-light sm:text-5xl">
              Traceable from intake to output
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-500">
              Every batch of recovered material is tagged, tracked, and
              recorded through our digital management system, so buyers can
              verify origin, grading, and compliance for every consignment.
            </p>
          </div>
          <div className="rounded-2xl border border-ink-100 bg-white p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-ink-500">
              What buyers get
            </p>
            <ul className="mt-5 space-y-3">
              {[
                "Graded, sorted material — not mixed scrap",
                "Batch-level documentation and traceability",
                "Consistent supply from owned processing facilities",
                "Compliance-ready sourcing for EPR and ESG reporting",
              ].map((item) => (
                <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-ink-600">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-ink-50 py-16 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">
              Certifications
            </span>
            <h2 className="mt-3 text-4xl font-light sm:text-5xl">
              Certified management systems
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {certifications.general.map((cert) => (
              <div key={cert.code} className="rounded-2xl border border-ink-100 bg-white p-7 text-center">
                <BadgeCheck className="mx-auto size-9 text-brand-500" />
                <h3 className="mt-4 text-lg font-bold text-ink-900">{cert.code}</h3>
                <p className="mt-1.5 text-sm text-ink-500">{cert.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-900">
        <div className="container-page flex flex-col items-start justify-between gap-8 py-16 sm:flex-row sm:items-center">
          <h2 className="text-4xl font-light text-white sm:text-5xl">
            Looking to source recycled materials?
          </h2>
          <Link href="/contact" className="btn-outline-light shrink-0">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
