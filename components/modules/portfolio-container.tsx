"use client";
// import PortfolioCard from "./portfolio-card";
import PortfolioCardSub from "./portfolio-card-sub";

const PortfolioContainer = ({
    portfolioData,
}: {
    portfolioData: PortfolioItem[];
}) => {
    return (
        <section className="p-5 w-full">
            <PortfolioCardSub portfolioData={portfolioData} />
        </section>
    );
};

export default PortfolioContainer;
