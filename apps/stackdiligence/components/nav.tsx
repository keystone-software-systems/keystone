"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/what-we-assess", label: "What We Assess" },
  { href: "/process", label: "Process" },
  { href: "/sample-report", label: "Sample Report" },
  { href: "/about", label: "About" },
];

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="border-b border-ash/20 bg-paper">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setMobileOpen(false)}>
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-graphite text-sm font-bold text-paper">
            SD
          </span>
          <span className="text-xl font-bold tracking-wide text-graphite">STACKDILIGENCE</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-graphite hover:text-ledger"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="rounded-md bg-graphite px-4 py-2 text-sm font-medium text-paper hover:bg-ledger"
          >
            Book a call
          </Link>
        </nav>

        <button
          type="button"
          className="flex items-center justify-center md:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {mobileOpen ? (
              <path d="M6 6L18 18M6 18L18 6" stroke="#1E2328" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <path d="M4 6H20M4 12H20M4 18H20" stroke="#1E2328" strokeWidth="1.5" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-ash/20 bg-paper px-6 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded px-2 py-2 text-sm font-medium text-graphite hover:bg-white"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded px-2 py-2 text-sm font-medium text-graphite hover:bg-white"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
