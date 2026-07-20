import Link from "next/link";
import Image from "next/image";
import { wasteStreams, contact, company, facilities } from "@/lib/content";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.114 20.452H3.558V9h3.556v11.452z" />
    </svg>
  );
}

const columnHeading = "text-lg font-light text-ink-300 mb-5";
const linkStyle = "text-[15px] text-white hover:text-brand-400 transition-colors";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="container-page grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
        <div>
          <Image
            src="/images/logo-horizontal.jpg"
            alt={company.name}
            width={220}
            height={44}
            className="h-10 w-auto rounded bg-white p-1"
          />
          <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-ink-300">
            Your end-to-end partner for e-waste, plastic, battery, tyre, and
            end-of-life vehicle recycling, with certified data destruction
            and EPR compliance across India.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Cynosure Recycling on LinkedIn"
              className="flex size-10 items-center justify-center rounded-full border border-white/25 text-white hover:border-brand-400 hover:text-brand-400 transition-colors"
            >
              <LinkedinIcon className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className={columnHeading}>Services</h3>
          <ul className="space-y-3.5">
            {wasteStreams.map((stream) => (
              <li key={stream.slug}>
                <Link href={`/services/${stream.slug}`} className={linkStyle}>
                  {stream.shortName}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services/data-destruction" className={linkStyle}>
                Data Destruction &amp; ITAD
              </Link>
            </li>
            <li>
              <Link href="/services/epr" className={linkStyle}>
                EPR Compliance
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className={columnHeading}>Facilities</h3>
          <ul className="space-y-3.5">
            {facilities.map((facility) => (
              <li key={facility.slug}>
                <Link href={`/facilities/${facility.slug}`} className={linkStyle}>
                  {facility.city}
                  {facility.status === "upcoming" && (
                    <span className="text-ink-400"> (soon)</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className={`${columnHeading} mt-8`}>Sustainability</h3>
          <ul className="space-y-3.5">
            <li>
              <Link href="/sustainability" className={linkStyle}>
                Our Vision
              </Link>
            </li>
            <li>
              <Link href="/sustainability#impact" className={linkStyle}>
                Environmental Impact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className={columnHeading}>Resources</h3>
          <ul className="space-y-3.5">
            <li>
              <Link href="/#insights" className={linkStyle}>
                Insights
              </Link>
            </li>
            <li>
              <Link href="/#faq" className={linkStyle}>
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/#journey" className={linkStyle}>
                Client Journey
              </Link>
            </li>
          </ul>
          <h3 className={`${columnHeading} mt-8`}>Contact</h3>
          <ul className="space-y-3.5">
            <li>
              <Link href="/contact" className={linkStyle}>
                Contact Us
              </Link>
            </li>
            <li className="text-[15px] text-ink-300">{contact.headOffice}</li>
            <li>
              <a href={`mailto:${contact.email}`} className={linkStyle}>
                {contact.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className={columnHeading}>About Us</h3>
          <ul className="space-y-3.5">
            <li>
              <Link href="/about" className={linkStyle}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/about#differentiators" className={linkStyle}>
                What Sets Us Apart
              </Link>
            </li>
            <li>
              <Link href="/about#partnerships" className={linkStyle}>
                Partnerships
              </Link>
            </li>
          </ul>
          <h3 className={`${columnHeading} mt-8`}>Compliance</h3>
          <ul className="space-y-3.5">
            <li>
              <Link href="/compliance" className={linkStyle}>
                Compliance
              </Link>
            </li>
            <li>
              <Link href="/compliance" className={linkStyle}>
                Certifications
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-page flex flex-col items-start justify-between gap-3 border-t border-white/10 py-6 text-sm text-ink-300 md:flex-row md:items-center">
        <p>
          All Rights Reserved &copy; {year} {company.shortName}
        </p>
        <div className="flex items-center gap-2">
          <Link href="/compliance" className="hover:text-brand-400 transition-colors">
            Data Privacy
          </Link>
          <span className="text-ink-600">|</span>
          <Link href="/compliance" className="hover:text-brand-400 transition-colors">
            Legal Note
          </Link>
        </div>
      </div>
    </footer>
  );
}
