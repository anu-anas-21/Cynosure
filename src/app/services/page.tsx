import type { Metadata } from "next";
import Link from "next/link";
import {
  Cpu,
  Recycle,
  BatteryCharging,
  CircleDot,
  Car,
  ShieldCheck,
  FileCheck2,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import ProcessFlow from "@/components/ProcessFlow";
import { wasteStreams, dataServices, eprServices, technologies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services | Cynosure Recycling",
  description:
    "E-waste, plastic, battery, tyre, and end-of-life vehicle recycling, secure data destruction, IT asset disposition, and EPR compliance services from Cynosure Recycling.",
};

const streamIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "e-waste": Cpu,
  "plastic-waste": Recycle,
  "battery-waste": BatteryCharging,
  "tyre-waste": CircleDot,
  "elv-recycling": Car,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Closed-loop recycling & lifecycle management services"
        description="From e-waste and plastics to batteries, tyres, and end-of-life vehicles, Cynosure delivers compliant, technology-led recycling with secure data destruction and full EPR support."
      />

      {/* Quick nav */}
      <section className="border-b border-ink-100 bg-white">
        <div className="container-page flex flex-wrap gap-2 py-5">
          {[...wasteStreams, { slug: "data-destruction", shortName: "Data Destruction" }, { slug: "epr", shortName: "EPR Compliance" }].map(
            (item) => (
              <a
                key={item.slug}
                href={`#${item.slug}`}
                className="border border-ink-200 px-4 py-2 text-xs font-medium uppercase tracking-wide text-ink-600 hover:border-brand-400 hover:text-brand-600 transition-colors"
              >
                {item.shortName}
              </a>
            )
          )}
        </div>
      </section>

      {/* Waste streams */}
      {wasteStreams.map((stream, index) => {
        const Icon = streamIcons[stream.slug] ?? Recycle;
        const reversed = index % 2 === 1;
        return (
          <section
            key={stream.slug}
            id={stream.slug}
            className={`scroll-mt-20 py-16 sm:py-20 ${index % 2 === 0 ? "bg-white" : "bg-ink-50"}`}
          >
            <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
              <div className={reversed ? "lg:order-2" : ""}>
                <div className="flex size-14 items-center justify-center rounded-md bg-brand-500 text-white">
                  <Icon className="size-7" />
                </div>
                <h2 className="mt-6 text-3xl font-light sm:text-4xl">{stream.name}</h2>
                <p className="mt-4 text-base leading-relaxed text-ink-500">{stream.description}</p>
                <div className="mt-6 inline-flex items-center gap-2 border border-brand-400 px-4 py-2 text-sm font-medium text-brand-700">
                  Capacity: {stream.capacity} {stream.unit}
                </div>
                <p className="mt-6 text-sm font-medium text-ink-600">Recovered outputs</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{stream.outputs}</p>
              </div>
              <div className={reversed ? "lg:order-1" : ""}>
                <div className="border border-ink-100 bg-white p-7">
                  <p className="text-xs font-medium uppercase tracking-wide text-ink-400">
                    Process Flow
                  </p>
                  <div className="mt-5">
                    <ProcessFlow steps={stream.process} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Data destruction */}
      <section id="data-destruction" className="scroll-mt-20 bg-ink-50 py-16 sm:py-20">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="flex size-14 items-center justify-center rounded-md bg-brand-500 text-white">
              <ShieldCheck className="size-7" />
            </div>
            <h2 className="mt-6 text-3xl font-light sm:text-4xl">{dataServices.name}</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-500">{dataServices.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["NIST 800-88", "DoD 5220.22-M"].map((standard) => (
                <span
                  key={standard}
                  className="border border-brand-400 px-3 py-1 text-xs font-medium text-brand-600"
                >
                  {standard}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {dataServices.features.map((feature) => (
              <div key={feature.title} className="bg-white p-6 shadow-sm">
                <CheckCircle2 className="size-5 text-brand-500" />
                <h3 className="mt-3 text-lg font-normal text-ink-600">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EPR */}
      <section id="epr" className="scroll-mt-20 py-16 sm:py-20">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-500 text-white">
              <FileCheck2 className="size-7" />
            </div>
            <h2 className="mt-6 text-2xl font-bold text-ink-900 sm:text-3xl">{eprServices.name}</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-500">{eprServices.description}</p>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-600 transition-colors"
            >
              Talk to Our EPR Team
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {eprServices.features.map((feature) => (
              <div key={feature.title} className="rounded-2xl border border-ink-100 p-6">
                <CheckCircle2 className="size-5 text-brand-500" />
                <h3 className="mt-3 font-semibold text-ink-800">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <h2 className="text-center text-4xl font-light sm:text-5xl">
            Technology at the heart of our operations
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech) => (
              <div key={tech.title} className="border border-brand-400 bg-white p-7">
                <h3 className="text-lg font-normal text-ink-600">{tech.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-900">
        <div className="container-page flex flex-col items-start justify-between gap-8 py-16 sm:flex-row sm:items-center">
          <h2 className="text-4xl font-light text-white sm:text-5xl">
            Let&apos;s design your recycling program
          </h2>
          <Link href="/contact" className="btn-outline-light shrink-0">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
