"use client";
import { siteConfig } from "@/lib/config";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export function ServicesShowcase() {
    const { servicesShowcase } = siteConfig;
    return (
        <section
            id="company"
            className="flex flex-col items-center justify-center gap-10 py-10 pt-20 w-full relative px-6 overflow-hidden"
        >
            <p className="text-muted-foreground font-medium max-w-[90%] text-center">
                We offer various services to help you grow your business.
            </p>
            {/* <div className="grid w-full max-w-7xl grid-cols-2 md:grid-cols-4 overflow-hidden border-y border-border items-center justify-center z-20"> */}
            {/* [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] */}
            <div className="flex flex-1 max-w-7xl overflow-hidden border-y border-border z-20 ">
                <motion.div
                    initial={{
                        translate: "-50%",
                    }}
                    animate={{
                        translate: "0%",
                    }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                    className="flex flex-none -translate-x-[50%]"
                >
                    {[
                        ...servicesShowcase.services,
                        ...servicesShowcase.services,
                    ].map((logo) => (
                        <Link
                            href="#contact"
                            className="group w-full h-28 flex items-center justify-center relative p-4 before:absolute before:-left-1 before:top-0 before:z-10 before:h-screen before:w-px before:bg-border before:content-[''] after:absolute after:-top-1 after:left-0 after:z-10 after:h-px after:w-screen after:bg-border after:content-[''] px-6"
                            key={logo.id + Math.random()}
                        >
                            <div className="transition-all duration-200 [cubic-bezier(0.165, 0.84, 0.44, 1)] translate-y-0 group-hover:-translate-y-4 duration-300 flex items-center justify-center w-full h-full whitespace-nowrap font-bold min-w-[10rem]">
                                {logo.name}
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-4 transition-all duration-300 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)]">
                                <span className="flex items-center gap-2 text-sm font-medium">
                                    Contact Us{" "}
                                    <ArrowRight className="w-4 h-4" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
