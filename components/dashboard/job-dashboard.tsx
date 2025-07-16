import React from "react";
import JobsList from "./job-list";

const JobDashboard = () => {
    return (
        <div>
            <header className="font-bold text-[1.3rem] mb-[3rem] text-orange-600">
                Job List
            </header>
            <JobsList />
        </div>
    );
};

export default JobDashboard;
