"use client";
import AuthContextProvider from "@/context/AuthContextProvider";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            <AuthContextProvider>{children}</AuthContextProvider>
        </main>
    );
};

export default AppLayout;
