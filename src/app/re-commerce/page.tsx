import type { Metadata } from "next";
import Link from "next/link";
import {
  Repeat,
  CheckCircle2,
  ArrowRight,
  Cpu,
  Recycle,
  BatteryCharging,
  CircleDot,
  Car,
  Layers,
  Syringe,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import ProcessFlow from "@/components/ProcessFlow";
import { wasteStreams, annualImpact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Re-Commerce & Material Recovery | Cynosure Recycling",
  description:
    "Cynosure recovers reusable components and secondary raw materials from every waste stream we process, returning value to the manufacturing supply chain instead of the landfill.",
};

const recoveryProcess = [
  "Intake & Assessment",
  "Component-Level Recovery",
  "Material Grading & Sorting",
  "Return to Supply Chain",
];

const streamIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "e-waste": Cpu,
  "plastic-waste": Recycle,
  "battery-waste": BatteryCharging,
  "tyre-waste": CircleDot,
  "elv-recycling": Car,
  "non-ferrous": Layers,
  biomedical: Syringe,
};

const recoveryPoints = [
  {
    title: "Component-level recovery before material recovery",
    description:
      "Wherever a device or vehicle has reusable, functioning components, our dismantling process is built to separate and recover them before anything is shredded or refined.",
  },
  {
    title: "Graded, sorted outputs — not mixed scrap",
    description:
      "Recovered materials are segregated and graded by type at source, so what leaves our facilities is supply-ready, not a mixed waste stream that needs re-sorting.",
  },
  {
    title: "Traceable from intake to re-entry",
    description:
      "Every recovered material or component is logged through our digital tracking system, so its path from collection to re-entry into the supply chain stays auditable.",
  },
];

export default function ReCommercePage() {
  return (
    <>
      <PageHero
        eyebrow="Re-Commerce"
        title="Recovered value, returned to the supply chain"
        description="Before anything is recycled down to raw material, Cynosure's process is designed to recover reusable components and high-grade secondary materials — keeping value circulating instead of leaving it in a landfill."
      />

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-brand-500 text-white">
              <Repeat className="size-7" />
            </div>
            <h2 className="mt-6 text-4xl font-light sm:text-5xl">
              How recovery works across our streams
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {recoveryPoints.map((point) => (
              <div key={point.title} className="rounded-2xl border border-ink-100 p-7">
                <div className="flex size-11 items-center justify-center rounded-xl bg-brand-500 text-white">
                  <CheckCircle2 className="size-5" />
                </div>
                <h3 className="mt-4 font-semibold text-ink-800">{point.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-500">
                  {point.description}
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
              How It Works
            </span>
            <h2 className="mt-3 text-4xl font-light sm:text-5xl">
              Four steps, start to finish
            </h2>
          </div>
          <div className="mt-10 flex justify-center">
            <ProcessFlow steps={recoveryProcess} />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {annualImpact.map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-2xl font-light text-brand-600 sm:text-3xl">
                  {item.metric}
                </p>
                <p className="mt-1.5 text-xs leading-snug text-ink-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-50 py-16 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">
              Recovered Outputs
            </span>
            <h2 className="mt-3 text-4xl font-light sm:text-5xl">
              What comes back out of our facilities
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {wasteStreams.map((stream) => {
              const Icon = streamIcons[stream.slug] ?? Recycle;
              return (
              <div key={stream.slug} className="rounded-2xl bg-white p-7 shadow-sm">
                <div className="flex size-11 items-center justify-center rounded-xl bg-brand-500 text-white">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-4 font-semibold text-ink-800">{stream.name}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-500">
                  {stream.outputs}
                </p>
                <Link
                  href={`/services/${stream.slug}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600"
                >
                  View service
                  <ArrowRight className="size-4" />
                </Link>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-ink-900">
        <div className="container-page flex flex-col items-start justify-between gap-8 py-16 sm:flex-row sm:items-center">
          <h2 className="text-4xl font-light text-white sm:text-5xl">
            Want recovered material off your books?
          </h2>
          <Link href="/contact" className="btn-outline-light shrink-0">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
