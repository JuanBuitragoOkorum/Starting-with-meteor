import { Meteor } from "meteor/meteor"
import { ContactsSave } from "./ContactsCollection";

Meteor.publish('allContacts', function publishAllContacts(params) {
    return ContactsSave.find();
})