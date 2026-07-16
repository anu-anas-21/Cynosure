import type { Metadata } from "next";
import Link from "next/link";
import { Leaf, Recycle, Users, TrendingUp } from "lucide-react";
import PageHero from "@/components/PageHero";
import ProcessFlow from "@/components/ProcessFlow";
import {
  wasteStreams,
  sustainabilityImpact,
  annualImpact,
  awarenessPrograms,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Sustainability | Cynosure Recycling",
  description:
    "Cynosure Recycling's sustainability vision, closed-loop recycling process, environmental impact, and awareness campaigns driving India's circular economy.",
};

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        title="Sustainability is our compass, not a checkbox"
        description="We are committed to building a future where circularity, environmental stewardship, and innovation converge to create lasting impact across India."
      />

      {/* Vision */}
      <section id="vision" className="scroll-mt-20 py-16 sm:py-20">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">
              Our Vision
            </span>
            <h2 className="mt-3 text-4xl font-light sm:text-5xl">
              Accelerating India&apos;s transition to a circular economy
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-500">
              We envision a world where e-waste is no longer a burden, but a
              valuable resource, recovered, repurposed, and reintegrated into
              the economic cycle with minimal environmental footprint.
            </p>
            <ul className="mt-7 space-y-4">
              {[
                "Expanding nationwide accessibility to secure recycling services, especially in underserved regions",
                "Driving innovation through continuous investment in cutting-edge recycling technologies",
                "Building a culture of accountability and awareness among businesses and citizens",
                "Fostering inclusive growth through green jobs and community impact",
              ].map((goal) => (
                <li key={goal} className="flex gap-3">
                  <Leaf className="mt-0.5 size-5 shrink-0 text-brand-500" />
                  <span className="text-sm leading-relaxed text-ink-600">{goal}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {sustainabilityImpact.map((item) => (
              <div key={item.label} className="rounded-2xl bg-ink-50 p-6">
                <p className="text-4xl font-light text-brand-600">{item.value}</p>
                <p className="mt-2 text-sm text-ink-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closed loop */}
      <section id="closed-loop" className="scroll-mt-20 bg-ink-50 py-16 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">
              Closed-Loop System
            </span>
            <h2 className="mt-3 text-4xl font-light sm:text-5xl">
              One-stop, closed-loop recycling partner
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-500">
              Materials are responsibly processed and reintroduced into the
              production cycle as high-quality secondary raw materials,
              completing the loop sustainably and efficiently.
            </p>
          </div>
          <div className="mt-12 space-y-6">
            {wasteStreams.map((stream) => (
              <div key={stream.slug} className="rounded-2xl border border-ink-100 bg-white p-7">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-semibold text-ink-800">{stream.name}</h3>
                  <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                    {stream.capacity} {stream.unit}
                  </span>
                </div>
                <div className="mt-5">
                  <ProcessFlow steps={stream.process} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section id="impact" className="scroll-mt-20 py-16 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">
              Environmental Impact
            </span>
            <h2 className="mt-3 text-4xl font-light sm:text-5xl">
              Measurable impact, every single day
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {annualImpact.map((item) => (
              <div key={item.label} className="rounded-2xl border border-ink-100 p-6">
                <TrendingUp className="size-6 text-brand-500" />
                <p className="mt-4 text-2xl font-light text-ink-600">{item.metric}</p>
                <p className="mt-1 text-sm font-semibold text-ink-700">{item.label}</p>
                <p className="mt-2 text-xs leading-relaxed text-ink-500">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awareness */}
      <section id="awareness" className="scroll-mt-20 bg-ink-50 py-16 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">
              Awareness Campaigns
            </span>
            <h2 className="mt-3 text-4xl font-light sm:text-5xl">
              Awareness is the first step toward transformation
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-500">
              We educate, inspire, and mobilize action among clients,
              communities, and future generations for responsible e-waste
              disposal.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {awarenessPrograms.map((program) => (
              <div key={program.title} className="bg-white p-6 shadow-sm">
                <Users className="size-6 text-brand-500" />
                <h3 className="mt-4 text-lg font-normal text-ink-600">{program.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-900">
        <div className="container-page flex flex-col items-start justify-between gap-8 py-16 sm:flex-row sm:items-center">
          <div className="flex items-center gap-5">
            <Recycle className="size-10 shrink-0 text-brand-400" strokeWidth={1.2} />
            <h2 className="text-4xl font-light text-white sm:text-5xl">
              Join us in building a circular India
            </h2>
          </div>
          <Link href="/contact" className="btn-outline-light shrink-0">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
