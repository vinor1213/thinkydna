import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Contact Us — thinkydna",
  description: "Tell thinkydna about your event and get a proposal within two business days.",
};

const CONTACT_DETAILS = [
  {
    label: "Email",
    value: "hello@thinkydna.in",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 5h20v14H2z" />
        <path d="M2 6l10 8 10-8" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+91 9080982872",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 3h5l2 6-3 2c1 3 3 5 6 6l2-3 6 2v5c0 1-1 2-2 2C10 23 1 14 1 5c0-1 1-2 2-2z" />
      </svg>
    ),
  },
  {
    label: "Studio",
    value: "Coimbatore, Tamil Nadu, India",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v20M2 8l10-6 10 6M4 8v13h16V8" />
        <path d="M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    label: "Response time",
    value: "Within 1 business day",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        <path d="M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M17.7 6.3l-2.8 2.8M9.1 14.9l-2.8 2.8" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
  },
];

export default function ContactUsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#1a1a2e]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920&auto=format&fit=crop"
            alt="thinkydna team collaborating"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/70 via-[#1a1a2e]/85 to-[#1a1a2e]" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(180,40,40,0.15),transparent_70%)]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative py-20 pb-14 pt-20">
          <p className="text-xs uppercase tracking-widest font-semibold mb-4 text-[#d42a2a]">
            contact us
          </p>
          <h1 className="max-w-2xl font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Help us build the events people plan their calendars around.
          </h1>
          <p className="mt-5 max-w-xl text-base text-gray-300">
            We&apos;re a small, senior team — every hire owns real events from
            day one, not a slice of one.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-16 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal direction="left">
            <SectionHeading
              eyebrow="Contact us"
              title="Let's scope your event"
              description="Share a few details and a producer will follow up with next steps — no obligation, no generic sales deck."
            />

            <dl className="mt-10 divide-y divide-gray-200 border-t border-b border-gray-200">
              {CONTACT_DETAILS.map((item) => (
                <div
                  key={item.label}
                  className="group flex items-center gap-4 py-5 transition-colors hover:bg-gray-50"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-gray-300 text-[#1a1a2e] transition-colors group-hover:border-[#d42a2a] group-hover:text-[#d42a2a]">
                    <span className="h-[18px] w-[18px]">{item.icon}</span>
                  </div>
                  <div className="flex flex-1 items-baseline justify-between gap-4">
                    <dt className="text-xs uppercase tracking-wider text-gray-400">
                      {item.label}
                    </dt>
                    <dd className="text-sm font-medium text-[#1a1a2e]">
                      {item.value}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal direction="right" delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}