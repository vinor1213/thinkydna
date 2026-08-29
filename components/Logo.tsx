
import Image from "next/image";
import Link from "next/link";

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link
      href="/"
      className="inline-flex items-center"
      aria-label="thinkydna — home"
    >
      <Image
        src="/images/thinkydna.png"
        alt="thinkydna"
        width={160}
        height={50}
        priority
        className="h-auto w-40 object-contain"
      />
    </Link>
  );
}

