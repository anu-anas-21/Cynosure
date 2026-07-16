import Link from "next/link";
import { insights } from "@/lib/content";

const cardVisuals = [
  "bg-[linear-gradient(135deg,#24433a_0%,#1f2a24_60%,#ef5f1a_160%)]",
  "bg-[linear-gradient(135deg,#1f2e3d_0%,#101820_60%,#f47b2f_170%)]",
  "bg-[linear-gradient(135deg,#4a2c14_0%,#241a10_60%,#ef5f1a_150%)]",
];

export default function InsightsSection() {
  return (
    <section id="insights" className="scroll-mt-24 bg-ink-50 py-16 sm:py-24">
      <div className="container-page">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-4xl font-light sm:text-5xl">
            Insights and useful resources
          </h2>
          <Link href="/sustainability" className="btn-primary shrink-0">
            Explore More Resources
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {insights.map((item, i) => (
            <div key={item.title} className="flex flex-col bg-white shadow-sm">
              <div className={`h-48 ${cardVisuals[i % cardVisuals.length]}`}>
                <div
                  className="size-full opacity-20"
                  style={{
                    backgroundImage:
                      "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
                    backgroundSize: "18px 18px",
                  }}
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <p className="flex items-center gap-2 text-sm text-ink-600">
                  <span className="h-4 w-0.5 bg-brand-500" />
                  {item.tag}
                </p>
                <h3 className="mt-4 text-2xl font-light leading-snug text-ink-600">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">
                  {item.description}
                </p>
                <div className="mt-6">
                  <Link href={item.href} className="btn-primary !px-5 !py-2.5 !text-xs">
                    {item.cta}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
