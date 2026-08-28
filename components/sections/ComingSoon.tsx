import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/motion/Reveal";

export default function ComingSoon() {
  return (
    <section className="section-pad bg-gray-50">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials & Portfolio"
            title="Coming soon"
            description="We're collecting reviews and event photos from our clients — this space will fill up with real stories and real work shortly."
            align="center"
          />
        </Reveal>
      </div>
    </section>
  );
}
