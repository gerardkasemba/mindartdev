"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

import { getAllContacts } from "@/apis/firebase";
import useLoading from "@/hooks/useLoading";
import { DeleteContent } from "./delete-content";
import { PulseLoader } from "react-spinners";

const ContactsList = () => {
    const [contacts, setContacts] = useState<MainContactType[] | null>(null);
    const { isLoading, setIsloading } = useLoading();

    useEffect(() => {
        async function allContacts() {
            setIsloading(true);
            const data = await getAllContacts();
            setContacts(data as MainContactType[]);
            setIsloading(false);
        }

        allContacts();
    }, []);

    const NotFound = <p className="font-bold">No Contacts Found</p>;

    const contactList = isLoading ? (
        <div className="w-full flex items-center justify-center">
            <PulseLoader size={30} color="#fa8e8e" loading />
        </div>
    ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-5">
            {contacts?.map((contact) => {
                return (
                    <div key={contact.id} className="relative">
                        <Link href={`/dashboard/contact/${contact.id}`}>
                            <div className="mb-[2rem] p-[1.3rem] rounded-md cursor-pointer border border-blue-600 bg-blue-500/20">
                                <h2 className="font-bold text-[1.2rem]">
                                    {contact.name}
                                </h2>
                                <p>{contact.email}</p>
                            </div>
                        </Link>
                        <div className="delete absolute top-2 right-2">
                            <DeleteContent id={contact.id} type="contact" />
                        </div>
                    </div>
                );
            })}
        </div>
    );

    return contacts?.length === 0 ? NotFound : contactList;
};

export default ContactsList;
