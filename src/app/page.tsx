import Link from "next/link";
import {
  ArrowRight,
  Cpu,
  Recycle,
  BatteryCharging,
  CircleDot,
  Car,
  ShieldCheck,
  FileCheck2,
} from "lucide-react";
import {
  wasteStreams,
  clientJourney,
  faqs,
  differentiators,
} from "@/lib/content";
import FaqAccordion from "@/components/FaqAccordion";
import HeroCarousel from "@/components/HeroCarousel";
import AnimatedStats from "@/components/AnimatedStats";
import SocialProof from "@/components/SocialProof";
import InsightsSection from "@/components/InsightsSection";
import Newsletter from "@/components/Newsletter";
import ExpertsBand from "@/components/ExpertsBand";
import FacilitiesStrip from "@/components/FacilitiesStrip";

const streamIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "e-waste": Cpu,
  "plastic-waste": Recycle,
  "battery-waste": BatteryCharging,
  "tyre-waste": CircleDot,
  "elv-recycling": Car,
};

const serviceCards = [
  ...wasteStreams.map((stream) => ({
    title: stream.name,
    description: stream.description,
    href: `/services#${stream.slug}`,
    icon: streamIcons[stream.slug] ?? Recycle,
  })),
  {
    title: "Data Destruction & ITAD",
    description:
      "Protect your data and stay compliant with secure on-site and off-site destruction for hard drives, servers, and storage devices, aligned with NIST 800-88 and DoD 5220.22-M.",
    href: "/services#data-destruction",
    icon: ShieldCheck,
  },
];

