import type { Metadata } from "next";
import Image from "next/image"; // ← Added this
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Contact Us — thinkydna",
  description: "Tell thinkydna about your event and get a proposal within two business days.",
};

const CONTACT_DETAILS = [
  { label: "Email", value: "hello@thinkydna.com" },
  { label: "Phone", value: "+91 00000 00000" },
  { label: "Studio", value: "Salem, Tamil Nadu, India" },
  { label: "Response time", value: "Within 1 business day" },
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

            <dl className="mt-10 space-y-5 border-t border-gray-200 pt-8">
              {CONTACT_DETAILS.map((item) => (
                <div key={item.label} className="flex items-baseline justify-between gap-4">
                  <dt className="text-sm text-gray-400">{item.label}</dt>
                  <dd className="text-sm font-medium text-[#1a1a2e]">{item.value}</dd>
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