"use client";
import { FooterSection } from "@/components/modules/footer-section";
import PortfolioContainer from "@/components/modules/portfolio-container";
import { SectionHeader } from "@/components/section-header";
import { siteConfig } from "@/lib/config";
import Link from "next/link";
import React from "react";

const ProjectsPage = () => {
    const { portfolio } = siteConfig;
    return (
        <div className="">
            <section className="w-full px-5 md:px-10">
                <SectionHeader>
                    <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance">
                        Projects Gallery
                    </h2>
                    <p className="text-muted-foreground text-center text-balance font-medium">
                        Explore some of the innovative solutions we’ve crafted
                        for our clients.
                    </p>
                </SectionHeader>
                <PortfolioContainer portfolioData={portfolio} />
            </section>
            <FooterSection />
        </div>
    );
};

export default ProjectsPage;
