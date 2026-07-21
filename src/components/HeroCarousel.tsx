"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { heroSlides } from "@/lib/content";

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
      className="bg-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container-page">
        <div className="relative overflow-hidden">
          {/* Visual panel, bounded to the same right edge as the page padding */}
          <div className="absolute inset-y-0 right-0 left-0 lg:left-[26%]">
            <Image
              src="/images/hero-panel.png"
              alt="Cynosure Recycling facility with e-waste being processed"
              fill
              priority
              sizes="(min-width: 1024px) 74vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="relative py-8 lg:py-10">
            {/* Overlapping white card */}
            <div
              key={index}
              className="max-w-xl animate-[fadein_0.5s_ease] bg-[#f7f7f7]/95 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.15)] sm:p-10 lg:min-h-[20rem]"
            >
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
            </div>

            {/* Square indicators bottom-left */}
            <div className="mt-6 flex items-center gap-3">
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
        </div>
      </div>
    </section>
  );
}
