"use client";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const PortfolioCard = () => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [imageHeight, setImageHeight] = useState<Number>();

    useEffect(() => {
        console.log("in the effect");
        const applyClipPath = () => {
            const card = cardRef.current;
            if (!card) return;

            const x = card.offsetWidth;
            const y = card.offsetHeight;
            console.log(x, y);

            const paths = {
                "1": { x: x * 0, y: y * 0.05 },
                "2": { x: x * 0.05, y: y * 0 },
                "3": { x: x * 0.95, y: y * 0 },
                "4": { x: x * 1, y: y * 0.05 },
                "5": { x: x * 1, y: y * 0.65 },
                "6": { x: x * 0.95, y: y * 0.7 },
                "7": { x: x * 0.75, y: y * 0.7 },
                "8": { x: x * 0.7, y: y * 0.75 },
                "9": { x: x * 0.7, y: y * 0.95 },
                "10": { x: x * 0.65, y: y * 1 },
                "11": { x: x * 0.05, y: y * 1 },
                "12": { x: x * 0, y: y * 0.95 },
                "13": { x: x * 0, y: y * 0.1 },
            };
            const concave = "A 20,20 0,0,1 ";
            const convex = "A 20,20 0 0 0 ";
            // ${concave}
            const path = `M ${paths[1].x},${paths[1].y} ${concave} ${paths[2].x},${paths[2].y} L ${paths[3].x},${paths[3].y} ${concave} ${paths[4].x},${paths[4].y} L ${paths[5].x},${paths[5].y} ${concave} ${paths[6].x},${paths[6].y} L ${paths[7].x},${paths[7].y} ${convex} ${paths[8].x},${paths[8].y} L ${paths[9].x},${paths[9].y} ${concave} ${paths[10].x},${paths[10].y} L ${paths[11].x},${paths[11].y} ${concave} ${paths[12].x},${paths[12].y} L ${paths[13].x},${paths[13].y} Z`;
            card.style.clipPath = `path("${path}")`;
            console.log(path);
            console.log("adding path to card");

            setImageHeight(y * 1 - 16);
        };

        applyClipPath();
        window.addEventListener("resize", applyClipPath);
        return () => window.removeEventListener("resize", applyClipPath);
    }, [cardRef]);

    console.log(imageHeight);
    return (
        <div className="relative">
            <div
                ref={cardRef}
                className="bg-accent relative z[1] overflow-hidden w-full h-[300px] p-2 "
            >
                <div className={`image h-[${imageHeight}px] z-[1]`}>
                    <img
                        src="/assets/btcbots.png"
                        alt=""
                        className="w-full h-full object-cover rounded-[10px]"
                    />
                </div>
                <h1 className="mt-[1rem] ml-[1rem] text-secondary font-bold">
                    BTC Bots
                </h1>
            </div>
            <div className="absolute z-[2] flex items-center justify-center bottom-2 right-2 bg-accent text-[3rem] text-secondary w-[4rem] h-[4rem] rounded-full">
                <Link href={"#"}>
                    <ChevronRight className="text-white" />
                </Link>
            </div>
        </div>
    );
};

export default PortfolioCard;
