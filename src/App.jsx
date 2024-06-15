import { useEffect, useState } from 'react'

const App = () => {
  const defaultData = [
    {
      name: "Ash",
      number: "88900765"
    },
    {
      name: "Blossum",
      number: "12345-00987"
    },
    {
      name: "Bubbles",
      number: "9900786"
    },
    {
      name: "Butter",
      number: "112450090"
    },
    {
      name: "Cody",
      number: "1334-0008-976"
    },
    {
      name: "Doby",
      number: "990087651"
    },
    {
      name: "Drake",
      number: "66-5543-098"
    }
  ];

  const [persons, setPersons] = useState(defaultData)
  const [newName, setNewName] = useState('');
  const [number, setNumber] = useState('');
  const [searchValue, setSearchValue] = useState('');
  let filteredResults = [];

  const checkDuplicateNames = (name) => {
    const isDuplicate = persons.find((person) => person.name.toLowerCase() === name.toLowerCase())
    return !!isDuplicate
  }

  const handleSubmit = (event) => {
    if (newName.length > 0 && number.length > 0 && !checkDuplicateNames(newName)) {
      const newPerson = { name: newName, number }
      setPersons([...persons, newPerson])
    } else if (checkDuplicateNames(newName)) {
      alert(`${newName} is already added to the phonebook`)
    }
    setNewName('')
    setNumber('')
    event.preventDefault();
  };


  if (searchValue !== "") {
    let searchDict = new Map();
    if (searchDict.has(searchValue)) {
      filteredResults = searchDict.get(searchValue);
    } else {
      filteredResults = persons.filter((person) => person.name.toLowerCase().startsWith(searchValue.toLowerCase()))
      searchDict.set(searchValue, filteredResults)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with <span><input type="text" onChange={(e) => setSearchValue(e.target.value)} value={searchValue} /></span></div>
      <h2>add a new</h2>
      <form>
        <div>
          name: <input type="text" onChange={(e) => setNewName(e.target.value)} value={newName} />
        </div>
        <div>number: <input type="text" onChange={(e) => setNumber(e.target.value)} value={number} /></div>
        <div>
          <button type="submit" onClick={handleSubmit}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {searchValue !== "" ? filteredResults.sort((a, b) => a.name > b.name ? 1 : -1).map((person) => <p key={person.name}>{person.name} {person.number}</p>) :
        persons.sort((a, b) => a.name > b.name ? 1 : -1).map((person) => <p key={person.name}>{person.name} {person.number}</p>)}
    </div>
  )
}

export default App