import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/sections/CTA";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { ROLES, WHY_JOIN } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work with Us — thinkydna",
  description: "Open roles at thinkydna, an event studio based in Salem, Tamil Nadu.",
};

export default function WorkWithUsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920&auto=format&fit=crop"
            alt="thinkydna team collaborating"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/85 to-ink" />
        </div>
        <div className="absolute inset-0 bg-brand-radial" />
        <Reveal className="container-page relative section-pad pb-14 pt-20">
          <p className="eyebrow mb-4 text-brand-red">Work with us</p>
          <h1 className="max-w-2xl font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Help us build the events people plan their calendars around.
          </h1>
          <p className="mt-5 max-w-xl text-base text-gray-300">
            We&apos;re a small, senior team — every hire owns real events from
            day one, not a slice of one.
          </p>
        </Reveal>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow="Why thinkydna" title="Why people stay" align="left" />
          </Reveal>
          <StaggerGroup className="mt-10 grid gap-6 sm:grid-cols-3">
            {WHY_JOIN.map((item) => (
              <StaggerItem key={item.title} className="card-surface p-6">
                <h3 className="font-display text-base font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {item.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="section-pad bg-gray-50">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow="Open roles" title="Current openings" />
          </Reveal>

          <StaggerGroup className="mt-10 divide-y divide-gray-200 border-y border-gray-200 bg-white">
            {ROLES.map((role) => (
              <StaggerItem
                key={role.title}
                className="grid grid-cols-1 items-center gap-3 p-6 sm:grid-cols-[1fr_auto_auto]"
              >
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {role.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {role.description}
                  </p>
                </div>
                <span className="w-fit text-sm font-medium text-gray-400">
                  {role.type}
                </span>
                <Link href="/contact-us" className="btn-secondary !px-5 !py-2 text-xs">
                  Apply now
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CTA
        title="Don't see the right role?"
        description="We're always open to meeting people who care about running great events. Send us a note anyway."
        buttonLabel="Introduce yourself"
      />
    </>
  );
}
