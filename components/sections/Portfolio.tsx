import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { PORTFOLIO } from "@/lib/content";

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-pad bg-gray-50">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="Portfolio"
              title="Recent work"
              description="A sample of events we've planned and produced, from six-city meetup tours to festival-scale productions."
            />
          </Reveal>
        </div>

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO.map((item) => (
            <StaggerItem key={item.title} direction="scale">
              <article className="card-surface group relative h-full overflow-visible">
                {/* Ticket tab — year, rotated like a stub number */}
                <div className="absolute -right-2 -top-2 z-10 rotate-3 rounded bg-ink px-2.5 py-1 font-mono text-[11px] font-semibold tracking-wider text-white shadow-sm transition-transform duration-300 group-hover:rotate-0">
                  {item.year}
                </div>

                <div className="overflow-hidden rounded-t-[inherit]">
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/0 to-ink/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <span className="absolute bottom-3 left-4 translate-y-2 font-display text-sm font-semibold text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      View project →
                    </span>
                  </div>
                </div>

                {/* Perforation: ticket-stub tear line */}
                <div className="relative flex items-center px-6">
                  <div className="h-3 w-3 -translate-x-1/2 rounded-full bg-gray-50" />
                  <div className="flex-1 border-t border-dashed border-gray-300" />
                  <div className="h-3 w-3 translate-x-1/2 rounded-full bg-gray-50" />
                </div>

                <div className="p-6 pt-4">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-gray-400">
                    {item.category}
                  </p>
                  <h3 className="mt-1.5 font-display text-lg font-semibold leading-snug text-ink">
                    {item.title}
                  </h3>
                  <span className="mt-3 block h-px w-8 bg-ink/20 transition-all duration-500 group-hover:w-16 group-hover:bg-ink/40" />
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}