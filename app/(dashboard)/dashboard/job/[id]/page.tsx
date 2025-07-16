import { getJob, storage } from "@/apis/firebase";
import { ref, getDownloadURL } from "firebase/storage";
import { DeleteContent } from "@/components/dashboard/delete-content";
import Download from "@/components/dashboard/Download";

const JobDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const job = (await getJob(id)) as MainJobType;
    const url = await getDownloadURL(ref(storage, job.cvPath)).then((url) => {
        return url;
    });

    const content = (
        <div>
            <h2 className="font-bold text-[1.2rem] mb-[1rem] flex items-center gap-4">
                {job.name}
                <div className="cta">
                    <DeleteContent id={id} path={job.cvPath} type="job" />
                </div>
            </h2>
            <p>
                <span className="font-semibold">Email: </span>
                {job.email}
            </p>
            <p className="mt-[1rem]">
                <span className="font-semibold">Applying For: </span>
                {job.position}
            </p>
            <p className="mt-[1rem]">
                <span className="font-semibold">Download CV:</span>{" "}
                <Download getUrl={url} path={job.cvPath} />
            </p>
        </div>
    );

    return content;
};

export default JobDetails;
