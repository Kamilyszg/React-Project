import { useState } from "react";
import './FormBase.css';

export default function Form2(){
    const [person, setPerson] = useState({
        firstName:'Barbara',
        lastName: 'Hepworth',
        email: 'bhepworth@sculpture.com'
    });

    function handleFirstNameChange(e) {
        setPerson({...person, firstName: e.target.value});
    }
    function handleLastNameChange(e) {
        setPerson({...person, lastName: e.target.value});
    }
    function handleEmailChange(e) {
        setPerson({...person, email: e.target.value});
    }

    return(
        <div className="form-base">
            <label>
                First name:
                <input value={person.firstName} onChange={handleFirstNameChange}/>
            </label>
            <label>
                Last name:
                <input value={person.lastName} onChange={handleLastNameChange}/>
            </label>
            <label>
                Email:
                <input value={person.email} onChange={handleEmailChange}/>
            </label>
            <p>
                {person.firstName} {person.lastName} ({person.email})
            </p>
        </div>
    );
}