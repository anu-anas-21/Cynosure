export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="bg-ink-50">
      <div className="container-page py-16 sm:py-20">
        <p className="flex items-center gap-3 text-sm uppercase tracking-wider text-ink-500">
          <span className="h-4 w-0.5 bg-brand-500" />
        {eyebrow}
        </p>
        <h1 className="mt-5 max-w-3xl text-4xl font-light leading-[1.12] sm:text-5xl lg:text-[3.5rem]">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-500">
          {description}
        </p>
      </div>
    </section>
  );
}
