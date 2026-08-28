import Link from "next/link";

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link
      href="/"
      className="inline-flex items-baseline gap-[1px] font-display text-2xl font-bold lowercase tracking-tight"
      aria-label="thinkydna — home"
    >
      <span className={dark ? "text-white" : "text-ink"}>thinky</span>
      <span className="bg-brand-gradient bg-clip-text text-transparent">
        dna
      </span>
    </Link>
  );
}
