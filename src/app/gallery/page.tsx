import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery | Cynosure Recycling",
  description:
    "A look inside Cynosure Recycling's Meerut facility — dismantling lines, recovery machines, storage areas, and our team at work.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Have a look inside our facility"
        description="From dismantling lines and recovery machines to storage areas and our team at work, here's a look at how Cynosure turns waste into value at our Meerut facility."
      />

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
