import React, { useState } from "react";
import { ContactsSave } from "../api/ContactsCollection"
import { Meteor } from "meteor/meteor"


export const Form = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [page, setPage] = useState("")
    const [error, setError] = useState("")
    const [succes, setSucces] = useState("")

    const saveContact = () => {
        console.log({ name, email, page })
        Meteor.call('contacts.insert', { name, email, page }, (errorResponse) => {
            if (errorResponse) {
                //alert(errorResponse.error)
                setError(errorResponse.error)
            }
            else {
                setName("")
                setEmail("")
                setPage("")
                setSucces("contact saved")

            }
        })

    }

    return (
        <>
            {error && <h4 className="messageError">{error}</h4>}
            {succes && <h4 className="messageSucces">{succes}</h4>}
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
        </>
    )
}