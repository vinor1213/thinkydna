import Link from "next/link";
import Logo from "./Logo";
import { COMMUNITY_EVENTS } from "@/lib/content";

// SVG Icons with className support
interface IconProps {
  className?: string;
}

const Icons = {
  Instagram: ({ className = "" }: IconProps) => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  ),
  LinkedIn: ({ className = "" }: IconProps) => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  YouTube: ({ className = "" }: IconProps) => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className={className}>
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  ),
  Email: ({ className = "" }: IconProps) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className={className}>
      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
    </svg>
  ),
  Phone: ({ className = "" }: IconProps) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className={className}>
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>
  ),
  Location: ({ className = "" }: IconProps) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className={className}>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
  ),
  ArrowRight: ({ className = "" }: IconProps) => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  ),
  Calendar: ({ className = "" }: IconProps) => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  ),
  Sparkle: ({ className = "" }: IconProps) => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" className={className}>
      <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"/>
    </svg>
  ),
};

const COLUMNS = [
  {
    title: "Studio",
    links: [
      { href: "/#about", label: "About us" },
      { href: "/#faq", label: "FAQ" },
    ],
  },
  {
    title: "Explore",
    links: [
      { href: "/community-events", label: "Community events" },
      { href: "/team", label: "Our team" },
      { href: "/work-with-us", label: "Work with us" },
      { href: "/contact-us", label: "Contact us" },
    ],
  },
];

// Upcoming event data — pulled from the live community events list
const nextEvent = COMMUNITY_EVENTS[0];
const UPCOMING_EVENT = {
  name: nextEvent.title,
  date: nextEvent.date,
  location: nextEvent.location,
  href: `/community-events/${nextEvent.slug}`,
};

export default function Footer() {
  return (
    <footer className="border-t-2 border-brand-magenta/20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-page py-16">
        {/* Main Grid */}
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand Column */}
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-500">
              An event studio that designs and runs community gatherings,
              brand experiences, and live moments people actually remember.
            </p>
            {/* Event Badge */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-magenta/10 px-3 py-1.5 text-xs font-medium text-brand-magenta">
              <Icons.Calendar />
              <span>Next event: Aug 2026</span>
              <Icons.Sparkle />
            </div>
          </div>

          {/* Navigation Columns */}
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold text-gray-900">{col.title}</p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-1.5 text-sm text-gray-500 transition-colors hover:text-brand-magenta"
                    >
                      <span className="opacity-0 transition-opacity group-hover:opacity-100">
                        <Icons.ArrowRight />
                      </span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact & Upcoming Event */}
          <div>
            <p className="text-sm font-semibold text-gray-900">Get in touch</p>
            <ul className="mt-4 space-y-3 text-sm text-gray-500">
              <li className="flex items-center gap-2">
                <Icons.Email />
                <a
                  href="mailto:hello@thinkydna.in"
                  className="transition-colors hover:text-brand-magenta"
                >
                  hello@thinkydna.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icons.Phone />
                <a
                  href="tel:+910000000000"
                  className="transition-colors hover:text-brand-magenta"
                >
                  +91 9080982872
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icons.Location className="mt-0.5 shrink-0" />
                <span>Coimbatore, Tamil Nadu, India</span>
              </li>
            </ul>

            {/* Featured Upcoming Event */}
            <div className="mt-6 rounded-xl border border-brand-magenta/20 bg-gradient-to-r from-brand-magenta/5 to-transparent p-4">
              <div className="flex items-center gap-1.5">
                <Icons.Calendar />
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-magenta">
                  Upcoming Event
                </p>
              </div>
              <p className="mt-1.5 text-sm font-medium text-gray-900">
                {UPCOMING_EVENT.name}
              </p>
              <p className="mt-0.5 text-xs text-gray-500">
                {UPCOMING_EVENT.date} · {UPCOMING_EVENT.location}
              </p>
              <Link
                href={UPCOMING_EVENT.href}
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-brand-magenta transition-colors hover:text-brand-magenta/70"
              >
                Learn more
                <Icons.ArrowRight />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 text-xs text-gray-400 md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} thinkydna. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="flex items-center gap-1.5 transition-colors hover:text-brand-magenta"
            >
              <Icons.Instagram />
              Instagram
            </a>
            <a
              href="#"
              className="flex items-center gap-1.5 transition-colors hover:text-brand-magenta"
            >
              <Icons.LinkedIn />
              LinkedIn
            </a>
            <a
              href="#"
              className="flex items-center gap-1.5 transition-colors hover:text-brand-magenta"
            >
              <Icons.YouTube />
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}