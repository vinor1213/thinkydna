import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

export default function CTA({
  title = "Have a date in mind already?",
  description = "Tell us what you're planning and we'll put together a proposal within two business days.",
  buttonLabel = "Get in touch",
  href = "/contact-us",
}: {
  title?: string;
  description?: string;
  buttonLabel?: string;
  href?: string;
}) {
  return (
    <section className="">
      <div className="">
    
          <div className="relative overflow-hidden  bg-ink px-8 py-16 text-center md:px-16">
            <Image
              src="https://images.unsplash.com/photo-1508973379184-7517410fb0bc?q=80&w=1600&auto=format&fit=crop"
              alt="Stage lighting at a live event"
              fill
              sizes="100vw"
              className="object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-ink/80 via-ink/70 to-ink/90" />
            <div className="absolute inset-0 bg-brand-radial" />
            <div className="relative">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
                {title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-gray-300">
                {description}
              </p>
              <Link href={href} className="btn-primary mt-8">
                {buttonLabel}
              </Link>
            </div>
          </div>

      </div>
    </section>
  );
}
