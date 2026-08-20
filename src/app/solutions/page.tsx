import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Laptop, Repeat, FileCheck2, Recycle, Package, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Solutions | Cynosure Recycling",
  description:
    "Explore Cynosure Recycling's full solution set — ITAD, material recovery, EPR compliance, closed-loop recycling, and secondary raw material supply.",
};

const solutions = [
  {
    icon: Laptop,
    title: "ITAD",
    description:
      "Secure, auditable IT asset disposition — on-site and off-site data destruction, chain of custody, and certified recycling.",
    href: "/itad",
  },
  {
    icon: Repeat,
    title: "Re-Commerce",
    description:
      "Component-level recovery and graded material re-entry, returning value to the supply chain across every waste stream.",
    href: "/re-commerce",
  },
  {
    icon: FileCheck2,
    title: "EPR Solutions",
    description:
      "Registration, documentation, and target fulfillment for producers, importers, and brand owners.",
    href: "/epr/solutions",
  },
  {
    icon: FileCheck2,
    title: "EPR Services",
    description:
      "Ongoing real-time tracking, verifiable reporting, and awareness and take-back program design.",
    href: "/epr/services",
  },
  {
    icon: Recycle,
    title: "Recycling",
    description:
      "Closed-loop recycling across e-waste, plastic, battery, tyre, ELV, non-ferrous, and biomedical waste streams.",
    href: "/services",
  },
  {
    icon: Package,
    title: "Our Products",
    description:
      "Graded, supply-ready secondary raw materials recovered from our owned processing facilities.",
    href: "/our-products",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="One partner, the full material lifecycle"
        description="From secure asset disposition to closed-loop recycling and compliance support, Cynosure's solutions cover every stage of the material lifecycle."
      />

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/gallery/gal21.jpg"
              alt="Front view of Cynosure's Meerut facility"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <Link
                key={solution.title}
                href={solution.href}
                className="group flex flex-col rounded-2xl border border-ink-100 p-7 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-500 text-white">
                  <solution.icon className="size-7" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink-800">
                  {solution.title}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-500">
                  {solution.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                  Learn more
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-900">
        <div className="container-page flex flex-col items-start justify-between gap-8 py-16 sm:flex-row sm:items-center">
          <h2 className="text-4xl font-light text-white sm:text-5xl">
            Not sure where to start?
          </h2>
          <Link href="/contact" className="btn-outline-light shrink-0">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
