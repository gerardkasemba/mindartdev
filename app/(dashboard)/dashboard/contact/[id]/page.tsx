// 'use client'
// import { useParams } from "next/navigation"
import { getContact } from "@/apis/firebase";
import { DeleteContent } from "@/components/dashboard/delete-content";

const ContactsDetails = async ({
    params,
}: {
    params: Promise<{ id: string }>;
}) => {
    const { id } = await params;
    const contact = (await getContact(id)) as MainContactType;

    const content = (
        <div className="">
            <h2 className="font-bold text-[1.2rem] mb-[1rem] flex items-center gap-4">
                {contact?.name}
                <div className="cta ">
                    <DeleteContent id={id} type="contact" />
                </div>
            </h2>
            <p>
                <span className="font-semibold">Email: </span>
                {contact.email}
            </p>
            <p className="mt-[2rem]">
                <span className="font-semibold">Message: </span>
                {contact.message}
            </p>
        </div>
    );

    return content;
};

export default ContactsDetails;
