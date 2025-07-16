import React from "react";
import { SectionHeader } from "../section-header";
import PortfolioContainer from "./portfolio-container";
import { Button } from "../ui/button";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

const PortfolioSection = () => {
    const { portfolio } = siteConfig;
    return (
        <section id="portfolio" className="w-full px-5 md:px-10">
            <SectionHeader>
                <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance">
                    Portfolio
                </h2>
                <p className="text-muted-foreground text-center text-balance font-medium">
                    Explore some of the innovative web applications we’ve
                    crafted for our clients.
                </p>
            </SectionHeader>
            <PortfolioContainer portfolioData={portfolio.slice(0, 3)} />
            <div className="button w-fit mx-auto my-3 mb-[2rem]">
                <Link href={"/projects"}>
                    <Button
                        variant={"secondary"}
                        className="rounded-full cursor-pointer text-white"
                    >
                        Explore our Projects Gallery
                    </Button>
                </Link>
            </div>
        </section>
    );
};

export default PortfolioSection;
