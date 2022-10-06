import React from "react";
import { ContactsSave } from "../api/ContactsCollection"
import { useTracker } from "meteor/react-meteor-data"
import { Meteor } from "meteor/meteor"



export const ContactList = () => {
    const contact = useTracker(() => {
        return ContactsSave.find({}).fetch()
    })

    const removeContact = (_id) => {

        Meteor.call('contacts.remove', { contactId: _id });
    }

    return (
        <>
            <h3>Example List</h3>

            <table>{contact.map(contact => (<tr><td>{contact.name}</td><td>{contact.email}</td><td>{contact.page}</td><td><button className="remove" onClick={() => removeContact(contact._id)}> remove</button></td></tr>))}</table>

        </>
    )
}