import { useState } from "react";
import phonebookService from "../services/phonebook";

const PersonForm = ({ persons, setPersons }) => {
    const [newName, setNewName] = useState('');
    const [number, setNumber] = useState('');

    const checkDuplicateNames = (name) => {
        const isDuplicate = persons.find((person) => person.name.toLowerCase() === name.toLowerCase())
        return !!isDuplicate
    };

    const handleSubmit = (event) => {
        if (newName.length > 0 && number.length > 0 && !checkDuplicateNames(newName)) {
            const newPerson = { name: newName, number }
            let personResponse = phonebookService.create(newPerson);
            personResponse.then((res) => res && setPersons([...persons, res]))
            .catch((err) => console.log("API Error can't add new person"))
        } else if (checkDuplicateNames(newName)) {
            alert(`${newName} is already added to the phonebook`)
        }
        setNewName('')
        setNumber('')
        event.preventDefault();
    };

    return (
        <form>
            <div>
                name: <input type="text" onChange={(e) => setNewName(e.target.value)} value={newName} />
            </div>
            <div>number: <input type="text" onChange={(e) => setNumber(e.target.value)} value={number} /></div>
            <div>
                <button type="submit" onClick={(newName, number) => handleSubmit(newName, number)}>add</button>
            </div>
        </form>
    )
}

export default PersonForm;