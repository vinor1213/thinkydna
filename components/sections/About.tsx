import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { STATS } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="section-pad relative bg-white overflow-hidden">
      {/* Event design lines background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ink/5 to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-ink/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ink/5 to-transparent" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-ink/5 to-transparent" />

        {/* Decorative corner elements */}
        <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-ink/10" />
        <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-ink/10" />
        <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-ink/10" />
        <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-ink/10" />
      </div>

      <div className="container-page relative z-10">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 md:items-stretch">
          {/* Left column: eyebrow, heading, signature photo */}
          <div className="flex flex-col h-full">
            <Reveal direction="left">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-ink/40" />
                <span className="text-xs font-semibold uppercase eyebrow tracking-widest ">
                  About Us
                </span>
              </div>

              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
                We build brands, create experiences,{" "}
                <span className="text-ink/60">and make ideas matter.</span>
              </h2>
            </Reveal>

       <Reveal direction="up" delay={0.15} className="mt-8 flex-1">
  <div className="flex justify-center items-center py-10">
    <div className="relative w-[280px] h-[320px]">
      {/* Black rotated outline, sits behind */}
      <div className="absolute left-[-14px] top-[14px] h-[270px] w-[210px] rotate-[-10deg] rounded-[20px] border-[3px] border-black" />

      {/* White card with photo */}
      <div className="absolute left-[10px] top-0 z-10 h-[280px] w-[230px] overflow-hidden rounded-[16px] border-[2px] border-brand-red bg-white shadow-xl">
        <Image
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=500&auto=format&fit=crop"
          alt="thinkydna producers on site before doors open"
          width={230}
          height={280}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Corner brackets — viewfinder / registration-mark feel, floats above the card edges */}
      <div className="pointer-events-none absolute left-[2px] top-[-8px] z-20 h-8 w-8 border-l-[3px] border-t-[3px] border-brand-red rounded-tl-[6px]" />
      <div className="pointer-events-none absolute right-[2px] top-[-8px] z-20 h-8 w-8 border-r-[3px] border-t-[3px] border-brand-red rounded-tr-[6px]" />
      <div className="pointer-events-none absolute left-[2px] bottom-[8px] z-20 h-8 w-8 border-l-[3px] border-b-[3px] border-brand-red rounded-bl-[6px]" />
      <div className="pointer-events-none absolute right-[2px] bottom-[8px] z-20 h-8 w-8 border-r-[3px] border-b-[3px] border-brand-red rounded-br-[6px]" />

      {/* Folded-corner ribbon, top-left — "Est. 2019" tag */}
      <div className="absolute -left-3 -top-3 z-30 rotate-[-8deg]">
        <div className="relative flex h-14 w-14 items-center justify-center rounded-[10px] bg-brand-red shadow-lg">
          <span className="text-[10px] font-semibold uppercase leading-tight text-white text-center">
            Est.<br />2019
          </span>
          {/* folded underside sliver */}
          <div className="absolute -bottom-1 left-1 h-2 w-3 rounded-sm bg-black/25 -z-10" />
        </div>
      </div>

      {/* Stat chip pinned into the bottom-right corner of the frame */}
      <div className="absolute -right-5 -bottom-5 z-30 flex flex-col items-center justify-center rounded-full bg-ink w-24 h-24 shadow-lg rotate-[6deg]">
        <span className="font-display text-lg font-semibold text-white leading-none">
          10+
        </span>
        <span className="mt-1 text-[10px] uppercase tracking-wide text-white/60 text-center leading-tight">
          Events run
        </span>
      </div>
    </div>
  </div>
</Reveal>
          </div>

          {/* Right column: image collage, copy, stats, avatars */}
          <div className="flex flex-col h-full">
            <StaggerGroup className="grid grid-cols-2 gap-4">
              {[
                "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",
              ].map((src, i) => (
                <StaggerItem
                  key={src}
                  className="relative overflow-hidden rounded-xl2"
                >
                  <Image
                    src={src}
                    alt="thinkydna team at work"
                    width={600}
                    height={500}
                    className="h-40 w-full object-cover sm:h-48"
                  />
                  <div className="absolute left-3 top-3 flex gap-2">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-ink">
                      {i === 0 ? "Tech Blog" : "Trends"}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>

            <Reveal direction="up" delay={0.1} className="mt-6">
              <h3 className="font-display text-lg font-semibold text-ink">
                It started with a gap.
              </h3>
              <p className="text-sm leading-relaxed text-gray-500 mt-4">
                There was always something interesting happening in the bigger
                cities - better events, newer formats, live entertainment,
                creative experiences, communities built around shared
                interests. But the same opportunities didn't always make
                their way to Tier 2 and Tier 3 cities. ThinkyDNA started with
                a simple belief: where you live shouldn't decide what you get
                to experience.
              </p>
              <p className="text-sm leading-relaxed text-gray-500 mt-4">
                We wanted to bring the energy, ideas and experiences usually
                concentrated in Tier 1 cities to more places - while creating
                them in a way that feels relevant to the people there. What
                began with events has grown into a larger ambition: building
                brands, creating experiences and bringing people together
                across cities that deserve more of them. From live
                entertainment and community events to brand experiences and
                corporate engagements, ThinkyDNA exists to close that gap -
                one city, one idea and one experience at a time.
              </p>
            </Reveal>
{/* 
            <StaggerGroup className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {STATS.map((stat) => (
                <StaggerItem key={stat.label} className="border-l-2 border-ink/10 pl-3">
                  <p className="font-display text-2xl font-semibold text-ink">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">{stat.label}</p>
                </StaggerItem>
              ))}
            </StaggerGroup> */}

        
          </div>
        </div>
      </div>
    </section>
  );
}