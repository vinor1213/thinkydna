import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/sections/CTA";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import {
  COMMUNITY_EVENTS,
  getCommunityEventBySlug,
} from "@/lib/content";

type Props = {
  params: { slug: string };
};

// Pre-render every event slug at build time — SEO-friendly static pages.
export function generateStaticParams() {
  return COMMUNITY_EVENTS.map((event) => ({ slug: event.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const event = getCommunityEventBySlug(params.slug);

  if (!event) {
    return { title: "Event not found — thinkydna" };
  }

  const title = `${event.title} — ${event.date} | thinkydna`;
  const description = event.excerpt;

  return {
    title,
    description,
    alternates: {
      canonical: `https://thinkydna.in/events/${event.slug}`,
    },
    openGraph: {
      type: "article",
      url: `https://thinkydna.in/events/${event.slug}`,
      title,
      description,
      images: [{ url: event.image, width: 1200, height: 630, alt: event.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [event.image],
    },
  };
}

export default function EventDetailPage({ params }: Props) {
  const event = getCommunityEventBySlug(params.slug);

  if (!event) {
    notFound();
  }

  const otherEvents = COMMUNITY_EVENTS.filter((e) => e.slug !== event.slug).slice(0, 3);

  // Schema.org structured data for rich results on Google Search
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.excerpt,
    startDate: event.isoDate,
    ...(event.isoEndDate ? { endDate: event.isoEndDate } : {}),
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: event.venue,
      address: event.location,
    },
    image: [event.image, ...event.gallery],
    organizer: {
      "@type": "Organization",
      name: event.organizer,
      url: "https://thinkydna.in",
    },
    offers: {
      "@type": "Offer",
      price: event.price.replace(/[^0-9.]/g, "") || "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: `https://thinkydna.in/events/${event.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <Image
            src={event.image}
            alt={event.title}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/85 to-ink" />
        </div>
        <div className="absolute inset-0 bg-brand-radial" />
        <Reveal className="container-page relative section-pad pb-14 pt-20">
          <Link
            href="/events"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-300 transition-colors hover:text-white"
          >
            ← All Events
          </Link>
          <p className="eyebrow mb-4 text-brand-red">{event.tag}</p>
          <h1 className="max-w-2xl font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
            {event.title}
          </h1>
          <p className="mt-5 max-w-xl text-base text-gray-300">
            {event.excerpt}
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-gray-200">
            <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
              📅 {event.date}
            </span>
            <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
              🕘 {event.time}
            </span>
            <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
              📍 {event.venue}
            </span>
          </div>
        </Reveal>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-[1.7fr_1fr]">
          <div>
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                About this event
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-gray-600">
                {event.about.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1} className="mt-10">
              <h3 className="text-xl font-semibold tracking-tight text-ink">
                Highlights
              </h3>
              <ul className="mt-4 space-y-3">
                {event.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 text-base text-gray-600"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Photo gallery */}
            <Reveal delay={0.15} className="mt-12">
              <h3 className="text-xl font-semibold tracking-tight text-ink">
                Photos
              </h3>
              <StaggerGroup className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-2">
                {event.gallery.map((photo, i) => (
                  <StaggerItem key={photo + i} direction="scale">
                    <div className="relative h-48 overflow-hidden rounded-xl2 sm:h-56">
                      <Image
                        src={photo}
                        alt={`${event.title} — photo ${i + 1}`}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 ease-out hover:scale-110"
                      />
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </Reveal>
          </div>

          {/* Sidebar */}
          <Reveal direction="left" className="lg:sticky lg:top-28 lg:self-start">
            <div className="card-surface p-6">
              <h3 className="font-display text-lg font-semibold text-ink">
                Event details
              </h3>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="text-gray-500">Date</dt>
                  <dd className="mt-0.5 font-medium text-ink">{event.date}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Time</dt>
                  <dd className="mt-0.5 font-medium text-ink">{event.time}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Venue</dt>
                  <dd className="mt-0.5 font-medium text-ink">{event.venue}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Organizer</dt>
                  <dd className="mt-0.5 font-medium text-ink">{event.organizer}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Price</dt>
                  <dd className="mt-0.5 font-medium text-ink">{event.price}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Capacity</dt>
                  <dd className="mt-0.5 font-medium text-ink">{event.capacity}</dd>
                </div>
              </dl>
              <Link href="/contact-us" className="btn-primary mt-6 w-full">
                Reserve a seat
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {otherEvents.length > 0 && (
        <section className="section-pad bg-gray-50">
          <div className="container-page">
            <Reveal>
              <SectionHeading
                eyebrow="More events"
                title="Other events you might like"
              />
            </Reveal>
            <StaggerGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherEvents.map((e) => (
                <StaggerItem key={e.slug} direction="scale">
                  <Link
                    href={`/events/${e.slug}`}
                    className="card-surface group block h-full overflow-hidden"
                  >
                    <div className="relative h-36 overflow-hidden">
                      <Image
                        src={e.image}
                        alt={e.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-base font-semibold text-ink transition-colors group-hover:text-brand-magenta">
                        {e.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{e.date}</p>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>
      )}

      <CTA
        title="Want thinkydna to run your community's next event?"
        description="From a single meetup to a recurring series, we'll build the run of show and handle the logistics."
        buttonLabel="Talk to us"
      />
    </>
  );
}
