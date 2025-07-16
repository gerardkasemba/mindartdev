import React from "react";
import { SectionHeader } from "../section-header";
import JoinTheTeamSection from "../join-the-team-section";

const JoinTheTeam = () => {
    return (
        <section id="join-the-team" className="w-full px-5 md:px-10">
            <SectionHeader>
                <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance">
                    Join The Team
                </h2>
                <p className="text-muted-foreground text-center text-balance font-medium">
                    Innovate with our software development company, collaborate
                    on cutting-edge projects, and grow in a dynamic environment.
                </p>
            </SectionHeader>
            <div className="border-x mx-5 md:mx-10 relative">
                <div className="absolute top-0 -left-4 md:-left-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>
                <div className="absolute top-0 -right-4 md:-right-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>
                <JoinTheTeamSection />
            </div>
        </section>
    );
};

export default JoinTheTeam;
