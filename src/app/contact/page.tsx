import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { facilities, contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Us | Cynosure Recycling",
  description:
    "Get in touch with Cynosure Recycling for e-waste, plastic, battery, tyre, and end-of-life vehicle recycling services, or to find your nearest facility in India.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's talk about your recycling program"
        description="Reach out to schedule a consultation. We'll tailor a solution based on your asset volumes, locations, and sustainability goals."
      />

      <section className="py-16 sm:py-20">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="text-2xl font-light text-ink-600">Get in touch</h2>
            <div className="mt-6 space-y-4">
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-4 rounded-xl border border-ink-100 p-5 hover:border-brand-300 transition-colors"
              >
                <Phone className="size-5 text-brand-500" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">Call us</p>
                  <p className="font-medium text-ink-800">{contact.phone}</p>
                </div>
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-4 rounded-xl border border-ink-100 p-5 hover:border-brand-300 transition-colors"
              >
                <Mail className="size-5 text-brand-500" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">Email us</p>
                  <p className="font-medium text-ink-800">{contact.email}</p>
                </div>
              </a>
              <div className="flex items-center gap-4 rounded-xl border border-ink-100 p-5">
                <MapPin className="size-5 text-brand-500" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">Head office</p>
                  <p className="font-medium text-ink-800">{contact.headOffice}</p>
                </div>
              </div>
            </div>

            <h3 className="mt-10 text-lg font-semibold text-ink-800">Our facilities</h3>
            <div className="mt-4 space-y-3">
              {facilities.map((facility) => (
                <div
                  key={facility.city}
                  className="flex items-center justify-between rounded-xl bg-ink-50 px-5 py-3.5"
                >
                  <div>
                    <p className="font-medium text-ink-800">{facility.city}</p>
                    <p className="text-xs text-ink-500">{facility.region}</p>
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                      facility.status === "operational"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {facility.status === "operational" ? "Operational" : "Opening Soon"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-light text-ink-600">Send us an enquiry</h2>
            <p className="mt-2 text-sm text-ink-500">
              Fill in the form below and our team will get back to you.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
