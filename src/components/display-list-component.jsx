import phonebookService from "../services/phonebook";

const Persons = ({ personsData, persons, setPersons }) => {
    const handleDelete = ({ id, name }) => {
        if(confirm("Delete " + name + "?")) {
            let updPersons = persons.filter((person) => person.id !== id);
            phonebookService.remove(id)
            setPersons(updPersons)
        }
    };

    return (
        <>
            {personsData.sort((a, b) => a.name > b.name ? 1 : -1)
                .map((person) => {
                    return (
                        <p key={person.name}>{person.name} {person.number}
                            <span><button onClick={() => handleDelete(person)}>❌</button></span>
                        </p>)
                })}
        </>
    )
};

export default Persons;