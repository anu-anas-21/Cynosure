import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Handshake, Target } from "lucide-react";
import PageHero from "@/components/PageHero";
import { company, differentiators } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us | Cynosure Recycling",
  description:
    "Founded in 2021 by Mr. Arvish Malik, Cynosure Recycling is redefining responsible e-waste, plastic, battery, tyre, and end-of-life vehicle recycling across India.",
};

const partnerships = [
  {
    title: "Manufacturers & Producer Responsibility Organizations",
    description:
      "Collaborations with leading manufacturers and PROs to build a seamless, compliant, and far-reaching reverse logistics infrastructure across India.",
  },
  {
    title: "EPR Brand Partnerships",
    description:
      "Partnerships with large electronic and electrical equipment brands under the EPR framework, deploying customized take-back programs and awareness campaigns.",
  },
  {
    title: "Technology Innovators & Engineering Firms",
    description:
      "Collaborations that bring High Vacuum Thin Film Technology, AI-driven sorting, and energy-efficient refining methods into our facilities.",
  },
  {
    title: "Educational Institutions, NGOs & Government Agencies",
    description:
      "Ongoing partnerships to conduct community engagement, e-waste awareness drives, and green skill development workshops.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Cynosure Recycling"
        title="Redefining what responsible recycling looks like in India"
        description="Cynosure Recycling is driven by a transformative vision: to revolutionize electronic waste recycling in India by minimizing environmental impact through best-in-class, innovative recycling practices."
      />

      {/* Story */}
      <section id="story" className="scroll-mt-20 py-16 sm:py-20">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">
              Our Story
            </span>
            <h2 className="mt-3 text-4xl font-light sm:text-5xl">
              Founded on a resolute mission
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-500">
              <p>
                {company.name} was born out of a visionary spark, ignited by a
                deep concern for the mounting challenge of electronic waste
                and its environmental implications. Founded in{" "}
                {company.founded} by {company.founder}, a dynamic young
                entrepreneur from {company.foundedCity}, Cynosure emerged with
                a resolute mission: to offer clean, sustainable, and
                responsible e-waste disposal solutions across India.
              </p>
              <p>
                Even before officially commencing operations in{" "}
                {company.operationsStarted}, the foundation of Cynosure was
                laid through meticulous planning, comprehensive feasibility
                studies, and robust market research, shaping a company
                responsive to the immediate needs of the recycling industry
                while aligned with long-term ecological goals.
              </p>
              <p>
                Since its inception, Cynosure Recycling has evolved into a
                driving force in the e-waste management landscape, leveraging
                innovation, secure technologies, and environmentally sound
                practices to elevate industry standards while staying true to
                its founding vision of a cleaner, greener India.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-ink-100 bg-ink-50 p-8">
            <Target className="size-8 text-brand-500" />
            <h3 className="mt-4 text-lg font-semibold text-ink-800">Our Mission</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-500">
              To responsibly recycle e-waste, ensure secure data destruction,
              recover valuable materials, and actively promote a circular
              economy by leveraging top-tier, cutting-edge technologies. At
              the heart of our operations is a commitment to delivering
              customized, secure, and synchronized end-of-life material
              management solutions.
            </p>
            <div className="mt-6 border-t border-ink-200 pt-6">
              <h3 className="text-lg font-semibold text-ink-800">Our Culture</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">
                Cynosure embraces a culture of sustainability, inclusivity,
                and continuous innovation, committed to creating a safe,
                diverse, and inclusive workplace while inspiring a broader
                global movement toward environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section id="differentiators" className="scroll-mt-20 bg-ink-50 py-16 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">
              What Sets Us Apart
            </span>
            <h2 className="mt-3 text-4xl font-light sm:text-5xl">
              A rare blend of innovation, integrity, and impact
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {differentiators.map((item, index) => (
              <div key={item.title} className="rounded-2xl bg-white p-7 shadow-sm">
                <span className="text-3xl font-bold text-brand-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-semibold text-ink-800">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-16 sm:py-20">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">
              Building Trust
            </span>
            <h2 className="mt-3 text-4xl font-light sm:text-5xl">
              Trust is the cornerstone of every client relationship
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-500">
              We don&apos;t just offer recycling services, we deliver peace of
              mind, transparency, and a shared commitment to sustainability,
              grounded in integrity, accountability, and consistent value
              creation.
            </p>
          </div>
          <div className="space-y-4">
            {[
              "Consistent communication with dedicated account managers and client success teams",
              "Regulatory assurance backed by industry certifications and local compliance",
              "Innovation and adaptability, evolving services with client and environmental needs",
              "End-to-end traceability and real-time reporting through secure digital platforms",
            ].map((point) => (
              <div key={point} className="flex gap-3 rounded-xl border border-ink-100 p-4">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-500" />
                <p className="text-sm text-ink-600">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section id="partnerships" className="scroll-mt-20 bg-ink-50 py-16 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <Handshake className="mx-auto size-9 text-brand-500" />
            <span className="mt-4 block text-xs font-semibold uppercase tracking-wide text-brand-600">
              Partnerships & Collaborations
            </span>
            <h2 className="mt-3 text-4xl font-light sm:text-5xl">
              Collaboration is the catalyst for scaling impact
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {partnerships.map((item) => (
              <div key={item.title} className="bg-white p-7 shadow-sm">
                <h3 className="text-lg font-normal text-ink-600">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-900">
        <div className="container-page flex flex-col items-start justify-between gap-8 py-16 sm:flex-row sm:items-center">
          <h2 className="text-4xl font-light text-white sm:text-5xl">
            Become a partner in progress
          </h2>
          <Link href="/contact" className="btn-outline-light shrink-0">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
