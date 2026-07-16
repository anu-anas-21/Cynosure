"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { navigation } from "@/lib/content";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_1px_4px_rgba(0,0,0,0.08)]">
      <div className="container-page">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center shrink-0" onClick={() => setMobileOpen(false)}>
            <Image
              src="/images/logo-horizontal.jpg"
              alt="Cynosure Recycling Private Limited"
              width={280}
              height={56}
              className="h-12 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-2">
            {navigation.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 px-4 py-2 text-[15px] font-normal transition-colors ${
                    openMenu === item.label ? "text-brand-500" : "text-ink-600 hover:text-brand-500"
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && openMenu === item.label && (
                  <div className="absolute left-0 top-full w-72">
                    <div className="bg-white py-3 shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-6 py-2.5 text-[15px] text-ink-600 hover:text-brand-500 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <Link href="/contact" className="btn-primary !py-3 !px-6">
              Contact Us
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-ink-700"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-ink-100 bg-white max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="container-page py-3">
            {navigation.map((item) => (
              <div key={item.label} className="border-b border-ink-100 last:border-0">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    className="flex-1 py-3 text-[15px] text-ink-700"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      className="p-3 text-ink-500"
                      onClick={() =>
                        setMobileSubOpen((v) => (v === item.label ? null : item.label))
                      }
                      aria-label={`Toggle ${item.label} submenu`}
                    >
                      <ChevronDown
                        className={`size-4 transition-transform ${
                          mobileSubOpen === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
                {item.children && mobileSubOpen === item.label && (
                  <div className="pb-2 pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block py-2 text-sm text-ink-500"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="btn-primary mt-4 w-full"
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
