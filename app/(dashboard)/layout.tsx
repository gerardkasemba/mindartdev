import DashboardNav from "@/components/dashboard/dashboard-nav";
import Protected from "@/helpers/Protected";
import React from "react";

const DashboardLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <main>
            <Protected>
                <DashboardNav />
                <main className="p-5 mt-[5rem]">{children}</main>
            </Protected>
        </main>
    );
};

export default DashboardLayout;