export default function Home() {
  return (
    <>
      <HeroCarousel />

      {/* Why organizations choose Cynosure */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-4xl font-light sm:text-5xl">
                Why organizations choose Cynosure
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-ink-500">
                Cynosure Recycling delivers waste management designed for{" "}
                <span className="font-medium text-ink-600">
                  scale, security, and regulatory complexity
                </span>
                . We help corporates, institutions, and government entities{" "}
                <span className="font-medium text-ink-600">
                  responsibly recycle waste, protect sensitive data, recover
                  value
                </span>
                , and demonstrate measurable sustainability outcomes across
                all waste streams.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-ink-500">
                Our{" "}
                <span className="font-medium text-ink-600">
                  owned facilities, standardized processes, and research-backed
                  approach
                </span>{" "}
                help partners reduce risk, meet compliance obligations, and
                maintain governance at every stage of the material lifecycle.
              </p>
            </div>
            {/* Visual panel */}
            <div className="relative h-80 overflow-hidden bg-[linear-gradient(135deg,#161616_0%,#2e2e2e_50%,#93412a_120%)] lg:h-96">
              <div
                className="size-full opacity-25"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)",
                  backgroundSize: "22px 22px",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Recycle className="size-28 text-brand-400/80" strokeWidth={1} />
              </div>
            </div>
          </div>

          {/* Four outlined highlight cards */}
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              <>
                <span className="font-medium">Owned facilities</span> in Uttar
                Pradesh, Telangana &amp; Tamil Nadu delivering consistent programs
              </>,
              <>
                <span className="font-medium">Certified, audit-ready</span>{" "}
                operations aligned with ISO 9001, 14001 &amp; 45001
              </>,
              <>
                <span className="font-medium">Proven delivery</span> across five
                high-volume waste streams at enterprise scale
              </>,
              <>
                Audit-ready <span className="font-medium">EPR and ESG-aligned</span>{" "}
                sustainability measurement and reporting
              </>,
            ].map((content, i) => (
              <div
                key={i}
                className="flex gap-4 rounded-lg border border-brand-400 bg-white p-6"
              >
                <span className="mt-1 h-8 w-0.5 shrink-0 bg-brand-500" />
                <p className="text-lg font-light leading-snug text-ink-600">{content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-ink-50 py-16 sm:py-24">
        <div className="container-page">
          <h2 className="text-center text-4xl font-light sm:text-5xl">
            Our recycling &amp; lifecycle management services
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="flex flex-col bg-white p-8 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-light leading-snug text-ink-600">
                      {card.title}
                    </h3>
                    <Link
                      href={card.href}
                      aria-label={`More about ${card.title}`}
                      className="flex size-12 shrink-0 items-center justify-center rounded-md bg-brand-500 text-white hover:bg-brand-600 transition-colors"
                    >
                      <ArrowRight className="size-5" />
                    </Link>
                  </div>
                  <div className="flex flex-1 items-center justify-center py-10">
                    <Icon className="size-20 text-ink-600" strokeWidth={0.9} />
                  </div>
                  <p className="text-sm leading-relaxed text-ink-500">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <AnimatedStats />

      <FacilitiesStrip />

      <SocialProof />

      {/* Sustainability callout card */}
      <section className="bg-white pb-16 sm:pb-24">
        <div className="container-page">
          <div className="grid grid-cols-1 overflow-hidden bg-brand-600 lg:grid-cols-2">
            <div className="relative min-h-64 bg-[linear-gradient(135deg,#b83811_0%,#de4913_60%,#f47b2f_100%)]">
              <div
                className="size-full opacity-20"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              <Recycle
                className="absolute left-1/2 top-1/2 size-40 -translate-x-1/2 -translate-y-1/2 text-white/30"
                strokeWidth={0.8}
              />
            </div>
            <div className="p-10 sm:p-14">
              <h2 className="text-4xl font-light text-white sm:text-[2.75rem] sm:leading-tight">
                Leading the way to a sustainable future
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white/90">
                Sustainability is the compass guiding our every decision. We
                are dedicated to creating meaningful, long-term impact by
                responsibly managing over 3.5 lakh metric tonnes of waste
                annually and returning recovered materials to the economy.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/90">
                From closed-loop recycling to verified CO₂e reductions, we
                help clients reach their environmental targets while
                strengthening India&apos;s circular economy.
              </p>
              <Link href="/sustainability" className="btn-white mt-8">
                Explore Our Sustainability Impact
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Client journey */}
      <section id="journey" className="scroll-mt-24 bg-ink-50 py-16 sm:py-24">
        <div className="container-page">
          <h2 className="text-center text-4xl font-light sm:text-5xl">
            A seamless path to compliant recycling
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {clientJourney.map((step) => (
              <div key={step.step} className="bg-white p-8 shadow-sm">
                <span className="text-4xl font-light text-brand-400">{step.step}</span>
                <h3 className="mt-4 text-xl font-normal text-ink-600">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators strip */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-3">
          {differentiators.map((item, index) => (
            <div key={item.title} className="border-t-2 border-brand-500 pt-6">
              <span className="text-sm text-ink-400">
                0{index + 1}
              </span>
              <h3 className="mt-2 text-2xl font-light text-ink-600">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <InsightsSection />

      {/* FAQ */}
      <section id="faq" className="scroll-mt-24 bg-ink-50 py-16 sm:py-24">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.6fr]">
          <h2 className="text-4xl font-light leading-tight sm:text-5xl">
            Frequently
            <br />
            Asked Questions
          </h2>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <Newsletter />

      {/* EPR CTA */}
      <section className="bg-white pb-16 sm:pb-24">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-8 border border-brand-400 p-10 sm:flex-row sm:items-center sm:p-14">
            <div className="flex items-start gap-5">
              <FileCheck2 className="size-10 shrink-0 text-brand-500" strokeWidth={1.2} />
              <div>
                <h2 className="text-3xl font-light">
                  Need help with EPR compliance?
                </h2>
                <p className="mt-2 max-w-xl text-base text-ink-500">
                  End-to-end support for producers, importers, and brand
                  owners — from CPCB registration to target fulfillment and
                  verified reporting.
                </p>
              </div>
            </div>
            <Link href="/services#epr" className="btn-primary shrink-0">
              Explore EPR Services
            </Link>
          </div>
        </div>
      </section>

      <ExpertsBand />
    </>
  );
}
