import React from "react";
import { SectionHeader } from "../section-header";
import ContactComponent from "../contact-component";

const ContactSection = () => {
    return (
        <section id="contact" className="w-full px-5 md:px-10">
            <div className="border-x mx-5 md:mx-10 relative">
                <div className="absolute top-0 -left-4 md:-left-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>
                <div className="absolute top-0 -right-4 md:-right-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>
                <SectionHeader>
                    <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance">
                        Contact Us
                    </h2>
                    <p className="text-muted-foreground text-center text-balance font-medium">
                        Reach out to us to get started with your project and see
                        how we can help you.
                    </p>
                </SectionHeader>
                <ContactComponent />
            </div>
        </section>
    );
};

export default ContactSection;
