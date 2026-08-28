import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/sections/CTA";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { TEAM_MEMBERS, STATS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Team — thinkydna",
  description:
    "Meet the people behind thinkydna — the small, senior team producing community events, brand experiences, and live gatherings across Tamil Nadu.",
  alternates: {
    canonical: "https://thinkydna.in/team",
  },
  openGraph: {
    type: "website",
    url: "https://thinkydna.in/team",
    title: "Our Team — thinkydna",
    description:
      "Meet the people behind thinkydna — the small, senior team producing community events, brand experiences, and live gatherings across Tamil Nadu.",
  },
};

export default function TeamPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        <div className="absolute inset-0 bg-brand-radial" />
        <Reveal className="container-page relative section-pad pb-14 pt-20">
          <p className="eyebrow mb-4 text-brand-red">Our team</p>
          <h1 className="max-w-2xl font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
            The people behind every room we build.
          </h1>
          <p className="mt-5 max-w-xl text-base text-gray-300">
            A small, senior team — producers, coordinators, and community
            builders — running events end to end, from first idea to last
            encore.
          </p>
        </Reveal>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Meet the studio"
              title="Small team. Real ownership."
              description="Everyone on this team runs their own slate of work directly — no layers, no hand-offs between strangers."
            />
          </Reveal>

          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM_MEMBERS.map((member) => (
              <StaggerItem key={member.name} direction="scale">
                <article className="group relative overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-md">
                  <div className="absolute left-0 top-0 h-full w-1  bg-ink transition-all group-hover:w-1.5" />
                  <div className="flex items-center gap-4 p-4 pl-6">
                    <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        sizes="64px"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold text-gray-900">
                        {member.name}
                      </h3>
                      <p className="text-xs font-medium text-brand-red uppercase tracking-wider">
                        {member.role}
                      </p>
                      <p className="mt-1 text-sm text-gray-500 line-clamp-1">
                        {member.bio}
                      </p>
                    </div>
                    <div className="opacity-0 transition-opacity group-hover:opacity-100">
                      <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="section-pad bg-gray-50">
        <div className="container-page">
          <StaggerGroup className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {STATS.map((stat) => (
              <StaggerItem key={stat.label} className="text-center">
                <p className="font-display text-3xl font-semibold text-ink md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-gray-500">{stat.label}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CTA
        title="Want to work with this team?"
        description="We're always open to meeting people who want real ownership over the events they run."
        buttonLabel="See open roles"
        href="/work-with-us"
      />
    </>
  );
}
