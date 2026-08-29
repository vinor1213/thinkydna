import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/sections/CTA";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { COMMUNITY_EVENTS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Events — thinkydna",
  description:
    "Upcoming Events, meetups, and conferences produced by thinkydna.",
};

export default function CommunityEventsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1920&auto=format&fit=crop"
            alt="Community members networking at an event"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/85 to-ink" />
        </div>
        <div className="absolute inset-0 bg-brand-radial" />
        <Reveal className="container-page relative section-pad pb-14 pt-20">
          <p className="eyebrow mb-4 text-brand-red">Events</p>
          <h1 className="max-w-2xl font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Something worth leaving home for.
          </h1>
          <p className="mt-5 max-w-xl text-base text-gray-300">
          We're bringing live entertainment, fresh event formats and memorable experiences to cities across Tamil Nadu creating more reasons to step out, connect and experience something different.
          </p>
        </Reveal>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Calendar"
              title="What's coming up."
              description="See what's happening next across our events, experiences and communities."
            />
          </Reveal>

          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COMMUNITY_EVENTS.map((event) => (
              <StaggerItem key={event.slug} direction="scale">
                <article className="card-surface group h-full overflow-hidden">
                  <Link
                    href={`/events/${event.slug}`}
                    className="block"
                    aria-label={`View details for ${event.title}`}
                  >
                    <div className="relative h-36 overflow-hidden">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-magenta backdrop-blur-sm">
                        {event.tag}
                      </span>
                    </div>
                    <div className="p-6 pb-0">
                      <h3 className="font-display text-base font-semibold text-ink transition-colors group-hover:text-brand-magenta">
                        {event.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {event.location}
                      </p>
                      <p className="mt-1 text-sm font-medium text-gray-600">
                        {event.date}
                      </p>
                    </div>
                  </Link>
                  <div className="flex items-center gap-3 p-6 pt-4">
                    <Link
                      href={`/events/${event.slug}`}
                      className="btn-secondary !px-5 !py-2 inline-flex text-xs"
                    >
                      View details
                    </Link>
                    <Link
                      href="/contact-us"
                      className="inline-flex text-xs font-semibold text-brand-magenta hover:text-ink"
                    >
                      Reserve a seat →
                    </Link>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CTA
        title="Want thinkydna to run your community's next event?"
        description="From a single meetup to a recurring series, we'll build the run of show and handle the logistics."
        buttonLabel="Talk to us"
      />
    </>
  );
}
