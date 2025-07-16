import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const PortfolioCardSub = ({
    portfolioData,
}: {
    portfolioData: PortfolioItem[];
}) => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (sectionRef.current) {
            gsap.fromTo(
                sectionRef.current.children,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    },
                }
            );
        }
    }, []);

    return (
        <section ref={sectionRef} className="pt-16 pb-5">
            <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {portfolioData.map((project) => (
                    <div
                        key={project.id}
                        className="bg-accent  shadow-lg rounded-md overflow-hidden flex flex-col"
                    >
                        <div className="relative w-full h-60 overflow-hidden">
                            {project.images.length > 1 ? (
                                <div className="flex w-full h-full overflow-x-auto scroll-smooth snap-x snap-mandatory">
                                    {project.images.map((src, index) => (
                                        <div
                                            key={index}
                                            className="min-w-full h-full snap-center relative"
                                        >
                                            <Image
                                                src={src}
                                                alt={`${project.title} image ${
                                                    index + 1
                                                }`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <Image
                                    src={project.images[0]}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                            )}
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-semibold  mb-2">
                                {project.title}
                            </h3>
                            {/* <p className="text-gray-600 mb-4 flex-grow">
                                {project.description}
                            </p> */}
                            <Link
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-auto inline-block text-secondary font-medium transition duration-200"
                            >
                                View Live →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PortfolioCardSub;
