"use client";

import { useEffect, useRef, useState } from "react";
import { statsBand } from "@/lib/content";

function Counter({ target, decimals, suffix }: { target: number; decimals: number; suffix: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1400;
            const start = performance.now();
            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(target * eased);
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <p ref={ref} className="text-5xl font-light text-brand-500 sm:text-6xl">
      {value.toFixed(decimals)}
      {suffix}
    </p>
  );
}

export default function AnimatedStats() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container-page">
        <div className="rounded-md border-2 border-brand-400 px-8 py-12 sm:px-14 sm:py-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_2fr]">
            <div>
              <h2 className="text-4xl font-light leading-tight sm:text-[2.75rem]">
                The largest closed-loop network in North &amp; South India
              </h2>
              <p className="mt-6 text-base leading-relaxed text-ink-500">
                With five high-volume waste streams, owned processing
                facilities, and the group of clients we&apos;re privileged to
                serve, Cynosure is uniquely positioned to make a positive
                impact on the circular economy.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
              {statsBand.slice(0, 6).map((stat) => (
                <div key={stat.label}>
                  <Counter target={stat.target} decimals={stat.decimals} suffix={stat.suffix} />
                  <p className="mt-2 text-base text-ink-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
