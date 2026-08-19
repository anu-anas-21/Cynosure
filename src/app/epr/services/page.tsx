import type { Metadata } from "next";
import Link from "next/link";
import { FileCheck2, CheckCircle2, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { eprServices, clientJourney, certifications } from "@/lib/content";

export const metadata: Metadata = {
  title: "EPR Services | Cynosure Recycling",
  description:
    "Cynosure's ongoing EPR services: real-time tracking, verifiable reporting, and awareness and take-back program design for producers, importers, and brand owners.",
};

const services = eprServices.features.slice(2, 4);
const supportSteps = clientJourney.slice(4, 6);

export default function EprServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="EPR Services"
        title="How we support you: tracking, reporting, and engagement"
        description="Beyond registration and target fulfilment, Cynosure stays engaged year-round with real-time tracking, verifiable reporting, and awareness programs that keep your EPR obligations audit-ready."
      />

      <section className="py-16 sm:py-20">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-500 text-white">
              <FileCheck2 className="size-7" />
            </div>
            <h2 className="mt-6 text-3xl font-light sm:text-4xl">
              An ongoing service, not a one-time filing
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-500">
              {eprServices.description}
            </p>
            <Link
              href="/epr/solutions"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-600"
            >
              See our EPR Solutions
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {services.map((feature) => (
              <div key={feature.title} className="rounded-2xl border border-ink-100 p-6">
                <CheckCircle2 className="size-5 text-brand-500" />
                <h3 className="mt-3 font-semibold text-ink-800">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-50 py-16 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">
              What Ongoing Looks Like
            </span>
            <h2 className="mt-3 text-4xl font-light sm:text-5xl">
              Reporting and support that don&apos;t stop at filing
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {supportSteps.map((step) => (
              <div key={step.step} className="bg-white p-8 shadow-sm">
                <span className="text-4xl font-light text-brand-400">{step.step}</span>
                <h3 className="mt-4 text-xl font-normal text-ink-600">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
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
              <div key={cert.code} className="rounded-2xl border border-ink-100 p-7 text-center">
                <h3 className="text-lg font-bold text-ink-900">{cert.code}</h3>
                <p className="mt-1.5 text-sm text-ink-500">{cert.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-900">
        <div className="container-page flex flex-col items-start justify-between gap-8 py-16 sm:flex-row sm:items-center">
          <h2 className="text-4xl font-light text-white sm:text-5xl">
            Want ongoing EPR support?
          </h2>
          <Link href="/contact" className="btn-outline-light shrink-0">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
