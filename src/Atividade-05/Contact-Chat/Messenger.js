import { useState } from "react";
import ContactList from "./ContactList";
import Chat from "./Chat";
import "./Messenger.css";

export default function Messenger(){
    const [to, setTo] = useState(contacts[0]);
    return (
        <div className="messenger-container">
            <ContactList
                contacts={contacts}
                selectedContact={to}
                onSelect={contact => setTo(contact)}
            />
            <Chat key={to.email} contact={to} />
        </div>
    );
}

const contacts =[
    {name:'Taylor', email: 'taylor@email.com'},
    {name: 'Alice', email: 'alice@email.com'},
    {name: 'Bob', email: 'bob@email.com'}
];