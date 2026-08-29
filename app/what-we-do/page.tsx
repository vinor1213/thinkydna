import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { WHAT_WE_CREATE } from "@/lib/content";

export const metadata: Metadata = {
  title: "What We Do — thinkydna",
  description:
    "Branding, events, experiences, entertainment, content and community — everything thinkydna builds to help businesses connect with their audience.",
};

export default function WhatWeCreatePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1920&auto=format&fit=crop"
            alt="thinkydna team building a brand experience"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/85 to-ink" />
        </div>
        <div className="absolute inset-0 bg-brand-radial" />
        <Reveal className="container-page relative section-pad pb-14 pt-20">
          <p className="eyebrow mb-4 text-brand-red">What We Do</p>
          <h1 className="max-w-2xl font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Ideas are easy. Making them happen is our thing.
          </h1>
          <p className="mt-5 max-w-xl text-base text-gray-300">
            We work across branding, events, entertainment and experiences to
            help businesses connect with their audience in ways that
            actually matter.
          </p>
        </Reveal>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page">
          <StaggerGroup className="divide-y divide-gray-200 border-t border-gray-200">
            {WHAT_WE_CREATE.map((item) => (
              <StaggerItem
                key={item.number}
                className="group grid gap-4 py-10 md:grid-cols-12 md:gap-8 md:py-14"
              >
                {/* Number */}
                <div className="md:col-span-2">
                  <span className="font-display text-5xl font-semibold text-gray-200 transition-colors duration-300 group-hover:text-brand-magenta md:text-6xl">
                    {item.number}
                  </span>
                </div>

                {/* Title + hook */}
                <div className="md:col-span-4">
                  <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-base font-medium leading-snug text-ink/70">
                    {item.hook}
                  </p>
                </div>

                {/* Description + tags */}
                <div className="md:col-span-6">
                  <p className="max-w-xl text-sm leading-relaxed text-gray-500 md:text-base">
                    {item.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium uppercase tracking-wide text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="section-pad bg-ink relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-radial" />
        <Reveal className="container-page relative text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Got a problem worth solving?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-gray-300">
            Let&apos;s find the idea behind it.
          </p>
          <Link href="/contact-us" className="btn-primary mt-8">
            Work with us →
          </Link>
        </Reveal>
      </section>
    </>
  );
}