const Persons = ({persons,filteredResults, searchValue}) => {
    return (
        <>
            {searchValue !== "" ? filteredResults.sort((a, b) => a.name > b.name ? 1 : -1).map((person) => <p key={person.name}>{person.name} {person.number}</p>) :
                persons.sort((a, b) => a.name > b.name ? 1 : -1).map((person) => <p key={person.name}>{person.name} {person.number}</p>)}
        </>
    )
};

export default Persons;