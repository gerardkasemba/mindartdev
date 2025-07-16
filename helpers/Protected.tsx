"use client";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/AuthContextProvider";

const Protected = ({ children }: { children: React.ReactNode }) => {
    const { user } = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
        const wait = setTimeout(() => {
            if (!user) {
                router.push("/sign-in");
            }
        }, 2000);

        return () => {
            clearTimeout(wait);
        };
    }, [user]);

    return <>{user && children}</>;
};

export default Protected;
