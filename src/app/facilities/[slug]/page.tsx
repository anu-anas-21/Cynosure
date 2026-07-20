import type { Metadata } from "next";
import Image from "next/image";
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
  ArrowRight,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import {
  facilities,
  wasteStreams,
  dataServices,
  eprServices,
  formatIndianNumber,
} from "@/lib/content";

const streamIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "e-waste": Cpu,
  "plastic-waste": Recycle,
  "battery-waste": BatteryCharging,
  "tyre-waste": CircleDot,
  "elv-recycling": Car,
};

/* Real photos are only available for the Meerut (Uttar Pradesh) facility. */
const meerutPreviewPhotoIds = [1, 4, 9, 13, 20, 29];

export function generateStaticParams() {
  return facilities.map((facility) => ({ slug: facility.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const facility = facilities.find((f) => f.slug === slug);
  if (!facility) return {};
  return {
    title: `${facility.city} Facility | Cynosure Recycling`,
    description: `Recycling services available at Cynosure's ${facility.hubCity}, ${facility.city} facility, including capacity by waste stream.`,
  };
}

export default async function FacilityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const facility = facilities.find((f) => f.slug === slug);
  if (!facility) notFound();

  const isOperational = facility.status === "operational";

  return (
    <>
      <PageHero
        eyebrow={isOperational ? "Operational Facility" : "Opening Soon"}
        title={facility.city}
        description={`${facility.note} Located in ${facility.hubCity}, ${facility.city}.`}
      />

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-2 rounded-full border border-ink-100 px-4 py-2 text-sm text-ink-600">
              <MapPin className="size-4 text-brand-500" />
              {facility.hubCity}, {facility.city}
            </span>
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                isOperational
                  ? "bg-emerald-50 text-emerald-700"
                  : "bg-amber-50 text-amber-700"
              }`}
            >
              {isOperational ? "Operational" : "Opening Soon"}
            </span>
            {isOperational && (
              <span className="text-sm text-ink-500">
                Handles {formatIndianNumber(facility.capacityShare * 100)}% of national
                processing capacity across our waste streams
              </span>
            )}
          </div>

          <h2 className="mt-12 text-2xl font-light text-ink-600 sm:text-3xl">
            Services available at this facility
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {wasteStreams.map((stream) => {
              const Icon = streamIcons[stream.slug] ?? Recycle;
              const facilityCapacity = stream.capacityValue * facility.capacityShare;
              return (
                <Link
                  key={stream.slug}
                  href={`/services/${stream.slug}`}
                  className="group flex flex-col rounded-2xl border border-ink-100 p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex size-11 items-center justify-center rounded-xl bg-brand-500 text-white">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-4 font-medium text-ink-700">{stream.name}</h3>
                  <p className="mt-2 text-sm text-ink-500">
                    {isOperational
                      ? `${formatIndianNumber(facilityCapacity)} ${stream.unit}`
                      : "Launching soon"}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                    View service
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}

            <Link
              href={`/services/${dataServices.slug}`}
              className="group flex flex-col rounded-2xl border border-ink-100 p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-ink-900 text-white">
                <ShieldCheck className="size-5" />
              </div>
              <h3 className="mt-4 font-medium text-ink-700">{dataServices.name}</h3>
              <p className="mt-2 text-sm text-ink-500">
                {isOperational ? "Available" : "Launching soon"}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                View service
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href={`/services/${eprServices.slug}`}
              className="group flex flex-col rounded-2xl border border-ink-100 p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-ink-900 text-white">
                <FileCheck2 className="size-5" />
              </div>
              <h3 className="mt-4 font-medium text-ink-700">{eprServices.name}</h3>
              <p className="mt-2 text-sm text-ink-500">
                {isOperational ? "Available" : "Launching soon"}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                View service
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {facility.slug === "uttar-pradesh" && (
        <section className="bg-ink-50 py-16 sm:py-20">
          <div className="container-page">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-2xl font-light text-ink-600 sm:text-3xl">
                Inside the {facility.hubCity} facility
              </h2>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600"
              >
                View full gallery
                <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {meerutPreviewPhotoIds.map((id) => (
                <div key={id} className="relative aspect-square overflow-hidden bg-ink-100">
                  <Image
                    src={`/images/gallery/gal${id}.jpg`}
                    alt={`Cynosure ${facility.hubCity} facility`}
                    fill
                    sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-ink-900">
        <div className="container-page flex flex-col items-start justify-between gap-8 py-16 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-3xl font-light text-white sm:text-4xl">
              Need service at {facility.city}?
            </h2>
            <p className="mt-3 max-w-xl text-base text-ink-300">
              Talk to our team about waste volumes, collection logistics, and
              compliance requirements at this facility.
            </p>
          </div>
          <Link href="/contact" className="btn-outline-light shrink-0">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
