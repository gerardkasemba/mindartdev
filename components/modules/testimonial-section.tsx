import { SectionHeader } from "@/components/section-header";
import { SocialProofTestimonials } from "@/components/testimonial-scroll";
import { siteConfig } from "@/lib/config";

export function TestimonialSection() {
    const { testimonials } = siteConfig;

    return (
        <section
            id="testimonials"
            className="flex flex-col items-center justify-center w-full"
        >
            <SectionHeader>
                <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance">
                    Testimonials
                </h2>
                <p className="text-muted-foreground text-center text-balance font-medium">
                    Read what people have to say about us, from the clients we
                    rendered service to and the team working with us.
                </p>
            </SectionHeader>
            <SocialProofTestimonials testimonials={testimonials} />
        </section>
    );
}
