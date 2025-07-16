"use client";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ThemeToggle } from "../theme-toggle";
import { signout } from "@/apis/firebase";
import { Files, LogOut, Mail } from "lucide-react";

const DashboardNav = () => {
    const handleSignOut = async () => {
        await signout();
    };
    return (
        <nav className="flex justify-between items-center fixed top-0 right-0 left-0 z-50 bg-background/80 px-4 py-4 border border-b backdrop-blur">
            <div className="left flex items-center gap-5">
                <Link href={"/dashboard/contact"}>
                    <Button
                        className="flex gap-3 items-center cursor-pointer text-blue-500 hover:text-blue-600"
                        variant={"ghost"}
                    >
                        <Mail />
                        Contact
                    </Button>
                </Link>
                <Link href={"/dashboard/job"}>
                    <Button
                        className="flex gap-3 items-center cursor-pointer text-orange-500 hover:text-orange-600"
                        variant={"ghost"}
                    >
                        <Files />
                        Job
                    </Button>
                </Link>
            </div>
            <div className="right flex items-center gap-5">
                <ThemeToggle />
                <Button
                    onClick={handleSignOut}
                    variant={"ghost"}
                    className="flex gap-3 items-center cursor-pointer text-red-500 hover:text-red-600"
                >
                    <LogOut />
                    Sign out
                </Button>
            </div>
        </nav>
    );
};

export default DashboardNav;
