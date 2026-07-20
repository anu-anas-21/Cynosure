"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import { facilities } from "@/lib/content";

export default function FacilitiesStrip() {
  const marqueeItems = [...facilities, ...facilities, ...facilities, ...facilities];

  return (
    <section id="facilities" className="scroll-mt-24 bg-ink-50 py-16 sm:py-24">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
          <h2 className="text-4xl font-light sm:text-5xl">Our facilities</h2>
          <div>
            <p className="text-lg leading-relaxed text-ink-500">
              Explore Cynosure&apos;s growing network of recycling and material
              recovery facilities across India.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                See All Facilities
              </Link>
              <Link href="/contact" className="btn-outline">
                Find Your Nearest Site
              </Link>
            </div>
          </div>
        </div>

        {/* Facility cards with location pins */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {facilities.map((facility) => (
            <Link
              key={facility.slug}
              href={`/facilities/${facility.slug}`}
              className="block bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <MapPin className="size-5 text-brand-500" />
                <span
                  className={`px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${
                    facility.status === "operational"
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-amber-50 text-amber-700"
                  }`}
                >
                  {facility.status === "operational" ? "Operational" : "Opening Soon"}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-normal text-ink-600">{facility.city}</h3>
              <p className="text-sm text-ink-400">{facility.region}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Scrolling city strip like the reference */}
      <div className="mt-14 overflow-hidden border-y border-ink-100 bg-white py-8">
        <div className="flex w-max animate-marquee gap-16 px-8">
          {marqueeItems.map((facility, i) => (
            <Link
              key={`${facility.slug}-${i}`}
              href={`/facilities/${facility.slug}`}
              className="text-center transition-opacity hover:opacity-70"
            >
              <p className="whitespace-nowrap text-2xl font-light text-ink-600">
                {facility.city}
              </p>
              <p className="mt-1 whitespace-nowrap text-xs uppercase tracking-wider text-ink-400">
                {facility.region}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
