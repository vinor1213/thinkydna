import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { TESTIMONIALS } from "@/lib/content";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad bg-gray-50">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="What clients say after the event ends"
            align="center"
          />
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => {
            const featured = i === 0;
            return (
              <StaggerItem
                key={t.name}
                className={featured ? "h-full lg:col-span-2 lg:row-span-1" : "h-full"}
              >
                <figure
                  className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg ${
                    featured ? "lg:p-10" : ""
                  }`}
                >
                  {/* Top row: avatar + stars, no giant floating quote mark */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        width={48}
                        height={48}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-semibold text-ink">{t.name}</p>
                        <p className="text-xs text-gray-400">{t.role}</p>
                      </div>
                    </div>

                    <div className="flex gap-0.5 text-brand-magenta">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <svg
                          key={idx}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-3.5 w-3.5"
                        >
                          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  {/* Quote as an actual editorial pull-quote */}
                  <blockquote
                    className={`font-display mt-6 text-ink ${
                      featured
                        ? "text-2xl leading-snug md:text-[28px]"
                        : "text-lg leading-snug"
                    }`}
                  >
                    <span className="text-brand-magenta">“</span>
                    {t.quote}
                    <span className="text-brand-magenta">”</span>
                  </blockquote>

                  {/* Accent line grows on hover instead of a static bar */}
                  <span className="mt-8 h-px w-10 origin-left scale-x-100 bg-brand-magenta/30 transition-all duration-300 group-hover:w-16 group-hover:bg-brand-magenta" />
                </figure>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}