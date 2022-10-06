import { ContactsSave } from "./ContactsCollection";
import { Meteor } from "meteor/meteor"

Meteor.methods({

    'contacts.remove'({ contactId }) {

        ContactsSave.remove(contactId);
    },

    'contacts.insert'({ name, email, page }) {
        if (!name) {
            throw new Meteor.Error("Name is required")
        }
        ContactsSave.insert({ name, email, page })
    }
})

