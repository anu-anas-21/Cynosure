import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, BadgeCheck, Lock, Eye } from "lucide-react";
import PageHero from "@/components/PageHero";
import { certifications } from "@/lib/content";

export const metadata: Metadata = {
  title: "Compliance & Certifications | Cynosure Recycling",
  description:
    "Cynosure Recycling's regulatory certifications and compliance framework across e-waste, plastic, battery, tyre, and end-of-life vehicle recycling streams in India.",
};

export default function CompliancePage() {
  return (
    <>
      <PageHero
        eyebrow="Compliance"
        title="Regulatory compliance is the foundation of responsible recycling"
        description="We hold and maintain all necessary certifications and authorizations issued by the Central Pollution Control Board (CPCB) and respective State Pollution Control Boards (SPCBs) for every stream we handle."
      />

      {/* General standards */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">
              General Environmental & Safety Standards
            </span>
            <h2 className="mt-3 text-4xl font-light sm:text-5xl">
              Certified management systems
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {certifications.general.map((cert) => (
              <div key={cert.code} className="rounded-2xl border border-ink-100 p-7 text-center">
                <BadgeCheck className="mx-auto size-9 text-brand-500" />
                <h3 className="mt-4 text-lg font-bold text-ink-900">{cert.code}</h3>
                <p className="mt-1.5 text-sm text-ink-500">{cert.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {certifications.dataStandards.map((cert) => (
              <div key={cert.code} className="flex items-center gap-4 rounded-2xl bg-ink-50 p-6">
                <Lock className="size-8 shrink-0 text-brand-500" />
                <div>
                  <h3 className="font-bold text-ink-900">{cert.code}</h3>
                  <p className="text-sm text-ink-500">{cert.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Per stream */}
      <section className="bg-ink-50 py-16 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">
              Stream-Level Authorizations
            </span>
            <h2 className="mt-3 text-4xl font-light sm:text-5xl">
              Certified across every waste stream
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {certifications.streams.map((stream) => (
              <div key={stream.name} className="rounded-2xl border border-ink-100 bg-white p-7">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="size-6 text-brand-500" />
                  <h3 className="font-semibold text-ink-800">{stream.name}</h3>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {stream.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-ink-500">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-400" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-16 sm:py-20">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eye className="size-9 text-brand-500" />
            <h2 className="mt-4 text-4xl font-light sm:text-5xl">
              Transparent by design, traceable by default
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-500">
              Every asset or waste stream is tagged, tracked, and recorded
              through a digital management system, enabling clients and
              regulatory bodies to monitor movement, treatment, and output in
              real time, backed by GPS-enabled logistics and digital
              documentation.
            </p>
          </div>
          <div className="rounded-2xl border border-ink-100 bg-ink-50 p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-ink-500">
              Our audit trail includes
            </p>
            <ul className="mt-5 space-y-3">
              {[
                "Secure chain of custody, from collection to final material recovery",
                "Detailed audit reports backed by photographic and geo-tagged evidence",
                "Certificates of recycling or destruction for every completed engagement",
                "Digital dashboards and compliance logs for ongoing visibility",
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

      <section className="bg-ink-900">
        <div className="container-page flex flex-col items-start justify-between gap-8 py-16 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-4xl font-light text-white sm:text-5xl">
              Need certification documents for an audit?
            </h2>
            <p className="mt-3 max-w-xl text-base text-ink-300">
              Our compliance team can share authorization certificates and
              reports for your regulatory or internal governance needs.
            </p>
          </div>
          <Link href="/contact" className="btn-outline-light shrink-0">
            Request Documentation
          </Link>
        </div>
      </section>
    </>
  );
}
