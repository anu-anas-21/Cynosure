import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FileCheck2,
  CheckCircle2,
  ArrowRight,
  Factory,
  Building2,
  Boxes,
  Cog,
  Cpu,
  Recycle,
  BatteryCharging,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import { eprServices, clientJourney, faqs, certifications, wasteStreams } from "@/lib/content";

export const metadata: Metadata = {
  title: "EPR Solutions | Cynosure Recycling",
  description:
    "Cynosure's EPR solutions cover registration, documentation, and target fulfilment for producers, importers, and brand owners under India's E-Waste and Plastic Waste Management Rules.",
};

const solutions = eprServices.features.slice(0, 2);
const buildSteps = clientJourney.slice(0, 2);
const eprFaq = faqs.find((f) => f.question === "What is your approach to EPR compliance?");

const segmentIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "e-waste": Cpu,
  "plastic-waste": Recycle,
  "battery-waste": BatteryCharging,
};

const eprSegmentSlugs = ["e-waste", "plastic-waste", "battery-waste"];
const eprSegments = eprSegmentSlugs.map((slug) => {
  const stream = wasteStreams.find((s) => s.slug === slug)!;
  const cert = certifications.streams.find((c) => c.name === stream.name)!;
  return { ...stream, regulation: cert.points[0], icon: segmentIcons[slug] };
});

const builtFor = [
  { icon: Factory, label: "Producers" },
  { icon: Building2, label: "Brand Owners" },
  { icon: Boxes, label: "Importers" },
  { icon: Cog, label: "Manufacturers" },
];

export default function EprSolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="EPR Solutions"
        title="What you get: registration, targets, and channelization handled"
        description="Cynosure builds the compliance infrastructure so producers, importers, and brand owners can meet their statutory EPR obligations without building it in-house."
      />

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/gallery/gal26.jpg"
              alt="Security and compliance checkpoint at Cynosure's Meerut facility"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-500 text-white">
              <FileCheck2 className="size-7" />
            </div>
            <h2 className="mt-6 text-3xl font-light sm:text-4xl">
              Solutions built for statutory compliance
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-500">
              {eprServices.description}
            </p>
            <Link
              href="/epr/services"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-600"
            >
              See our ongoing EPR Services
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {solutions.map((feature) => (
              <div key={feature.title} className="rounded-2xl border border-ink-100 p-6">
                <div className="flex size-11 items-center justify-center rounded-xl bg-brand-500 text-white">
                  <CheckCircle2 className="size-5" />
                </div>
                <h3 className="mt-4 font-semibold text-ink-800">{feature.title}</h3>
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
              How We Build It
            </span>
            <h2 className="mt-3 text-4xl font-light sm:text-5xl">
              From consultation to a compliant proposal
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {buildSteps.map((step) => (
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
              Segments We Serve
            </span>
            <h2 className="mt-3 text-4xl font-light sm:text-5xl">
              EPR-regulated categories we cover
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {eprSegments.map((segment) => (
              <Link
                key={segment.slug}
                href={`/services/${segment.slug}`}
                className="group flex flex-col rounded-2xl border border-ink-100 p-7 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-brand-500 text-white">
                  <segment.icon className="size-5" />
                </div>
                <h3 className="mt-4 font-semibold text-ink-800">{segment.name}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-500">
                  {segment.regulation}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                  View service
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-50 py-16 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">
              Built For
            </span>
            <h2 className="mt-3 text-4xl font-light sm:text-5xl">
              Who we build EPR solutions for
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {builtFor.map((sector) => (
              <div
                key={sector.label}
                className="flex flex-col items-center gap-3 rounded-2xl bg-white p-6 text-center shadow-sm"
              >
                <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-500 text-white">
                  <sector.icon className="size-7" />
                </div>
                <p className="text-sm font-medium text-ink-700">{sector.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {eprFaq && (
        <section className="py-16 sm:py-20">
          <div className="container-page">
            <div className="mx-auto max-w-3xl rounded-2xl border border-ink-100 p-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                {eprFaq.question}
              </p>
              <p className="mt-3 text-base leading-relaxed text-ink-500">
                {eprFaq.answer}
              </p>
            </div>
          </div>
        </section>
      )}

      <section className="bg-ink-900">
        <div className="container-page flex flex-col items-start justify-between gap-8 py-16 sm:flex-row sm:items-center">
          <h2 className="text-4xl font-light text-white sm:text-5xl">
            Need help with EPR registration?
          </h2>
          <Link href="/contact" className="btn-outline-light shrink-0">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
