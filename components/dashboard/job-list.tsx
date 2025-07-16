"use client";
import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import Link from "next/link";

import useLoading from "@/hooks/useLoading";
import { getAllJobApplication } from "@/apis/firebase";
import { DeleteContent } from "./delete-content";

const JobsList = () => {
    const [jobs, setJobs] = useState<MainJobType[] | null>(null);
    const { isLoading, setIsloading } = useLoading();

    useEffect(() => {
        async function allContacts() {
            setIsloading(true);
            const data = await getAllJobApplication();
            setJobs(data as MainJobType[]);
            setIsloading(false);
        }

        allContacts();
    }, []);

    const NotFound = <p className="font-bold">No jobs Found</p>;

    const jobList = isLoading ? (
        <div className="w-full flex items-center justify-center">
            <PulseLoader size={30} color="#fa8e8e" loading />
        </div>
    ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-5">
            {jobs?.map((job) => {
                return (
                    <div key={job.id} className="relative">
                        <Link href={`job/${job.id}`}>
                            <div className="mb-[2rem] p-[1.3rem] rounded-md cursor-pointer border border-orange-600 bg-orange-500/20">
                                <h2 className="font-bold text-[1.2rem]">
                                    {job.name}
                                </h2>
                                <p>{job.email}</p>
                                <p>
                                    <span className="font-semibold">
                                        Applying For:{" "}
                                    </span>
                                    {job.position}
                                </p>
                            </div>
                        </Link>
                        <div className="delete absolute top-2 right-2">
                            <DeleteContent
                                id={job.id}
                                path={job.cvPath}
                                type="job"
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );

    return jobs?.length === 0 ? NotFound : jobList;
};

export default JobsList;
