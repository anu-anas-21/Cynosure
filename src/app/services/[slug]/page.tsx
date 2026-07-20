import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Cpu,
  Recycle,
  BatteryCharging,
  CircleDot,
  Car,
  ShieldCheck,
  FileCheck2,
  MapPin,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import ProcessFlow from "@/components/ProcessFlow";
import {
  wasteStreams,
  dataServices,
  eprServices,
  facilities,
  formatIndianNumber,
} from "@/lib/content";

const streamIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "e-waste": Cpu,
  "plastic-waste": Recycle,
  "battery-waste": BatteryCharging,
  "tyre-waste": CircleDot,
  "elv-recycling": Car,
  "data-destruction": ShieldCheck,
  epr: FileCheck2,
};

export function generateStaticParams() {
  return [
    ...wasteStreams.map((s) => ({ slug: s.slug })),
    { slug: dataServices.slug },
    { slug: eprServices.slug },
  ];
}

function findService(slug: string) {
  const stream = wasteStreams.find((s) => s.slug === slug);
  if (stream) return { kind: "stream" as const, stream };
  if (slug === dataServices.slug) return { kind: "data" as const };
  if (slug === eprServices.slug) return { kind: "epr" as const };
  return null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) return {};
  const name =
    service.kind === "stream"
      ? service.stream.name
      : service.kind === "data"
        ? dataServices.name
        : eprServices.name;
  return {
    title: `${name} | Cynosure Recycling`,
    description: `${name} availability, capacity, and facility locations across Cynosure Recycling's network in India.`,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) notFound();

  const Icon = streamIcons[slug] ?? Recycle;

  const name =
    service.kind === "stream"
      ? service.stream.name
      : service.kind === "data"
        ? dataServices.name
        : eprServices.name;

  const description =
    service.kind === "stream"
      ? service.stream.description
      : service.kind === "data"
        ? dataServices.description
        : eprServices.description;

  return (
    <>
      <PageHero eyebrow="Service" title={name} description={description} />

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-500 text-white">
            <Icon className="size-7" />
          </div>

          {service.kind === "stream" && (
            <>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700">
                National Capacity: {service.stream.capacity} {service.stream.unit}
              </div>
              <p className="mt-6 max-w-2xl text-sm font-semibold text-ink-800">
                Recovered outputs
              </p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-500">
                {service.stream.outputs}
              </p>
              <div className="mt-8 rounded-2xl border border-ink-100 p-7">
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">
                  Process Flow
                </p>
                <div className="mt-5">
                  <ProcessFlow steps={service.stream.process} />
                </div>
              </div>
            </>
          )}

          {service.kind === "data" && (
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {dataServices.features.map((feature) => (
                <div key={feature.title} className="rounded-2xl border border-ink-100 p-6">
                  <CheckCircle2 className="size-5 text-brand-500" />
                  <h3 className="mt-3 font-semibold text-ink-800">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {service.kind === "epr" && (
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {eprServices.features.map((feature) => (
                <div key={feature.title} className="rounded-2xl border border-ink-100 p-6">
                  <CheckCircle2 className="size-5 text-brand-500" />
                  <h3 className="mt-3 font-semibold text-ink-800">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-ink-50 py-16 sm:py-20">
        <div className="container-page">
          <h2 className="text-2xl font-light text-ink-600 sm:text-3xl">
            Available at these facilities
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility) => {
              const isOperational = facility.status === "operational";
              const capacityHere =
                service.kind === "stream"
                  ? service.stream.capacityValue * facility.capacityShare
                  : null;
              return (
                <Link
                  key={facility.slug}
                  href={`/facilities/${facility.slug}`}
                  className="group flex flex-col rounded-2xl border border-ink-100 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm font-medium text-ink-700">
                      <MapPin className="size-4 text-brand-500" />
                      {facility.city}
                    </span>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                        isOperational
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-amber-50 text-amber-700"
                      }`}
                    >
                      {isOperational ? "Operational" : "Opening Soon"}
                    </span>
                  </div>
                  <p className="mt-3 text-xs text-ink-400">{facility.hubCity}</p>
                  <p className="mt-3 text-sm text-ink-500">
                    {isOperational
                      ? capacityHere !== null
                        ? `${formatIndianNumber(capacityHere)} ${service.kind === "stream" ? service.stream.unit : ""}`
                        : "Available"
                      : "Launching soon"}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                    View facility
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-ink-900">
        <div className="container-page flex flex-col items-start justify-between gap-8 py-16 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-3xl font-light text-white sm:text-4xl">
              Ready to get started with {name}?
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
