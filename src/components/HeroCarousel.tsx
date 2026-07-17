"use client";

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { Recycle } from "lucide-react";
import { heroSlides } from "@/lib/content";

/* Per-slide abstract visual panels (no photography available yet — layered
   brand-toned gradients keep the same contained composition). */
const slideVisuals = [
  "bg-[linear-gradient(135deg,#161616_0%,#2e2e2e_45%,#93412a_100%)]",
  "bg-[linear-gradient(135deg,#1f2a24_0%,#24433a_50%,#ef5f1a_130%)]",
  "bg-[linear-gradient(135deg,#101820_0%,#1f2e3d_55%,#f47b2f_140%)]",
  "bg-[linear-gradient(135deg,#241a10_0%,#4a2c14_55%,#ef5f1a_120%)]",
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((i: number) => {
    setIndex((i + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [paused]);

  const slide = heroSlides[index];

  return (
    <section
      className="bg-white py-12 sm:py-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container-page">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div key={index} className="animate-[fadein_0.5s_ease]">
            <h1 className="text-3xl font-light leading-[1.15] text-ink-600 sm:text-4xl lg:text-[2.75rem]">
              {slide.title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-ink-500 sm:text-lg">
              {slide.description}
            </p>
            <div className="mt-8">
              <Link href={slide.ctaHref} className="btn-primary">
                {slide.ctaLabel}
              </Link>
            </div>

            {/* Square slide indicators */}
            <div className="mt-8 flex items-center gap-3">
              {heroSlides.map((s, i) => (
                <button
                  key={s.title}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`size-4 border-2 transition-colors ${
                    i === index
                      ? "border-brand-500 bg-brand-500"
                      : "border-brand-400 bg-white hover:bg-brand-100"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Contained visual panel, matching the rest of the page's gutters */}
          <div className="relative h-64 overflow-hidden sm:h-80 lg:h-96">
            <div className={`size-full ${slideVisuals[index % slideVisuals.length]} transition-all duration-700`}>
              <div
                className="size-full opacity-25"
                style={{
                  backgroundImage: "radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)",
                  backgroundSize: "22px 22px",
                }}
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Recycle className="size-24 text-white/20 sm:size-28" strokeWidth={1} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
