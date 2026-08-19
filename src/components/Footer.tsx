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

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-8.1h2.72l.41-3.15h-3.13V7.75c0-.91.25-1.53 1.56-1.53h1.67V3.4c-.29-.04-1.28-.13-2.44-.13-2.42 0-4.07 1.47-4.07 4.18v2.33H7.5v3.15h2.72V21h3.28z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M21.6 7.2c-.23-.87-.9-1.55-1.77-1.78C18.25 5 12 5 12 5s-6.25 0-7.83.42c-.87.23-1.54.91-1.77 1.78C2 8.8 2 12 2 12s0 3.2.4 4.8c.23.87.9 1.55 1.77 1.78C5.75 19 12 19 12 19s6.25 0 7.83-.42c.87-.23 1.54-.91 1.77-1.78.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM9.94 15.02V8.98L15.5 12l-5.56 3.02z" />
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
            src="/images/logo-horizontal-dark.png"
            alt={company.name}
            width={220}
            height={44}
            className="h-8 w-auto"
          />
          <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-ink-300">
            Your end-to-end partner for e-waste, plastic, battery, tyre, and
            end-of-life vehicle recycling, with certified data destruction
            and EPR compliance across India.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://www.linkedin.com/company/cynosure-recycling-pvt-limited/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Cynosure Recycling on LinkedIn"
              className="flex size-10 items-center justify-center rounded-full border border-white/25 text-white hover:border-brand-400 hover:text-brand-400 transition-colors"
            >
              <LinkedinIcon className="size-4" />
            </a>
            <a
              href="https://www.instagram.com/cynosurerecycling?igsh=bGYxYnZmcWkzYzdk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Cynosure Recycling on Instagram"
              className="flex size-10 items-center justify-center rounded-full border border-white/25 text-white hover:border-brand-400 hover:text-brand-400 transition-colors"
            >
              <InstagramIcon className="size-4" />
            </a>
            <a
              href="https://m.facebook.com/profile.php?id=1095593200301843"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Cynosure Recycling on Facebook"
              className="flex size-10 items-center justify-center rounded-full border border-white/25 text-white hover:border-brand-400 hover:text-brand-400 transition-colors"
            >
              <FacebookIcon className="size-4" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Cynosure Recycling on YouTube"
              className="flex size-10 items-center justify-center rounded-full border border-white/25 text-white hover:border-brand-400 hover:text-brand-400 transition-colors"
            >
              <YoutubeIcon className="size-4" />
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
