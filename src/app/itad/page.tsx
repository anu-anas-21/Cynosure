import type { Metadata } from "next";
import Link from "next/link";
import {
  Laptop,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Landmark,
  GraduationCap,
  HeartPulse,
  Factory,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import ProcessFlow from "@/components/ProcessFlow";
import { dataServices, certifications } from "@/lib/content";

export const metadata: Metadata = {
  title: "IT Asset Disposition (ITAD) | Cynosure Recycling",
  description:
    "Secure, auditable IT asset disposition from Cynosure Recycling — on-site and off-site data destruction, chain of custody, and certified recycling for retired IT assets.",
};

const risks = [
  {
    title: "Undocumented disposal is a data risk",
    description:
      "Retired drives, laptops, and servers that leave without a verifiable destruction record are an open compliance and data-exposure liability.",
  },
  {
    title: "Recoverable value gets written off",
    description:
      "Assets that still hold reusable components or refinable materials are often scrapped wholesale instead of processed for recovery.",
  },
  {
    title: "Audit trails are assembled after the fact",
    description:
      "Without asset-level tracking from collection onward, proving compliance during an audit becomes a scramble rather than a lookup.",
  },
];

const itadProcess = [
  "Asset Collection",
  "Inventory & Audit",
  "Data Destruction / Degaussing",
  "Component Recovery",
  "Certified Recycling",
  "Certificate of Destruction",
];

const builtFor = [
  { icon: Landmark, label: "BFSI & Financial Institutions" },
  { icon: Building2, label: "Corporates & Enterprises" },
  { icon: HeartPulse, label: "Healthcare & Life Sciences" },
  { icon: Factory, label: "Manufacturing & Industrial" },
  { icon: GraduationCap, label: "Educational Institutions" },
  { icon: ShieldCheck, label: "Government & Public Sector" },
];

export default function ItadPage() {
  return (
    <>
      <PageHero
        eyebrow="ITAD"
        title="IT asset disposition, built for security and accountability"
        description="From retired laptops and servers to full data-centre decommissioning, Cynosure manages the entire IT asset lifecycle with secure destruction, verifiable chain of custody, and certified recycling."
      />

      <section className="bg-ink-50 py-16 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">
              The Risk
            </span>
            <h2 className="mt-3 text-4xl font-light sm:text-5xl">
              What conventional disposition leaves exposed
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {risks.map((risk) => (
              <div key={risk.title} className="rounded-2xl bg-white p-7 shadow-sm">
                <h3 className="font-semibold text-ink-800">{risk.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-500">
                  {risk.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-500 text-white">
              <Laptop className="size-7" />
            </div>
            <h2 className="mt-6 text-3xl font-light sm:text-4xl">
              {dataServices.name}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-500">
              {dataServices.description}
            </p>
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
            <Link
              href="/services/data-destruction"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-600"
            >
              See the full Data Destruction &amp; ITAD service
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {dataServices.features.map((feature) => (
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

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">
              Our Process
            </span>
            <h2 className="mt-3 text-4xl font-light sm:text-5xl">
              From collection to certificate
            </h2>
          </div>
          <div className="mt-10 flex justify-center">
            <ProcessFlow steps={itadProcess} />
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
              Trusted across sectors with sensitive data
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3">
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
          <div>
            <h2 className="text-3xl font-light text-white sm:text-4xl">
              Decommissioning IT assets?
            </h2>
            <p className="mt-3 max-w-xl text-base text-ink-300">
              Talk to our team about a secure, documented disposition plan for
              your retired hardware.
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
