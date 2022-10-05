import React from "react";
import { ContactsSave } from "../api/ContactsCollection"
import { useTracker } from "meteor/react-meteor-data"

export const ContactList = () => {
    const contact = useTracker(() => {
        return ContactsSave.find({}).fetch()
    })
    return (
        <>
            <h3>Example List</h3>
            {contact.map(contact => (
                <li key={contact.email}> {contact.name} - {contact.email} - {contact.page}</li>
            ))}

        </>
    )
}