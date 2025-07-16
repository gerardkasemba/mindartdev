import React from "react";
import ContactsList from "./contact-list";

const ContactDashboard = () => {
    return (
        <div>
            <header className="font-bold text-[1.3rem] mb-[3rem] text-blue-600">
                Contacts List
            </header>
            <ContactsList />
        </div>
    );
};

export default ContactDashboard;
