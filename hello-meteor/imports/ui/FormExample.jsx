import React, { useState } from "react";
import { ContactsSave } from "../api/ContactsCollection"
import { Meteor } from "meteor/meteor"

export const Form = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [page, setPage] = useState("")
    const saveContact = () => {
        console.log({ name, email, page })
        Meteor.call('contacts.insert', { name, email, page }, (error) => {
            if (error) {
                alert(error)
            }
            else {
                setName("")
                setEmail("")
                setPage("")
            }
        })

    }

    return (
        <form>
            <div>
                <label>
                    Name
                </label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>
                    Email
                </label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>
                    Web page
                </label>
                <input type="text" value={page} onChange={(e) => setPage(e.target.value)} />
            </div>
            <button type="button" onClick={saveContact}>save </button>

        </form>
    )
}