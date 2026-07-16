import Link from "next/link";
import { Quote } from "lucide-react";

export default function SocialProof() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container-page">
        <div className="mx-auto flex max-w-4xl gap-6 sm:gap-10">
          <Quote className="mt-2 size-12 shrink-0 rotate-180 fill-brand-500 text-brand-500 sm:size-16" />
          <div>
            <p className="text-3xl font-light leading-snug text-ink-600 sm:text-4xl">
              Trusted by corporates, institutions, and brand owners across
              India for secure, compliant, and sustainable recycling.
            </p>
            <p className="mt-6 text-base text-ink-500">
              We&apos;re building our public case-study library as we onboard new
              partners. Work with Cynosure and want to share your experience?{" "}
              <Link href="/contact" className="font-medium text-brand-600 underline underline-offset-4">
                We&apos;d love to feature it here.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
