import Link from "next/link";

export default function ExpertsBand() {
  return (
    <section className="bg-ink-900">
      <div className="container-page flex flex-col items-start justify-between gap-8 py-16 sm:flex-row sm:items-center sm:py-20">
        <h2 className="text-4xl font-light text-white sm:text-5xl">
          Speak to our experts
        </h2>
        <Link href="/contact" className="btn-outline-light shrink-0">
          Contact Us
        </Link>
      </div>
    </section>
  );
}
