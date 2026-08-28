import Link from "next/link";

export default function EventNotFound() {
  return (
    <section className="section-pad bg-white">
      <div className="container-page text-center">
        <p className="eyebrow mb-4 justify-center">404</p>
        <h1 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          We couldn&apos;t find that event.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base text-gray-500">
          It may have wrapped up, moved, or the link might be off. Take a
          look at what&apos;s coming up next.
        </p>
        <Link href="/community-events" className="btn-primary mt-8">
          View all events
        </Link>
      </div>
    </section>
  );
}
