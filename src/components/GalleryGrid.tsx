"use client";

import { useState } from "react";
import Image from "next/image";
import { Expand } from "lucide-react";
import { galleryCategories, galleryItems } from "@/lib/content";

export default function GalleryGrid() {
  const [active, setActive] = useState<(typeof galleryCategories)[number]>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    active === "All" ? galleryItems : galleryItems.filter((item) => item.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {galleryCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={
              active === category
                ? "btn-primary !py-2.5 !px-5 !text-xs"
                : "border border-ink-200 px-5 py-2.5 text-xs font-medium uppercase tracking-wide text-ink-600 hover:border-brand-400 hover:text-brand-600 transition-colors"
            }
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <button
            key={item.id}
            onClick={() => setLightbox(item.id)}
            className="group relative aspect-[4/3] overflow-hidden bg-ink-100 text-left"
          >
            <Image
              src={`/images/gallery/gal${item.id}.jpg`}
              alt={item.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/0 to-black/0 p-5 opacity-0 transition-opacity group-hover:opacity-100">
              <p className="flex items-center gap-2 text-sm font-medium text-white">
                <Expand className="size-4" />
                {item.title}
              </p>
            </div>
          </button>
        ))}
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-h-[85vh] w-full max-w-4xl">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={`/images/gallery/gal${lightbox}.jpg`}
                alt={galleryItems.find((i) => i.id === lightbox)?.title ?? "Facility photo"}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
            <p className="mt-4 text-center text-sm text-white/80">
              {galleryItems.find((i) => i.id === lightbox)?.title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
